import React from 'react';

function Date(props) {
  if (!props.value) return <p className="date">Loading...</p>
  return (
    <p className="date">{props.value} </p>
  )
}

export default Date