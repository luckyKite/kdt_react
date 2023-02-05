import React from 'react';
import { headerMenu, logoImg } from '../../data/headerMenu';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

function Header() {
  return ( 
    <header>
      <div className={style.logo}>
        <Link to='/'>
          <img src={logoImg} alt='Starbucks Korea logo' />
          <h1>Starbucks Korea</h1>
        </Link>
      </div>
      <nav className={style.headerMenu}>
        <ul>
          {
            headerMenu.map( menu => (
                menu.link !== '' ? 
                  <li key={menu.id}>
                    <Link to={menu.link}>
                      <img src={menu.icon} alt={menu.title} />
                    </Link>
                  </li>
                : 
                  <li key={menu.id}>
                    <img src={menu.icon} alt={menu.title} />
                  </li>
            ))
          }
        </ul>
      </nav>
    </header>
   );
}

export default Header;