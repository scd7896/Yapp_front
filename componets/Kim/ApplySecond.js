import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {PREV_APPLY_MODAL,NEXT_APPLY_MODAL, DEL_PORTFOLIO_MODAL, ADD_PORTFOLIO_MODAL} from '../../action'
import Portfolio from './ApplyModalComponents/Portfolio'
import {portFolios} from '../../dummydatas/dummyQuestion'
import "../../css/kim/componentcss/ApplyFirst.scss"
import "../../css/kim/componentcss/ApplySecond.scss"
const ApplySecond = ()=>{
    const dispatch = useDispatch();
    const {selectPortFolios} = useSelector(state=> state.apply)
    const apply = useSelector(state => state.apply);
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
    const portFolioToggle = (selected, data)=>{
        if(selected){
            dispatch({
                type : DEL_PORTFOLIO_MODAL,
                data : data
            })
        }
        else{
            dispatch({
                type : ADD_PORTFOLIO_MODAL,
                data : data
            })
        }
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
            <div id = "second_modal_body_container">
                <p>
                    <span id = "second_modal_hypen">-</span>
                    <span id = "second_modal_body_title"> 내 이력에서 선택하기</span>

                    <div style = {{marginTop : '44px'}}>
                        {portFolios.map((e,i)=>{
                            return <Portfolio toggleFun = {portFolioToggle} data = {e} key = {i} selected = {selectPortFolios.findIndex((pofol)=> pofol.title === e.title) !== -1}/>
                        })}
                    </div>
                </p>

            </div>
            <div id = "second_modal_footer_container">
                <div id = "second_modal_prev_button" onClick = {prevModal}>이전</div>
                <div id = "second_modal_finish_button" onClick = {applyFinish}>다음</div>
            </div>
        </div>
    )
}

export default ApplySecond;