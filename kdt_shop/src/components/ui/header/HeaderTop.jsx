import React from 'react';
import styles from './HeaderTop.module.css'

function HeaderTop() {
  return (
    <div className={styles.headerTopWrap}>
      <h1 className={styles.logo}>SSG.COM</h1>
      <div className='search'>
        <input type="text" placeholder='Search' />
      </div>
      <div className='cartIcon'>
        장바구니 아이콘
      </div>
    </div>
    );
}

export default HeaderTop;