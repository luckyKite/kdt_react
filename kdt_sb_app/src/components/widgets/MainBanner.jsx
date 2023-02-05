import React from 'react';
import style from './MainBanner.module.css';
import { mainBanner as mainData } from '../../data/mainBanner';
import StarButton from '../ui/StarButton';

function MainBanner() {

  console.log(mainData)
  console.log(mainData.backgroundImg)

  const bannerStyle = {
    backgroundImage : `url("${mainData && mainData.backgroundImg}")`
  }

  return (  
    <section id='mainBanner'>
      <div className={style.bannerWrap} style={bannerStyle}>
        <img src={mainData.titleImg} alt={mainData.description} />
        {
          mainData.menus.map(menu=>(
            <img src={menu.imgUrl} alt={menu.titleKor} key={menu.id} />
          ))
        }
        <StarButton
          title={mainData.button.title}
          size=''
          color='sbGreen'
          link={mainData.button.link}
        />
      </div>
    </section>
  );
}

export default MainBanner;