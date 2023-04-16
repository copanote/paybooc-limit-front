const ModalHeader = (props) => {
  const { onModalClose } = props;

  return (
    <header className="lpop-header no-title no-line">
      <h1 className="lpop-tit">&nbsp;</h1>
      <button type="button" className="btn-close" onClick={onModalClose}>
        닫기
      </button>
    </header>
  );
};

export default ModalHeader;
