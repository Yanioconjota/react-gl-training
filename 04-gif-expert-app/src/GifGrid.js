import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category);
  }, [category]);

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
    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      <Row>
        {images.map((img) => (
          <Col xs={12} md={3} key={img.id}>
            <GifItem {...img}/>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default GifGrid;