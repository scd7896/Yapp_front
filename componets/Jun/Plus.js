import React, { useState } from "react";
import classNames from "classnames";

import "../../css/Jun/enrollment_plus.scss";

function Plus({ shape }) {
  const [number, setNumber] = useState(1);
  const [open, setOpen] = useState(false);

  const onIncrease = () => {
    setNumber(number + 1);
    setOpen(!open);
  };

  return (
    <div className={classNames("center", shape)} onClick={onIncrease}>
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
          fontSize="55"
          fontFamily="SegoeUI, Segoe UI"
          letterSpacing="-0.05em"
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
