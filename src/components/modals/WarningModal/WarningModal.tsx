import { Button } from "../../button/Button"

import warningIcon from "../../../assets/warning.svg"

import '../modal.scss'
import './warningmodal.scss'

type WarningModalProps = {
  message?: string;
  visible: boolean;
  onConfrim?: () => void;
  setVisibility: (value: boolean) => void;
}

export function WarningModal(props: WarningModalProps) {
  if (!props.visible) return null;
  
  function handleCloseModal(event: any) {
    if (event.currentTarget === event.target) props.setVisibility(false);
  }

  return(
    <div className="WarningModal Modal flex centralized fill-page" onClick={handleCloseModal}>
      <div className="warning-modal-content flex centralized">
        <div id="content" className="flex centralized">
          <img src={warningIcon} alt="warning" />
          <h1>Warning!</h1>
          <p className="p-nor txt-center">{props.message}</p>
          <div id="modal-buttons" className="flex centralized">
            <Button height={32} deny onClick={handleCloseModal}>No</Button>
            <Button height={32} onClick={props.onConfrim}>Yes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}