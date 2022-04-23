import icon from '../../../assets/unnamed.png'
import githubIcon from '../../../assets/github.svg'
import twitterIcon from '../../../assets/twitter.svg'

import './creditmodal.scss'
import '../modal.scss'

type ModalProps = {
  visible: boolean;
  setVisibility: (option: boolean) => void;
}

export function CreditModal(props: ModalProps) {
  if (!props.visible) return null;

  function handleCloseModal(event: any) {
    if (event.currentTarget === event.target) props.setVisibility(false)
  }

  return( 
    <div className="CreditModal Modal fill-page flex centralized" onClick={handleCloseModal}>
      <div className="credit-modal-content modal-content flex centralized">
        <img src={icon} alt="my-icon" />
        <h3>Erick Luan</h3>
        <div id="socials-medias-links" className="flex centralized">
          <a target="_blank" href='https://github.com/EricklLuan' rel="noreferrer" className="social-media-link flex centralized">
            <img src={githubIcon} alt="github-icon" />
          </a>
          <a target="_blank" href='https://twitter.com/EricklLuan' rel="noreferrer" className="social-media-link flex centralized">
            <img src={twitterIcon} alt="twitter-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}