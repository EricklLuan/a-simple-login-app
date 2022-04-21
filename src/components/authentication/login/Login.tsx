import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { sigin } from "../../../functions/sigin"
import { auth } from '../../../services/firebase';

import { Button } from '../../button/Button';
import { Input } from '../../input/Input';

import './login.scss'

type LoginProps = {
  setIsLogin: (is: boolean) => void;
}

export function Login(props: LoginProps) {

  const navigate = useNavigate();

  const user = auth.currentUser;
  const [ email, setEmail ] = useState<string>("")
  const [ password, setPassword ] = useState<string>("")
  
  async function handleFormSubmit(event: any) {
    event.preventDefault();
    await sigin(email, password)
    user?.reload();
    
    if (user) navigate("/user");  
  }
  
  function handleChangeForm() {
    props.setIsLogin(false);
  }

  return (
    <div className="Login flex centralized">
      <div id="login-content" className="flex">
        <form className="flex" onSubmit={handleFormSubmit}>
          <h1>Login</h1>
          <Input type="email" placeholder="Email" onChange={(event: any) => setEmail(event.target.value)}/>
          <Input type="password" placeholder="Password" onChange={(event: any) => setPassword(event.target.value)}/>
          <p className="p-sma">Forgot password?</p>
          <Button type="submit">Send</Button>
        </form>
      
        <p id="bottom-txt" className="p-nor txt-center">
          No account? <span id="clicked" className="txt-under txt-s-bold" onClick={handleChangeForm}>Signup</span>
        </p>
      </div>
    </div>
  );
}