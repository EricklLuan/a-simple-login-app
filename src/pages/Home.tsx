import { Login } from '../components/authentication/login/Login'

import '../styles/home.scss'

export function Home() {
  return(
    <div id="Home" className="fill-page flex centralized">
      <Login />      
    </div>
  );
}