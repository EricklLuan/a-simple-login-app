import { ReactNode } from "react";

import "./button.scss"

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  name?: string;
  width?: number;
  height?: number;
  deny?: boolean;
  onClick?: (event?: any) => void;
  children?: ReactNode;
}

export function Button(props: ButtonProps) {
  return(
    <button type={props.type} name={props.name} onClick={props.onClick} className="Button"
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        background: !props.deny ? "black" : "#252525"
      }}
    >
      {props.children}
    </button>
  );
}
