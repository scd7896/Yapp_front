import React, { useState } from 'react'
import Router from 'next/router'
import { useSelector } from 'react-redux'
import SelectBox from '../../componets/Jun/SelectBox'
import locations from '../../methods/location'

import '../../css/container.scss'
import '../../css/kim/modify_profile.scss'
import baseURL from '../../url';
import UserProfileImg from '../../componets/Park/UserProfileImg'
const profile = ()=>{

    var [imgFile, setImgFile] = useState(null);

    const { user }  = useSelector(state => state);

    var [previewURL, setPreviewURL] = useState(user.userProfileImage);
    var [name , setName ] = useState(user.userName);
    var [location, setLocation] = useState(0);
    var [flag, setFlag] = useState(0);
    var [phoneNumber , setPhoneNumber] = useState('');

    var [region , setRegion] = useState(0);

    const locationItem = locations.map((el,i)=>{
        return {
            id : i,
            text : el
        }
    })

    const onClick = e => {
        const { name, value } = e;
        setRegion(value.id);
        console.log(region);
    };  

    function handleFileChange(event){
        var fileList = event.target.files;

        if(fileList[0] != undefined){
            if(fileList[0].type == 'image/png' ||
                fileList[0].type == 'image/x-png' ||
                fileList[0].type == 'image/gif' ||
                fileList[0].type == 'image/jpeg'){
                    setPreviewURL( URL.createObjectURL(fileList[0]))
                }
            else{
                alert('이미지 파일만 업로드 가능합니다.');
            }
        }

        setImgFile(fileList[0]);
    }

    function handleClickDeleteAvatar(){
        if(confirm('정말 삭제하시겠습니까?')){

            setImgFile(null);
            setPreviewURL('');
        }
    }

    function registerProfile(){
        var fileFormData = new FormData();
        fileFormData.append('avatar', imgFile);   
        fileFormData.append('location', location);
        fileFormData.append('name', name);
        fileFormData.append('flag',flag);
        fileFormData.append('phone', phoneNumber);

        
        fetch(baseURL + '/user/profile', {
            headers : {
                'Authorization' : 'bearer ' + user.userToken,
            },
            method : 'PUT',
            body : fileFormData
        }).then(res => {
            if(res.ok){
                Router.push('/mypage');
            }
        })
    }

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
                        <div className = "modify_profile_body_image_view">
                            <UserProfileImg size = {148} src = {previewURL}/>
                        </div>
                        <div className = "modify_profile_body_image_action_container">
                            <label for = 'profile-avatar'>
                                <div className = "modify_profile_body_image_action_button">
                                    <p className = "modify_profile_body_image_action_text">등록</p>
                                </div>
                            </label>
                            <div className = "modify_profile_body_image_action_button"
                                onClick = {handleClickDeleteAvatar}>
                                <p className = "modify_profile_body_image_action_text">삭제</p>
                            </div>
                        </div>
                    </div>
                    <div className = "modify_profile_body_name_container">
                        <p className = "modify_profile_body_text">이름</p>
                        <input className = "modify_profile_body_input_text" type = "text" placeholder ="이름"
                            value = {name} onChange = {(event) => setName(event.target.value)}/>
                    </div>
                    <div className = "modify_profile_body_name_container">
                        <p className = "modify_profile_body_text">지역</p>
                            <SelectBox
                                name="locationSelectBox"
                                value={location[region]}
                                type="under"
                                placeholder="선택하세요"
                                items={locationItem}
                                onClick={onClick}
                            />
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
                <div className = "modify_profile_commit_button"
                onClick = {registerProfile}>
                    <p className = "modify_profile_commit_text">등록</p>
                </div>            
            </div>
            <input  style = {{width : 0}} id = "profile-avatar" 
                type="file" 
                name="myImage" 
                accept="image/x-png,image/gif,image/jpeg,image/x-png" 
                onChange={handleFileChange}></input>
        </div>
    )
}

profile.getInitialProps = async(context)=>{
    /* get /user/profile 로 데이터 가져오기
        put /user/profile 로 데이터 보내기  */
    return {}
}
export default profile