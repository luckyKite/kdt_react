import React from 'react';

function Footer() {
  return ( 
    <footer id="footer"> 
				<div className="footer_wrap ">
					<div className="footer_menus">
						<ul className="footer_first_menu">
							<li className="footer_menu_ttl"><a className="en" href="#;">CUSTOMER SERVICE &amp; IDEAS<span className="footer_arrow_down"></span></a></li>
							<li><a href="/util/faq.do">자주 하는 질문</a></li>
							<li><a href="/customer/suggestionWrite.do">고객의 소리</a></li>
							<li className="footer_2depth_ttl"><a href="#">스타벅스 이용 팁<span className="footer_arrow_down"></span></a>
								<ul>
									<li><a href="/util/web_tip.do">홈페이지 이용 팁</a></li>
									<li><a href="/util/app_tip.do">애플리케이션 이용 팁</a></li>
									<li><a href="/util/partnership_card.do">제휴카드 안내</a></li>
								</ul>
							</li>
							<li><a href="/util/online_survey.do">고객 경험 설문조사</a></li> 
							
							
							<li><a href="/util/guest_eReceipt.do">비회원 전자영수증 조회</a></li>
							
						</ul>
						<ul>
							<li className="footer_menu_ttl"><a className="en" href="#;">COMPANY<span className="footer_arrow_down"></span></a></li>
							<li><a href="/footer/company/index.do">한눈에 보기</a></li>
							<li><a href="/footer/company/mission.do">스타벅스 사명</a></li>
							<li className="footer_2depth_ttl"><a href="#">스타벅스 소개<span className="footer_arrow_down"></span></a>
								<ul>
									<li><a href="/footer/company/starbucks_information.do">스타벅스 코리아</a></li> 
									<li><a href="/footer/company/starbucks_history.do">주요 연혁</a></li> 
									<li><a href="/footer/company/starbucks_story.do">스타벅스 이야기</a></li>
								</ul>
							</li>
							<li><a href="/footer/company/news_list.do">국내 뉴스룸</a></li>
							<li><a href="/footer/company/global_starbucks.do">세계의 스타벅스</a></li>
							
							<li><a href="https://news.starbucks.com" target="_blank">글로벌 뉴스룸</a></li>
							
						</ul>
						<ul>
							<li className="footer_menu_ttl"><a className="en txt_under" id="goPage" href="#;">CORPORATE SALES<span className="footer_arrow_down"></span></a></li>
							<li><a href="/footer/co_sales/index.do">단체 및 기업 구매 안내</a></li>
							<li><a href="/footer/group_order/index.do">단체 주문 배달 안내</a></li>

							
							
							
							
							
						</ul>
						<ul>
							<li className="footer_menu_ttl"><a className="en" href="#;">PARTNERSHIP<span className="footer_arrow_down"></span></a></li>
							<li><a href="/footer/partnership/new_partner.do">신규 입점 제의</a></li>
							
							<li><a href="/srm/login.do">협력 고객사 등록신청</a></li>
						</ul>
						<ul>
							<li className="footer_menu_ttl"><a className="en" href="#;">ONLINE COMMUNITY<span className="footer_arrow_down"></span></a></li>
							<li><a href="https://www.facebook.com/starbuckskorea" target="_blank">페이스북</a></li>
							<li><a href="https://twitter.com/StarbucksKorea" target="_blank">트위터</a></li>
							<li><a href="https://www.youtube.com/user/starbuckskorea" target="_blank">유튜브</a></li>
							<li><a href="https://instagram.com/starbuckskorea/" target="_blank">인스타그램</a></li>
						</ul>
						<ul>
							<li className="footer_menu_ttl"><a className="en" href="#;">RECRUIT<span className="footer_arrow_down"></span></a></li>
							<li><a href="/footer/recruit/index.do">채용 소개</a></li>
							<li><a href="http://job.shinsegae.com/recruit_info/notice/notice02_view.jsp?notino=5924" target="_blank">채용 지원하기</a></li>
						</ul>
					</div>
				</div>
				<div className="footer_util_btn">
					<ul>
						<li><a href="/">HOME</a></li>
						<li>
							<a href="javascript:$.loginLib.showLayerLogin();" className="sign_in">Sign In</a>
							<a href="javascript:$.loginLib.logout();" className="sign_out">Sign Out</a>
						</li>
						<li className="last"><a href="/mem/join1.do">Join Us</a></li>
					</ul>
				</div>
				
				<div className="footer_awards_wrap">
					<div className="footer_awards_wrap_inner">
						<div className="footer_slider_controller">
							<div className="footer_slider_controls"></div>
							<div className="footer_slider_pagers"></div>
						</div>
					</div>
				</div>
				
                
                
				<div className="dtPop ecoPop" id="msrCheckPop">
					<div className="head">
						<p className="tt"></p>
						<p id="dtPopCommonCloseBtn" className="close dtPopClose"><a href="#"></a></p> 
					</div>  
					<div id="Msr" className="dtPopInner left">
						<p>[My DT Pass]는 스타벅스 카드를<br/>
						등록한 회원만 이용 가능한 서비스입니다.<br/>
						카드를 등록하시겠어요?
						</p>
						<br/>
						<input type="hidden" id="dtsPwdchk2" />
						<input type="hidden" id="dtsPwdchk" />
					</div>
					<div className="dtPopBtn">
						<a id="dtPopPwdCheckBtnMsr" className="dtPopBtn1 confirm pwdCheckBtn" >확인</a>
						<a id="dtPopCancelBtnMsr" className="dtPopBtn2 cancel">취소</a>
						<a id="dtPopCommonBtnMsr" className="dtPopBtn2 commonBtnMsr">확인</a>
					</div>
					
				</div>
				
				<div className="dtPop ecoPop" id="msrCheckPop_rewardTumbler">
					<div className="head">
						<p className="tt">스타벅스 리워드 등록 안내</p>  
						<p id="tumblerPopCommonCloseBtn" className="close ecoPopClose"><a href="#"></a></p> 
					</div>  
					<div id="msrCheckPop_rewardTumblerContents" className="dtPopInner ecoPopDs left">
						<p>[개인컵 리워드 설정]은 스타벅스 카드를<br/>
						등록한 회원만 이용 가능한 서비스입니다.<br/>
						카드를 등록하시겠어요?</p>
						<br/>
					</div>
					<div className="dtPopBtn">
						<a id="tumblerPopConfirmBtn" className="dtPopBtn1 confirm pwdCheckBtn" >확인</a>
						<a id="tumblerPopCancelBtn" className="dtPopBtn2 cancel">취소</a>
					</div>
					
				</div>
				
				<div className="dt_pop_up_dimm"></div>
				
				
				<aside className="copyright">
					<a className="c_00b050" href="/footer/etc/privacy.do">개인정보처리방침</a>
					<a href="/footer/etc/rules_vod.do" className="mbn">영상정보처리기기 운영관리 방침</a>
					<a href="/footer/etc/rules.do">홈페이지 이용약관</a>
					<a href="/footer/etc/rules_loc.do" className="mbn">위치정보 이용약관</a>
					<a href="/footer/etc/rules_msr.do" className="mbn">스타벅스 카드 이용약관</a>
					<a href="/footer/etc/rules_non.do" className="mbn">비회원 이용약관</a>
					<span className="br">
					<a href="/footer/etc/rules_mdp.do">My DT Pass 서비스 이용약관</a></span> 
					<a href="/footer/etc/hotline.do" className="last">윤리경영 핫라인</a>
					<br/>
					<a className="btned_link" href="/footer/etc/coming_route.do">찾아오시는 길</a>
					<a className="btned_link" href="/footer/partnership/new_partner.do">신규입점제의</a>
					<a className="btned_link" href="/footer/etc/sitemap.do">사이트 맵</a><br/>
					<ul className="copy_menu">
						<li>사업자등록번호 : 201-81-21515</li>
						<li>주식회사 에스씨케이컴퍼니 대표이사 : 손정현</li> 
						<li>TEL : 1522-3232</li>
						<li>개인정보 책임자 : 이현수</li>
					</ul>
					<span className="en">ⓒ 2023 Starbucks Coffee Company. All Rights Reserved.</span>
				</aside>
				
			</footer>
  );
}

export default Footer;