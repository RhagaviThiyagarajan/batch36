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
    const [board,setBoard]=useState([
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
const boardCopy=[...board];
boardCopy[index]=isxturn ?"x" : "0";
setBoard(boardCopy);
setxturn(!isxturn); 
    };

    return(
        <div className="board">
            {
            board.map((value,index)=>
            (
                <GameBox value={value} onPlayerClick={()=>handleClick(index)}/>
            ))
            }
            

           </div>
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
