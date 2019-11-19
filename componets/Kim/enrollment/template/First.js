import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { SET_PROJECT_TITLE, MOVE_TO_SECONDPAGE, SET_PROJECT_CONTENTS, RMV_PORJECT_POSITION, ADD_PORJECT_POSITION } from '../../../../action/enrollment'
import SelectBox from '../../../Jun/SelectBox'
import JobGroupCardView from '../../../Park/JobGroupCardView'
import './css/First.scss'
import '../../../../css/Jun/enrollment.scss'
const First = ()=>{
    const [inputs, setInputs] = useState({
        region: "",
        level: "",
        long : ""
      });
    const { region, level, long } = inputs;
    const onClick = e => {
        const { name, value } = e;
        setInputs({
        ...inputs,
        [name]: {id : value.id, text : value.text}
        });
        console.log(region, level)
    };  

    const dispatch = useDispatch()
    const {projectTitle, projectContent, projectPosition} = useSelector(state=> state.enrollment)
    const changeTitle = (e)=>{
        
        dispatch({
            type : SET_PROJECT_TITLE,
            data : e.target.value
        })
    }
    const contentChange = (e)=>{
        dispatch({
            type : SET_PROJECT_CONTENTS,
            data : e.target.value
        })
    }
    const nextMove = ()=>{
        dispatch({
            type : MOVE_TO_SECONDPAGE,
            data : inputs
        })
    }
    const jobGroupSelect = (number)=> ()=>{
        const ckValue = projectPosition & number
        if(ckValue != 0){
            dispatch({
                type : RMV_PORJECT_POSITION,
                data : number
            })
        }else{
            dispatch({
                type : ADD_PORJECT_POSITION,
                data : number
            })
        }
    }
    const jobGroupToggle = (number)=>{
        const ckValue = projectPosition & number
        return ckValue !== 0
    }
    return(
        <div>
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
                    
                    <textarea onChange = {contentChange} value = {projectContent} id="section_intro_contents" placeholder="프로젝트를 간단히 소개해주세요"></textarea>
                </div>
                <div className="section">
                    <span id="section_title">진행 정보</span>
                </div>



            <div className="project_info">
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
                    type="under"
                    placeholder="선택하세요"
                    items={[
                        { id: 10, text: "기획완료" },
                        { id: 20, text: "디자인완료" },
                        { id: 30, text: "개발중" }
                    ]}
                    inputs={inputs}
                    onClick={onClick}
                    />
                </div>
                <div className="select_info">
                    <p>예상기간</p>
                    <SelectBox
                    name="long"
                    value={long.text}
                    type="under"
                    placeholder="선택하세요"
                    items={[
                        { id: 101, text: "1주일" },
                        { id: 102, text: "2주일" },
                        { id: 103, text: "한 달" },
                        {id : 104, text : '두 달'}
                    ]}
                    inputs={inputs}
                    onClick={onClick}
                    />
                </div>
            </div>
            <div className = "enrollment_first_position_container">
                <div onClick = {jobGroupSelect(1)}>
                    <JobGroupCardView type="big" jobgroup="planner" 
                    toggle={jobGroupToggle(1)? "on":"off"} />
                </div>
                <div onClick = {jobGroupSelect(2)}>
                    <JobGroupCardView type="big" jobgroup="developer" 
                    toggle={jobGroupToggle(2)? "on":"off"} />
                </div>
                <div onClick = {jobGroupSelect(4)}>
                    <JobGroupCardView type="big" jobgroup="designer" 
                    toggle={jobGroupToggle(4) ? "on":"off"} />
                </div>
                
            </div>
        </div>
        <div className = "enrollment_first_bottom_container">
            
            <div className = "enrollment_first_bottom_next" onClick = {nextMove}>
                <p>다음</p>            
            </div>

        </div>
    </div>
    )
}

export default First