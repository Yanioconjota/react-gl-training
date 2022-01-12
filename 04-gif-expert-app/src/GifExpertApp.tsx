import { Col } from 'react-bootstrap';
import "./GifExpertApp.scss";
import PropTypes from 'prop-types';
import { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({defaultCategories = 'Far Cry 6'}) => {

  const [categories, setCategories] = useState(defaultCategories);

  return (
    <Col xs={12}>
      <h2 className="text-info">GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} categories={categories} />
      <>
        <GifGrid category={categories} />
      </>
    </Col>
  );
}

GifExpertApp.propTypes = {
  defaultCategories: PropTypes.string
}

export default GifExpertApp;