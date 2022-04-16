import { Separator } from '../../separator/Separator';
import { Button } from '../../button/Button';
import { Input } from '../../input/Input';

import './login.scss'

type LoginProps = {
  setIsLogin: (is: boolean) => void;
}

export function Login(props: LoginProps) {

  function handleFormSubmit(event: any) {
    event.preventDefault();
  }

  function handleChangeForm() {
    props.setIsLogin(false);
  }

  return (
    <div className="Login flex centralized">
      <div id="login-content" className="flex">
        <form className="flex" onSubmit={handleFormSubmit}>
          <h1>Login</h1>
          <Input type="email" placeholder="Email"/>
          <Input type="password" placeholder="Password"/>
          <p className="p-sma">Forgot password?</p>
          <Button type="submit">Send</Button>
        </form>
        
        <Separator>
          or
        </Separator>
      
        <p className="p-nor txt-center">
          No account? <span id="clicked" className="txt-under txt-s-bold" onClick={handleChangeForm}>Signup</span>
        </p>
      </div>
    </div>
  );
}