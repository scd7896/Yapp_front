import React from 'react'

import '../css/NavBar.scss'
const NavBar = ()=>{
    return(
        <div>
            <div id = "logo_container">
                <p id = "logo_image"> 로고이미지</p>
            </div>
            <div id = "navigation">
                <ul className = "nav-links">
                    <li>
                        모집중인프로젝트
                    </li>
                    <li>
                        프로젝트후기
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default NavBar