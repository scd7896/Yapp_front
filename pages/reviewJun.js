import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Keyword from "../componets/Kim/Keyword";
import BestProject from "../componets/Jun/ReviewPage/BestProject";
import ReviewCard from "../componets/Jun/ReviewPage/ReviewCard";
import { keyword } from "../dummydatas/dummyKeywords";
import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "../css//Jun/AwsSliderStyles.scss";

import {
  SET_SELECTED_PAGES,
  CLEAR_SELECTED_KYEWORD,
  OPEN_APPLY_MODAL
} from "../action";

import "../css/container.scss";
import "../css/Jun/review.scss";

const review = () => {
  const dispatch = useDispatch();

  const { selects } = useSelector(state => state.button);

  const openModal = () => {
    dispatch({
      type: OPEN_APPLY_MODAL
    });
  };

  const [cardListDatas, setCardListDatas] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 12; i++) {
      arr.push(0);
    }
    setCardListDatas(arr);
  }, []);

  return (
    <>
      <div className="header-container">
        <div className="container">
          <div id="review_title">
            <h5>베스트 프로젝트</h5>
          </div>
          {/* <AwesomeSlider cssModule={AwsSliderStyles}>
            <div data-src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/B57E5EE6-9C76-4723-9D0F-F1EFE29CABC6.png" />
            <div data-src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/B57E5EE6-9C76-4723-9D0F-F1EFE29CABC6.png" />
            <div data-src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/B57E5EE6-9C76-4723-9D0F-F1EFE29CABC6.png" />
          </AwesomeSlider> */}

          <BestProject></BestProject>
          <div className="recommend_tag">
            <p>추천태그</p>
            {keyword.map((e, i) => {
              const isSelected =
                selects.findIndex(el => el === e.name) === -1 ? false : true;
              return (
                <Keyword data={e} index={i} isSelected={isSelected} key={i} />
              );
            })}
          </div>
        </div>
      </div>
      <div className="contents-container">
        <div className="container">
          <div id="review_title">
            <h5>프로젝트 후기</h5>
            <button>+ 프로젝트 후기 올리기</button>
          </div>
          <div className="review_list">
            {cardListDatas
              ? cardListDatas.map((e, i) => {
                  return <ReviewCard key={i} />;
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};
review.getInitialProps = async context => {
  context.store.dispatch({
    type: SET_SELECTED_PAGES,
    data: "review"
  });

  return {};
};
export default review;
