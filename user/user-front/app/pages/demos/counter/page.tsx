'use client';
import Button from "@mui/material/Button";
import { NextPage } from "next";
import { useState } from "react";


const Counter: NextPage = () => {
    const [num, setNum] = useState(0)

    const handlePlus = () => {
        setNum(num + 1);
    }
    const handleMinus = () => {
        setNum(num - 1);
    }

    return (<>
        <h1>test!</h1>
        <h1>Counter : {num}</h1>
        <Button onClick={handlePlus}>+</Button>
        <Button onClick={handleMinus}>-</Button>
    </>)
}

export default Counter;