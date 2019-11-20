import React from 'react'
import {useDispatch} from 'react-redux'
import { SET_QUESTION_TEXT } from '../../../../action/enrollment';
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
    return(
        <div >
            <input type = "text" value = {text} onChange = {changeText}/>
            <div>삭제</div>
        </div>
    )
}

export default QuestionLine