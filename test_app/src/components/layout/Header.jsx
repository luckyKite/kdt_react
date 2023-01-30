import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loginState } from '../state/LoginState';
import { userNameState } from '../state/UserNameState';

function Header() {

  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const userName = useRecoilValue(userNameState);

  return (
    <header>
        <nav>
          <ul>
            {
              isLogin ? 
              <li><button onClick={ () => setIsLogin(false) }>로그아웃</button></li> 
              : 
              <li><button>로그인</button></li>
            }
                        
            <li>{ isLogin ? `${userName}님 어서오세요!` : "로그인 해주세요."}</li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;