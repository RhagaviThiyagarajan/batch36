import React from "react";
import App from "./App";
import "./App.css";
import { useState } from "react";


export function TicTacToe()
{
    return(
        <div>
            <h3>FUNGAME</h3>
            
            <Board/>  
        </div>
    )
}
export function Board()
{
    return(
        <div className="board">
            <GameBox/>
            <GameBox/>
            <GameBox/>
            <GameBox/>
            <GameBox/>
            <GameBox/>
            <GameBox/>
            <GameBox/>
            <GameBox/>

            </div>
    )
}

export function GameBox()
{
    const[value,setValue]=useState('')
   
    const styles=
    {
        color:value==="X" ? " green" : "red",
    };
    return(
        <div style={styles} onClick={()=>setValue(value==="X"? "O" : "X")} 
        className="game-box">
{value}
        </div>
    )
}
