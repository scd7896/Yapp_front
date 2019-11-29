import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectBox from "../Jun/SelectBox";
import ModalInput from "../Jun/ModalInput";
import Question from "./ApplyModalComponents/Question";
import "../../css/kim/componentcss/ApplyFirst.scss";
import "react-dropdown/style.css";
import { SET_APPLYQNA_DATA, NEXT_APPLY_MODAL } from "../../action";

const dummyqeustions = [
  {
    sn: 0,
    content: "공통질문입니다~!"
  },
  {
    sn: 0,
    content: "공통질문2입니다~!"
  },
  {
    sn: 1,
    content: "기획자 질문입니다~!"
  },
  {
    sn: 1,
    content: "기획자 질문2입니다~!"
  },
  {
    sn: 2,
    content: "개발자 질문입니다~!"
  },
  {
    sn: 4,
    content: "디자이너 질문입니다~!"
  }
];
const ApplyFirst = ({ question }) => {
  const dispatch = useDispatch();
  const { position, answers } = useSelector(state => state.apply);

  const [selectPosition, setSelectPosition] = useState("");
  const [inputs, setInputs] = useState({
    job: {
      id: 0,
      text: null
    }
  });
  const { job } = inputs;

  const positionChange = e => {
    const list = document.querySelector("#first_modal_qna_container");
    const length = qeustion.filter(e => e.position === selectPosition).length;
    for (let i = 0; i < length; i++) {
      const answer = list.childNodes[i].querySelector(
        "#qustion_to_answer_input"
      );
      answer.value = "";
    }

    setSelectPosition(e.value);
    dispatch({
      type: SET_APPLYQNA_DATA,
      position: e.value,
      answers: []
    });
  };
  const nextModal = e => {
    dispatch({
      type: NEXT_APPLY_MODAL
    });
    //listTest();
  };
  // const listTest = () => {
  //   const list = document.querySelector("#first_modal_qna_container");
  //   const length = qeustion.filter(e => e.position === selectPosition).length;
  //   const writeAnswers = [];
  //   for (let i = 0; i < length; i++) {
  //     const answer = list.childNodes[i].querySelector(
  //       "#qustion_to_answer_input"
  //     ).value;
  //     writeAnswers.push(answer);
  //   }
  //   dispatch({
  //     type: SET_APPLYQNA_DATA,
  //     position: selectPosition,
  //     answers: writeAnswers
  //   });
  // };

  const onClick = e => {
    const { name, value } = e;
    setInputs({
      ...inputs,
      [name]: { id: value.id, text: value.text }
    });
  };

  let count = 1;

  const [answerText, setAnswerText] = useState("답변을 입력하세요");

  /*e : 이벤트 객체 */
  const onChange = e => {
    setAnswerText(e.target.placeholder);
    /*e.target : 이벤트 객체가 일어남 DOM  */
    /*e.target.value : 이벤트 객체가 일어남 DOM의 값들  */
  };

  return (
    <div id="first_modal_contents_container">
      <div id="first_modal_head_container">
        <div id="first_modal_head_text_container">
          <div id="first_modal_head_icon_container">
            <p id="first_modal_head_icon">1</p>
          </div>
          <p id="first_modal_header_title">지원자님께 질문!</p>
          <p id="first_modal_header_subtitle">( * 필수답변 질문입니다.)</p>
        </div>
      </div>
      <div id="first_modal_body_container">
        <div className="modal-title">
          <span id="modal_position_selector_title">
            <span>지원</span>
            <span>직군</span>
          </span>
          <span id="modal_most_select_icon">*</span>
        </div>

        <SelectBox
          name="job"
          value={job.text}
          type="full"
          placeholder="선택하세요"
          items={[
            { id: 1, text: "기획자" },
            { id: 2, text: "개발자" },
            { id: 4, text: "디자이너" }
          ]}
          inputs={inputs}
          onClick={onClick}
        />

        <div className="questionList">
          <ul>
            {question
              .filter(el => {
                return el.sn === 0 || el.sn === job.id;
              })
              .map(user => (
                <>
                  <li className="question_container">
                    <span id="questionQ">Q</span>
                    <span id="questionNum">{count++}</span>
                    <span id="questionContent">{user.content}</span>
                  </li>
                  {/* {<ModalInput />} */}
                  <input name={count} placeholder={answerText} />
                </>
              ))}
          </ul>
        </div>

        <div style={{ paddingBottom: "92px" }}>
          <div id="apply_modal_next_first_button" onClick={nextModal}>
            다음
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyFirst;
