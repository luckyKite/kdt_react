import React from 'react';
import style from './StarTabButton.module.css';

function StarTabButton({ btnTitle = 'default' , isActive = false , isCategoryActive, setIsCategoryActive }) {
  
  console.log(btnTitle, isActive)

  const activeClass = isActive ? `${style.starTabBtn} ${style.active}` : style.starTabBtn;
  
  return ( 
    <div 
      className={activeClass}
      onClick={() => !isActive ? setIsCategoryActive(!isCategoryActive) : ""}
    >
      {btnTitle}
    </div>
   );
}

export default StarTabButton;