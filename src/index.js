import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './FirstComponent';


const saludo = <h1>Hola mundo</h1>;
const root = document.querySelector('#root');


ReactDOM.render(<FirstComponent />, root);


