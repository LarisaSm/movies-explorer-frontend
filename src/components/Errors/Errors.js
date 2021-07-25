import './errors.css'

import img_no from "../../images/infoToolTip_no.png";
import img_ok from "../../images/infoToolTip_ok.png"


function Errors({ isOpen, onClose, errorMessage, isShow, isOk}) {

function handleClose (evt) {
  evt.preventDefault();
  onClose();
}
return (
  <div className={`infoToolTip ${isOpen && isShow && "infoToolTip_opened"}`}>
    <div className="infoToolTip__container">
      <img
        className="infoToolTip__img"
        src={isOk ? img_ok : img_no}
        alt=""
      ></img>
      <h2 className="infoToolTip__text">
        {errorMessage}
      </h2>
      <button
        className="infoToolTip__close"
        type="button"
        onClick={e => handleClose(e)}
      ></button>
    </div>
  </div>
);
}
export default Errors;
