import React from "react";
import ReviewInfo from "./ReviewInfo";
import ReviewStar from "./ReviewStar";
import "../../../css/Jun/reviewCard.scss";

function ReviewCard() {
  return (
    <div className="reviewCard">
      <div className="reviewCard-banner"></div>
      <div className="review_contents">
        <div className="review_title">식당웨이팅 관리</div>
        <div className="review_info">
          <ReviewInfo view="213" like="421" />
        </div>
        <div className="review_satisfaction">
          프로젝트 만족도 <ReviewStar starNum={4} />
        </div>
        <div className="review_people">------</div>
      </div>
    </div>
  );
}

export default ReviewCard;
