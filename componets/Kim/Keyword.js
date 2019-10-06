import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import '../../css/kim/componentcss/Keyword.scss'
import {ADD_SELECTORS_CONTENT, REMOVE_SELECTORS_CONTENT} from '../../action'
const Keyword = ({data, index, isSelected})=>{
    
    const dispatch = useDispatch();
    
    
    const clickButton = ()=>{
        if(!isSelected){
            dispatch({
                type : ADD_SELECTORS_CONTENT,
                data : data.name
            })
        }else{
            dispatch({
                type :REMOVE_SELECTORS_CONTENT,
                data : data.name
            })
        }
        
    }
    return (
        
        <button onClick = {clickButton}
        id = {isSelected?"keyword_card_text_selected":"keyword_card_text_unselected"}>#{data.name}({data.count})</button>
        
    )
}

export default Keyword;