const AgreeItem = (props) => {
  const { title, termId } = props;

  return (
    <>
      <div className="c-item">
        <span>
          <input type="checkbox" className="re-chk-sb" id="agr-terms-3" />
          <label for="agr-terms-3">{title}</label>
        </span>
        <a href="javascript:void(0)" className="termsTitle-this">
          {title}
        </a>
      </div>
      {/* <TermsModal /> */}
    </>
  );
};

export default AgreeItem;
