
import { useSelector, useDispatch } from "react-redux";
import { OPEN_APPLY_MODAL , OPEN_LOGIN_MODAL } from '../../action/index.js';
import cookies from '../../methods/cookies'

import FavoriteButton from './FavoriteButton'
import '../../css/Park/detail.scss'
import Router from 'next/router'
export default function DetailButtons(props){

    const dispatch = useDispatch();
    const { user } = useSelector(state => state);

    const openApplyModal = ()=>{
        dispatch({
            type : OPEN_APPLY_MODAL,
            postId : props.projectId
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
    const updatingProject = ()=>{
        Router.push(`/enrollment/change/1/${props.projectId}`)
    }
    return !props.isClosed ?
        (
            !(user.userId != '' && props.projectUserId != '' && user.userId == props.projectUserId) 
            ? (
                <div className = 'detail-button-flex'>
                    <div className = 'detail-favorite-button'>
                        <FavoriteButton project = {{projectId : props.projectId}} type = "detail"></FavoriteButton>
                    </div>
                    <div className = "button detail-apply-button" onClick = {handleClickApplyButton}>지원하기</div>
                </div>
            ) 
            :(
                <div className = 'detail-button-flex'>
                    <div className = "button detail-edit-button" onClick = {updatingProject}>수정</div>
                    <div className = "button detail-apply-button">모집마감</div>
                </div>
            )
        )
        : (
            <div className = 'detail-button-flex detail-button-finished'>
                <div className = "button detail-apply-button">모집마감</div>
            </div>
        )
}