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

    const openLoginModal = () => {
      dispatch({
        type: OPEN_LOGIN_MODAL
      });
    };

    return (
        <Detail 
            openModal = {openModal} 
            openLoginModal = {openLoginModal}
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
    
    if(res.ok){
        var resJSON = await res.json();
        if(resJSON == null){
          if (ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/error/404'
            })
            ctx.res.end();
          } else {
              Router.push('/error/404');
          }
        } 
        data.project = resJSON;
    }
    else{
      if (ctx.res) {
        ctx.res.writeHead(302, {
            Location: '/error/404'
        })
        ctx.res.end();
      } else {
          Router.push('/error/404');
      }
    }
    

    return data;
}

export default detailRouter
