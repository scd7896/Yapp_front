import React from 'react'

const AppLayOut = ({children})=>{
    return(
        <div>
            <p>상단 nav bar 입니다</p>
            {children}
        </div>
    )
}

export default AppLayOut