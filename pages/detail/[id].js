/*
    getInitilaProps 함수는 반드시 pages에 포함된 js파일에서만 부를수있습니다.
    또한, pages에서만 불러올 수 있는 props가 따로 있으니(ex : url)
    반드시 router의 하위 컴포넌트로 props를 상속시켜주세요

    동적 라우팅된 id는 getInitailProps에서는 ctx.query.id 
    props에서는 props.query.id 와 같은 형태로 접근할 수 있습니다.
*/
import Router from 'next/router'
import Detail from '../../componets/detail.js'

import { OPEN_APPLY_MODAL } from '../../action/index.js';
import fetch from 'isomorphic-unfetch';
import baseURL from '../../url'

import { useSelector, useDispatch } from "react-redux";

var detailRouter = (props) => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state);
    
    const openModal = ()=>{
        dispatch({
            type : OPEN_APPLY_MODAL,
            postId : props.query.id
        })
        
    }

    return (
        <Detail 
            openModal = {openModal} 
            user = {user}
            {... props}
            />
    )
}

detailRouter.getInitialProps = async function(ctx){

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
  "projectId": 1,
  "title": "해커톤 팀원 모집",
  "content": "2019 yapp 해커톤에 참여하실 분들 구합니다. ",
  "role": 3,
  "step": null,
  "location": 1,
  "expectedPeriod": 3,
  "thumbnailImage": null,
  "attachFile": null,
  "viewCnt": 0,
  "createAt": "2019-11-17T14:45:37.000Z",
  "userId": 1,
  "projectCarts": [],
  "projectQnas": [
    {
      "projectQnaId": 1,
      "content": "안녕하세요 프로젝트에 궁금한 점 남깁니다.",
      "parentId": null,
      "createAt": "2019-11-17T14:45:38.000Z",
      "userId": 3,
      "projectId": 1,
      "answer": [
        {
          "projectQnaId": 3,
          "content": "네 무엇이든지 물어보세요.",
          "parentId": 1,
          "createAt": "2019-11-17T14:45:38.000Z",
          "userId": 1,
          "projectId": 1
        },
        {
          "projectQnaId": 4,
          "content": "what??",
          "parentId": 1,
          "createAt": "2019-11-17T14:45:38.000Z",
          "userId": 3,
          "projectId": 1
        }
      ]
    },
    {
      "projectQnaId": 2,
      "content": "개발을 시작한지 얼마 안되는 개발자입니다. 저도 참여가능할까요? 열심히 하겠습니다!",
      "parentId": null,
      "createAt": "2019-11-17T14:45:38.000Z",
      "userId": 3,
      "projectId": 1,
      "answer": []
    }
  ]
}
    */
    if(res.ok){
        var resJSON = await res.json();
        if(resJSON == null){
          Router.push('/error/404');
        } 
        data.project = resJSON;
    }
    else{
        Router.push('/error/500');
    }
    

    return data;
}

export default detailRouter
