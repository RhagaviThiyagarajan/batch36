
import React from 'react';
import Counter from './Counter';
import { useState } from 'react';






export default function Movie( {movie}) {
  

  ///conditional styling
 const styles=
 {
  color:movie.rating >=8.5 ? "green" : " red",
 };
//conditional styling
 const[show,setShow]=useState(false);

//  const parastyles=
//  {
//   display:show ? "block" : "none",
//  };

  return (
  <div className='movie-container'>
    <img 
    src={movie.poster}
     alt={movie.name} 
     className='movie-poster'
     />
    <div className='movie-specs'>
    <h2 className='movie-name'>{movie.name}</h2>
    <p  style={styles} className='movie-rating'>{movie.rating}⭐</p>
  </div>
  <button onClick={()=>setShow(!show)}>TOGGLE-SUMMARY</button>
{
  ///conditional rendering

  show? <p className='movie-summary'>{movie.summary}</p>  : null

};
 

{/* <MovieList/> */}
  <Counter/>
  </div>
  );
}




