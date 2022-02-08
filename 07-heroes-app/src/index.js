import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import HeroesApp from './components/HeroesApp';

ReactDOM.render(
  <React.StrictMode>
    <HeroesApp />
  </React.StrictMode>,
  document.getElementById('root')
);
