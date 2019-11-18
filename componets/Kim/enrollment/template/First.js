import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { SET_PROJECT_TITLE } from '../../../../action/enrollment'
import SelectBox from '../../../Jun/SelectBox'
import '../../../../css/Jun/enrollment.scss'
const First = ()=>{
    const dispatch = useDispatch()
    const {projectTitle} = useSelector(state=> state.enrollment)
    const changeTitle = (e)=>{
        dispatch({
            type : SET_PROJECT_TITLE,
            data : e.target.value
        })
    }
    return(
        <div className = "enroll_container">
            <div className="project_title">
                <div className="section">
                    <span id="section_title">프로젝트 제목</span>
                    <span id="nec">*</span>
                </div>

                <input id = "section_title_content"
                value = {projectTitle} 
                placeholder="프로젝트 제목을 입력하세요"
                onChange = {changeTitle}
                ></input>
            </div>
            <div className="project_introduce">
                <div className="section">
                    <span id="section_title">프로젝트 간단소개</span>
                    <span id="nec">*</span>
                </div>
                
                <textarea id="section_intro_contents" placeholder="프로젝트를 간단히 소개해주세요"></textarea>
            </div>
            <div className="section">
                <span id="section_title">진행 정보</span>
            </div>



        <div className="project_info">
            <div className="select_info">
                <p>지역</p>
                <SelectBox
                name="region"
                type="under"
                placeholder="선택하세요"
                items={[
                    { id: 1, text: "서울" },
                    { id: 2, text: "대구" },
                    { id: 3, text: "울산" }
                ]}
                
                />
            </div>
            <div className="select_info">
                <p>진행단계</p>
                <SelectBox
                name="level"
                
                type="full"
                placeholder="선택하세요"
                items={[
                    { id: 1, text: "기획완료" },
                    { id: 2, text: "디자인완료" },
                    { id: 3, text: "개발중" }
                ]}
                
                />
            </div>
        </div>
    </div>
    )
}

export default First