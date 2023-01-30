import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartList from '../ui/cart/CartList';
import  style from './Cart.module.css';

function Cart() {

  const userId = 1;
  const [cartDatas, setCartDatas] = useState();

  useEffect( () => {
    fetch(`http://localhost:3001/cart?userId=${userId}`)
    .then(res => res.json())
    .then(data => {
      setCartDatas(data)
    })
  },[userId])

  return (
    <div className={style.cartListMain}>
      <h1>카트 목록</h1> 
      {
        cartDatas && cartDatas.map (cartData=> (
          <CartList
            key={cartData.id}
            cartData={cartData}
          />
        ))
      }
    </div>

  );
}

export default Cart;