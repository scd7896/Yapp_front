import React from 'react'

import '../../../css/kim/componentcss/Question.scss'
const Question = ({questionData, index, changeArrayState = f =>f})=>{
    return(
        <div>
            <div id = "question_container">
                <span id = "question_number_indexing_container">Q<span style ={{color :'#4244ff'}}>{index+1}</span></span>
                <span id = "question_contents">{questionData}</span>
            </div>
            <div id = "question_to_answer_container">
                <input id = "qustion_to_answer_input"type = "text" placeholder ="답변을 입력하세요"></input>
            </div>
        </div>
    )
}

export default Question;