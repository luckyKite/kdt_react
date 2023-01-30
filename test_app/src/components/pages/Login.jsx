import React, { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { loginState } from '../state/LoginState';
import { userNameState } from '../state/UserNameState';


function Login() {

  const setIsLogin = useSetRecoilState(loginState);
  const setUserName = useSetRecoilState(userNameState);
  const userNameRef = useRef('');

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLogin(true);
    setUserName(userNameRef.current.value);
  }

  useEffect( () => {
    userNameRef.current.focus();
  })

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" ref={userNameRef} placeholder='input your name' />
        <input />
        <button type="submit">로그인</button>
      </form>
    </div>

  );
}

export default Login;