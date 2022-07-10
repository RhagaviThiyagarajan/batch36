
import React from 'react';
import Counter from './Counter';
import { useState } from 'react';
import { useNavigate,navigate } from 'react-router';





export default function Movie( {movie,id}) {
  

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

const navigate=useNavigate();


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

  <div className='button'>
  <button onClick={()=>setShow(!show)}>TOGGLE-SUMMARY</button>
  <button onClick={()=>navigate(`/movies/${id}`)}>INFO</button> {
  ///conditional rendering


  show? <p className='movie-summary'>{movie.summary}</p>  : null

};
</div>


{/* <MovieList/> */}
  <Counter/>
  </div>
  );
}




