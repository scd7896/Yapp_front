import React from 'react'
import {useSelector} from 'react-redux'

import Keyword from '../componets/Kim/Keyword'
import{keyword} from '../dummydatas/dummyKeywords'
import { SET_SELECTED_PAGES, CLEAR_SELECTED_KYEWORD } from '../action'

const review = ()=>{
    const {selects} = useSelector(state=> state.button);
    return (
        <div>
            {keyword.map((e,i)=>{
                 const isSelected = selects.findIndex((el)=> el === e.name) === -1? false: true;
                    return <Keyword data = {e} index = {i} isSelected ={isSelected} key = {i} />
                })}
        </div>
    )
}
review.getInitialProps = async(context)=>{
    context.store.dispatch({
        type: SET_SELECTED_PAGES,
        data : "review"
    })
    
    return {}
}
export default review