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
            <div>Q</div>
            <div>{jindex + 1}</div>
            <input type = "text" value = {text} onChange = {changeText}/>
            <div className = {jindex ===0 ?"display_none":""} onClick = {removeQuestionList}>
                <img src = "https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/05E60A73-F0A9-4ED5-9684-62DD71155A8A.svg"/>
            </div>
        </div>
    )
}

export default QuestionLine