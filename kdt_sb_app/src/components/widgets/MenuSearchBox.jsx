import React, { useState } from 'react';
import { useEffect } from 'react';
import StarTabButton from '../ui/StarTabButton';
import style from './MenuSearchBox.module.css';
import MenuCategoryList from './MenuCategoryList';
import MenuThemeList from './MenuThemeList';

function MenuSearchBox() {

  const [isCategoryActive, setIsCategoryActive] = useState(true);
  const [isView, setIsView] = useState(true);

  // const viewStyle = isView ? "block" : "none";
  const activeClass = !isView ? `${style.searchHeaderIcon} ${style.down}` : style.searchHeaderIcon;
  const iConImgUrl = 'https://image.istarbucks.co.kr/common/img/menu/list_up_btn.png'

  const handleView = () => {
    setIsView(!isView);
  }

  useEffect(() => {
    console.log(isCategoryActive);
  },[isCategoryActive])

  return ( 
    <div className={style.searchBox}>
      <div className={style.searchHeader}>
        <h3>분류보기</h3>
        <div className={activeClass} onClick={handleView}>
          <img src={iConImgUrl} alt="up" />
        </div>
      </div>
      <div className={ isView ? style.searchBody : style.searchBodyNone}>
        <div className={style.searchCategory}>
          <StarTabButton 
            btnTitle="카테고리" 
            isCategoryActive={isCategoryActive}
            setIsCategoryActive={setIsCategoryActive}
            isActive = {isCategoryActive}
          />
          <StarTabButton 
            btnTitle="테마" 
            isCategoryActive={isCategoryActive}
            setIsCategoryActive={setIsCategoryActive}
            isActive = {!isCategoryActive}
          />
        </div>
        <MenuCategoryList 
          isActive = {isCategoryActive}
        />
        <MenuThemeList 
          isActive = {!isCategoryActive}
        />
      </div>
    </div>
   );
}

export default MenuSearchBox;