import { useValidatedBody, z } from 'h3-zod'
import sharp from 'sharp'

const config = useRuntimeConfig()

export default defineEventHandler(async (event):Promise<Buffer> => {
  const body = await useValidatedBody(event, z.object({
    imgUrl: z.string(),
    screenH: z.number(),
    screenW: z.number()
  }))

  console.log(body)
  
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
    return await addTextOnImage(buffer, height, width)
  }

  width = 440
  height = 770
  left = Math.round((768 - width) / 2)
  top = Math.round((896 - height) / 2)

  const croppedImage = await cropAndRadius(buffer, width, height, left, top)
  return await addTextOnImage(croppedImage, height, width)
})


async function cropAndRadius(
  image:Buffer, 
  width:number, 
  height:number,
  left:number,
  top:number
):Promise<Buffer> {
  const rect = Buffer.from(
    `<svg><rect x="0" y="0" width="${width}" height="${height}" rx="10" ry="10"/></svg>`
  );
  try {
    const croppedImg = sharp(image)
      .extract({ width: width, height: height, left: left, top: top })
      .composite([
        { input: rect, blend: "dest-atop"}
      ])
      .toBuffer()
    return croppedImg
  } catch(error) {
    console.log(error)
  }
}


async function addTextOnImage(image:Buffer, imgHeight:number, imgWidth:number):Promise<Buffer> {
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
          <![CDATA[
            @font-face{
              font-family: 'Space Mono';
              src: url(../../../fonts/SpaceMono-Bold.ttf);
              font-weight: bold;
              font-style: normal;
            }
            @font-face{
              font-family: 'Space Mono';
              src: url(../../../fonts/SpaceMono-Regular.ttf);
              font-weight: normal;
              font-style: normal;
            }
            .title { 
              fill: #fff; 
              font-size: 20px;
            }
            .tag {
              fill: #e4e4e7
              font-size: 20px;
            }
          ]]>
        </style>
        <rect width="${svgWidth - 20}" height="${svgHeight}" rx="10" fill="black" fill-opacity="0.5"/>
        <text x="5%" y="35" text-anchor="start" class="title" font-family="Space Mono" font-weight="bold">${lineOne}
          <tspan x="5%" y="65" text-anchor="start" class="title" font-family="Space Mono" font-weight="bold">${lineTwo}</tspan>
          <tspan x="5%" y="95" text-anchor="start" class="title" font-family="Space Mono" font-weight="bold">${lineThree}</tspan>
        </text>
        <text x="5%" y="130" text-anchor="start" class="title" font-family="Space Mono" font-weight="normal">aiku.app</text>
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
      .toBuffer()

    return imageResp
  } catch (error) {
    console.log(error);
  }
}
