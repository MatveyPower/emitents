import React, { useState, useEffect } from "react"
import './price-changes.css'
function generateID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}
const PriceChanges = ({ value }) => {
    const [price, setPrice] = useState(null)

    useEffect(() => {
        fetch(
            `http://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities/${value}.json?iss.json=extended&amp;from=2020-01-01`
        )
            .then((res) => res.json())
            .then((data) => setPrice(data[1].history[1]))
    }, [value])

    let arr = []
    if (price) {
        price.forEach((item) => {
            for (let prop in item) {
                if (prop === "CLOSE" || prop === "OPEN")
                    arr.push(prop, item[prop])
            }
        })
    }
    console.log(arr)
    let open = []
    for (let i = 1; i <= arr.length - 20; i += 20) {
        open.push(arr[i])
    }

    console.log(open)
    let close = []
    for (let i = 19; i <= arr.length - 23; i += 20) {
        close.push(arr[i])
    }

    console.log(close)


    return (<ul>
        {open && open.map((item,index) =>{
            return(<li key = {generateID()}>
                {`${index+1} Неделя. На момент открытия:${item}, закрытия${close[index]}`}
            </li>)
        })}
    </ul>)
}

export default PriceChanges
