import React, {lazy, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ethers} from 'ethers'

import useIdo from "./hooks/useIdo";


function App() {

    const {
        marketOrderExecutor,
        priceFeedExecutor,
        limitOrderExecutor,
        limitDecreaseOrderExecutor,
        limitSwapOrderExecutor,
        liquidationExecutor
    } = useIdo()

    marketOrderExecutor.indexOf('.')

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    marketOrderExecutor:0xD5F8DaE587d0d361caC4B05741Be33a65169c38E
                    = {Number(marketOrderExecutor).toFixed(3)}<br/>
                    priceFeedExecutor:0x9fC9bd6a1605e78bA4556f0098442aB93E78FC0D
                    = {Number(priceFeedExecutor).toFixed(3)}<br/>
                    limitOrderExecutor:0xBd5866946Cd188F3dcBa5E5c59855cD4768F7D4A
                    = {Number(limitOrderExecutor).toFixed(3)}<br/>
                    limitDecreaseOrderExecutor:0x05cc2300Bc96D4DFE1bC95177d58304e8EB25a6f
                    = {Number(limitDecreaseOrderExecutor).toFixed(3)}<br/>
                    limitSwapOrderExecutor:0x71722Ff6E91B27F7AA336FDbDe7B6B31016Dd9f4
                    = {Number(limitSwapOrderExecutor).toFixed(3)}<br/>
                    liquidationExecutor:0x7118D92279fFFf53f281dd6D315cA8BFa29714aE
                    = {Number(liquidationExecutor).toFixed(3)}<br/>
                </div>
            </header>
        </div>
    );
}

export default App;
