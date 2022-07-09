import React from 'react';
import Movie from './Movie';
import { useState } from 'react';




export default function MovieList({movieList,setMovieList}) {
  const[name,setName]=useState();
  const[rating,setRating]=useState();
  const[summary,setSummary]=useState();
  const[poster,setPoster]=useState();

  return (

<div>
  <div className='Add-movie-form'>

  <input placeholder="Name"  onChange={(event)=>setName(event.target.value)}/>
  <input placeholder="Rating" onChange={(event)=>setRating(event.target.value)} />
    <input placeholder="Summary" onChange={(event)=>setSummary(event.target.value)}/>

      <input placeholder="Poster" onChange={(event)=>setPoster(event.target.value)}>

  </input>

  
<p>  name:{name}</p>
<p>  poster: {poster}</p>
<p>  rating:{rating}</p>
<p>  summary:{summary}</p>
  
  <button onClick={()=>
  {
    const newMovie={
      name:name,
      poster:poster,
      rating:rating,
      summary:summary,

    };
    setMovieList([...movieList,newMovie]);
  }
}>ADD-MOVIE</button>
    <div className='movie-list'>
      {movieList.map((mv, index) => {
        return (<Movie key={index} movie={mv} />);
      }
      )}

</div>
</div>
    </div>
  );

}
