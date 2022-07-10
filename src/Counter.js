import React from 'react';
import { useState } from 'react';



export default function Counter(mv) {

  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const incrementLike=()=>setLike(like + 1);
  const decrementLike=()=>setDisLike(dislike - 1);

  return (
    <div className="counter">
      <button className='like-button' onClick={incrementLike}>👍{like}
      </button>


      <button className='dislike-button' onClick={decrementLike}>👎{dislike}
      </button>


   
    </div>
  );
}
