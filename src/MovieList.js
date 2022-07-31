import React from 'react';
import Movie from './Movie';
import App from './App';
import { AddMovie } from './AddMovie';

import { useState,useEffect,useNavigate} from 'react';


export default function MovieList() {
  
const [movieList,setMovieList]=useState([]);
 const getMovies=()=>
 {
   fetch("https://62a970bfec36bf40bdb78bdc.mockapi.io/movies")
   .then((data)=>data.json())
   .then((mvs)=>setMovieList(mvs));
   };

useEffect(()=>getMovies(),[]);

const deleteMovie=(id)=>
{
  //refresh the data
  fetch(`https://62a970bfec36bf40bdb78bdc.mockapi.io/movies/${id}`,
  {method:"DELETE"})
 .then(()=>getMovies());
 }
  

 const navigate=useNavigate();

  return(
  <div>
    <AddMovie/>
       <div className='movie-list'>
         {
         movieList.map((mv, index) => 
          (<Movie 
            key={index}
            movie={mv}
            id={mv.id}
          //   deleteButton={<button onClick={()=>
          //   {
          //     fetch("https://62a970bfec36bf40bdb78bdc.mockapi.io/movies")
          //   .then((data)=>data.json())
          //   .then((mvs)=>setMovieList(mvs));
          // }
          //   }>Delete me😒</button>}
            deletebutton=
            {<button onClick={()=>deleteMovie(mv.id)}
           >DeleteMe😒</button>}

           editbutton=
           {
             <button onClick={()=>navigate(`/movies/edit/${mv.id}`)}
          >edit me😊</button>
           }
            /> 
           
          
          ))}
          
            
            
         
         
  
  
   </div>
     </div>
  );
          }


         