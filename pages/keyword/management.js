import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import KeywordBorder from '../../componets/Kim/KeywordBorder'
import '../../css/container.scss'
import '../../css/kim/keyword_management.scss'
import {keywordAllLists} from '../../dummydatas/dummyKeywords'
import { DEL_KEYWORDS_ALL } from '../../action'

const management = ()=>{
    const {selectList} = useSelector(state=> state.keywords)
    const dispatch = useDispatch();
    const delAllKeywords = ()=>{
        dispatch({
            type : DEL_KEYWORDS_ALL
        })
    }
    return(
        <div>
            <div style = {{background : "#ffffff", borderBottom : "3px solid #f5f7fa"}}>
                <div className = "container">
                    <div className = "management_container">
                        <div>
                            <p className = "keyword_management_text">키워드 관리</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style = {{background : "#ffffff", borderBottom : "3px solid #f5f7fa"}}>
                <div className = "container">
                    <div className = "management_container">
                        <div>
                            <span className = "keyword_management_body_text">관심키워드 선택하고 </span>
                            <br/>
                            <span className = "keyword_management_body_text">메인페이지에서 만나보세요!</span>
                        </div>
                        <div style = {{marginTop : "50px"}}>
                            {keywordAllLists.map((el, i)=>{
                                const check = selectList.findIndex((list)=> list === el.id)
                                return <KeywordBorder data = {el} isSelected = {check === -1? false : true} key = {i}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div style = {{background : "#ffffff"}}>
                <div className = "keyword_management_bottom_container">
                    <div className = "keyword_management_refresh_container" onClick = {delAllKeywords}><p className = "keyword_management_bottom_text">초기화</p></div>
                    <div className = "keyword_management_refresh_container keyword_commit"><p className = "keyword_management_bottom_text keyword_commit_text">완료</p></div>
                </div>
            </div>
            
        </div>
    )
}

export default management;