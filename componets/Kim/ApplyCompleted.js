import React from "react";
import Router from "next/router";
import "../../css/container.scss";
import "../../css/kim/componentcss/ApplyCompleted.scss";
import { CLOSE_APPLY_MODAL } from "../../action";
import { useDispatch } from "react-redux";

const ApplyCompleted = () => {
  const dispatch = useDispatch();
  const goToMypageApply = () => {
    Router.push("/mypage/apply");
  };
  const closeModal = () => {
    dispatch({
      type: CLOSE_APPLY_MODAL
    });
  };
  return (
    <div className="container">
      <div id="apply_completed_container">
        <div id="modal_cancle_button" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 41.012 41.012"
          >
            <g
              id="그룹_1861"
              data-name="그룹 1861"
              transform="translate(-1166.994 -256.994)"
            >
              <line
                id="선_132"
                data-name="선 132"
                y2="56"
                transform="translate(1207.299 257.701) rotate(45)"
                fill="none"
                stroke="#fff"
                stroke-width="2"
              />
              <line
                id="선_133"
                data-name="선 133"
                y2="56"
                transform="translate(1207.299 297.299) rotate(135)"
                fill="none"
                stroke="#fff"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>
        <p id="apply_completed_icon">🎉</p>
        <p id="apply_completed_text1">지원완료!</p>
        <p id="apply_completed_text2">곧 팀원에게 연락이 올거에요!</p>
        <p id="apply_mypage_config" onClick={goToMypageApply}>
          지원내역 확인하기
        </p>
      </div>
    </div>
  );
};
export default ApplyCompleted;
