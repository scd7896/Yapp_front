import React from 'react'

import '../css/Park/ProjectCardView.scss'
const ProjectCardView = ()=>{
    return(
        <div class="project-cardview">
         <img class= "project-cardview-detail"></img>
            <img class = "project-cardview-banner" src ="https://www.10wallpaper.com/wallpaper/medium/1909/2019_Planetary_Nebula_Clouds_4K_Universe_medium.jpg"></img>  
            <div class="project-cardview-contents">
                <div class="jobgroup">
                    <div class="jobgroup-circle"></div>
                    <div class="jobgroup-main">개발자</div>
                    <div class="jobgroup-sub">프론트,백엔드</div>
                </div>
                <div class="project-cardview-main">해커톤 팀원 모집</div>
                <div class="project-cardview-step">팀 빌딩 단계</div>
                <div class="project-cardview-region">팀 빌딩 단계</div>
                <div class="project-cardview-time">5시간 전</div>
            </div>            
        </div>
    )
}

export default ProjectCardView