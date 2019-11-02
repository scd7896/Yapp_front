import React from 'react'

import KeywordBorder from '../../componets/Kim/KeywordBorder'
import '../../css/container.scss'
import '../../css/kim/keyword_management.scss'
import {keywordAllLists} from '../../dummydatas/dummyKeywords'

const management = ()=>{
    const list = []
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
            <div style = {{background : "#ffffff"}}>
            <div className = "container">
                    <div className = "management_container">
                        <div>
                            <span className = "keyword_management_body_text">관심키워드 선택하고 </span>
                            <br/>
                            <span className = "keyword_management_body_text">메인페이지에서 만나보세요!</span>
                        </div>
                        <div style = {{marginTop : "50px"}}>
                            {keywordAllLists.map((el, i)=>{
                                return <KeywordBorder data = {el} isSelected = {false} key = {i}/>
                            })}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default management;