import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PREV_APPLY_MODAL,
  NEXT_APPLY_MODAL,
  DEL_PORTFOLIO_MODAL,
  ADD_PORTFOLIO_MODAL,
  PROJECT_APPLY_REQUEST
} from "../../action";
import Portfolio from "./ApplyModalComponents/Portfolio";
//import { portFolios } from "../../dummydatas/dummyQuestion";
import "../../css/kim/componentcss/ApplyFirst.scss";
import "../../css/kim/componentcss/ApplySecond.scss";

const ApplySecond = ({ portfolios }) => {
  const dispatch = useDispatch();
  const { selectPortFolios, answers, position, postId } = useSelector(
    state => state.apply
  );
  const { userToken } = useSelector(state => state.user);
  const prevModal = () => {
    dispatch({
      type: PREV_APPLY_MODAL
    });
  };
  const applyFinish = () => {
    dispatch({
      type: PROJECT_APPLY_REQUEST,
      role: position,
      answers: answers,
      portfolios: selectPortFolios,
      postId: postId,
      userToken: userToken
    });
  };
  const portFolioToggle = (selected, data) => {
    if (selected) {
      dispatch({
        type: DEL_PORTFOLIO_MODAL,
        data: data
      });
    } else {
      dispatch({
        type: ADD_PORTFOLIO_MODAL,
        data: data
      });
    }
  };

  return (
    <div id="first_modal_contents_container">
      <div id="first_modal_head_container">
        <div id="first_modal_head_text_container">
          <div id="first_modal_head_icon_container">
            <p id="first_modal_head_icon">2</p>
          </div>
          <p id="first_modal_header_title">이력 뽐내기</p>
          <p id="first_modal_header_subtitle">
            어필하고 싶은 이력이 있다면 넣어주세요!
          </p>
        </div>
      </div>
      <div id="first_modal_body_container">
        <div className="modal-title">
          <span id="modal_position_selector_title">
            <span>- 내 이력에서 선택하기</span>
          </span>
        </div>

        <div className="portfolio_list">
          {portfolios.map((e, i) => {
            return (
              <Portfolio
                toggleFun={portFolioToggle}
                data={e}
                key={i}
                selected={
                  selectPortFolios.findIndex(
                    pofol => pofol.title === e.title
                  ) !== -1
                }
              />
            );
          })}
        </div>

        <div
          id="second_modal_footer_container"
          style={{ paddingBottom: "92px" }}
        >
          <div id="second_modal_prev_button" onClick={prevModal}>
            이전
          </div>
          <div id="second_modal_finish_button" onClick={applyFinish}>
            다음
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySecond;
