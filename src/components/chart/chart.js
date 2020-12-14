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
        name: "Page A",
        mv: 4000,
        sv: 2400,
        yv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        mv: 3000,
        sv: 1398,
        yv: 2400,
        amt: 2210,
    },
    {
        name: "Page C",
        mv: 2000,
        sv: 9800,
        yv: 2400,
        amt: 2290,
    },
    {
        name: "Page D",
        mv: 2780,
        sv: 3908,
        yv: 2400,
        amt: 2000,
    },
    {
        name: "Page E",
        mv: 1890,
        sv: 4800,
        yv: 2400,
        amt: 2181,
    },
    {
        name: "Page F",
        mv: 2390,
        sv: 3800,
        yv: 2400,
        amt: 2500,
    },
    {
        name: "Page G",
        mv: 3490,
        sv: 4300,
        yv: 2400,
        amt: 2100,
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
                    dataKey="mv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="sv" stroke="#82ca9d" />
                <Line type="monotone" dataKey="yv" stroke="#E82E41" />
            </LineChart>
        )
    }
}
