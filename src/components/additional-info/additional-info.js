import React, { useState, useEffect } from "react"

import './additional-info.css'

function generateID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}

const AdditionalInfo = ({ value }) => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch(
            `http://iss.moex.com/iss/securities/${value}/dividends.json?iss.json=extended`
        )
            .then((res) => res.json())
            .then((data) => setInfo(data[1].dividends[1]))
    }, [value])
    let arr = []
    for (let item of info) {
        for (let obj in item) {
            arr.push(`${obj}: ${item[obj]}`)
        }
    }
    return (
        <ul className="list-group">
            Дополнительная информация
            {arr &&
                arr.map((item) => {
                    return <li key={generateID}>{item}</li>
                })}
        </ul>
    )
}

export default AdditionalInfo
