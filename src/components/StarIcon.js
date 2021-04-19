import React, { useState } from "react";

const StarIcon = () => {
  const [rating, setRating] = useState(4.5);
  return (
    <>
      <span className='badge'>
        <span className='badge-rating'>{rating}</span>
        <img
          src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=='
          alt='star icon'
        />
      </span>
    </>
  );
};

export default StarIcon;
