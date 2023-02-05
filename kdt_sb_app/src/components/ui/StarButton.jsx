import React from 'react';
import { Link } from 'react-router-dom';
import style from './StarButton.module.css';

function StarButton({title = 'default' , size = 'small', color = 'sbGreen', link = '#', handleLogin}) {
  const sizeClass = size === 'big' ? style.big : style.small;
  const colorClass = color === 'sbGreen' ? style.sbGreen : style.sbWhite;

  return ( 
    <div className={`${style.starBtn} ${sizeClass} ${colorClass}`} onClick={handleLogin}>
      <Link to={link}>{title}</Link>
    </div>
   );
}

export default StarButton;