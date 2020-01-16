import React from 'react';

function PictureDate(props) {
  return (
    <form className="pictureDate">
      <input type="date" onChange={(e) => props.newDate(e.target.value)} /><br/>
      <input type="submit"/>
    </form>
  )
}

export default PictureDate