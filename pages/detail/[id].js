/*
    getInitilaProps 함수는 반드시 pages에 포함된 js파일에서만 부를수있습니다.
    또한, pages에서만 불러올 수 있는 props가 따로 있으니(ex : url)
    반드시 router의 하위 컴포넌트로 props를 상속시켜주세요

    동적 라우팅된 id는 getInitailProps에서는 ctx.query.id 
    props에서는 props.query.id 와 같은 형태로 접근할 수 있습니다.
*/

import Detail from '../../componets/detail.js'
import {useDispatch} from 'react-redux'
import { OPEN_APPLY_MODAL } from '../../action/index.js';
import fetch from 'isomorphic-unfetch';
import baseURL from '../../url'

var detailRouter = (props) => {
    const dispatch = useDispatch();
    
    const openModal = ()=>{
        dispatch({
            type : OPEN_APPLY_MODAL,
            postId : props.query.id
        })
        
    }
    return (
        <Detail props = {props} openModal = {openModal}/>
    )
}

detailRouter.getInitailProps = async function(ctx){

    return {}
}

export default detailRouter
