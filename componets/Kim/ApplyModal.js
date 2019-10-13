import React from 'react'
import Modal from 'react-awesome-modal'
import {useSelector, useDispatch} from 'react-redux'

import ApplyCompleted from'./ApplyCompleted'
import ApplyFirst from './ApplyFirst'
import '../../css/container.scss'
import '../../css/kim/componentcss/ApplyModal.scss'
import { NEXT_APPLY_MODAL } from '../../action'
const ApplyModal = ({visible, closeModal,data})=>{
    const dispatch = useDispatch();
    const {applyModalLevel} = useSelector(state => state.button)
    
    const nextModal = ()=>{
        dispatch({
            type :NEXT_APPLY_MODAL
        })
    }
    return(
        <div className = "container" >
            <Modal width = "62.5%" visible = {visible} effect="fadeInUp">
                <div id = "modal_container">
                    {applyModalLevel <=2 ?    
                        <div>
                            <div style ={{textAlign:"left"}}>
                                <span><p id = "modal_title_text">프로젝트 지원하기</p></span>
                                <span><p id = "modal_cancle_button" onClick = {closeModal}>X</p></span>
                            </div>
                            
                            <div id = "modal_body_container">
                                <div >
                                    <span className = {applyModalLevel >= 1? "modal_body_top_number" : "modal_top_not_select"}>1</span> 
                                    <div className = "modal_body_top_line"></div>
                                    <span className = {applyModalLevel >= 2? "modal_body_top_number" : "modal_top_not_select"}>2</span> 
                                    <div className = "modal_body_top_line"></div>
                                    <span className = {applyModalLevel === 3? "modal_body_top_number" : "modal_top_not_select"}>3</span>
                                </div>
                                <div id = "modal_section_question_container">
                                    <span id = "modal_section_one_question" className = {applyModalLevel >= 1 ? 'section_text_color_selected' : "section_text_color_noselected"}>지원자님께 질문</span>
                                    <span id = "modal_section_second_question" className = {applyModalLevel >= 2 ? 'section_text_color_selected' : "section_text_color_noselected"}>이력뽐내기</span>
                                    <span id = "modal_section_third_completed" className = {applyModalLevel === 3 ? 'section_text_color_selected' : "section_text_color_noselected"}>지원완료</span>
                                </div>

                                <div>
                                    <ApplyFirst />

                                </div>
                                <button onClick = {nextModal}>다음으로</button>            
                            </div>
                        </div> :<ApplyCompleted />
                    }
                    
                    
                </div>
                
            </Modal>
        </div>
    )
}

export default ApplyModal