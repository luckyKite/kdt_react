import React, { useEffect, useState } from 'react';
import style from './MenuList.module.css';
import menus from '../../../db/data.json';
import { Link } from 'react-router-dom';

function MenuList() {

  return (
    <div className={style.choice}>
    <h2> 음료를 선택하세요!</h2>
      <ul className={style.menuList}>
        {
          menus.menu.map( menu =>
          <li key={menu.id}>
            <Link to={`/menu-detail/${menu.id}`}>
              <img src={menu.images} alt="음료사진"/>
            </Link>
            <div>{menu.title}</div>
            <button 
              className={style.btn}
              onClick={ () => {
                alert(`${menu.title} 카트에 추가합니다.`)
              }}
            >
              카트에 담기
            </button>
          </li>
          )
        }
      </ul>
    </div>
  
  );
}

export default MenuList;