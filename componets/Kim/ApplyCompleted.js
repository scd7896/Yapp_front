import React from 'react'
import Router from 'next/router'
import '../../css/kim/componentcss/ApplyCompleted.scss'
const ApplyCompleted = ()=>{
    const goToMypageApply = ()=>{
        Router.push('/mypage/apply');
    }
    return(
        <div id = "apply_completed_container">
            <p id ="apply_completed_icon">🎉</p>
            <p id = "apply_completed_text1">지원완료!</p>
            <p id = "apply_completed_text2">곧 팀원에게 연락이 올거에요!</p>
            <p id = "apply_mypage_config" onClick = {goToMypageApply}>지원내역 확인하기</p>
        </div>
    )
}
export default ApplyCompleted;