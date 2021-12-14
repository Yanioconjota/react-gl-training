const getImagen = async () => {
  try {
    const apiKey = "EJRMW0vkab9582ndI3I5UZQ4ObyWb3OK";
    const giphyRequestUrl = "http://api.giphy.com/v1/gifs/random";
    const resp = await fetch(`${giphyRequestUrl}?api_key=${apiKey}`);
    const { data } = await resp.json();
    const { url } = data.images.original;
    return url;
  } catch (error) {
    return "This are not the droids you're looking for";
  }
};

export default getImagen;
