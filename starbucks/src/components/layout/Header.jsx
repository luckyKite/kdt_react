import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import style from './Header.module.css';

function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo}>        
        <Link to={'/main'}>
          <img src={logo} alt="로고이미지" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to={'/menu'} className={style.link}>Menu</Link></li>
          <li><Link to={'/cart'} className={style.link}>Cart</Link></li>
          <li><Link to={'/story'} className={style.link}>Story</Link></li>
        </ul>
      </nav>
    </div>

  ); 
}

export default Header;