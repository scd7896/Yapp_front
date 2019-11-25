import React from "react";
import Router from 'next/router'
import "../../css/Park/ProjectCardView.scss";
import ProjectJobGroup from "./ProjectJobGroup";
import Link from 'next/link';
import getTimeDiff from '../../methods/getTimeDiff'
import steps from '../../methods/step';
import roles from  '../../methods/role';
import locations from '../../methods/location'

const ProjectCardView = props => {

  var jobgroup_main = "JOBGROUP_MAIN",
    role = "ROLE",
    step = "STEP",
    region = "REGION",
    time = "TIME";

  var title = (props.project ? props.project.title : '');
  
  if (props != undefined && props.project != undefined) {
    region = locations[props.project.location]
    time = getTimeDiff(props.project.createAt);
    step = steps[props.project.step]
    title = props.project.title;
    role = roles[props.project.role];
  }
  const moveToDetailPage = ()=>{
    if(props.project){
      Router.push('/detail/' + props.project.projectId);
    }
  }
  return (
 
      <div className="project-cardview">
      <Link href={props.project ? '/detail/[id]' : ''} as = {props.project ? ('/detail/' + props.project.projectId) : ''}>
      <a>
        <img
          className="project-cardview-banner"
          src="https://www.10wallpaper.com/wallpaper/medium/1909/2019_Planetary_Nebula_Clouds_4K_Universe_medium.jpg"
        ></img>
        <div className="project-cardview-contents">
          <ProjectJobGroup jobgroup = {jobgroup_main}/>

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
        
      </a>
    </Link>
      </div>
  );
};

export default ProjectCardView;
