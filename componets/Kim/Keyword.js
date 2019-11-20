import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import '../../css/kim/componentcss/Keyword.scss'
import {ADD_SELECTORS_CONTENT, REMOVE_SELECTORS_CONTENT} from '../../action'
import { ADD_PROJECT_KEYWORD, RMV_PORJECT_POSITION, RMV_PROJECT_KEYWORD } from '../../action/enrollment'
const Keyword = ({data, index, isSelected})=>{
    
    const dispatch = useDispatch();
    
    
    const clickButton = ()=>{
        if(!isSelected){
            dispatch({
                type : ADD_PROJECT_KEYWORD,
                data : index
            })
        }else{
            dispatch({
                type : RMV_PROJECT_KEYWORD,
                data : index
            })
        }
        
    }
    return (
        
        <button onClick = {clickButton}
        id = {isSelected?"keyword_card_text_selected":"keyword_card_text_unselected"}>{data}</button>
        
    )
}

export default Keyword;