import sharp from 'sharp'
import { useValidatedBody, z } from 'h3-zod'
import { v4 as uuidv4 } from 'uuid';
import { FormData, Blob } from 'formdata-node'
import { ImageResponse, CreateAikuResponse } from '~/models/strapi'

const config = useRuntimeConfig()
process.env.FONTCONFIG_PATH = "/var/task/fonts";

export default defineEventHandler(async (event):Promise<number> => {
  const body = await useValidatedBody(event, z.object({
    lineOne: z.string(),
    lineTwo: z.string(),
    lineThree: z.string(),
    imgUrl: z.string(),
    presetId: z.number().nullable().optional()
  }))

  try {
    const imgResp = await $fetch(body.imgUrl, {
      responseType: 'arrayBuffer'
    })

    // create buffer for Sharp
    const imgBufferSharp = Buffer.from(imgResp, "utf8")
    const cardImgBuffer = await processImage(imgBufferSharp, body.lineOne, body.lineTwo, body.lineThree)

    const baseImgBlob = new Blob([imgResp])
    const cardImgBlob = new Blob([cardImgBuffer])

    const aikuId = await uploadAiku(body.lineOne, body.lineTwo, body.lineThree, body.presetId)

    // upload base image
    await uploadImage(baseImgBlob, aikuId, "image")
    // upload card image
    await uploadImage(cardImgBlob, aikuId, "linkCard")
    return aikuId
  } catch(error) {
    event.res.statusCode = 500
    event.res.end()
  }
})

const uploadAiku = async (
  lineOne:string,
  lineTwo:string,
  lineThree:string,
  preset?:number
):Promise<number> => {
  const response = await $fetch<CreateAikuResponse>(`${config.strapiBase}/api/aikus`, {
    method: "POST",
    headers: {
      "Authorization": `bearer ${config.strapiToken}`,
    },
    body: {
      data: {
        lineOne: lineOne,
        lineTwo: lineTwo,
        lineThree: lineThree,
        preset:preset
      }
    }
  })
  return response.data.id
}

const uploadImage = async (img:Blob, aikuId:number, fieldName:string):Promise<ImageResponse> => {
  
  const form = new FormData()
  form.append("files", img, `${uuidv4()}.png`)
  form.append("ref", "api::aiku.aiku")
  form.append("refId", aikuId)
  form.append("field", fieldName)

  const response = await $fetch<ImageResponse>(`${config.strapiBase}/api/upload`, {
    method: "POST",
    headers: {
      "Authorization": `bearer ${config.strapiToken}`,
    },
    body: form
  })

  return response
}

const processImage = async (
  img:Buffer, 
  lineOne:string, 
  lineTwo:string, 
  lineThree:string
):Promise<Buffer> => {
  const width = 440
  const height = 770
  const left = Math.round((768 - width) / 2)
  const top = Math.round((896 - height) / 2)

  let image:Buffer
  image = await cropAndRadius(img, width, height, left, top)
  image = await addTextOnImage(image, height, width, lineOne, lineTwo, lineThree)
  return image
}

const cropAndRadius = async (
  image:Buffer, 
  width:number, 
  height:number,
  left:number,
  top:number
):Promise<Buffer> => {
  const rect = Buffer.from(
    `<svg><rect x="0" y="0" width="${width}" height="${height}" rx="10" ry="10"/></svg>`
  );
  const croppedImg = sharp(image)
    .extract({ width: width, height: height, left: left, top: top })
    .composite([
      { input: rect, blend: "dest-atop"}
    ])
    .toBuffer()
  return croppedImg
}

const addTextOnImage = async (
  image:Buffer, 
  imgHeight:number, 
  imgWidth:number,
  lineOne:string,
  lineTwo:string,
  lineThree:string
):Promise<Buffer> => {
  const svgWidth = imgWidth;
  const svgHeight = 150;
  const svgTopPos = imgHeight - svgHeight - 10

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
}
