import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "react-dropdown";
import SelectBox from "../Jun/SelectBox";
import Question from "./ApplyModalComponents/Question";
import { qeustions } from "../../dummydatas/dummyQuestion";
import "../../css/kim/componentcss/ApplyFirst.scss";
import "react-dropdown/style.css";
import { SET_APPLYQNA_DATA, NEXT_APPLY_MODAL } from "../../action";


const dummyqeustions = [
  {
    sn: 0,
    content: '공통질문입니다~!'
  },
  {
    sn: 1,
    content: '기획자 질문입니다~!'
  },
  {
    sn: 2,
    content: '개발자 질문입니다~!'
  },
  {
    sn: 4,
    content: '디자이너 질문입니다~!'
  }
];
const ApplyFirst = ({ question }) => {
  console.log(question[1].sn);

  const dispatch = useDispatch();
  const { position, answers } = useSelector(state => state.apply);

  const [selectPosition, setSelectPosition] = useState("");

  const positionChange = e => {
    const list = document.querySelector("#first_modal_qna_container");
    const length = qeustions.filter(e => e.position === selectPosition).length;
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
  const nextModal = () => {
    dispatch({
      type: NEXT_APPLY_MODAL
    });
    listTest();
  };
  const listTest = () => {
    const list = document.querySelector("#first_modal_qna_container");
    const length = qeustions.filter(e => e.position === selectPosition).length;
    const writeAnswers = [];
    for (let i = 0; i < length; i++) {
      const answer = list.childNodes[i].querySelector(
        "#qustion_to_answer_input"
      ).value;
      writeAnswers.push(answer);
    }
    dispatch({
      type: SET_APPLYQNA_DATA,
      position: selectPosition,
      answers: writeAnswers
    });
  };

  const [inputs, setInputs] = useState({
    job: {
      id: 0,
      text: null
    }
  });

  const { job } = inputs;

  const onClick = e => {
    const { name, value } = e;
    setInputs({
      ...inputs,
      [name]: { id: value.id, text: value.text }
    });
  };

  return (
    <div id="first_modal_contents_container">
      <div id="first_modal_head_container">
        <div>
          <img
            width="100%"
            src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/7CDB8BF0-8F5E-4284-B01A-B4AC1CBF83BA.svg"
          />
        </div>
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

        <ul>
          {dummyqeustions
            .filter((el) => {
              return (el.sn === 0 || el.sn === job.id)
            })
            .map(user => (
              <li>
                {user.content}
              </li>
            ))}
        </ul>



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