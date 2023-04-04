const ModalMask = (props) => {
  const { isVisible } = props;
  return <div className="lpop-mask" style={isVisible ? { display: 'block' } : { display: 'none' }}></div>;
};

export default ModalMask;
