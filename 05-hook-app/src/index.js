import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
//import HookApp from './HookApp';
//import CounterApp from './components/01-useState/CounterApp';
//import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHooks';
import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';

ReactDOM.render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>,
  document.getElementById("root")
);
