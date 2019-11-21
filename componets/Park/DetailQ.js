import '../../css/park/detail_qna.scss'
import { useSelector } from "react-redux";

import getTimeDiff from '../../methods/getTimeDiff'
import React, {useState} from 'react'

export default function DetailQ(props){

    var timeStr = getTimeDiff(props.createAt);
    const { user } = useSelector(state => state);

    const [toggleReply, setToggleReply] = useState(false) ;
    const [toggleEdit, setToggleEdit] = useState(false);

    function handleClickReplyButton(){
        if(toggleReply){
            var toggleOffConfirm = confirm('정말 취소하시겠습니까?');

            if(toggleOffConfirm){
                setToggleReply(false);
            }
        }
        else{
            setToggleReply(true);
        }
    }

    function handleClickEditButton(){
        if(toggleEdit){
            var toggleOffConfirm = confirm('정말 취소하시겠습니까?');

            if(toggleOffConfirm){
                setToggleEdit(false);
            }
        }
        else{
            setToggleEdit(true);
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
                            <div className = 'detail-q-reply-button'
                                onClick = {handleClickReplyButton}>
                                <div className = 'detail-q-reply-button-text'>
                                    {toggleReply ? '답글 취소' : '답글 달기'}
                                </div>
                            </div>
                        </div>

                        { user.userId != props.userId ? null :
                        (
                            <div className='detail-qna-button-container'>
                                <div className = 'detail-qna-button'
                                    onClick= {handleClickEditButton}>
                                    { toggleEdit ? '취소'  : '수정' }
                                </div>
                                <div className = 'detail-qna-button'>
                                    삭제
                                </div>
                            </div>
                        )}
                    </div>

                    {
                        toggleEdit ? 
                        <div className = 'detail-edit-container'>
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
                            <div className = 'detail-q-reply-input'>

                            </div>
                            <div className = 'detail-q-reply-send-button'>
                                
                            </div>
                        </div>
                    </div>
                ) 
            }
        </React.Fragment>
    )
}