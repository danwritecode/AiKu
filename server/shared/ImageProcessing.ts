import sharp from 'sharp'

export class ImageProcessor {
  async cropAndRadius(
    image:Buffer, 
    width:number, 
    height:number,
    left:number,
    top:number,
    radX:number,
    radY:number
  ):Promise<Buffer> {
    const rect = Buffer.from(
      `<svg><rect x="0" y="0" width="${width}" height="${height}" rx="${radX}" ry="${radY}"/></svg>`
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
}
