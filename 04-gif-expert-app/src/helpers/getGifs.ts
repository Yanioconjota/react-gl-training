export const getGifs = async (category, limit, offset) => {
  const apiKey = "api_key=EJRMW0vkab9582ndI3I5UZQ4ObyWb3OK";
  const query = category;
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    query
  )}&limit=${limit}&offset=${offset}&${apiKey}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_large.url,
  }));
  return gifs;
};
