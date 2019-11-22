import React from 'react'
import '../../../../css/kim/componentcss/NavbarSubMenu.scss'
import Router from 'next/router'
import {useDispatch} from 'react-redux'
import { USER_LOGOUT_REQUEST } from '../../../../action'
const NavbarSubMenu = ({open, setSubOpen})=>{

    var dispatch = useDispatch();

    const logout = () => {
        setSubOpen(!open);
        dispatch({
            type : USER_LOGOUT_REQUEST
        })
    }
    const goTomyPage =()=>{
        setSubOpen(!open);
        Router.push('/mypage')    
    }
    return(
        <div className = {open ? "arrow_box" : "arrow_box arrow_box_none"}> 
            <p onClick = {goTomyPage} className = "navbar_submenu_text">마이 페이지</p>
            <p onClick = {logout} className =  "navbar_submenu_text" >로그아웃</p>
        </div>
    )
}

export default NavbarSubMenu;