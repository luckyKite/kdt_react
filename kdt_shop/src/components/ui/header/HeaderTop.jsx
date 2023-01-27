import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//css
import style from './HeaderTop.module.css';
//lottie
import * as animationData from '../../../lottie/Cart.json';
import Lottie from 'react-lottie';

import { QtyContext } from '../../context/QtyContext';


function HeaderTop() {

  const contextData = useContext( QtyContext );
  console.log(contextData);

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
  const userId = 1;
  const [searchWord, setSearchWord] = useState('');

  useEffect( () => {
    fetch(`http://localhost:3001/carts?userId=${userId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      contextData.setCartQty(data.length)
    });
  }, [userId]);

  const handleSearch = () => {
    console.log('찾아주세요~~~', searchWord);
    fetch(`https://dummyjson.com/products/search?q=${searchWord}`)
    .then(res => res.json())
    .then(data => console.log(data));
  }

  //search word change handler
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
        <p className={style.qtyBadge}>{contextData.cartQty}</p>
      </div>
    </div>
   );
}

export default HeaderTop;