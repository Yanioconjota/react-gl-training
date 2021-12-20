import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import GifItem from "./GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";

const GifGrid = ({ category }) => {

  const [state, setState] = useState({
    limit: 6,
    offset: 0
  });

  const { data: images, loading } = useFetchGifs(category, state.limit, state.offset);

  const loadMore = () => {
    setState({
      limit: state.limit + 6,
      offset: state.offset + 1
    })
  };

  return (
    <>
      { loading ? <p className="animate__animated animate__flash">Loading...</p> :
        <>
          <h3 className="animate__animated animate__fadeIn">{category}</h3>
          <Row>
            {images.map((img) => (
              <Col xs={12} md={3} key={img.id}>
                <GifItem {...img} />
              </Col>
            ))}
            <Button variant="primary" onClick={loadMore}>Load More</Button>
          </Row>
        </>
      }
    </>
  );
}

export default GifGrid;