import React,{useState} from 'react'
import '../../../css/kim/componentcss/Login/SignUpInput.scss'
import '../../../css/kim/componentcss/Login/LoginInput.scss'
const SignUpInput = ()=>{
    const [emailCheck, setEmailCheck] = useState(null)
    const [isPasswordTypeCheck, setisPasswordTypeCheck] = useState(null)
    const [isPasswordEqualCheck, setIsPasswordEqualCheck] = useState(null)

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
    return(
        <div className = "signup_body_container">
            <p><input id = "sign_up_name" className= "login_input_type" type = "text" placeholder ="이름"/></p>
            <p><input id = "sign_up_email" className= {emailCheck === null ? 'login_input_type': emailCheck ===false ? "login_input_type_fail": "login_input_type"} onChange = {testEmail} type = "text" placeholder ="아이디(이메일형식)"/></p>
            <p>
                <span className = {emailCheck === false ? 'login_email_check_error' : 'display_none'}>이메일 형식으로 입력해주세요</span>
            </p>
            <p className = {emailCheck === true ? "login_email_check_good" : "display_none"}>v</p>
            <p><input id = "login_password" className = {isPasswordTypeCheck === null ? 'login_input_type': isPasswordTypeCheck ===false ? "login_input_type_fail": "login_input_type"} onChange = {passwordCheck}  type = "password" placeholder ="비밀번호"/></p>
            <p><input id = "login_password_equal_check" className = {isPasswordEqualCheck === null ? 'login_input_type': isPasswordEqualCheck ===false ? "login_input_type_fail": "login_input_type"} onChange = {passwordEqualCheck}  type = "password" placeholder ="비밀번호확인"/></p>

            <div className = "">

            </div>
        </div>
    )
}

export default SignUpInput;