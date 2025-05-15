import "./modal.css";

const Modal = ({ isHidden, isHiddenCross, children, toggleDisplay }) => {
  return (
    <div className={isHidden ? "modale hidden" : "modale"}>
      {!isHiddenCross && (
        <button onClick={toggleDisplay} className="closeBtn"></button>
      )}
      {children}
    </div>
  );
};

export default Modal;
