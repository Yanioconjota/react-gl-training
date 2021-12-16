import React from 'react'
import PropTypes from "prop-types";

const GifGrid = ({ category }) => {

  const getGifs = async(category) => {
    const apiKey = "api_key=EJRMW0vkab9582ndI3I5UZQ4ObyWb3OK";
    const query = category;
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=12&${apiKey}`
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_large.url,
    }));

    console.log(gifs);
  };

  getGifs(category);

  return (
    <h3>{category}</h3>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;