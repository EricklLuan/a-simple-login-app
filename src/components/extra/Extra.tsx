import { ReactNode, useEffect, useState } from "react";
import * as CSS from "csstype"

import "./extra.scss"

type ExtraProps = {
  children?: ReactNode
}

export function Extra(props: ExtraProps) {

  
  const [ visible, setVisible ] = useState<boolean>(false);
  const [ color, setColor ] = useState<string>("transparent")
  
  const style: CSS.Properties = {
    ['WebkitRocketLauncher' as any]: 'launching',
    ['--theme-color' as any]: color,
  };

  useEffect(() => {
    if (!visible) setColor("transparent");
    else setColor("black")
  }, [visible])

  window.onclick = (event: any) => {
    if (event?.target?.parentElement !== document.getElementsByClassName("Extra")[0] ) {
      setVisible(false);
    }
  };

  return(
    <div className="Extra flex">
      
      { visible ? (
        <section id="ballon" style={style}>
          <ul id="options">
            {props.children}
          </ul>
        </section>
      ) : <></> }

      <button id="extra-button" onClick={() => setVisible(!visible)}>?</button>
    </div>
  );
}