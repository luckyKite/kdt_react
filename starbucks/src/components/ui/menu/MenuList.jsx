import React from 'react';
import style from './MenuList.module.css';
import { Link } from 'react-router-dom';

function MenuList({ menu }) {

  const handleAddCart = () => {
    fetch('http://localhost:3001/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        menuId: menu.id,
        userId: 1,
        qty: 1,
      })
    })
      .then(res => {
        res.json();
        if (res.ok) {
          window.alert(`카트에 추가합니다.`);
        }
      })
  }

  return (
    <li key={menu.id}>
      <Link to={`/menu-detail/${menu.id}`}>
        <img src={menu.images} alt="음료사진" />
      </Link>
      <div>{menu.title}</div>
      <button
        className={style.btn}
        onClick={handleAddCart}
      >
        카트에 담기
      </button>
    </li>
  );
}

export default MenuList;