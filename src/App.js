import React from 'react';
import './App.css';
import {ProductsList} from "./components/ProductsList";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar} from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <ProductsList/>
        </div>
    );
}

export default App;
