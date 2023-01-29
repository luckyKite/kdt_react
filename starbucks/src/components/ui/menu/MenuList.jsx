import React, { useEffect, useState } from 'react';
import style from './MenuList.module.css';
import menus from '../../../db/data.json';

function MenuList() {

  return (
    <div className={style.choice}>
    <h2> 음료를 선택하세요!</h2>
      <ul className={style.menuList}>
        {
          menus.menu.map( menu =>
          <li key={menu.id}>
            <img src={menu.images} alt="음료사진"/>
            <div>{menu.title}</div>
          </li>
          )
        }
      </ul>
    </div>
  
  );
}

export default MenuList;