import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Main from './components/pages/Main';
import Login from './components/pages/Login';

import { RecoilRoot, useRecoilValue } from 'recoil';
import { loginState } from './components/state/LoginState';

function App() {

  const isLogin = useRecoilValue(loginState);

  return (
    <div className='App'>
      <Header />
      {
        isLogin ? <Main /> : <Login />
      }     
      
    </div>
  );
}

export default App;
