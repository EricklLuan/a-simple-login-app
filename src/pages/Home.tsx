import { useState } from 'react';

import { Login } from '../components/authentication/login/Login'
import { Register } from '../components/authentication/register/Register'
import { Extra } from '../components/extra/Extra';
import { ExtraElement } from '../components/extra/ExtraElement';

import { CreditModal } from '../components/modals/CreditModal/CreditModal'

import creditsIcon from '../assets/notes.svg'

import '../styles/home.scss'

export function Home() {

  const [ isLogin, setIsLogin ] = useState(true);
  const [ creditModalIsVisible, setCreditModalVisibility] = useState<boolean>(false);

  return(
    <>
      <div id="Home" className="fill-page flex centralized">
        { isLogin ? <Login setIsLogin={setIsLogin}/> : <Register setIsLogin={setIsLogin}/> }
        <Extra>
          <ExtraElement src={creditsIcon} onClick={() => setCreditModalVisibility(true)}>Credits</ExtraElement>
        </Extra>
      </div>

      <CreditModal visible={creditModalIsVisible} setVisibility={setCreditModalVisibility}/>
    </>
  );
}