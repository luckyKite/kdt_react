import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//css
import style from './HeaderTop.module.css';
//lottie
import * as animationData from '../../../lottie/Cart.json';
import Lottie from 'react-lottie';


function HeaderTop() {

  //lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  //state for search word
  const [searchWord, setSearchWord] = useState('');

  //search word chanfe handler
  const handleChange = (e) => {
    console.log(e.target.value);
    if(e.key === 'Enter') {
      console.log('Enter key pressed');
    }
    setSearchWord(e.target.value);
  }

  return ( 
    <div className={style.headerTopWrap}>
      <h1 className={style.logo}><Link to={'/'}>SSG.COM</Link></h1>
      <div className={style.search}>
        <input type="text" 
          onChange={handleChange}
          defaultValue={searchWord}
        />
      </div>
      <div className='cartIcon'>
        <Link to={'/cart'}>
        <Lottie options={defaultOptions}
          height={60}
          width={60}
        />
        </Link>
      </div>
    </div>
   );
}

export default HeaderTop;