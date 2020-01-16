import React from 'react';

function PictureTitle(props) {
  if (!props.value) return <h2 className="pictureTitle">Loading...</h2>;
  return (
    <h2 className="pictureTitle">{props.value} </h2>
  )
}

export default PictureTitle

