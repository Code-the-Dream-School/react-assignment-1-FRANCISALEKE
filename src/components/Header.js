import React from 'react';
import logo from '../images/logo.png'

const Header = ({click, showButton}) => {
  return(
    <div className='center'>
      <img src={logo} alt="TIC TAC TOE" className="logo"></img>
      <h1>TIC TAC TOE</h1>
      {showButton ? <button onClick={click}>Start</button>: null}
    </div>
  );
}

export default Header;
