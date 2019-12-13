import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../../../css/kim/componentcss/Login/LoginInput.scss'
import { SET_LOGIN_MODAL, USER_LOGIN_REQUEST, REPAIR_PASSWORD } from '../../../action';
const LoginInput = ()=>{
    const dispatch = useDispatch();
    const [emailCheck, setEmailCheck] = useState(null)
    const {loginFail} = useSelector(state => state.user)
    
    const testEmail = (e)=>{
        const check = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/
        if(!check.test(e.target.value)){
            setEmailCheck(false)
        }else{
            setEmailCheck(true)
        }
        
    }
    const moveToSignUp = ()=>{
        dispatch({
            type : SET_LOGIN_MODAL,
            data : 1
        })
    }
    const repairPassword = ()=>{
        if(loginFail === false){
            return;
        }
        dispatch({
            type :REPAIR_PASSWORD
        })
    }
    const loginRequest = (event)=>{
        event.preventDefault();
        if(emailCheck !== true){
            return;
        }
        
        const email = document.querySelector('#login_email').value
        const password = document.querySelector('#login_password').value
        //login request 던져보자 ㅎㅎ
        dispatch({
            type : USER_LOGIN_REQUEST,
            email : email,
            password : password
        })
        document.querySelector('#login_email').value = '';
        document.querySelector('#login_password').value= '';
        setEmailCheck(null)
    }

    return(
        <div id = "login_container">      
            <form onSubmit = {loginRequest}>      
                <p><input id = "login_email" style ={{marginLeft : '-5%'}} className= {emailCheck === null ? 'login_input_type': emailCheck ===false ? "login_input_type_fail": "login_input_type"} onChange = {testEmail} type = "text" placeholder ="아이디(이메일형식)"/></p>
                <p style = {{textAlign:"left", paddingLeft : '3%'}}>
                    <span className = {emailCheck === false ? 'login_email_check_error' : 'display_none'}>이메일 형식으로 입력해주세요</span>
                </p>    
                <p className = {emailCheck === true ? "login_email_check_good" : "display_none"}><svg xmlns="http://www.w3.org/2000/svg" width="28.901" height="19.83" viewBox="0 0 28.901 19.83">
                    <path id="패스_1805" data-name="패스 1805" d="M1946.841,3691.941l9.779,9.779,17.708-17.708" transform="translate(-1946.134 -3683.304)" fill="none" stroke="#1f254b" stroke-width="2"/>
                    </svg>
                </p>
                <p><input id = "login_password" onChange = {repairPassword} style ={{marginLeft : '-5%'}} className = "login_input_type" type = "password" placeholder ="비밀번호"/></p>
                <p style = {{textAlign:"left", paddingLeft : '3%'}}>
                    <span className = {loginFail === true ? 'login_email_check_error' : 'display_none'}>아이디/비밀번호가 일치하지 않습니다</span>
                </p>
                <button className = "login_request_button" ><p className = "login_request_text">로그인</p></button>
            </form>


            <div className = "login_modal_footer_container">
                
                <div className = "login_modal_footer_actions">
                    <p className = "login_modal_password_forgot">비밀번호를 잊으셨나요?</p>
                    <div className = "login_modal_signup_container">
                        
                        <span className = "signup_first_toys"><span className = "signup_toys_bold">Toys</span>가 처음이신가요?</span>
                        <span className = "signup_button_text" onClick = {moveToSignUp}>회원가입</span>
                    </div>
                    
                </div>
            </div>
            

        </div>
    )
}

export default LoginInput;