import React from 'react'
import {useDispatch} from 'react-redux'
import {PREV_APPLY_MODAL,NEXT_APPLY_MODAL} from '../../action'
import "../../css/kim/componentcss/ApplyFirst.scss"
import "../../css/kim/componentcss/ApplySecond.scss"
const ApplySecond = ()=>{
    const dispatch = useDispatch();
    const prevModal = ()=>{
        dispatch({
            type : PREV_APPLY_MODAL
        })
    }
    const applyFinish = ()=>{
        dispatch({
            type :NEXT_APPLY_MODAL
        })
    }
    return(
        <div id = "second_modal_container">
            <div id = "first_modal_head_container" style ={{marginTop : "20px"}}>
                <div>
                    <img width = "100%"  src = "https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/D7793DDC-8712-4380-BDAD-CA942A68B083.svg"/>
                </div>
                <div id = "first_modal_head_text_container">
                    <div id = "first_modal_head_icon_container">
                        <p id = "first_modal_head_icon">2</p>
                    </div>
                    <p id = "first_modal_header_title">이력 뽐내기</p>
                    <p id = "first_modal_header_subtitle">어필하고 싶은 이력이 있다면 넣어주세요!</p>

                </div>
            </div>

            <div id = "second_modal_footer_container">
                <div id = "second_modal_prev_button" onClick = {prevModal}>이전</div>
                <div id = "second_modal_finish_button" onClick = {applyFinish}>다음</div>
            </div>
        </div>
    )
}

export default ApplySecond;