import {ethers} from 'ethers'
import {useState, useEffect, useMemo, useCallback, useRef} from 'react'

const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s2.binance.org:8545/");

interface BalanceItme {
    balance: string,
    name: string,
    address: string,
    chainId: number,
}


export default function useIdo(ede_bot_executor: BalanceItme[]) {

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
        const timer: NodeJS.Timeout = setInterval(tick, 1000 * 10);
        timers.push(timer);
        setTimers(timers);
        console.log("timer::", timers);
        return () => {
            clearInterval(timer);
        };
    }, []);
    //=========================================
    const [all, setAll] = useState([] as BalanceItme[])

    useEffect(() => {
        initData().then()
    })


    const initData = useCallback(
        async () => {

            try {
                const list = ["0xD5F8DaE587d0d361caC4B05741Be33a65169c38E", "0x9fC9bd6a1605e78bA4556f0098442aB93E78FC0D", "0xBd5866946Cd188F3dcBa5E5c59855cD4768F7D4A", "0x05cc2300Bc96D4DFE1bC95177d58304e8EB25a6f", "0x71722Ff6E91B27F7AA336FDbDe7B6B31016Dd9f4", "0x7118D92279fFFf53f281dd6D315cA8BFa29714aE"]

                let allBalance: BalanceItme[] = [];
                for (var i = 0; i < ede_bot_executor.length; i++) {
                    let rs = await provider.getBalance(ede_bot_executor[i].address);
                    let bal = ethers.utils.formatEther(rs);
                    ede_bot_executor[i].balance = Number(bal).toFixed(3);
                    allBalance.push(ede_bot_executor[i])
                }
                console.log(Date.now())
                setAll(allBalance);

            } catch (error) {
                console.log(error)
            }

        },
        [value])

    return {
        all
    }
}




