import '../../css/park/detail_qna.scss'
import getTimeDiff from '../../methods/getTimeDiff'

import { OPEN_LOGIN_MODAL } from '../../action/index.js';
import { useSelector , useDispatch } from "react-redux";
import React, {useState} from 'react'

import cookies from '../../methods/cookies'

import baseURL from '../../url'

export default function DetailA(props){

    var timeStr = getTimeDiff(props.createAt);
    const { user } = useSelector(state => state);
    const dispatch = useDispatch();
    const [toggleEdit, setToggleEdit] = useState(false);
    const [editValue, setEditValue] = useState(props.content);

    const openLoginModal = () => {
        dispatch({
          type: OPEN_LOGIN_MODAL
        });
      };

    function handleClickEditButton(){
        if(toggleEdit ){
            var toggleOffConfirm = true;

            if(  !(editValue == props.content || editValue == '') ){
                toggleOffConfirm = confirm('정말 취소하시겠습니까?');
            }

            if(toggleOffConfirm){
                setToggleEdit(false);
            }
        }
        else{
            setToggleEdit(true);
        }
    }

    function  handleEditReplyChange(event) {
        setEditValue(event.target.value);
    } 

    async function deleteReply(){

        var deleteConfirm = confirm('정말 삭제하시겠습니까?');

        if(deleteConfirm){

            var userToken = cookies.getCookie('user-token');
            if(userToken == undefined || userToken == ''){
                openLoginModal();
            }
            else{
                try{
                    var res = await fetch(baseURL + '/projects/' + props.project.projectId + '/qna' , {
                        headers : {
                            Authorization : 'bearer ' + userToken,
                            'accept' : 'application/json',
                            'Content-Type' :  'application/json'
                        },
                        method : 'DELETE',
                        body : JSON.stringify({
                            "projectQnaId" : props.id
                        })
                    })
        
                    if(res.ok){
                        props.fetchQnAList();
                    }
                }   
                catch(err){
                    console.log(err);
                }             
            }

        }

    }

    

    async function editReply(){
        var userToken = cookies.getCookie('user-token');
        if(userToken == undefined || userToken == ''){
            openLoginModal();
        }
        else{
            try{
                var res = await fetch(baseURL + '/projects/' + props.project.projectId + '/qna', {
                    headers : {
                        Authorization : 'bearer ' + userToken,
                        'accept' : 'application/json',
                        'Content-Type' :  'application/json'
                    },
                    method : 'PATCH',
                    body : JSON.stringify({
                        "projectQnaId": props.id,
                        "content": editValue
                    })
                })
                if(res.ok){
                    setToggleEdit(false);
                    props.fetchQnAList();
                }
            }   
            catch(err){
                console.log(err);
            }             
        }
    }
    
    

    return (
        <div className = {props.className + ' detail-wrapper-wrapper'}>
            <div className= 'detail-a-wrapper'>
                <div className = 'detail-a-stair'>

                </div>
                <div className = 'detail-a-content-wrapper'>
                    <div className = 'detail-qna-header'>
                        <div className = 'detail-qna-title-wrapper'>  
                            <div className = 'detail-a'>
                                A
                            </div>
                        
                            <div className= 'detail-name'>
                                {props.user.name}
                            </div>
                            <div className= 'detail-time'>
                                {timeStr}
                            </div>
                        </div>
                        { props.isDelete || user.userId != props.userId ? null :
                        (
                            <div className='detail-qna-button-container'>
                                <div className = 'button detail-qna-button'
                                    onClick= {handleClickEditButton}>

                                    { toggleEdit ? '취소'  : '수정' }
                                </div>
                                <div className = 'button detail-qna-button'
                                    onClick = {deleteReply}
                                >
                                    삭제
                                </div>
                            </div>
                    )}
                    </div>
                    {
                        toggleEdit ? 
                        <div className = 'detail-edit-container'>
                            <div className = 'detail-edit-flex'>
                                <div className = 'detail-edit-input-container'>
                                    <textarea className = 'detail-reply-input'
                                        value = {editValue}
                                        onChange  = {handleEditReplyChange} >

                                    </textarea>
                                </div>
                                <div className = 'button detail-edit-send-button'
                                    onClick = {editReply}>
                                    <div className = 'detail-edit-send-button-text'>
                                        완료
                                    </div>
                                </div>
                            </div>
                        </div> :
                        <div className = {'detail-content ' + (props.isDelete ? 'detail-content-delete' : '')}>
                            {props.isDelete ? '사용자가 삭제한 글입니다.' : props.content}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}