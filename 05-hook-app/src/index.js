import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
//import HookApp from './HookApp';
//import CounterApp from './components/01-useState/CounterApp';
//import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';

ReactDOM.render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
  document.getElementById("root")
);
