import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { sigup } from "../../../functions/sigup"

import { Button } from "../../button/Button";
import { Input } from "../../input/Input";

import "./register.scss"

type RegisterProps = {
  setIsLogin: (is: boolean) => void;
}

export function Register(props: RegisterProps) {

  const navigate = useNavigate()

  const [ name, setName ] = useState<string>("")
  const [ email, setEmail ] = useState<string>("")
  const [ password, setPassword ] = useState<string>("")

  async function handleFormSubmit(event: any) {
    event.preventDefault();
    sigup(name, email, password).then(() => {
      navigate("/user")
    })
  }

  function handleChangeForm() {
    props.setIsLogin(true);
  }

  return(
    <div className="Register flex centralized">
      <div className="register-content flex">
        <form className="flex fill-parent" onSubmit={handleFormSubmit}>
          <h1>Register</h1>
          <Input type="text" placeholder="Name" onChange={(event: any) => setName(event.target.value)}/>
          <Input type="email" placeholder="Email" onChange={(event: any) => setEmail(event.target.value)}/>
          <Input type="password" placeholder="Password" onChange={(event: any) => setPassword(event.target.value)}/>
          <Input type="password" placeholder="Password" />
          <Button type="submit">Send</Button>
        </form>
        
        <p className="p-nor txt-center">
          Already are a user? <span id="clicked" className="txt-under txt-s-bold" onClick={handleChangeForm}>Login</span>
        </p>
      </div>
    </div>
  );
}