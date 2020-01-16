import React from 'react';

function Description(props) {
  if (!props.value) return <p className="description">Loading...</p>
  return (
    <p className="description">{props.value} </p>
  )
}

export default Description