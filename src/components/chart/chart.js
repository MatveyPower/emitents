import React, { PureComponent } from "react"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts"

const data = [
    {
        name: "1 неделя",
        MTS: 265.13,
        SBER: 96,
        YNDX: 1500,
        amt: 600,
    },
    {
        name: "2 неделя",
        MTS: 270,
        SBER: 98,
        YNDX: 1501,
        amt: 620,
    },
    {
        name: "3 неделя",
        MTS: 268.4,
        SBER: 98,
        YNDX: 1522,
        amt: 800,
    },
    {
        name: "4 неделя",
        MTS: 283,
        SBER: 101,
        YNDX: 1503,
        amt: 900,
    },
    {
        name: "5 неделя",
        MTS: 264,
        SBER: 102,
        YNDX: 1504,
        amt: 860,
    },
    {
        name: "6 неделя",
        MTS: 282,
        SBER: 99,
        YNDX: 1501,
        amt: 850,
    },
    {
        name: "7 неделя",
        MTS: 267,
        SBER: 98,
        YNDX: 1503,
        amt: 890,
    },
]

export default class Example extends PureComponent {
    static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/"

    render() {
        return (
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="MTS"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="SBER" stroke="#82ca9d" />
                <Line type="monotone" dataKey="YNDX" stroke="#E82E41" />
            </LineChart>
        )
    }
}
