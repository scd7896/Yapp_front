import React from 'react'
import Modal from 'react-awesome-modal'
import LoginInput from './LoginInput'
import {useSelector} from 'react-redux'

import '../../../css/kim/componentcss/Login/LoginModal.scss'
import '../../../css/kim/componentcss/ApplyModal.scss'
import '../../../css/container.scss'
const LoginModal = ()=>{
    const {loginVisible, isLoginModal} = useSelector(state=>state.button)

    return(
        
        <Modal visible = {loginVisible}>
            <div className = "container">
                <div id = "login_modal_header_container">
                    <span><p id = "login_modal_header_contents">{isLoginModal ? "로그인" : "회원가입"}</p></span>
                    <span><p id = "modal_cancle_button">X</p></span>
                </div>
                <div id = "login_modal_body_container">
                    {isLoginModal ?<LoginInput />:""}
                </div>
            </div>
        </Modal>
        
        
    )
}

export default LoginModal;