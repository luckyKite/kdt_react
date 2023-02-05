import React from 'react';
import StarButton from '../ui/StarButton';
import Title from '../ui/Title';

import { useSetRecoilState, useRecoilState } from 'recoil';
import { logInState } from '../../state/logInState';
import { tokenState } from '../../state/tokenState';

function Login() {

  const [login, setLogin] = useRecoilState(logInState);
  const setToken = useSetRecoilState(tokenState);

  const handleLogin = (e) => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setLogin(true)
      setToken(data.token)
    })
    .catch(err => console.log(err))
  }

  return ( 
    <>
      <Title />
      {/* <button onClick={handleLogin}>login</button> */}
      <StarButton 
        title = {login ? "로그아웃" : "로그인"}
        link = {login ? "/logout" : "/login"}
        color= "sbGreen"
        handleLogin={handleLogin}
      />
    </>

   );
}

export default Login;