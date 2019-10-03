import React from 'react'
/* 이 파일이 보통 리액트를 시작할때 보는 
    첫 화면 뿌려주기시작하는 단계로 보는것이 무방합니다
    children에는 pages에 있는 index.js가 들어가서 뿌려지게됩니다.
*/

import NavBar from './NavBar'

const AppLayOut = ({children})=>{
    const style = {
        zIndex : '1000'
    }
    return(
        <div>
            <NavBar style = {style}></NavBar>
            <div style = {{zIndex : '0'}}>
                {children}
            </div>
            
            
        </div>
    )
}

export default AppLayOut