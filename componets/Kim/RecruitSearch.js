import React from 'react'

import '../../css/kim/componentcss/RecruitSearch.scss'
const RecruitSearch = ()=>{
    return(
        <div id = "recruit_search_container">
            <input type = 'text' id = "recruit_search_text" 
                placeholder = "검색어 입력"/>
        </div>
    )
}

export default RecruitSearch;