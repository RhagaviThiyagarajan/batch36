
import React from 'react';
import Counter from './Counter';
import { useState } from 'react';
import { useNavigate,navigate } from 'react-router';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Movie( {movie,id,deletebutton}) {
  

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
    <Card  className='movie-container' sx={{height:'min-content'}}>
    <img 
    src={movie.poster}
     alt={movie.name} 
     className='movie-poster'
     />
     <CardContent>
    <div className='movie-specs'>
    <h2 className='movie-name'>{movie.name}

    

     <IconButton onClick={()=>setShow(!show)}
color="primary" aria-label="movie details">
 
  {
    show?<ExpandLessIcon />:
  <ExpandMoreIcon/>
}
</IconButton> 


<IconButton onClick={()=>navigate(`/movies/${id}`)} 
color="primary" aria-label="movie details">
  <InfoIcon />
</IconButton>
</h2>
    <p  style={styles} className='movie-rating'>{movie.rating}⭐</p>
   
  </div>

  <div className='button'>

  {/* <IconButton onClick={()=>setShow(!show)}
color="primary" aria-label="movie details">
 
  {
    show?<ExpandLessIcon />:
  <ExpandMoreIcon/>
}
</IconButton> */}

  {/* <button onClick={()=>setShow(!show)}>TOGGLE-SUMMARY</button> */}
  {/* <button onClick={()=>navigate(`/movies/${id}`)}>INFO</button>  */}
  {/* ///conditional rendering */}

{/* <IconButton onClick={()=>navigate(`/movies/${id}`)} 
color="primary" aria-label="movie details">
  <InfoIcon />
</IconButton> */}
{
  show? <p className='movie-summary'>{movie.summary}</p>  : null

};
</div>

</CardContent>
{/* <MovieList/> */}
<CardActions>
  <Counter/> {deletebutton}
  </CardActions>
  
  </Card>
  );
}




