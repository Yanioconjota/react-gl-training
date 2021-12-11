import { useState } from "react";
import {PropTypes as propTypes} from "prop-types";
import { Row, Col, Button } from "react-bootstrap";

const CounterApp = ({ value, title, msg, showButtons, img }) => {

  let [counter, setCounter] = useState(0);
  console.log(counter)

  const handleAdd = () => {
    //setCounter( counter + 1 );
    setCounter(c => c + 1);
  }

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(counter = 0);
  };

  return (
    <>
      
      <Row>
        <Col md={6} xs={12}>
          <h1 className="text-info">{title}</h1>
          <p>{msg}<span className="Code">{value | counter}</span></p>
          <div className="btn-group">
            {showButtons && <Button onClick={handleAdd} variant="primary">+1</Button>}
            {showButtons && <Button onClick={handleSubstract} variant="secondary">-1</Button>}
            {showButtons && <Button onClick={handleReset} variant="info">Reset</Button>}
          </div>
        </Col>
        { (img && counter >= 5) &&
          <Col md={6} xs={12}>
          <p className="Code">Vamoh todavía!</p>
          <img src={img} className="w-50" alt="Roque"/>
        </Col>}
      </Row>
    </>
  );
}

CounterApp.propTypes = {
  value: propTypes.number,
  title: propTypes.string,
  counter: propTypes.number,
  showButtons: propTypes.bool,
  img: propTypes.string
};

CounterApp.defaultProps = {
  title: "Counter App",
  msg: "",
  showButtons: true,
};

export default CounterApp;
