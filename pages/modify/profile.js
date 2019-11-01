import React from 'react'
import Router from 'next/router'
import '../../css/container.scss'
import '../../css/kim/modify_profile.scss'
const profile = ()=>{
    const routeBack = ()=>{
        Router.back();
    }
    return(
        <div style ={{background : "#ffffff"}}>
            <div className = "modify_profile_head_container">
                <div className = "container" >
                    <p className = "modify_profile_head_text">프로필 수정</p>
                </div>
            </div>
            <div className = "container">
                <div className = "modify_profile_body_container">

                    <div className = "modify_profile_body_image_container">
                        <p className = "modify_profile_body_text">프로필 사진</p>
                        <div className = "modify_profile_body_image_view"></div>
                        <div className = "modify_profile_body_image_action_container">
                            <div className = "modify_profile_body_image_action_button">
                                <p className = "modify_profile_body_image_action_text">등록</p>
                            </div>
                            <div className = "modify_profile_body_image_action_button">
                                <p className = "modify_profile_body_image_action_text">삭제</p>
                            </div>
                        </div>
                    </div>
                    <div className = "modify_profile_body_name_container">
                        <p className = "modify_profile_body_text">이름</p>
                        <input className = "modify_profile_body_input_text" type = "text" placeholder ="이름"/>
                    </div>
                    <div className = "modify_profile_body_name_container">
                        <p className = "modify_profile_body_text">지역</p>
                        
                    </div>
                    <div className = "modify_profile_body_name_container">
                        <p className = "modify_profile_body_text">직군</p>
                        
                    </div>
                    <div className = "modify_profile_body_name_container">
                        <p className = "modify_profile_body_text">전화번호</p>
                        <input className = "modify_profile_body_input_text tel" type = "text" placeholder ="숫자만 입력"/>
                    </div>
                </div>

            </div>
            <div className = "modify_profile_bottom_container">
                <div className = "modify_profile_cancle_button" onClick = {routeBack}>
                    <p className = "modify_profile_cancle_text">취소</p>
                </div>
                <div className = "modify_profile_commit_button">
                    <p className = "modify_profile_commit_text">등록</p>
                </div>            
            </div>
        </div>
    )
}

profile.getInitialProps = async(context)=>{
    return {}
}
export default profile