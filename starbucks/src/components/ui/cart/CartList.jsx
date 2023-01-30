import React, { useState, useEffect, useContext } from 'react';
import style from './CartList.module.css';
import { QtyContext } from '../../context/QtyContext';

function CartList({cartData}) {
  
  const contextData = useContext(QtyContext);
  const [cartObj, setCartObj] = useState(
    {
      id: cartData.id,
      userId: cartData.userId,
      menuId: cartData.menuId,
      menuImg: "",
      menuName: "",
      menuPrice: 0,
      qty: cartData.qty,
    }
  )
  
  const url = `http://localhost:3001/menu/${cartData.menuId}`;
  
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => {
        setCartObj({ 
        ...cartObj, 
        menuImg: data.images,
        menuName: data.title,
        menuPrice: data.price
      })
    })
  },[url])
  
  return (
   <>     
    <div className={style.cartList}>
      <img src={cartObj.menuImg} alt={cartObj.menuName} />
      <div className={style.menuInfo}>
        <h3>{cartObj.menuName}</h3>
        <button>-</button>
        <p>수량 : {cartObj.qty}</p>
        <button>+</button>
        <p>총 금액 : {cartObj.menuPrice * cartObj.qty}원</p>
      </div>
    </div>
    </> 
  );
}

export default CartList;