import './errors.css'

import img_no from "../../images/infoToolTip_no.png";

function Errors({ isOpen, onClose, errorMessage, isShow}) {

function handleClose (evt) {
  evt.preventDefault();
  onClose();
}
return (
  <div className={`infoToolTip ${isOpen && isShow && "infoToolTip_opened"}`}>
    <div className="infoToolTip__container">
      <img
        className="infoToolTip__img"
        src={img_no}
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
