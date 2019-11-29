
import { useSelector, useDispatch } from "react-redux";
import { OPEN_APPLY_MODAL , OPEN_LOGIN_MODAL } from '../../action/index.js';
import cookies from '../../methods/cookies'
import {useEffect,useState} from 'react'

import FavoriteButton from './FavoriteButton'
import '../../css/Park/detail.scss'
import Router from 'next/router'
import baseURL from '../../url'

export default function DetailButtons(props){

    const dispatch = useDispatch();
    const { user } = useSelector(state => state);
    var [applied , setApplied] = useState(false);

    useEffect(() => {
        if(user.isLogging){
            fetch(baseURL + '/mypage/status', {
                headers : {
                    Authorization : 'bearer ' + user.userToken,
                    accept : 'application/json',
                    'Content-Type' : 'application/json'
                }
            }).then(res => {
                if(res.ok){
                    return res.json()
                }
                else{
                    throw res.status
                }
            }).then(res => {
                var curProject = res.list.filter(project => project.projectId == props.projectId);
                if(curProject.length > 0){
                    setApplied(true);
                }
                else{
                    setApplied(false);
                }
            }).catch(e => {})
        }
        else{
            setApplied(false);
        }
    },[user.userToken])

    const openApplyModal = ()=>{
        dispatch({
            type : OPEN_APPLY_MODAL,
            postId : props.projectId,
            role : props.info.role
        })
        
    }

    const openLoginModal = () => {
      dispatch({
        type: OPEN_LOGIN_MODAL
      });
    };

    
    function handleClickApplyButton(){
        var userToken = cookies.getCookie('user-token');
        if(userToken == undefined || userToken == ''){
            openLoginModal();
        }
        else{
            openApplyModal()
        }
    }
    function handleClickCancelButton(){
        if(confirm('정말 지원을 취소하시겠습니까?')){
            if(user.userToken != undefined && user.userToken != ''){
                fetch(baseURL + '/mypage/status/cancel',{
                    headers : {
                        Authorization : 'bearer ' + user.userToken,
                        accept : 'application/json',
                        'Content-Type' : 'application/json'
                    },
                    method : 'DELETE',
                    body : JSON.stringify({
                        projectId : props.projectId
                    })
                }).then(res => {
                    if(res.ok){
                        res.json().then(res => {
                            if(res.message == "success"){
                                alert('지원을 취소하였습니다.')
                                setApplied(false);
                            }
                        })
                    }
                })
            }
        }
    }
    const updatingProject = ()=>{
        Router.push(`/enrollment/change/1/${props.projectId}`)
    }
    function handleClickDeadlineButton(){
        if(user.userToken != undefined && user.userToken != ''){
            if(confirm('정말 모집을 마감하시겠습니까?')){
                fetch(baseURL + '/projects/' + props.projectId + '/deadline',{
                    headers : {
                        Authorization : 'bearer ' + user.userToken,
                        accept : 'application/json',
                        'Content-Type' : 'application/json'
                    },
                    method : 'PATCH'
                }).then(res => {
                    if(res.ok){
                        res.text().then(text => {
                            if(text == 'true'){
                                props.setIsClosed(true)
                            }
                        })
                    }
                })
            }
        }
    }

    return !props.isClosed ?
        (
            !(user.userId != '' && props.projectUserId != '' && user.userId == props.projectUserId) 
            ? (
                <div className = 'detail-button-flex'>
                    <div className = 'detail-favorite-button'>
                        <FavoriteButton project = {{projectId : props.projectId}} type = "detail"></FavoriteButton>
                    </div>
                    {
                        applied 
                        ? <div className = "button detail-apply-button detail-apply-button-cancel" onClick = {handleClickCancelButton}>지원취소</div>
                        : <div className = "button detail-apply-button" onClick = {handleClickApplyButton}>지원하기</div>
                    }
                    
                </div>
            ) 
            :(
                <div className = 'detail-button-flex'>
                    <div className = "button detail-edit-button" onClick = {updatingProject}>수정</div>
                    <div className = "button detail-apply-button" onClick = {handleClickDeadlineButton}>모집마감</div>
                </div>
            )
        )
        : (
            <div className = 'detail-button-flex detail-button-finished'>
                <div className = "detail-apply-button">모집마감</div>
            </div>
        )
}