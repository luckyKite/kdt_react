import React from 'react';
import MenuList from '../ui/menu/MenuList';
import style from './Menu.module.css';

function Menu() {
  return (
    <div className={style.drink}>
      <h1>음료</h1>
      <MenuList />
    </div>
  );
}

export default Menu;