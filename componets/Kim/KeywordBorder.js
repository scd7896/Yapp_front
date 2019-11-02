import React from 'react'
import Icons from '../icons/index'
import '../../css/kim/componentcss/KeywordBorder.scss'
import "../../css/kim/componentcss/KeywordSearch.scss";
const KeywordBorder = ({data, isSelected})=>{
    return(
        <div className = {isSelected ? "keyword_border_container selected_border" : "keyword_border_container"}>
            <div id="keyword_search_img_container">
                <Icons keyword = {data.name} isSelected = {isSelected}/>
            </div>
            <div >
                <p className = "keyword_bottom_text">#{data.name}</p>
            </div>
        </div>
    )
}

export default KeywordBorder