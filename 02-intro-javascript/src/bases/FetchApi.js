function FetchApi() {
  const apiKey = "EJRMW0vkab9582ndI3I5UZQ4ObyWb3OK";
  const giphyRequestUrl = "http://api.giphy.com/v1/gifs/random";

  const peticion = fetch(`${giphyRequestUrl}?api_key=${apiKey}`);

  peticion
    .then(resp => resp.json())
    .then(({data}) => {
      const { url } = data.images.original;
      const img = document.createElement('img');
      console.log(url);
      img.src = url;
      document.querySelector(".ImgContainer").append(img);
    })
    .catch(console.warn);

  return (
    <div className="ImgContainer">
      
    </div>
  );
}

export default FetchApi;