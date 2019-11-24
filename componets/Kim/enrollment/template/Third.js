import React from 'react'
import '../../../../css/Jun/enrollment.scss'
import './css/Third.scss'
import Router from 'next/router'
import {useSelector} from 'react-redux'
const Third = ()=>{
    const {resId} = useSelector(state=> state.enrollment)
    const goToDetail = ()=>{
        Router.push(`/detail/1`)
    }
    return(
        <div className = "enroll_container">
            <div>
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