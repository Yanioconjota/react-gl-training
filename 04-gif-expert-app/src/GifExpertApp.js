import { Col } from 'react-bootstrap';
import "./GifExpertApp.scss";
import { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState([
    "Rambo",
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

export default GifExpertApp;