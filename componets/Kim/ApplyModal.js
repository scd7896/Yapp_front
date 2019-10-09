import React from 'react'
import Modal from 'react-awesome-modal'
import {useSelector, useDispatch} from 'react-redux'
import '../../css/container.scss'
import '../../css/kim/componentcss/ApplyModal.scss'
const ApplyModal = ({visible, data})=>{
    const dispatch = useDispatch();
    const {applyModalLevel} = useSelector(state => state.button)
    console.log(visible)
    return(
        <div className = "container" >
            <Modal width = "62.5%" visible = {visible} effect="fadeInUp">
                <div id = "modal_container">
                    <p id = "modal_title_text">프로젝트 지원하기</p>
                    <div id = "modal_body_container">
                        <span className = "modal_body_top_number">1</span> 
                        <div className = "modal_body_top_line"></div>
                        <span className = "modal_body_top_number">2</span> 
                        <div className = "modal_body_top_line"></div>
                        <span className = "modal_body_top_number">3</span>
                    </div>
                </div>
                
            </Modal>
        </div>
    )
}

export default ApplyModal