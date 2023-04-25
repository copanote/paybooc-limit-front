const AgreeItem = (props) => {
  const { title, termId, isChecked, onCheckboxChangeHandler } = props;

  const onChangeHandler = () => {
    onCheckboxChangeHandler();
  };

  return (
    <>
      <div className="c-item">
        <span onClick={onChangeHandler}>
          <input type="checkbox" className="re-chk-sb" checked={isChecked} />
          <label htmlFor="agr-terms-3">{title}</label>
        </span>
        <a href={() => false} className="termsTitle-this" onClick={onChangeHandler}>
          {title}
        </a>
      </div>
    </>
  );
};

export default AgreeItem;
