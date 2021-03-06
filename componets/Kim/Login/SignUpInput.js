import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../../../css/kim/componentcss/Login/SignUpInput.scss'
import '../../../css/kim/componentcss/Login/LoginInput.scss'
import { SET_LOGIN_MODAL, USER_JOIN_REQUEST } from '../../../action'

const SignUpInput = ()=>{
    const dispatch = useDispatch();
    const [emailCheck, setEmailCheck] = useState(null)
    const [isPasswordTypeCheck, setisPasswordTypeCheck] = useState(null)
    const [isPasswordEqualCheck, setIsPasswordEqualCheck] = useState(null)
    const {loginFail} = useSelector(state => state.user)

    const testEmail = (e)=>{
        const check = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/
        if(!check.test(e.target.value)){
            setEmailCheck(false)
        }else{
            setEmailCheck(true)
        }
    }
    const passwordCheck = (e)=>{
        const check1 = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/
        if(!check1.test(e.target.value)){
            setisPasswordTypeCheck(false)
        }else{
            setisPasswordTypeCheck(true)
        }
        const checkEqual = document.querySelector('#login_password_equal_check').value
        if(checkEqual !== e.target.value && checkEqual.length !== 0){
            setIsPasswordEqualCheck(false)
        }
    }
    const passwordEqualCheck = (e)=>{
        const originalPassWord = document.querySelector('#login_password').value
        if(e.target.value !== originalPassWord){
            setIsPasswordEqualCheck(false)
        }else{
            setIsPasswordEqualCheck(true)
        }
    }
    const moveLoginModal = ()=>{
        dispatch({
            type : SET_LOGIN_MODAL,
            data : 0
        })
    }
    const joinRequest = () => {

        const name = document.querySelector('#sign_up_name').value
        const email = document.querySelector('#sign_up_email').value
        const password = document.querySelector('#login_password').value
        const passwordEqualCheck = document.querySelector('#login_password_equal_check').value
        
        if(password == passwordEqualCheck){
            //console.log('체크테스트')
            dispatch({
                type : USER_JOIN_REQUEST,
                name : name,
                email : email,
                password : password,
                password2 : passwordEqualCheck
            })
            setisPasswordTypeCheck(null);
            setIsPasswordEqualCheck(null);
            setEmailCheck(null);
            document.querySelector('#sign_up_name').value = '';
            document.querySelector('#sign_up_email').value= '';
            document.querySelector('#login_password').value= '';
            document.querySelector('#login_password_equal_check').value= '';
            
        }
    }

    useEffect(()=>{
        const container = document.getElementsByClassName('signup_body_container')[0];

        container.addEventListener('keypress', (event)=>{
            if(event.keyCode ===13){
                joinRequest()
            }
            
        })
    },[])

    //loginFail 에 대한 메세지를 component에서 보여줘야함(아직 퍼블리싱 안 됨)

    return(
        <div className = "signup_body_container">
            <p><input id = "sign_up_name" className= "login_input_type" type = "text" placeholder ="이름"/></p>
            <p><input id = "sign_up_email" className= {emailCheck === null ? 'login_input_type': emailCheck ===false ? "login_input_type_fail": "login_input_type"} onChange = {testEmail} type = "text" placeholder ="아이디(이메일형식)"/></p>
            <p style = {{marginLeft : "5%",textAlign : 'left'}}>
                <span className = {emailCheck === false ? 'login_email_check_error' : 'display_none'}>이메일 형식으로 입력해주세요</span>
            </p>
            <p className = {emailCheck === true ? "login_email_check_good" : "display_none"}><svg xmlns="http://www.w3.org/2000/svg" width="28.901" height="19.83" viewBox="0 0 28.901 19.83">
  <path id="패스_1805" data-name="패스 1805" d="M1946.841,3691.941l9.779,9.779,17.708-17.708" transform="translate(-1946.134 -3683.304)" fill="none" stroke="#1f254b" stroke-width="2"/>
</svg></p>
            <p><input id = "login_password" className = {isPasswordTypeCheck === null ? 'login_input_type': isPasswordTypeCheck ===false ? "login_input_type_fail": "login_input_type"} onChange = {passwordCheck}  type = "password" placeholder ="비밀번호"/></p>
            <p style = {{marginLeft : "5%",textAlign : 'left'}}>
                <span className = {isPasswordTypeCheck === false ? 'login_email_check_error' : 'display_none'}>문자,숫자 조합 8자 이상으로 해주세요</span>
            </p>
            <p><input id = "login_password_equal_check" className = {isPasswordEqualCheck === null ? 'login_input_type': isPasswordEqualCheck ===false ? "login_input_type_fail": "login_input_type"} onChange = {passwordEqualCheck}  type = "password" placeholder ="비밀번호확인"/></p>
            <p style = {{marginLeft : "5%",textAlign : 'left'}}>
                <span className = {isPasswordEqualCheck === false ? 'login_email_check_error' : 'display_none'}>비밀번호가 일치하지 않습니다</span>
            </p>
            <div className = "signup_bottom_modal_container">
                <div className = "signup_request_button" onClick = {joinRequest}>
                    <p className = "signup_request_button_text">계정 만들기</p>
                </div>
                <div className = "login_move_request">
                    <span className = "login_move_request_text">이미 가입하셨나요?</span>
                    <span className = "login_move_request_link" onClick = {moveLoginModal}>로그인</span>
                </div>
            </div>
        </div>
    )
}

export default SignUpInput;