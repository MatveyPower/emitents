import React, { useEffect, useState } from "react"
import { SBER } from "../../const"

import './emitents.css'


function generateID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}

const Emitents = ({ value }) => {
    const [data, setData] = useState([])
    const [columns, setColumns] = useState([])

    useEffect(() => {
        fetch(`https://iss.moex.com/iss/securities.json?q=MTSS`)
        .then(res => res.json())
        .then(data => setColumns(data.securities.columns))
    },[])

    useEffect(() => {
        fetch(`https://iss.moex.com/iss/securities.json?q=${value}`)
            .then((res) => res.json())
            .then((data) => setData(data.securities.data))
    }, [value])

    const index = value === SBER ? 8 : 0
    return (
        <ul className = 'list-group'>
            {data[index] &&
                data[index].map((item, index) => {
                    return <li key={generateID()}>{`${columns[index]}: ${item}`}</li>
                })}
        </ul>
    )
}

export default Emitents
