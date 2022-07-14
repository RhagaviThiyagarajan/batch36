import React from 'react';
import Movie from './Movie';
import App from './App';
import { AddMovie } from './AddMovie';




export default function MovieList({movieList,setMovieList}) {
  return(
  <div>
    <AddMovie/>
       <div className='movie-list'>
         {movieList.map((mv, index) => {
            return (<Movie key={index} movie={mv} id={index}/>);
         }
         )}
  
  
   </div>
     </div>
  );
        }
