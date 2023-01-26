import React from 'react';
import style from './HeaderBottom.module.css'

function HeaderBottom() {
  return (
    <nav className={style.gnb}>
      <ul>
        <li>홈</li>
        <li>특가</li>
        <li>랭킹</li>
        <li>SSG.TV</li>
        <li>명품관</li>
        <li>브랜드</li>
      </ul>
    </nav>
    );
}

export default HeaderBottom;