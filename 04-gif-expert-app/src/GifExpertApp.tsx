import { Col } from 'react-bootstrap';
import "./GifExpertApp.scss";
import PropTypes from 'prop-types';
import { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState([
    "Far Cry 6",
  ]);

  return (
    <Col xs={12}>
      <h2 className="text-info">GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} categories={categories} />
      <>
        <GifGrid key={categories} category={categories} />
      </>
    </Col>
  );
}

GifExpertApp.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  setCategories: PropTypes.func
}

export default GifExpertApp;