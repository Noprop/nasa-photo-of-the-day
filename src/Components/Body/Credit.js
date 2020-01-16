import React from 'react';

function Credit(props) {
  if (!props.value) return <p className="credit">Loading...</p>
  return (
    <p className="credit">{props.value} </p>
  )
}

export default Credit