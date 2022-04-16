import { ReactNode } from "react";

import "./separator.scss"

type SeparatorProps = {
  children?: ReactNode;
}

export function Separator(props: SeparatorProps) {
  return(
    <span className="Separator flex p-sma" >
      {props.children}
    </span>
  );
}
