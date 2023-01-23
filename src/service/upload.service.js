export const uploadService = {
  uploadImg
}
async function uploadImg(ev) {
  console.log('ev.target.files[0]:', ev.target.files[0])
  const CLOUD_NAME = 'damrhms1q'
  const UPLOAD_PRESET = "playlist_app"
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

  const formData = new FormData()
  formData.append('upload_preset', UPLOAD_PRESET)
  formData.append('file', ev.target.files[0])

  try {
    const res = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData
    })
    console.log('res:', res)
    return res.json().then(body => {
      console.log('body', body)
      return body.url
    })
  } catch (err) {
    return err
  }
}
