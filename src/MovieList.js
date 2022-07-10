import React from 'react';
import Movie from './Movie';
import { useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';




export default function MovieList({movieList,setMovieList}) {
  const[name,setName]=useState("");
  const[rating,setRating]=useState("");
  const[summary,setSummary]=useState("");
  const[poster,setPoster]=useState("");

  const AddMovie=()=>
  {
    const newMovie={
      name:name,
      poster:poster,
      rating:rating,
      summary:summary,

    };

    //copy the movie list and add new movie to it.

    setMovieList([...movieList,newMovie]);
    console.log(newMovie);
  };
  

  return (

<div>
  <div className='Add-movie-form'>

  {/* <input placeholder="Name"  onChange={(event)=>setName(event.target.value)}/> */}
  {/* <input placeholder="Rating" onChange={(event)=>setRating(event.target.value)} /> */}
    {/* //<input placeholder="Summary" onChange={(event)=>setSummary(event.target.value)}/> */}
{/* 
      <input placeholder="Poster" onChange={(event)=>setPoster(event.target.value)}> */}

  {/* </input> */}

  <TextField  label="Name"
   variant="filled"
   onChange={(event)=>setName(event.target.value)}/> 

   <TextField  label="Rating"
   variant="filled"
   onChange={(event)=>setRating(event.target.value)}/> 

   <TextField  label="Poster"
   variant="filled"
   onChange={(event)=>setPoster(event.target.value)}/> 

  
  <TextField  label="summary"
   variant="filled"
   onChange={(event)=>setSummary(event.target.value)}/> 

  <Button onClick={AddMovie} variant="contained">ADD-MOVIE</Button>

  </div>
    <div className='movie-list'>
      {movieList.map((mv, index) => {
         return (<Movie key={index} movie={mv} id={index}/>);
      }
      )}


</div>
    </div>
  );

}
