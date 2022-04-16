import { useState } from 'react';

import { Login } from '../components/authentication/login/Login'
import { Register } from '../components/authentication/register/Register'

import '../styles/home.scss'

export function Home() {

  const [ isLogin, setIsLogin ] = useState(true);

  return(
    <div id="Home" className="fill-page flex centralized">
      { isLogin ? <Login setIsLogin={setIsLogin}/> : <Register setIsLogin={setIsLogin}/> }
    </div>
  );
}