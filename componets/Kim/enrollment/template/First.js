import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { SET_PROJECT_TITLE, MOVE_TO_SECONDPAGE, SET_PROJECT_CONTENTS, RMV_PORJECT_POSITION, ADD_PORJECT_POSITION, SET_PROJECT_NOWTEAM } from '../../../../action/enrollment'
import SelectBox from '../../../Jun/SelectBox'
import JobGroupCardView from '../../../Park/JobGroupCardView'
import location from '../../../../methods/location'
import expectedPeriod from '../../../../methods/expectedPeriod'
import step from '../../../../methods/step'
import keywords from '../../../../methods/keywords'
import role from '../../../../methods/role'
import Keyword from '../../Keyword'
import './css/First.scss'
import '../../../../css/Jun/enrollment.scss'
const First = ()=>{
    const dispatch = useDispatch()
    const {projectTitle, projectContent, projectPosition, projectRegion, projectNowTeam, projectKeyword} = useSelector(state=> state.enrollment)
    const [inputs, setInputs] = useState({
        region: projectRegion!==0 ? {id : projectRegion, text : location[projectRegion-1]} :"",
        level: "",
        long : "",
        
      });
    const locationItem = location.map((el,i)=>{
        return {
            id : i+1,
            text : el
        }
    })
    const expectedPeriodItem = expectedPeriod.map((el,i)=>{
        return{
            id : (i+1) *10,
            text : el
        }
    })
    const stepItem = step.map((el,i)=>{
        return{
            id : i+100,
            text : el
        }
    })
    const countItem = [0,1,2,3,4,5,6,7,8,9].map((el,i)=>{
        return {
            id : i,
            text : el
        }
    })
    
    const { region, level, long } = inputs;
    const onClick = e => {
        const { name, value } = e;
        setInputs({
        ...inputs,
        [name]: {id : value.id, text : value.text}
        });
        console.log(region, level)
    };  
    const setPositionNow = (index) => e => {
        const { name, value } = e;
        dispatch({
            type : SET_PROJECT_NOWTEAM,
            data : value.id,
            index : index
        })
    };  
    
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
                    items={locationItem}
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
                    items={stepItem}
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
                    items={expectedPeriodItem}
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
            <div className = "project_info">
                <p id = "nowteam_text">현재 팀원</p>
                <div className = "select_info">
                    <p>기획자</p>
                    <SelectBox
                    name="plannerCount"
                    value={projectNowTeam[0]}
                    type="under"
                    placeholder="선택하세요"
                    items={countItem}
                    inputs={inputs}
                    onClick={setPositionNow(0)}
                    />
                </div>
                <div className = "select_info">
                    <p>개발자</p>
                    <SelectBox
                    name="developerCount"
                    value={projectNowTeam[1]}
                    type="under"
                    placeholder="선택하세요"
                    items={countItem}
                    inputs={inputs}
                    onClick={setPositionNow(1)}
                    />
                </div>
                <div className = "select_info">
                    <p>디자이너</p>
                    <SelectBox
                    name="designerCount"
                    value={projectNowTeam[2]}
                    type="under"
                    placeholder="선택하세요"
                    items={countItem}
                    inputs={inputs}
                    onClick={setPositionNow(2)}
                    />
                </div>
            </div>
            <div className = "enrollment_keyword_container">
                <div>
                    <p id = "enrollment_keyword_title">모집글 키워드</p>
                    <p id = "enrollment_keyword_subtitle">프로젝트를 대표할 수 있는 키워드를 선택하세요. 검색 노출에 반영됩니다.</p>
                    <div className = "enrollment_keywords_container">
                        {keywords.map((el,i)=>{
                            return(<Keyword data ={el} index = {i}
                                isSelected = {projectKeyword.findIndex((keyword)=> keyword === i)!==-1} key = {i}/>)
                        })}

                    </div>
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