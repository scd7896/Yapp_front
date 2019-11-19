import React, { useState } from "react";
import JobGroupCardView from "../componets/Park/JobGroupCardView";
import Question from "../componets/Jun/Question";
import SelectBox from "../componets/Jun/SelectBox";
import Plus from "../componets/Jun/Plus";

import "../css/Jun/enrollment.scss";
import "../css/container.scss";

import Axios from "axios";

import Frist from '../componets/Kim/enrollment/template/First'
const enrollment = ({lev}) => {
  //각 inputs의 value값들 초기는 공백
  const [inputs, setInputs] = useState({
    region: "",
    level: ""
  });
  console.log(lev)
  const [thumbnailImage, setThumbnailImage] = useState({file : null, fileUrl : ''})
  const { region, level } = inputs;

  const onClick = e => {
    const { name, value } = e;
    setInputs({
      ...inputs,
      [name]: {id : value.id, text : value.text}
    });
    console.log(region, level)
  };
  const changeImage =(event)=>{
    const fileButton = document.createElement('input')
    fileButton.setAttribute('type', 'file')
    fileButton.setAttribute('accept', 'image/*')
    fileButton.setAttribute('method', 'post')
    fileButton.click()
    fileButton.addEventListener('change', async()=>{
      const file = fileButton.files[0]
      const fileUrl = URL.createObjectURL(file)
      setThumbnailImage({file : file , fileUrl : fileUrl})
    })
  }

  //마지막 제출하기 버튼 클리시
  const submit = () => {
    /*
    모집하기 글 작성시 필요한 데이터들, 
    header에 user-token 보내기
      {
        "title": "string",
        "content": "string",
        "role": 0,
        "step": 0,
        "location": 0,
        "thumbnailImage": "string",
        "interviewQuestions": [
          {
            "content": "참여할 것입니까?"
          }
        ]
      }
    */
    const title = document.querySelector('#section_title_content').value
    const content = document.querySelector('#section_intro_contents').value
    const formData = new FormData();
    formData.append("title", title)
    formData.append("content", content)
    formData.append("thumbnailImage", thumbnailImage.file)
    formData.append('step', level.id)
    formData.append('location', region.id)

    Axios.post({
      selectValue: selectValue
    });
  };
  return (
    <div >
      <div style = {{background : "#ffffff", marginBottom : "100px"}}>
        <div className="container">
          <h1>모집글 작성하기</h1>
          <div className = "enrollment_level_container">
            
          </div>
        </div>
        
      </div>
      <div className="container">
        <Frist />
        <div className="enroll_container">
          <p>* 필수입력항목입니다</p>

          <div className="project_img">
            
            <div className="section">
              <span id="section_title">모집글 이미지 선택</span>
              <span id="nec">*</span>
            </div>

            <form className={thumbnailImage.fileUrl.length === 0 ? "multerBox" : "background_none"} onClick = {changeImage}>
              {thumbnailImage.fileUrl.length !== 0 ? 
                <div>
                  <img className = "thumbnail_image" src = {thumbnailImage.fileUrl}/>
                </div>: 
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51.807"
                    height="36.242"
                    viewBox="0 0 51.807 36.242"
                  >
                    <g
                      id="그룹_1897"
                      data-name="그룹 1897"
                      transform="translate(-1190.151 -356.5)"
                    >
                      <rect
                        id="사각형_2772"
                        data-name="사각형 2772"
                        width="34.242"
                        height="49.807"
                        transform="translate(1240.958 357.5) rotate(90)"
                        fill="none"
                        stroke="#b9b9b9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                      <path
                        id="패스_1745"
                        data-name="패스 1745"
                        d="M1244.764,391.744h-19.689l-3.76-4.664,3.041-3.767,6.8-8.424,6.8,8.424Z"
                        transform="translate(-9.506 -5.481)"
                        fill="none"
                        stroke="#b9b9b9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                      <circle
                        id="타원_278"
                        data-name="타원 278"
                        cx="3.424"
                        cy="3.424"
                        r="3.424"
                        transform="translate(1202.358 364.348)"
                        fill="none"
                        stroke="#b9b9b9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                      <path
                        id="패스_1746"
                        data-name="패스 1746"
                        d="M1219.066,394.652h-17.655l4.414-5.471,4.414-5.464,4.414,5.464,1,1.237Z"
                        transform="translate(-3.233 -8.263)"
                        fill="none"
                        stroke="#b9b9b9"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>
                  <p>이미지 선택</p>
                </div>}
            </form>
          </div>

          <div className="project_title">
            <div className="section">
              <span id="section_title">프로젝트 제목</span>
              <span id="nec">*</span>
            </div>

            <input id = "section_title_content" placeholder="프로젝트 제목을 입력하세요"></input>
          </div>

          <div className="project_introduce">
            <div className="section">
              <span id="section_title">프로젝트 간단소개</span>
              <span id="nec">*</span>
            </div>

            <textarea id="section_intro_contents" placeholder="프로젝트를 간단히 소개해주세요"></textarea>
          </div>

          <div className="project_info">
            <div className="section">
              <span id="section_title">진행 정보</span>
              <span id="nec">*</span>
            </div>

            <div className="select_info">
              <p>지역</p>
              <SelectBox
                name="region"
                value={region.text}
                type="under"
                placeholder="선택하세요"
                items={[
                  { id: 1, text: "서울" },
                  { id: 2, text: "대구" },
                  { id: 3, text: "울산" }
                ]}
                onClick={onClick}
              />
            </div>
            <div className="select_info">
              <p>진행단계</p>
              <SelectBox
                name="level"
                value={level.text}
                type="full"
                placeholder="선택하세요"
                items={[
                  { id: 1, text: "기획완료" },
                  { id: 2, text: "디자인완료" },
                  { id: 3, text: "개발중" }
                ]}
                inputs={inputs}
                onClick={onClick}
              />
            </div>
          </div>

          <div className="project_recruitJob">
            <div className="section">
              <span id="section_title">모집직군</span>
              <span id="nec">*</span>
            </div>
            <JobGroupCardView type="big" jobgroup="planner" toggle="off" />
            <JobGroupCardView type="big" jobgroup="developer" toggle="off" />
            <JobGroupCardView type="big" jobgroup="designer" toggle="on" />
            
          </div>

          <div className="project_member">
            <div className="section">
              <span id="section_title">현재 팀원</span>
              <span id="nec">*</span>
            </div>
            <div className="section_content">
              <JobGroupCardView type="small" jobgroup="developer" number="1" />
              <Plus shape="circle" toggle="false" />
            </div>
          </div>
        </div>

        <div className="QnA_title">
          <h3>지원자에게 질문하기</h3>
          <span id="toggle"></span>
        </div>
        <div className="QnA_container">
          <Question num="1" />
          <Plus shape="rect" />
        </div>
      </div>
    </div>
  );
};
enrollment.getInitialProps = async(ctx)=>{

  return{lev : ctx.query.level}
}
export default enrollment;
