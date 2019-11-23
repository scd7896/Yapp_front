import React from 'react'
import Modal from '../../../lib/react-awesome-modal/lib/index'
import LoginInput from './LoginInput'
import SignUpInput from './SignUpInput'
import {useSelector, useDispatch} from 'react-redux'

import '../../../css/kim/componentcss/Login/LoginModal.scss'
import '../../../css/kim/componentcss/ApplyModal.scss'
import '../../../css/container.scss'
import { CLOSE_LOGIN_MODAL } from '../../../action'
const LoginModal = ()=>{
    const dispatch = useDispatch();
    const {loginVisible, isLoginModal} = useSelector(state=>state.button)
    const closeLoginModal = ()=>{
        dispatch({
            type : CLOSE_LOGIN_MODAL
        })
    }
    const renderBody = (renderNumber)=>{
        switch(renderNumber){
            case 0 : 
                return <LoginInput />
            case 1 :
                return <SignUpInput />
        }
    }
    return(
        <div className ='modal-wrapper'>
        
            <Modal visible = {loginVisible} effect="fadeInUp">
                <div className = "container">
                    
                    <div id = "login_modal_container">
                        <div id = "apply_head_modal_blank"></div>         
                        <div id = "login_modal_header_container">    
                            <span><p id = "login_modal_header_contents">{isLoginModal === 0 ? "로그인" : "회원가입"}</p></span>
                            <span><p id = "modal_cancle_button" onClick = {closeLoginModal}><img src = "https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/FEF83BDA-4E98-497A-9456-B1E169BDD060.svg"/></p></span>
                        </div>
                        <div id = "login_modal_body_container">
                            {renderBody(isLoginModal)}
                        </div>
                    </div>
                </div>
            </Modal>
        
        </div>
    )
}

export default LoginModal;