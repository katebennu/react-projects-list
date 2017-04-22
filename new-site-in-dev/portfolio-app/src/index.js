import React from 'react';
import ReactDOM from 'react-dom';
import Page from './App';
import './index.css';
import DATA from './data.json';


ReactDOM.render(
  <Page data={DATA}/>,
  document.getElementById('root')
);
