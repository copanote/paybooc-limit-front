import React, { useState } from 'react';

const Tooltip = (props) => {
  const { title, desc } = props;
  const [state, setState] = useState('off'); // input box에 입력된 내용.

  const onTooltipOpenHandler = () => setState('on');
  const onTooltipCloseHandler = () => setState('off');

  return (
    <div className={state === 'on' ? 'tooltip on' : 'tooltip'}>
      <button className="tip-open" onClick={onTooltipOpenHandler} />
      <div className="tip-cont">
        <div className="tip-desc">
          <p className="tit">{props.title}</p>
          <p className="txt dot">{props.desc}</p>
        </div>
        <button className="tip-close" onClick={onTooltipCloseHandler} />
      </div>
    </div>
  );
};

Tooltip.defaultProps = {
  title: 'Title',
  desc: 'Descriptions',
};

export default Tooltip;
