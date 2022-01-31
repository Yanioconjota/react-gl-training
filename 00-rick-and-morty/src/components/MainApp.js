import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useGetData } from "../hooks/useGetData";
import '../assets/scss/MainApp.scss';
import { classNames } from "../helpers/classNames";

const MainApp = () => {

  const { characters, loading } = useGetData();

  console.log(characters);

  return (
    <Container>
      <h1>Rick and Morty API <small><em>with Axios</em></small></h1>
      <hr />
      <Row>
        {loading && <p>loading...</p>}
        {!loading &&
          characters.map((ch) => (
            <Col xs={12} md={3} key={ch.id}>
              <div className="card">
                <img alt={ch.name} src={ch.image} />
                <div className="card-body">
                  <p><strong>Name</strong>: {ch.name}</p>
                  <p><strong>Species</strong>: {ch.species}</p>
                  <p><strong>Origin</strong>: {ch.origin}</p>
                  <p><strong>Status</strong>: 
                    <div className={classNames({
                      'badge bg-success' : ch.status === 'Alive',
                      'badge bg-danger' : ch.status === 'Dead',
                      'badge bg-dark' : ch.status === 'unknown'
                    })
                    }> {ch.status}</div>
                  </p>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default MainApp;