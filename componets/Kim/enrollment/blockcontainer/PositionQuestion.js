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
                    <svg xmlns="http://www.w3.org/2000/svg" width="33.941" height="33.941" viewBox="0 0 33.941 33.941">
                        <g id="icon_add" transform="translate(-425 -1133)">
                            <line id="선_132" data-name="선 132" y2="33.941" transform="translate(458.941 1149.97) rotate(90)" fill="none" stroke="#c7c9cc" stroke-width="2"/>
                            <line id="선_133" data-name="선 133" y2="33.941" transform="translate(441.971 1166.941) rotate(180)" fill="none" stroke="#c7c9cc" stroke-width="2"/>
                        </g>
                    </svg>
                </div>
                <div className = "question_add_text">
                    질문 추가
                </div>
            </div>
        </div>
    )
}

export default PositionQuestion