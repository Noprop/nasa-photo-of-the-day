import React from 'react';
import Logo from './Logo';
import Title from './Title';
import PictureDate from './PictureDate'

function Header(props) {
  return (
    <div className="header">
      <Logo />
      <Title />
      <PictureDate newDate={props.newDate} />
    </div>
  )
}

export default Header 