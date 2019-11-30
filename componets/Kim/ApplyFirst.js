import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectBox from "../Jun/SelectBox";
import ModalInput from "../Jun/ModalInput";
import Question from "./ApplyModalComponents/Question";
import "../../css/kim/componentcss/ApplyFirst.scss";
import "react-dropdown/style.css";
import { SET_APPLYQNA_DATA, NEXT_APPLY_MODAL, SET_APPLY_JOB } from "../../action";


const ApplyFirst = ({ question }) => {
  const dispatch = useDispatch();
  const { position, answers, selectPosition } = useSelector(state => state.apply);

  const [inputs, setInputs] = useState({
    job: {
      id: 0,
      text: null
    }
  });
  const { job } = inputs;
  const nextModal = e => {
    dispatch({
      type: NEXT_APPLY_MODAL
    });
    
  };

  const onClick = e => {
    const { name, value } = e;
    setInputs({
      ...inputs,
      [name]: { id: value.id, text: value.text }
    });
    const questionsLength = question.filter(el=> el.role==0||el.role == value.id).length
    dispatch({
      type : SET_APPLY_JOB,
      data : value.id,
      arrLength : questionsLength
    })
  };

  let count = 1;

  const [answerText, setAnswerText] = useState("답변을 입력하세요");
  const setText = index => e=>{
    if(position ==0){
      dispatch({
        type : SET_APPLYQNA_DATA,
        index : index,
        data : ""
      })
      return;
    }
    dispatch({
      type : SET_APPLYQNA_DATA,
      index : index,
      data : e.target.value
    })
  }

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
          ].filter((el)=>{
            return (parseInt(selectPosition) & el.id) !== 0
          })}
          inputs={inputs}
          onClick={onClick}
        />

        <div className="questionList">
          <ul>
            {question
              .filter(el => {
                return el.role == 0 || el.role == job.id;
              })
              .map((user,i) => (
                <>
                  <li className="question_container">
                    <span id="questionQ">Q</span>
                    <span id="questionNum">{count++}</span>
                    <span id="questionContent">{user.content}</span>
                  </li>
                  {/* {<ModalInput />} */}
                  <input name={count} onChange = {setText(i)} value = {answers[i]} placeholder={answerText} />
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
