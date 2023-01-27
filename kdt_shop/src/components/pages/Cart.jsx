import React, { useEffect, useState } from 'react';

function Cart() {

  const userId = 1;
  const [cartDatas, setCartDatas] = useState();

  useEffect( () => {
    fetch(`http://localhost:3001/carts?userId=${userId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
  },[]);


  return (
    <div>
      <div className='cartListCard'>
        <img src="" alt="" />
        <div>
          <h3>상품명</h3>
          <p>price</p>
          <div className='qtyHandler'>
            <button></button>
            <p>1</p>
            <button>+</button>
          </div>
          <p>total price</p>
        </div>
        <div>
          <button>삭제</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;