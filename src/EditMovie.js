import React from "react";
import { useState,useEffect } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate,useParams } from "react-router";

export function EditMovie() {
  const { id } = useParams();
  console.log(id);
  //console.log(movieList[id]);

  const [movie,setMovie]=useState(null);
 const getMovie=()=>
 {
   fetch(`https://62a970bfec36bf40bdb78bdc.mockapi.io/movies/${id}`,{
   method:"GET",
  })
   .then((data)=>data.json())
   .then((mv)=>setMovie(mv));
   };

useEffect(()=>getMovie(),[]);
  
  return(
     movie ? <EditMovieForm movie={movie}/> : "loading..."
  );  

}
function EditMovieForm({movie})
{
  const [name, setName] = useState(movie.name);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [poster, setPoster] = useState(movie.poster);
  const[trailer,setTrailer]=useState(movie.trailer);

  const navigate=useNavigate();
  const EditMovie = () => {
    const updatedMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer : trailer,
    };
    //post method
    //for adding movie
    //method must be post
    //in the body we have to pass in the data
    // format should be json
    //headers-have to mention that we are passing json data.

    //copy the movie list and add new movie to it.
    // setMovieList([...movieList, newMovie]);

    //in put -for updating we use this
    //for put also we need body
    //header should be json
    //movieId-have to mention extra
    //movie Id comes from movie data

    fetch(`https://62a970bfec36bf40bdb78bdc.mockapi.io/movies/${movie.id}`,{
      method:"PUT",
      body:JSON.stringify(updatedMovie),
      headers : { 
        "Content-Type":'application/json',
      },
    })
    .then(()=>navigate('/movies'));
   
    
    console.log(updatedMovie);
   
  };
  return (
    <div>
      <div className="Add-movie-form">
     
                              
        <TextField
        value={name}
          label="Name"
          variant="filled"
           onChange={(event) => setName(event.target.value)}
        />

        <TextField
        value={rating}
          label="Rating"
          variant="filled"
          onChange={(event) => setRating(event.target.value)}
        />

        <TextField
        value={poster}
          label="Poster"
          variant="filled"
          onChange={(event) => setPoster(event.target.value)}
        />

        <TextField
        value={summary}
          label="summary"
          variant="filled"
          onChange={(event) => setSummary(event.target.value)}
        />
        <TextField
        value={trailer}
          label="trailer"
          variant="filled"
          onChange={(event) => setTrailer(event.target.value)}
        />

        <Button onClick={EditMovie} variant="contained" color="success">
         save
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