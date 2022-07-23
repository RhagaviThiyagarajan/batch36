import React from 'react';
import { useState } from 'react';
import Badge from '@mui/material/Badge';
import { useNavigate,Navigate } from 'react-router';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import MailIcon from '@mui/icons-material/Mail';
import { useEffect } from 'react';



export default function Counter(mv,id) {
const navigate=useNavigate();
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const incrementLike=()=>setLike(like + 1);
  const decrementLike=()=>setDisLike(dislike - 1);
useEffect(()=>
{
  console.log("Like updated",like);
},[like,dislike]);

  return (
    <div className="counter">
      <IconButton color="primary"
       onClick={incrementLike}
       aria-label="movie details">
      <Badge badgeContent={like} color="success">
  <ThumbUpIcon color="action" />
      </Badge>
      </IconButton> 
      {/* <button className='like-button' onClick={incrementLike}>{like}
      </button> */}

      <IconButton  
      color="primary"
      onClick={decrementLike}
      aria-label="movie details">

       <Badge badgeContent={dislike} color="error">
      <ThumbDownIcon color="action" />
      </Badge>
      </IconButton>

      {/* <button className='dislike-button' onClick={decrementLike}>{dislike}
      </button> */}


   
    </div>
  );
}
