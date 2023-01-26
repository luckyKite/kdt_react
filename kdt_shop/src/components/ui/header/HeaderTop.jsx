import React, { useState } from 'react';
import Lottie from 'react-lottie';
import style from './HeaderTop.module.css';
import * as animationData from '../../../lottie/Cart.json';

function HeaderTop() {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [searchWord, setSearchWord] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchWord(e.target.value);
  }

  return ( 
    <div className={style.headerTopWrap}>
      <h1 className={style.logo}>SSG.COM</h1>
      <form className={style.search} onSubmit={handleSubmit}>
        <input type="text" 
          onChange={handleChange}
          defaultValue={searchWord}
        />
      </form>
      <div className='cartIcon'>
        <Lottie options={defaultOptions}
          height={60}
          width={60}
        />
      </div>
    </div>
   );
}

export default HeaderTop;