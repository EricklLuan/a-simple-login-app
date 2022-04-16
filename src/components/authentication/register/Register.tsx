import { Button } from "../../button/Button";
import { Input } from "../../input/Input";
import { Separator } from "../../separator/Separator";

import "./register.scss"

type RegisterProps = {
  setIsLogin: (is: boolean) => void;
}

export function Register(props: RegisterProps) {

  function handleFormSubmit(event: any) {
    event.preventDefault();
  }

  function handleChangeForm() {
    props.setIsLogin(true);
  }

  return(
    <div className="Register flex centralized">
      <div className="register-content flex">
        <form className="flex fill-parent" onSubmit={handleFormSubmit}>
          <h1>Register</h1>
          <Input type="text" placeholder="Name"/>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password"/>
          <Input type="password" placeholder="Password" />
          <Button type="submit">Send</Button>
        </form>

        <Separator>
          or
        </Separator>

        <p className="p-nor txt-center">
          Already are a user? <span id="clicked" className="txt-under txt-s-bold" onClick={handleChangeForm}>Login</span>
        </p>
      </div>
    </div>
  );
}