import "../../css/Jun/enrollment_plus.scss";
import classNames from "classnames";

function Plus({ shape, toggle }) {
  return (
    <div className={classNames("center", shape)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="71"
        viewBox="0 0 34 81"
      >
        <text
          id="_"
          data-name="+"
          transform="translate(0 59)"
          fill="#b9b9b9"
          font-size="55"
          font-family="SegoeUI, Segoe UI"
          letter-spacing="-0.05em"
        >
          <tspan x="0" y="0">
            +
          </tspan>
        </text>
      </svg>
    </div>
  );
}

Plus.defaultProps = {
  size: "false"
};

export default Plus;
