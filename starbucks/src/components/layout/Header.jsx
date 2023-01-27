import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';

function Header() {
  return (
    <div className='header'>
      <div className='logo'><img src={logo} alt="로고이미지" /></div>
      <div className='menu'>Menu</div>
      <div className='cart'>Cart</div>
      <div className='story'>Story</div>
    </div>

  );
}

export default Header;