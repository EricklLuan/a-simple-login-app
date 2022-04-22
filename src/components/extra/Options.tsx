import { ReactNode } from "react";

import './options.scss'

type OptionsProps = {
  src?: string;
  children?: ReactNode;
}

export function Options(props: OptionsProps) {
  return(
    <li className="Options">
      <button>
        <img src={props.src} alt="icon" />
        <p className="p-nor">{props.children}</p>
      </button>
    </li>
  );
}