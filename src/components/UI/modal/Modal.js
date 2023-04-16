import reactDom from 'react-dom';

const Backdrop = (props) => {
  return <div className="lpop-mask" style={{ display: 'block' }} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return <>{props.children}</>;
};

/*
 backdrop과 modaloverlay가 root div  맨 아래 배치되어야 정상적으로 화면이 렌더링 됨.
 */

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
