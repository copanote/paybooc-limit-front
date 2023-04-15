import reactDom from 'react-dom';

const Backdrop = (props) => {
  return <div className="lpop-mask" style={{ display: 'block' }} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return <>{props.children}</>;
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {/* {reactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)} */}

      <Backdrop onClose={props.onClose} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  );
};

export default Modal;
