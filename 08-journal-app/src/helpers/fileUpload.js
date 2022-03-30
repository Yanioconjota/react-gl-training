export const fileUpload = async(file) => {

  const CLOUD_NAME = 'yanioconjota';

  const cloudUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload/`;
  const formData = new FormData();

  //Los objetos FormData le permiten compilar un conjunto de pares clave/valor para enviar mediante XMLHttpRequest
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {
    const resp = await fetch( cloudUrl, {
      method: 'POST',
      body: formData
    });

    if (resp.ok) {
      const cloudResp = await resp.json();

      //secure_url contiene el valor del archivo subido
      return cloudResp.secure_url;
    } else {
      //throw await resp.json();
      return null;
    }

  } catch (error) {
    console.log(error);
    throw error;
  }
};