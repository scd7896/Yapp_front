import React from 'react'
import {useDispatch} from 'react-redux'
import { SET_QUESTION_TEXT, RMV_QUESTION_LIST } from '../../../../action/enrollment';
import './css/QuestionLine.scss'
const QuestionLine = ({position, jindex, text})=>{
    const dispatch = useDispatch();
    const changeText = (event)=>{
        dispatch({
            type : SET_QUESTION_TEXT,
            data : event.target.value,
            index : position,
            jindex : jindex
        })
    }
    const removeQuestionList = ()=>{
        dispatch({
            type : RMV_QUESTION_LIST,
            index : position,
            jindex : jindex
        })
    }
    return(
        <div className = "question_line_container">
            <div className = "question_text_q">Q</div>
            <div className = "question_text_number">{jindex + 1}</div>
            <input className = "quesition_text_input" type = "text" value = {text} onChange = {changeText}
                placeholder = "질문을 입력하세요 ex)성실히 참여 할 수 있나요?"/>
            <div className = {jindex ===0 ?"display_none":""} onClick = {removeQuestionList}>
                <img src = "https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/05E60A73-F0A9-4ED5-9684-62DD71155A8A.svg"/>
            </div>
        </div>
    )
}

export default QuestionLine