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
        <Detail props = {props} openModal = {openModal} project = {props.project}/>
    )
}

detailRouter.getInitailProps = async function(ctx){

    var data  = {};
    var projectId = parseInt(ctx.query.id);

    var res = await fetch(`${baseURL}/projects/${projectId}`, {
        headers : {
            accept: 'application/json'
        }
    });
    /*
    res.data의 데이터 형태
        {
            "projectId": 0,
            "title": "string", 
            "content": "string",
            "thumbnailImage": "string",
            "attachFile": "string",
            "role": 0,
            "viewCnt": 0,
            "createAt": "Unknown Type: date",
            "userId": "string",
            "interviewQuestions": [
                {
                "sn": 1,
                "content": "일주일에 1회 시간내서 참여 가능하신가요?"
                }
                ]
            }
    */
    if(res.ok){
        var resJSON = await res.json();
        data.project = resJSON;
    }
    

    return data;
}

export default detailRouter
