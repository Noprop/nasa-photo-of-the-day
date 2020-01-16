import React from 'react';

function Picture(props) {
  if (!props.value) return <div className="picture">Loading...</div>
  return (
    <img src={props.value} alt="From nasa" className="picture" style={{maxWidth: "1000px"}} />
  )
}

export default Picture