import React from 'react';
import main from '../../images/main/main.png';
import notice from '../../images/main/notice.png';
import style from './Main.module.css';

function Main() {
  return (
    <div className={style.mainImg}>
      <img src={main} alt="메인이미지" className={style.main}/>
      <img src={notice} alt="메인이미지" className={style.notice}/>
    </div>

  );
}

export default Main;