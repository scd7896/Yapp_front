import React from 'react'
import { SET_SELECTED_PAGES } from '../action'

const review = ()=>{
    return (
        <div>
            프로젝트 후기페이지
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