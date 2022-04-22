import { useState } from 'react';

import { Login } from '../components/authentication/login/Login'
import { Register } from '../components/authentication/register/Register'
import { Extra } from '../components/extra/Extra';
import { ExtraElement } from '../components/extra/ExtraElement';

import creditsIcon from '../assets/notes.svg'

import '../styles/home.scss'

export function Home() {

  const [ isLogin, setIsLogin ] = useState(true);

  return(
    <div id="Home" className="fill-page flex centralized">
      { isLogin ? <Login setIsLogin={setIsLogin}/> : <Register setIsLogin={setIsLogin}/> }
      <Extra>
        <ExtraElement src={creditsIcon}>Credits</ExtraElement>
      </Extra>
    </div>
  );
}