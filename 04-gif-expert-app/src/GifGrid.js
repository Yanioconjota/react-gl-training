import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {

  const limitMultiplier = 6;

  const [images, setImages] = useState([]);

  const [offset, setOffset] = useState(0);

  const [limit, setLimit] = useState(limitMultiplier);

  useEffect(() => {
    getGifs(category);
  }, [category, offset]);

  const getGifs = async (category, offset) => {
    const apiKey = "api_key=EJRMW0vkab9582ndI3I5UZQ4ObyWb3OK";
    const query = category;
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=${limit}&offset=${offset}&${apiKey}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_large.url,
    }));

    console.log(gifs);
    setImages(gifs);
  };

  const loadMore = () => {
    setOffset(offset => offset + 1);
    setLimit((limit) => limit + limitMultiplier);
  }; 

  return (
    <>
      <h3>{category}</h3>
      <Row>
        {images.map((img) => (
          <Col xs={12} md={3} key={img.id}>
            <GifItem {...img} />
          </Col>
        ))}
        <Button onClick={loadMore}>Load more</Button>
      </Row>
    </>
  );
}

export default GifGrid;