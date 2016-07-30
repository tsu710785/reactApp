import React from 'react';
import ReactDOM from 'react-dom';
import ProductTable from './App.jsx';

var products = [
{category:"A",price:"99.99"},
{category:"B",price:"10"}
];


ReactDOM.render(<ProductTable products={products}/>, document.getElementById('ProductTable'));

