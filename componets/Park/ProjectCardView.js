import React from 'react'

import '../../css/Park/ProjectCardView.scss'
const ProjectCardView = ({data})=>{
    return(
        <div className="project-cardview">
         <img className= "project-cardview-detail"></img>
            <img className = "project-cardview-banner" src ="https://www.10wallpaper.com/wallpaper/medium/1909/2019_Planetary_Nebula_Clouds_4K_Universe_medium.jpg"></img>  
            <div className="project-cardview-contents">
                <div className="jobgroup">
                    <div className="jobgroup-circle"></div>
                    <div className="jobgroup-main">개발자</div>
                    <div className="jobgroup-sub">프론트,백엔드</div>
                </div>
                <div className="project-cardview-main">해커톤 팀원 모집</div>
                <div className="project-cardview-step">팀 빌딩 단계</div>
                <div className="project-cardview-region">팀 빌딩 단계</div>
                <div className="project-cardview-time">5시간 전</div>
            </div>            
        </div>
    )
}

export default ProjectCardView