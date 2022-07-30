import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router";

export function AddMovie() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [poster, setPoster] = useState("");
  const[trailer,setTrailer]=useState("");

  const navigate=useNavigate();
  const AddMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailr : trailer,
    };
    //post method
    //for adding movie
    //method must be post
    //in the body we have to pass in the data
    // format should be json
    //headers-have to mention that we are passing json data.

    //copy the movie list and add new movie to it.
    // setMovieList([...movieList, newMovie]);
    fetch(`https://62a970bfec36bf40bdb78bdc.mockapi.io/movies`,{
      method:"POST",
      body:JSON.stringify(newMovie),
      headers : { 
        "Content-Type":'application/json',
      },
    })
    .then(()=>navigate('/movies'));
   
    
    console.log(newMovie);
   
  };

  return (
    <div>
      <div className="Add-movie-form">
        {/* <input placeholder="Name"  onChange={(event)=>setName(event.target.value)}/> */}
        {/* <input placeholder="Rating" onChange={(event)=>setRating(event.target.value)} /> */}
        {/* //<input placeholder="Summary" onChange={(event)=>setSummary(event.target.value)}/> */}
        {/*
                <input placeholder="Poster" onChange={(event)=>setPoster(event.target.value)}> */}

        {/* </input> */}

        <TextField
          label="Name"
          variant="filled"
          onChange={(event) => setName(event.target.value)}
        />

        <TextField
          label="Rating"
          variant="filled"
          onChange={(event) => setRating(event.target.value)}
        />

        <TextField
          label="Poster"
          variant="filled"
          onChange={(event) => setPoster(event.target.value)}
        />

        <TextField
          label="summary"
          variant="filled"
          onChange={(event) => setSummary(event.target.value)}
        />
        <TextField
          label="trailer"
          variant="filled"
          onChange={(event) => setTrailer(event.target.value)}
        />

        <Button onClick={AddMovie} variant="contained">
          ADD-MOVIE
        </Button>
      </div>
      {/* <div className='movie-list'>
              {movieList.map((mv, index) => {
                 return (<Movie key={index} movie={mv} id={index}/>);
              }
              )}
          
          </div> */}
    </div>
  );
}
