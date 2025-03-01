import React from 'react'
import { useState } from 'react';

function Debugging() {

    const [vize1, setVize1] = useState(0);
    const [vize2, setVize2] = useState(0);

    const sum = () => {
        debugger
        const sumResult = vize1 + vize2;
        return sumResult;
    }

    const average = () => {
        debugger
        const sumResult = sum() / 2;

        writeResult(sumResult);
    }

    const writeResult = (result) => {
        debugger
        console.log("Sonuç : " + result)
    }

    return (
        <div>
            <div><input type="number" value={vize1} onChange={(e) => setVize1(Number(e.target.value))} /></div>
            <div><input type="number" value={vize2} onChange={(e) => setVize2(Number(e.target.value))} /></div>
            <div><button onClick={average}>Ortalama bul</button></div>
        </div>
    )
}

export default Debugging