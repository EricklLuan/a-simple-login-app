
import '../modal.scss'
import './editmodal.scss'

type EditModalProps = {
  visible: boolean;
  setVisibility: (value: boolean) => void;
}

export function EditModal(props: EditModalProps) {
  if (!props.visible) return null;

  function handleCloseModal(event: any) {
    if (event.currentTarget === event.target) props.setVisibility(false);
  }

  return(
    <div className="EditModal Modal flex centralized fill-page" onClick={handleCloseModal}>
      <div className="edit-modal-content flex centrilized">
        <div className="content flex centralized">

        </div>
      </div>
    </div>
  ); 
}