import LimitHead from "./LimitHead";
import LinkEtc from "./link/LinkEct";
import Links from "./link/Links";
import LimitSummary from "./Summary/LimitSummary";

const Body = (props) => {
  return (
    <div className="my-vr01 manage-limit-area">
      <div className="sec --gray">
        <div class="total-limit-manage">
          <LimitHead />
          <LimitSummary />
        </div>
      </div>

      <div className="sec">
        <div className="etc-limit-manage">
          <Links />
          <LinkEtc />
        </div>
      </div>
    </div>
  );
};

export default Body;
