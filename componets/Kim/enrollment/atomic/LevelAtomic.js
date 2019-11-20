import React from 'react'
import './css/LevelAtomic.scss'
const LevelAtomic = ({lev,isNow, text})=>{
    return(
        <div className = {isNow? "enrollment_level_atomic is_now" : "enrollment_level_atomic"  }>   
            <p className = {isNow ? "enrollment_level_atomic_number is_now": "enrollment_level_atomic_number"}>0{lev} </p>
            <p className = {isNow ? "enrollment_level_atomic_text is_now" : "enrollment_level_atomic_text"}>{text}</p>
        </div>
    )
}

export default LevelAtomic;