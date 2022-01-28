import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useGetData } from "../hooks/useGetData";
import '../assets/scss/MainApp.scss';

const MainApp = () => {

  const { characters, loading } = useGetData();

  console.log(characters);

  return (
    <Container>
      <p>Rick and Morty API</p>
      <hr />
      <Row>
        {loading && <p>loading...</p>}
        {!loading &&
          characters.map((ch) => (
            <Col xs={12} md={3} key={ch.id}>
              <Card>
                <img alt={ch.name} src={ch.image} />
                <Card.Body>
                  <p><strong>Name</strong>: {ch.name}</p>
                  <p><strong>Species</strong>: {ch.species}</p>
                  <p><strong>Origin</strong>: {ch.origin}</p>
                  <p><strong>Status</strong>: {ch.status}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default MainApp;