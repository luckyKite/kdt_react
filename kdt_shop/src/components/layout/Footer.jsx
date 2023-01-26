import React from 'react';
import { Link } from 'react-router-dom';
import { footerMenu } from '../../data/footerMenu';
import style from './Footer.module.css';

function Footer() {
  return (
    <footer className={style.myfooter}>
      <nav>
        <ul>
          {
            footerMenu.map( menu => (
              <li key={menu.id}>
                <Link to={menu.link}>
                  <img src={menu.icon} />
                  <p>{menu.name}</p>
                </Link>
              </li>
            ))
          }      
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;