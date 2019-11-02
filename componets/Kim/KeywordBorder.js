import React from 'react'
import Icons from '../icons/index'
import {useDispatch} from 'react-redux'
import '../../css/kim/componentcss/KeywordBorder.scss'
import "../../css/kim/componentcss/KeywordSearch.scss";
import { ADD_KEYWORD_LIST, DEL_KEYWORD_LIST } from '../../action';
const KeywordBorder = ({data, isSelected})=>{
    const dispatch = useDispatch();
    const toggleSelect = ()=>{
        if(isSelected){
            dispatch({
                type : DEL_KEYWORD_LIST,
                data : data.id
            })
        }else{
            dispatch({
                type : ADD_KEYWORD_LIST,
                data : data.id
            })
        }
    }
    return(
        <div onClick = {toggleSelect} className = {isSelected ? "keyword_border_container selected_border" : "keyword_border_container"}>
            <div id="keyword_search_img_container">
                <Icons keyword = {data.name} isSelected = {isSelected}/>
            </div>
            <div >
                <p className = {isSelected ? "keyword_bottom_text selected_text" : "keyword_bottom_text"}>#{data.name}</p>
            </div>
        </div>
    )
}

export default KeywordBorder