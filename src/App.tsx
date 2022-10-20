import React, {lazy, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ethers} from 'ethers'

import useIdo from "./hooks/useIdo";


function App() {

    const {bal1, bal2} = useIdo()

    return (
        <div className="App">
            <header className="App-header">
                bal1 = {bal1}<br/>
                bal2 = {bal2}

            </header>
        </div>
    );
}

export default App;
