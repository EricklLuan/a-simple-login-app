import { ReactNode } from "react";

import './extraelement.scss'

type ExtraElementProps = {
  src?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export function ExtraElement(props: ExtraElementProps) {
  return(
    <li className="ExtraElement">
      <button onClick={props.onClick}>
        <p className="p-nor">{props.children}</p>
        <img src={props.src} alt="icon" />
      </button>
    </li>
  );
}