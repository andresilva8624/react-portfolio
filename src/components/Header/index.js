import React from 'react';
import coverImage from '../../assets/cover/screen.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Andre Silva <span><h3>Web/App/Software Developer</h3></span></h1>
     
      
      <img src={coverImage} alt="wooden background"></img>
      {props.children}
      
    </header>
    
  );
  
}

export default Header;
