import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './MenuDetail.module.css';

function MenuDetail() {

  const { id } = useParams();
  const [menu, setMenu] = useState();

  useEffect( () => {
    fetch(`http://localhost:3001/menu/${id}`)
    .then(res => res.json())
    .then(data => {
      setMenu(data)
    })
    .catch(err => console.log(err))
  },[id]);


  return (
    <div>
      {
        menu &&
        <div className={style.menuWrap}>
          <h1>상세 정보</h1>
          <img src={menu.images} alt="음료사진"/>
          <h2>{menu.title}</h2>
          <h4>{menu.description}</h4>
          <h3>가격 : {menu.price}원</h3>
          <h3>사이즈 : {menu.size}</h3>
          <h3>용량 : {menu.capacity}</h3>
          <h3>칼로리 : {menu.kcal}</h3>
          <h3>카페인 : {menu.caffeine}</h3>
        </div>
      }
    </div>
  );
}

export default MenuDetail;