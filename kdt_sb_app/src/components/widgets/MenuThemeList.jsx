import React from 'react';

function MenuThemeList({isActive}) {
  if(!isActive) return null;
  return (  
    <div>
      <img src="https://image.istarbucks.co.kr/upload/banner/themebnr/XxHBaf_20221229085607128.jpg" alt="theme" />
    </div>
  );
}

export default MenuThemeList;