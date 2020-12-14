import React, { useState } from "react"
import Emitents from "../emitents"
import "./app.css"
import { SBER, MTSS, YNDX } from "../../const"
import AdditionalInfo from "../additional-info/additional-info"
import PriceChanges from "../price-changes"
import Example from "../chart"

const App = () => {
    const [currentInfo, setCurrentInfo] = useState(null)
    return (
        <div >
            <div className="App">
            <div
                className="App-item"
                onClick={() => {
                    if (currentInfo === "MTS") {
                        setCurrentInfo(null)
                    } else {
                        setCurrentInfo("MTS")
                    }
                }}
            >
                <h4>МТС</h4>
                <Emitents value={MTSS} />
                {currentInfo === "MTS" && <AdditionalInfo value={MTSS}/>}
                {currentInfo === "MTS" && <PriceChanges value={MTSS}/>}
                
            </div>
            <div
                className="App-item"
                onClick={() => {
                    if (currentInfo === "SBER") {
                        setCurrentInfo(null)
                    } else {
                        setCurrentInfo("SBER")
                    }
                }}
            >
                <h4>СБЕРБАНК</h4>
                <Emitents value={SBER} />
                {currentInfo === "SBER" && <AdditionalInfo value={SBER} />}
                {currentInfo === "SBER" && <PriceChanges value={SBER}/>}
            </div>
            <div
                className="App-item"
                onClick={() => {
                    if (currentInfo === "YNDX") {
                        setCurrentInfo(null)
                    } else {
                        setCurrentInfo("YNDX")
                    }
                }}
            >
                <h4>ЯНДЕКС</h4>
                <Emitents value={YNDX} />
                {currentInfo === "YNDX" && <AdditionalInfo value={YNDX} />}
                {currentInfo === "YNDX" && <PriceChanges value={YNDX}/>}
            </div>
            </div>
            <Example/>
        </div>
    )
}

export default App
