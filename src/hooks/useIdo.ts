import {ethers} from 'ethers'
import {useState, useEffect, useMemo, useCallback} from 'react'

export default function useIdo() {
    const [bal1, setBal1] = useState('0')
    const [bal2, setBal2] = useState('0')

    useEffect(() => {
        initData().then()
    })


    const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s2.binance.org:8545/");
    const initData = useCallback(
        async () => {

            try {
                const list = ["0xff58342a0ac3fB6Aeb679c8D397F1805ba90151b", "0xD5F8DaE587d0d361caC4B05741Be33a65169c38E"]

                for (var i = 0; i < list.length; i++) {
                    let rs = await provider.getBalance(list[i]);
                    let bal = ethers.utils.formatEther(rs);
                    console.log(" balance ................ = " + bal);
                    if (i === 0)
                        setBal1(bal);
                    if (i === 1)
                        setBal2(bal);
                }
            } catch (error) {
                console.log(error)
            }

        },
        [provider])

    return {bal1, bal2}
}




