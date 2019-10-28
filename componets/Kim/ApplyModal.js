import React,{useEffect} from 'react'
import Modal from '../../lib/react-awesome-modal/lib/index'
import {useSelector, useDispatch} from 'react-redux'

import ApplyCompleted from'./ApplyCompleted'
import ApplyFirst from './ApplyFirst'
import ApplySecond from './ApplySecond'
import '../../css/container.scss'
import '../../css/kim/componentcss/ApplyModal.scss'
import { CLOSE_APPLY_MODAL } from '../../action'
const ApplyModal = ()=>{
    
    
    const dispatch = useDispatch();
    const {applyModalLevel, visible} = useSelector(state => state.button)
    const {postId} = useSelector(state=> state.apply)
    let modalContainer;
    const closeModal = ()=>{
        dispatch({
            type: CLOSE_APPLY_MODAL,
            
        })
    }
    const renderModal = (level)=>{
        switch(level){
            case 1 :
                return <ApplyFirst></ApplyFirst>
            case 2 :
                return <ApplySecond></ApplySecond>
        }
    }
    
    useEffect(()=>{
        modalContainer = document.querySelector('#modal_container')
        const parent = modalContainer.parentElement;
        console.log(parent.style.backgroundColor)
        
    },[])
    return(
        <div className = "container" >
            
            <Modal visible = {visible} effect="fadeInUp">
                
                <div id = {applyModalLevel !== 3? "modal_container" : "modal_finish_container"}>
                    
                    {applyModalLevel <=2 ?    
                        <div>
                            <div id = "apply_head_modal_blank"></div> 
                            <div id = "apply_modal_head_container" >
                                   
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
                                    {
                                        renderModal(applyModalLevel)
                                    }

                                </div>
                                
                                
                            </div>
                        </div> :<ApplyCompleted />
                    }
                    
                    
                </div>
                
            </Modal>
        </div>
    )
}

export default ApplyModal