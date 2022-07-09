import App from "./App";
import { useState } from "react";
import React from "react";


export default function Count(props)
{
    return(
        <div>
            
        <button  style={{backgroundColor:`${props.count%2===0? "red":"yellow"}`}}
 
    onClick={props.increment}>Increment</button>{props.count}
        <button  onClick={props.decrement}>Decrement</button>
</div> 
    );
}