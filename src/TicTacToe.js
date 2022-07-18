import React from "react";
import App from "./App";
import "./App.css";
import { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';


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
    const decideWinner=(board)=>
    {
        const lines=
        [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [0,3,6],


    ];
    for (let i=0;i<lines.length;i++)
    {
       const  [a,b,c]=lines[i];
       if(board[a]!=null && board[a] === board[b] && board[b]===board[c])
       {
        console.log(lines[i],a,b,c);
        console.log(board);
        console.log("Winner",board[a]);
        return board[a];
       }
    } 
    
    return null;
};
    const winner=decideWinner(board)
    const handleClick=(index)=>
    {
console.log(index);
//allow updating in untouched box;
if(!winner && board[index]===null)
{
const boardCopy=[...board];
boardCopy[index]=isxturn ?"x" : "0";
setBoard(boardCopy);
setxturn(!isxturn); 
    };
    }
    return(
        <div className="board">
            {
            board.map((value,index)=>
            (
                <GameBox value={value} onPlayerClick={()=>handleClick(index)}/>
            ))
            }
           <h2> winner is : {winner}</h2>

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
export default () => {
    const { width, height } = useWindowSize()
    return (
      <Confetti
        width={width}
        height={height}
      />
    )
  }