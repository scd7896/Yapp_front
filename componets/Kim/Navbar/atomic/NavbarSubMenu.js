import React from 'react'
import '../../../../css/kim/componentcss/NavbarSubMenu.scss'
const NavbarSubMenu = ({open})=>{
    return(
        <div className = {open ? "arrow_box" : "arrow_box arrow_box_none"}> 
            <p className = "navbar_submenu_text">마이 페이지</p>
            <p className = "navbar_submenu_text" >로그아웃</p>
        </div>
    )
}

export default NavbarSubMenu;