import React from "react";
import Router from 'next/router'
import "../../css/Park/ProjectCardView.scss";
import ProjectJobGroup from "./ProjectJobGroup";
import Link from 'next/link';
import getTimeDiff from '../../methods/getTimeDiff'
import steps from '../../methods/step';
import roles from  '../../methods/role';
import locations from '../../methods/location'

import {useSelector} from 'react-redux'

import FavoriteButton from '../Park/FavoriteButton'

const ProjectCardView = props => {

  var jobgroup_main = "JOBGROUP_MAIN",
    role = "ROLE",
    step = "STEP",
    region = "REGION",
    time = "TIME";

  var rolesArr = []; 
  var rolesComponent = null;

  var title = (props.project ? props.project.title : '');
  
  if (props != undefined && props.project != undefined) {
    region = locations[props.project.location]
    time = getTimeDiff(props.project.createAt);
    step = steps[props.project.step]
    title = props.project.title;
    role = props.project.role;

    if((role & 1)  == 1){
      rolesArr.push(roles[0]);
    }
    if((role & 2)  == 2){
      rolesArr.push(roles[1]);
    }
    if((role & 4)  == 4){
      rolesArr.push(roles[2]);
    }

    rolesComponent = rolesArr.map(role => <ProjectJobGroup jobgroup = {role} size ="small"/>)

  }

  var {user} = useSelector(state => state);

  if(user.isLogging){
    
  }

  function handleClickFavorite(){

  }

  var imgURLs = [
    "https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/739156FF-863D-4DD0-8588-5F88CA758C4D.png",
    "https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/CEBCE4E5-38C2-4A61-9979-13E59971FA6F.png",
    "https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/6E3357B4-AD86-4246-922B-C46ADDCA2C98.png"]

  return (
 
      <div className="project-cardview">
      <Link href={props.project ? '/detail/[id]' : ''} as = {props.project ? ('/detail/' + props.project.projectId) : ''}>
      <a>
        <img
          className="project-cardview-banner"
          src={props.project && props.project.thumbnailImage ? props.project.thumbnailImage :  imgURLs[props.project ? props.project.projectId%3 : 0] }
        ></img>
        <div className="project-cardview-contents">
          {rolesComponent}

          <div className="project-cardview-main">{title}</div>
          <div className="project-cardview-step">{step}</div>
          <div className="project-cardview-region">{region}</div>
          <div className="project-cardview-time">
            {time}
            <div className="project-cardview-detail">
              <FavoriteButton 
                onClick = {handleClickFavorite}
                toggle = {false}
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
