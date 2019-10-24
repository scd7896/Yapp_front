import React from 'react'
import Modal from 'react-awesome-modal'
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
        
        <Modal visible = {loginVisible}>
            <div className = "container">
                <div id = "login_modal_header_container">
                    <span><p id = "login_modal_header_contents">{isLoginModal === 0 ? "로그인" : "회원가입"}</p></span>
                    <span><p id = "modal_cancle_button" onClick = {closeLoginModal}>X</p></span>
                </div>
                <div id = "login_modal_body_container">
                    {renderBody(isLoginModal)}
                </div>
            </div>
        </Modal>
        
        
    )
}

export default LoginModal;