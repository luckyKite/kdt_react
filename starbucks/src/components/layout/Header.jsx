import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import style from './Header.module.css';

function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo}><img src={logo} alt="로고이미지" /></div>
      <nav className={style.nav}>
        <ul>
          <li className={style.menu}>Menu</li>
          <li className={style.cart}>Cart</li>
          <li className={style.story}>Story</li>
        </ul>
      </nav>
    </div>

  );
}

export default Header;