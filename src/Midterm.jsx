import React, {useState} from "react";

export default function Midterm() {
    const [fruit, setFruit] = useState("")

    return(
        <>
        <h1>당신은 어떤 과일을 좋아하나요? {fruit}</h1> 
        <button onClick={() => setFruit("사과")}>사과</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => setFruit("오랜지")}>오랜지</button>&nbsp;&nbsp;&nbsp;&nbsp;   
        <button onClick={() => setFruit("바나나")}>바나나</button>
        </>
    )
}