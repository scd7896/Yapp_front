import React from 'react'
import LevelAtomic from '../atomic/LevelAtomic'
import './css/LevelContainer.scss'
const LevelContainer = ({lev})=>{
    return(
        <div className = "enrollment_level_container">
            <LevelAtomic isNow = {true} lev = {1} text = {"프로젝트 정보"}/>
            <LevelAtomic isNow = {false} lev = {2} text = {"지원자에게 질문"}/>
            <LevelAtomic isNow = {false} lev = {3} text = {"작성 완료"}/>
        </div>
    )
}

export default LevelContainer;