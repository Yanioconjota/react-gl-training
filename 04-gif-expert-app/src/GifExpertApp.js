import { Col } from 'react-bootstrap';
import "./GifExpertApp.scss";
import { useState } from 'react';

import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

  const [categories, setCategories] = useState([
    "One Punch Man",
    "Samurai X",
    "Dragon Ball Z",
  ]);

  /* const handleAdd = () => { 
    setCategories(newCategories => [...newCategories, `categoria-${Math.random()}`])
  }; */

  return (
    <Col xs={12} md={6}>
      <h2 className="text-info">GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </Col>
  );

}

export default GifExpertApp;