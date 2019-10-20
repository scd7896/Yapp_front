import React from "react";
import Router from 'next/router'
import "../../css/Park/ProjectCardView.scss";
const ProjectCardView = props => {
  var jobgroup_main = "개발자",
    jobgroup_sub = "프론트,백엔드",
    title = "해커톤 팀원 모집",
    step = "팀 빌딩 단계",
    region = "서울",
    time = "5시간 전";

  if (props != undefined && props.data != undefined) {
    jobgroup_main = props.data.jobgroup[0];

    jobgroup_sub = "";

    for (let i = 1; i < props.data.jobgroup.length; i++) {
      jobgroup_sub += props.data.jobgroup[i] + ",";
    }

    if (jobgroup_sub.length > 0) {
      jobgroup_sub = jobgroup_sub.substr(0, jobgroup_sub.length - 1);
    }

    title = props.data.title;
    step = props.data.step;
    region = props.data.region;
    time = props.data.time;
  }
  const moveToDetailPage = ()=>{
    Router.push('/detail/1');
  }
  return (
    <div className="project-cardview" onClick = {moveToDetailPage}>
      <img
        className="project-cardview-banner"
        src="https://www.10wallpaper.com/wallpaper/medium/1909/2019_Planetary_Nebula_Clouds_4K_Universe_medium.jpg"
      ></img>
      <div className="project-cardview-contents">
        <div className="jobgroup">
          <div className="jobgroup-circle"></div>
          <div className="jobgroup-main">{jobgroup_main}</div>
          <div className="jobgroup-sub">{jobgroup_sub}</div>
        </div>
        <div className="project-cardview-main">{title}</div>
        <div className="project-cardview-step">{step}</div>
        <div className="project-cardview-region">{region}</div>
        <div className="project-cardview-time">
          {time}
          <div className="project-cardview-detail">
            <img
              className="project-cardview-icon"
              src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/16E3DB23-AD22-4AA7-99C8-8D692461CA17.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardView;
