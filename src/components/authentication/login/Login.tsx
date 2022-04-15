import { Button } from '../../button/Button';
import { Input } from '../../input/Input';

import './login.scss'

export function Login() {
  return (
    <div className="Login flex centralized">
      <form id="login-content" className="flex">
        <h1>Login</h1>
        <Input type="email" placeholder="Email"/>
        <Input type="password" placeholder="Password"/>
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}