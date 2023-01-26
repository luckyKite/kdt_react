import React from 'react';
import style from './ProductCard.module.css';
import { isRouteErrorResponse, Link } from 'react-router-dom';

function productCard({product}) {
  
  const userId = 1;

  const handleAddCart = () => {
    fetch('https://dummyjson.com/carts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: userId,
        products: [
          {
            id: product.id,
            quantity: 1,
          }
        ]
      })
    })
    .then(res => {
      res.json();
      if(res.ok) {
        window.alert('장바구니 담기');
      }
    })
    .catch(err => console.error(err));
  }

  return ( 
    <>
      <div className={style.productCard}>
          <Link to= {`/product-detail/${product.id}`}>
          <img src={product.thumbnail} alt={product.description} />
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          </Link>
          <div className={style.cartBtn} onClick={handleAddCart}>ADD CART</div>
      </div>
    </>
   );
}

export default productCard;