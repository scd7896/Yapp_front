import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PositionQuestion from '../blockcontainer/PositionQuestion'
import Link from 'next/link'
import '../../../../css/Jun/enrollment.scss'
import './css/Second.scss'
const Second = ({projectId})=>{
    const positionArr = ["직군공통", "기획자", "개발자", "디자이너"]
    const idArr = [0,1,2,4]
    const {projectPosition} = useSelector(state => state.enrollment)
    return(
        <div>
            <div className = "enroll_container">
                <p id = "enroll_question_text">지원자에게 질문</p>
                <div className = "enroll_question_container">
                     {positionArr.map((el,i)=>{
                         return <PositionQuestion idValue = {idArr[i]} index = {i} isRender = {(projectPosition&idArr[i])===idArr[i]} text = {el}/>
                     })}
                </div>
            </div>

            <div className = "enroll_bottom_container">
                <Link  href={{ pathname: '/enrollment', query: { create : 'create', level : 1, projectid : projectId} }}
                        as={`/enrollment/create/1/${projectId}`}
                >
                    <a>
                        <div>
                            <p>이전</p>
                        </div>
                    </a>
                </Link>
                <Link  href={{ pathname: '/enrollment', query: { create : 'create', level : 3, projectid : projectId} }}
                        as={`/enrollment/create/3/${projectId}`}
                >
                    <a>
                        <div>
                            <p>다음</p>
                        </div>
                    </a>
                </Link>
            </div>
            
        </div>
    )
}

export default Second