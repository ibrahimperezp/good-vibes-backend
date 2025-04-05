import { v2 as cloudinary, UploadApiResponse } from 'cloudinary'
import { Response } from '../types.js'
import { config } from 'dotenv'
config()

const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_API_KEY
} = process.env

class Storage {
  async saveImage (stringImage: string): Promise<Response> {
    try {
      const buffer = Buffer.from(stringImage)

      cloudinary.config({
        cloud_name: CLOUDINARY_CLOUD_NAME,
        api_key: CLOUDINARY_API_KEY,
        api_secret: CLOUDINARY_API_SECRET
      })

      const response: UploadApiResponse = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ overwrite: false, format: 'webp', folder: 'user' }, (error, result) => {
          if (error != null) reject(error)
          if (result !== undefined) resolve(result)
        }).end(buffer)
      })

      return { success: true, data: { url: response.url } }
    } catch (e) {
      return { success: false, errorDescription: 'No se pudo' }
    }
  }
}

export default new Storage()
