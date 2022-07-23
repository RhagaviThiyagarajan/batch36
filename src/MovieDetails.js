import React from 'react';
import {
  useNavigate,
  useParams
} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  console.log(id);
  //console.log(movieList[id]);
  const movie = movieList[id];

  const styles = {
    color: movie.rating >= 8.5 ? "green" : " red",
  };
  const navigate = useNavigate();

  return (
    <div>
      <iframe width="100%" height="700"
        src={movie.trailer}
        title="Baahubali Trailer Tamil || Prabhas, Rana Daggubati, Anushka, Tamannaah || Bahubali Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

      <div className="movie-detail-container">
        <div className='movie-specs'>
          <h2 className='movie-name'>{movie.name}</h2>
          <p style={styles} className='movie-rating'>{movie.rating}⭐</p>

        </div>
        <p className='movie-summary'>{movie.summary}</p>
     
     

        <Button 
         onClick={() => navigate(-1)}
         variant="outlined" startIcon={<ArrowBackIcon/>}>
  BACK
</Button>


      </div>
    </div>
  );
}
