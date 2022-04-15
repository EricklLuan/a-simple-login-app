import { ReactNode } from "react";

import "./button.scss"

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  name?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export function Button(props: ButtonProps) {
  return(
    <button type={props.type} name={props.name} onClick={props.onClick} className="Button">
      {props.children}
    </button>
  );
}
