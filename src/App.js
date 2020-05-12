import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {ProductsList} from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <ProductsList />
    </div>
  );
}

export default App;
