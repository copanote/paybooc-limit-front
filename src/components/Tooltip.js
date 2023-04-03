import React, { useState } from "react";

const Tooltip = (props) => {
  const { title, description } = props;
  const [state, setState] = useState("off"); // input box에 입력된 내용.

  const onTooltipOpenHandler = () => setState("on");
  const onTooltipCloseHandler = () => setState("off");

  return (
    <div className={state === "on" ? "tooltip on" : "tooltip"}>
      <button className="tip-open" onClick={onTooltipOpenHandler} />
      <div className="tip-cont">
        <div className="tip-desc">
          <p className="tit">{title}</p>
          <p className="txt dot">{description}</p>
        </div>
        <button className="tip-close" onClick={onTooltipCloseHandler} />
      </div>
    </div>
  );
};

Tooltip.defaultProps = {
  title: "한도변경 안내",
  description:
    "최대한도 이내 부분상향 및 하향은 BC 바로카드 고객센터(1577-3566)로 문의 해 주세요.",
};

export default Tooltip;
