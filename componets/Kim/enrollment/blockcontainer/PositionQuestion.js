import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './css/PositionQuestion.scss'

import QuestionLine from '../atomic/QuestionLine'
import { ADD_QUESTION_LIST } from '../../../../action/enrollment';

const PositionQuestion = ({isRender, text, index, idValue})=>{
    const dispatch = useDispatch();
    const {projectQuestion} = useSelector(state=> state.enrollment)
    const clickAddList = ()=>{
        dispatch({
            type : ADD_QUESTION_LIST,
            data : index,
            idValue : idValue
        })
    }
    return(
        <div className = {isRender ? "position_question_all":"display_none"}>

            <div className = { "position_question_container"}>
                <div className = "answer_target_text">답변대상</div>
                <div className = "answer_target_position">{text}</div>
            </div>
            <div>
                {
                    projectQuestion[index].map((el,i)=>{
                        return <QuestionLine position = {index} jindex = {i} text ={el.text}/>
                    })
                }
                
            </div>
            <div className = "question_add_container" onClick = {clickAddList}>
                <div className = "question_add_button">
                    +
                </div>
                <div className = "question_add_text">
                    질문 추가
                </div>
            </div>
        </div>
    )
}

export default PositionQuestion