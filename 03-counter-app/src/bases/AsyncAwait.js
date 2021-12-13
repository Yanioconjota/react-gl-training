function AsyncAwait() {
  /* const getImagePromesa = () => {
    return new Promise( resolve => resolve('https://media4.giphy.com/media/26gsa40MkrzpTieQM/giphy.gif?cid=790b761116bbe1e870b5facf4e77f108155037d459a4c1f7&rid=giphy.gif&ct=g'));
  }
  getImagePromesa().then(console.log); */

  const getImagen = async () => {
    try {
      const apiKey = "EJRMW0vkab9582ndI3I5UZQ4ObyWb3OK";
      const giphyRequestUrl = "http://api.giphy.com/v1/gifs/random";
      const resp = await fetch(`${giphyRequestUrl}?api_key=${apiKey}`);
      const { data } = await resp.json();
      const { url } = data.images.original;
      const img = document.createElement("img");
      console.log(url);
      img.src = url;
      document.querySelector(".AsyncAwaitWrapper").append(img);
    } catch (error) {
      console.error(error);
      const img = document.createElement("img");
      img.src =
        "https://media0.giphy.com/media/xT5LMXb5mgZ9NYt41W/giphy.gif?cid=790b7611ba7e6d3d245b03eedb6aa3adc72cf7b0a57d7959&rid=giphy.gif&ct=g";
      document.querySelector(".AsyncAwaitWrapper").append(img);
    }
  };

  getImagen();
  return <div className="AsyncAwaitWrapper"></div>;
}

export default AsyncAwait;