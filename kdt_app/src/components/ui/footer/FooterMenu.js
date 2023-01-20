import React from 'react';

function FooterMenu() {
  return ( 
    <ul>
      <li className="footer_menu_ttl"><a className="en" href="#;">COMPANY<span className="footer_arrow_down"></span></a></li>
      <li><a href="/footer/company/index.do">한눈에 보기</a></li>
      <li><a href="/footer/company/mission.do">스타벅스 사명</a></li>
      <li className="footer_2depth_ttl"><a href="#">스타벅스 소개<span className="footer_arrow_down"></span></a></li>
      <li><a href="/footer/company/news_list.do">국내 뉴스룸</a></li>
      <li><a href="/footer/company/global_starbucks.do">세계의 스타벅스</a></li>
      <li><a href="https://news.starbucks.com" target="_blank">글로벌 뉴스룸</a></li>
    </ul>
  );
}

export default FooterMenu;