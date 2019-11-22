import '../../css/park/detail_qna.scss'
import { useSelector , useDispatch } from "react-redux";

import getTimeDiff from '../../methods/getTimeDiff'
import React, {useState} from 'react'

import cookies from '../../methods/cookies'

import baseURL from '../../url'

import { OPEN_LOGIN_MODAL } from '../../action/index.js';

export default function DetailQ(props){

    var timeStr = getTimeDiff(props.createAt);
    const dispatch = useDispatch();
    const { user } = useSelector(state => state);

    const [toggleReply, setToggleReply] = useState(false) ;
    const [toggleEdit, setToggleEdit] = useState(false);
    const [replyValue , setReplyValue] = useState('')
    const [editValue, setEditValue] = useState(props.content)
    
    var replyMutex = 0;

    const openLoginModal = () => {
        dispatch({
          type: OPEN_LOGIN_MODAL
        });
      };

    function handleClickReplyToggleButton(){
        if(toggleReply ){

            var toggleOffConfirm = true;

            if( replyValue != ''){
                toggleOffConfirm = confirm('정말 취소하시겠습니까?');
            }

            if(toggleOffConfirm){
                setToggleReply(false);
            }
        }
        else{
            setToggleReply(true);
        }
    }

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

    function  handleReplyChange(event) {
        setReplyValue(event.target.value);
    }
    function  handleEditReplyChange(event) {
        setEditValue(event.target.value);
    }

    async function handleClickSendReplyButton(){
        if(replyMutex == 0){
            replyMutex = 1;
            await sendReply();
            replyMutex = 0;            
        }
    }

    

    async function sendReply(){

        if(replyValue == ''){
            alert('댓글 내용을 입력해주세요.');
        }
        else{
            var userToken = cookies.getCookie('user-token');
            if(userToken == undefined || userToken == ''){
                openLoginModal();
            }
            else{
                try {
                    var res = await fetch(baseURL + '/projects/' + props.projectId + '/qna' , {
                        headers : {
                            Authorization : 'bearer ' + userToken,
                            'accept' : 'application/json',
                            'Content-Type' :  'application/json'
                        },
                        method : 'POST',
                        body : JSON.stringify({
                            "content" : replyValue,
                            "parentId" : props.id
                        })
                    });
        
                    if(res.ok){
                        setReplyValue('');
                        props.fetchQnAList();
                        setToggleReply(false);
                    }    
                }   
                catch(err){
                    console.log(err);
                }             
            }


        }
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
                    var res = await fetch(baseURL + '/projects/' + props.projectId + '/qna' , {
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
                var res = await fetch(baseURL + '/projects/' + props.projectId + '/qna', {
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
        <React.Fragment>
            <div className = {props.className + ' detail-wrapper-wrapper' }>
                <div className= 'detail-q-wrapper'>
                    <div className = 'detail-q-header'>
                        <div className = 'detail-q-title-wrapper'>
                            <div className = 'detail-q'>
                                Q
                            </div>
                            <div className= 'detail-name'>
                                {'사용자 이름'}
                            </div>
                            <div className= 'detail-time'>
                                {timeStr}
                            </div>
                            {
                                user.userId ? 
                                (
                                    <div className = 'button detail-q-reply-button'
                                        onClick = {handleClickReplyToggleButton}>
                                            <svg className = 'detail-q-reply-button-svg' xmlns="http://www.w3.org/2000/svg" width="10.886" height="10.033" viewBox="0 0 10.886 10.033">
                                                <g id="그룹_2197" data-name="그룹 2197" transform="translate(0.5)">
                                                    <path id="패스_1914" data-name="패스 1914" d="M99.913,64.5v6.461h9.679" transform="translate(-99.913 -64.503)" fill="none" stroke="#5c63ff" strokeMiterlimit="10" strokeWidth="1"/>
                                                    <path id="패스_1915" data-name="패스 1915" d="M117.913,73.5l3.231,3.231-3.231,3.231" transform="translate(-111.464 -70.285)" fill="none" stroke="#5c63ff" strokeMiterlimit="10" strokeWidth="1"/>
                                                </g>
                                            </svg>

                                            <div className = 'detail-q-reply-button-text'>
                                                {toggleReply ? '답글 취소' : '답글 달기'}
                                            </div> 
                                    
                                    </div>
                                ) : null
                            }
                        </div>

                        { user.userId != props.userId ? null :
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
                        <div className = 'detail-content'>
                            {props.content}
                        </div>
                    }

                </div>
            </div>
           
            {
                !toggleReply ? null : 
                (
                    <div className = {'detail-wrapper-wrapper' }>
                        <div className= 'detail-a-wrapper'>
                            <div className = 'detail-a-stair'>

                            </div>
                            <div className = 'detail-q-reply-input-container'>
                                <textarea className = 'detail-reply-input'
                                    value = {replyValue}
                                    onChange  = {handleReplyChange} >

                                </textarea>
                            </div>
                            <div className = 'button detail-q-reply-send-button'
                            onClick = {handleClickSendReplyButton}>
                                답변하기
                            </div>
                        </div>
                    </div>
                ) 
            }
        </React.Fragment>
    )
}