import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { useGetData } from "../hooks/useGetData";
import '../assets/scss/MainApp.scss';
import { classNames } from "../helpers/classNames";

const MainApp = () => {

  const [page, setPage] = useState(1);

  const { characters, loading } = useGetData(page);
  //console.log(characters);

  const next = () => {
    if (page >= 1 && page <= 42) {
      setPage(page + 1);
    }
  };

  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(()=>{
    if (!loading) {;
      setHeight(`${ref.current.clientHeight}px`);
    }
  },[loading]);

  return (
    <>
      <header>
        <div className="d-flex justify-content-between align-items-center">
          <h1>
            Rick and Morty API
          </h1>
          <ButtonGroup>
            <Button onClick={previous}>Back</Button>
            <Button variant="secondary" onClick={next}>Next</Button>
          </ButtonGroup>
        </div>
        <hr />
      </header>
      <Container>
        <Row>
          {loading && <p>loading...</p>}
          {!loading &&
            characters.map((ch) => (
              <Col xs={12} md={6} key={ch.id}>
                <div className="card D-flex" ref={ref}>
                  <div className="card-img"
                       style={{
                         backgroundImage:`url(${ch.image})`,
                         height: `${height}`}}></div>
                  <div className="card-body">
                    <div>
                      <strong>Name</strong>: {ch.name}
                    </div>
                    <div>
                      <strong>Species</strong>: {ch.species}
                    </div>
                    <div>
                      <strong>Origin</strong>: {ch.origin}
                    </div>
                    <div>
                      <strong>Status</strong>:
                      <div
                        className={classNames({
                          "badge bg-success": ch.status === "Alive",
                          "badge bg-danger": ch.status === "Dead",
                          "badge bg-dark": ch.status === "unknown",
                        })}
                      >
                        {" "}
                        {ch.status}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default MainApp;