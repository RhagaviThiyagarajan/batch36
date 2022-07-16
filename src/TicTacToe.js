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
    const [board,setboard]=useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,

    ])
    const [isxturn,setxturn]=useState(true);
    const handleClick=(index)=>
    {
console.log(index);
    }

    return(
        <div className="board">
            {
            board.map((value,index)=>
            (
                <GameBox value={index} onPlayerClick={()=>handleClick(index)}/>
            ))
            }
            

     0       </div>
    )
}

export function GameBox({value,setValue,onPlayerClick})
{
    // const[value,setValue]=useState('');
   
    const styles=
    {
        color:value==="x" ? "green" : "red",
    };
    return(
        <div style={styles} onClick=
           {onPlayerClick}
        className="game-box">
{value}
        </div>
    )
}
