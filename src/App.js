import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import ProductsList from "./components/ProductsList";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <ProductsList />
        </div>
    );
}

export default App;
