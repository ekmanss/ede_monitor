import React, {lazy, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ethers} from 'ethers'

import useIdo from "./hooks/useIdo";
import {ede_bot_executor} from "./config/address"

function App() {

    const {
        all
    } = useIdo(ede_bot_executor)


    return (
        <div className="App">
            <header className="App-header">
                <div>
                    {all.map((item, index) => {
                        return (
                            <div key={index}>
                                <div>{item.name}</div>
                                <div>{item.address}</div>
                                <div>{item.balance}</div>
                                <br/>
                            </div>
                        )
                    })}
                </div>
            </header>
        </div>
    );
}

export default App;
