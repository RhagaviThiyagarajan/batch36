import React from 'react';
import { useState } from 'react';



export default function Counter(mv) {

  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="counter">
      <button className='like-button' onClick={() => setLike(like + 1)}><span> 👍</span> {like}</button>


      <button className='dislike-button' onClick={() => setDisLike(dislike - 1)}><span>👎</span>{dislike}</button>


   
    </div>
  );
}
