import { ReactNode } from "react";

import './extraelement.scss'

type ExtraElementProps = {
  src?: string;
  children?: ReactNode;
}

export function ExtraElement(props: ExtraElementProps) {
  return(
    <li className="ExtraElement">
      <button>
        <p className="p-nor">{props.children}</p>
        <img src={props.src} alt="icon" />
      </button>
    </li>
  );
}