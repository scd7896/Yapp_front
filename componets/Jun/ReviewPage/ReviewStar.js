import React from "react";
import "../../../css/Jun/reviewStar.scss";

function ReviewStar({ starNum }) {
  var Star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.8"
      height="17.966"
      viewBox="0 0 18.8 17.966"
    >
      <path
        id="패스_1703"
        data-name="패스 1703"
        d="M196.06,216.387l2.221,4.5a.883.883,0,0,0,.664.482l4.967.722a.882.882,0,0,1,.489,1.5l-3.595,3.5a.882.882,0,0,0-.254.781l.849,4.947a.882.882,0,0,1-1.28.93l-4.443-2.336a.886.886,0,0,0-.821,0l-4.443,2.336a.882.882,0,0,1-1.28-.93l.849-4.947a.881.881,0,0,0-.254-.781l-3.594-3.5a.882.882,0,0,1,.489-1.5l4.967-.722a.883.883,0,0,0,.665-.482l2.221-4.5A.882.882,0,0,1,196.06,216.387Z"
        transform="translate(-185.869 -215.895)"
        fill="#ffc900"
      />
    </svg>
  );

  console.log(Star);
  return (
    <span>
      {Star}
      {Star}
      {Star}
      {Star}
    </span>
  );
}

export default ReviewStar;
