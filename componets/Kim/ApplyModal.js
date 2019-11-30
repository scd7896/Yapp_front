import React, { useEffect, useState } from "react";
import Modal from "../../lib/react-awesome-modal/lib/index";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ApplyCompleted from "./ApplyCompleted";
import ApplyFirst from "./ApplyFirst";
import ApplySecond from "./ApplySecond";
import "../../css/container.scss";
import "../../css/kim/componentcss/ApplyModal.scss";
import {
  CLOSE_APPLY_MODAL,
  GET_MYPORTFOLIO_REQUEST,
  GET_QUESTION_REQUEST
} from "../../action";
import url from "../../url";

const ApplyModal = () => {
  const dispatch = useDispatch();
  var { apply } = useSelector(state => state);
  const { applyModalLevel, visible } = useSelector(state => state.button);
  const { postId } = useSelector(state => state.apply);
  const { userToken } = useSelector(state => state.user);
  const [question, setQuestion] = useState(null);
  const [portfolios, setPortfolios] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const closeModal = () => {
    dispatch({
      type: CLOSE_APPLY_MODAL
    });
  };
  const renderModal = level => {
    switch (level) {
      case 1:
        return <ApplyFirst question={question}></ApplyFirst>;
      case 2:
        return <ApplySecond portfolios={portfolios}></ApplySecond>;
    }
  };

  //========================================Question List 가져오기

  const fetchQuestion = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setQuestion(null);
      setPortfolios(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);

      if (apply.postId != null) {
        const responseUser = await axios.get(`${url}/user/portfolios`, {
          headers: {
            Authorization: `bearer ${userToken}`
          }
        });

        const response = await axios.get(
          `${url}/projects/${apply.postId}/question`
        );
        console.log("질문리스트====================");
        console.dir(response.data.interviewQuestions);
        console.dir(responseUser.data.portfolios);
        setPortfolios(responseUser.data.portfolios);
        setQuestion(response.data.interviewQuestions); // 데이터는 response.data 안에 들어있습니다.
      }
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuestion();
  }, [apply.postId]);

  if (loading) return <div>""</div>;
  if (error) return <div></div>;
  if (!question) return null;
  //===============================================================================

  return (
    <div className="container">
      <Modal visible={visible} effect="fadeInUp">
        <div id={applyModalLevel !== 3 ? "modal_container" : "modal_container"}>
          {applyModalLevel <= 2 ? (
            <div>
              <div id="apply_head_modal_blank"></div>
              <div id="apply_modal_head_container">
                <span>
                  <p id="modal_title_text">프로젝트 지원하기</p>
                </span>
                <span>
                  <img
                    id="modal_cancle_button"
                    onClick={closeModal}
                    style={applyModalLevel === 3 ? { display: "none" } : {}}
                    src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/FEF83BDA-4E98-497A-9456-B1E169BDD060.svg"
                  ></img>
                </span>
              </div>

              <div id="modal_body_container">
                <div id="StartToEnd">
                  <div className="flexColumn">
                    <span
                      className={
                        applyModalLevel >= 1
                          ? "modal_body_top_number"
                          : "modal_top_not_select"
                      }
                    >
                      <span id="flexNum">1</span>
                    </span>
                    <span
                      id="modal_section_one_question"
                      className={
                        applyModalLevel >= 1
                          ? "section_text_color_selected"
                          : "section_text_color_noselected"
                      }
                    >
                      지원자님께 질문
                    </span>
                  </div>

                  <div className="modal_body_top_line"></div>
                  <div className="flexColumn">
                    <span
                      className={
                        applyModalLevel >= 2
                          ? "modal_body_top_number"
                          : "modal_top_not_select"
                      }
                    >
                      <span id="flexNum">2</span>
                    </span>
                    <span
                      id="modal_section_second_question"
                      className={
                        applyModalLevel >= 2
                          ? "section_text_color_selected"
                          : "section_text_color_noselected"
                      }
                    >
                      이력뽐내기
                    </span>
                  </div>

                  <div className="modal_body_top_line"></div>
                  <div className="flexColumn">
                    <span
                      className={
                        applyModalLevel === 3
                          ? "modal_body_top_number"
                          : "modal_top_not_select"
                      }
                    >
                      <span id="flexNum">3</span>
                    </span>
                    <span
                      id="modal_section_third_completed"
                      className={
                        applyModalLevel === 3
                          ? "section_text_color_selected"
                          : "section_text_color_noselected"
                      }
                    >
                      지원완료
                    </span>
                  </div>
                </div>

                <div>{renderModal(applyModalLevel)}</div>
              </div>
            </div>
          ) : (
            <ApplyCompleted />
          )}
          <div id="apply_head_modal_blank"></div>
        </div>
      </Modal>
    </div>
  );
};

export default ApplyModal;
