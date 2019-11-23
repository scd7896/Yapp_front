import React from 'react'
import '../../../../css/Jun/enrollment.scss'
import './css/Third.scss'
import Router from 'next/router'
import {useSelector} from 'react-redux'
const Third = ()=>{
    const {resId} = useSelector(state=> state.enrollment)
    const goToDetail = ()=>{
        Router.push(`/detail/${resId}`)
    }
    return(
        <div>
            <div>
                <img src = "https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/68514244-0AFA-4D1E-88D6-483209C3EA1D.svg"/>
            </div>
            <div>
                <div className = "enroll_complete_title">작성 완료!</div>
            </div>
            <div>
                <div className = "enroll_complete_guide">
                    모집글 작성을 완료하였습니다.
                </div>
                <div className = "enroll_complete_guide">
                    곧 좋은 팀원 만날거에요 :)
                </div>
            </div>
            <div className = "enroll_complete_button" onClick = {goToDetail}>
                <div>작성글 확인하기</div>
            </div>

        </div>
    )
}

export default Third;