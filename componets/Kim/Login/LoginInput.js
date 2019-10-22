import React,{useState} from 'react'
import '../../../css/kim/componentcss/Login/LoginInput.scss'
const LoginInput = ()=>{
    const [emailCheck, setEmailCheck] = useState(null)
    const testEmail = (e)=>{
        const check = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/
        if(!check.test(e.target.value)){
            setEmailCheck(false)
        }else{
            setEmailCheck(true)
        }
        
    }
    return(
        <div>
            <p><input id= {emailCheck === null ? 'login_input_type': emailCheck ===false ? "login_input_type_fail": "login_input_type"} onChange = {testEmail} type = "text" placeholder ="아이디(이메일형식)"/></p>
            <p><input id = "login_input_type" type = "password" placeholder ="비밀번호"/></p>
        </div>
    )
}

export default LoginInput;