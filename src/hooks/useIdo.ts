import {ethers} from 'ethers'
import {useState, useEffect, useMemo, useCallback, useRef} from 'react'

const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s2.binance.org:8545/");

export default function useIdo() {

    const [value, setValue] = useState<number>(0);
    const [timers, setTimers] = useState<Array<NodeJS.Timeout>>([]);
    const saveCallBack: any = useRef();
    const callBack = () => {
        const random: number = (Math.random() * 10) | 0;
        setValue(value + random);
    };
    useEffect(() => {
        saveCallBack.current = callBack;
        return () => {
        };
    });
    useEffect(() => {
        const tick = () => {
            saveCallBack.current();
        };
        const timer: NodeJS.Timeout = setInterval(tick, 10000);
        timers.push(timer);
        setTimers(timers);
        console.log(timers);
        return () => {
            clearInterval(timer);
        };
    }, []);
    //=========================================
    const [marketOrderExecutor, setMarketOrderExecutor] = useState('0')
    const [priceFeedExecutor, setPriceFeedExecutor] = useState('0')
    const [limitOrderExecutor, setLimitOrderExecutor] = useState('0')
    const [limitDecreaseOrderExecutor, setLimitDecreaseOrderExecutor] = useState('0')
    const [limitSwapOrderExecutor, setLimitSwapOrderExecutor] = useState('0')
    const [liquidationExecutor, setLiquidationExecutor] = useState('0')

    useEffect(() => {
        initData().then()
    })


    const initData = useCallback(
        async () => {

            try {
                const list = ["0xD5F8DaE587d0d361caC4B05741Be33a65169c38E", "0x9fC9bd6a1605e78bA4556f0098442aB93E78FC0D", "0xBd5866946Cd188F3dcBa5E5c59855cD4768F7D4A", "0x05cc2300Bc96D4DFE1bC95177d58304e8EB25a6f", "0x71722Ff6E91B27F7AA336FDbDe7B6B31016Dd9f4", "0x7118D92279fFFf53f281dd6D315cA8BFa29714aE"]

                for (var i = 0; i < list.length; i++) {
                    let rs = await provider.getBalance(list[i]);
                    let bal = ethers.utils.formatEther(rs);
                    console.log(" balance ................ = " + bal);
                    if (i === 0)
                        setMarketOrderExecutor(bal);
                    if (i === 1)
                        setPriceFeedExecutor(bal);
                    if (i === 2)
                        setLimitOrderExecutor(bal);
                    if (i === 3)
                        setLimitDecreaseOrderExecutor(bal);
                    if (i === 4)
                        setLimitSwapOrderExecutor(bal);
                    if (i === 5)
                        setLiquidationExecutor(bal);
                }
            } catch (error) {
                console.log(error)
            }

        },
        [value])

    return {
        marketOrderExecutor,
        priceFeedExecutor,
        limitOrderExecutor,
        limitDecreaseOrderExecutor,
        limitSwapOrderExecutor,
        liquidationExecutor
    }
}




