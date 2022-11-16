import { useValidatedBody, z } from 'h3-zod'
import sharp from 'sharp'

const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const body = await useValidatedBody(event, z.object({
    imgUrl: z.string(),
    screenH: z.number(),
    screenW: z.number()
  }))
  
  const response = await $fetch(body.imgUrl, {
    responseType: 'arrayBuffer'
  })

  const buffer = Buffer.from(response, "utf-8")
  
  let width:number
  let height:number
  let left:number 
  let top:number

  if(body.screenH >= 896 && body.screenW >= 768) {
    width = 768
    height = 896
    await addTextOnImage(buffer, height, width)
    return event.res.end()
  }

  width = Math.round(body.screenW * 0.98)
  height = Math.round(body.screenH * 0.90)
  left = Math.round((768 - body.screenW) / 2)
  top = Math.round((896 - body.screenH) / 2)

  const croppedImage = await resizeImage(buffer, width, height, left, top)
  await addTextOnImage(croppedImage, height, width)

  return event.res.end()
})


async function resizeImage(
  image:Buffer, 
  width:number, 
  height:number,
  left:number,
  top:number
):Promise<Buffer> {
  try {
    const croppedImg = sharp(image)
      .extract({ width: width, height: height, left: left, top: top })
      .toBuffer()
    return croppedImg
  } catch(error) {
    console.log(error)
  }
}


async function addTextOnImage(image:Buffer, imgHeight:number, imgWidth:number) {
  try {
    const svgWidth = imgWidth;
    const svgHeight = 150;
    const svgTopPos = imgHeight - svgHeight - 10
    const lineOne = "Hyperspeed engaged";
    const lineTwo = "Time and space a memory";
    const lineThree = "Lightspeed traveler";

    const svgImage = `
    <svg width="${svgWidth}" height="${svgHeight}">
      <style>
        @import url("https://fonts.googleapis.com/css?family=Anonymous+Pro:400,400i,700,700i");
        @font-face{
          font-family: 'Space Mono';
          src: url(../../../fonts/SpaceMono-Bold.ttf);
          font-weight: bold;
          font-style: normal;
        }
        .title { 
          fill: #fff; 
          font-size: 20px;
          padding: 50px 50px 50px 50px;
        }
      </style>
      <rect width="${svgWidth - 20}" height="${svgHeight}" rx="10" fill="black" fill-opacity="0.5"/>
      <text y="20%" text-anchor="start" class="title" font-family="Anonymous Pro" font-weight="bold">${lineOne}
        <tspan y="50%" text-anchor="start" class="title" font-family="Anonymous Pro" font-weight="bold">${lineTwo}</tspan>
        <tspan y="75%" text-anchor="start" class="title" font-family="Anonymous Pro" font-weight="bold">${lineThree}</tspan>
      </text>
    </svg>
    `;
    const svgBuffer = Buffer.from(svgImage);
    const imageResp = await sharp(image)
      .composite([
        {
          input: svgBuffer,
          top: svgTopPos,
          left: 10,
        },
      ])
      .toFile("test-image.png");
  } catch (error) {
    console.log(error);
  }
}
