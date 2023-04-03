const DetailItem = (props) => {
  const { title, amount, unit, isRemain } = props;

  return (
    <div className={isRemain ? 'total' : ''}>
      <dt>{title}</dt>
      <dd>
        <span className="amount">
          {amount}
          <span className="unit">{unit}</span>
        </span>
      </dd>
    </div>
  );
};

DetailItem.defaultProps = {
  title: '',
  amount: '',
  unit: '원',
  isRemain: false,
};

export default DetailItem;
