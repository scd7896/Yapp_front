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
    console.log('??? ' + role , (role & 4)  == 4)
    
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

  return (
 
      <div className="project-cardview">
      <Link href={props.project ? '/detail/[id]' : ''} as = {props.project ? ('/detail/' + props.project.projectId) : ''}>
      <a>
        <img
          className="project-cardview-banner"
          src="https://www.10wallpaper.com/wallpaper/medium/1909/2019_Planetary_Nebula_Clouds_4K_Universe_medium.jpg"
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
