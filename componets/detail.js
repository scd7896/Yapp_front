import React,{useEffect} from 'react'

import '../css/park/detail.scss'
import '../css/container.scss'


import JobGroupCardView from './Park/JobGroupCardView'
import DetailQnA from './Park/DetailQnA'
import role from '../methods/role'
import ProjectJobGroup from './Park/ProjectJobGroup'
import DetailButtons from './Park/DetailButtons'

import cookies from '../methods/cookies'

import projectLocation from '../methods/location'
import projectStep from '../methods/step'
import projectPeriod from '../methods/expectedPeriod'


import fetch from 'isomorphic-unfetch'
import baseURL from '../url'

class Detail extends React.Component{

    constructor(props){
        super(props);

        this.state = {
          favorite : false
        }

        this.projectId = this.props.query.id;
    }


    componentDidMount(){

      var userToken = cookies.getCookie('user-token');
      var headers = {
        'accept' : 'application/json'
      }
      if(userToken != '' && userToken == undefined){
        headers.Authorization = "bearer " + userToken;
      }

      fetch(baseURL + '/projects/' + this.projectId + '/viewCnt', {
        headers : headers,
        method : 'PATCH'
      })
    }

    
    render(){
        
        var jobgroups = [];
        var roleNumber = 1;
        for(var i = 0 ; i < role.length ; i ++){
          if((this.props.project.role & roleNumber) !== 0){
            jobgroups.push(role[i]);
          }
          roleNumber *= 2;
        }
        
        var title = this.props.project.title;
        var content = this.props.project.content ? this.props.project.content : '';
        var contentLines = content.split('\n').map(contentLine =>  (
            <span>
              {contentLine}<br/>
            </span>
          )
        );
        
        return(
            <div id = 'detail_root'>
                
                {/* 컨텐츠 영역입니다 */}

                <div className = 'detail-title-wrapper'>
                    <div className = 'detail-title-container container'>
                        <div className = 'detail-title-jobgroup-wrapper'>
                          {
                            
                            jobgroups.map(jobgroup => 
                            <ProjectJobGroup jobgroup = {jobgroup}/>)
                            
                          }
                        </div>
                        <div className = 'detail-title-contents-wrapper'>
                            <div className = 'detail-title-flex'>
                                <div className = 'detail-title'>{title}</div>
                                <div className = "detail-button-wrapper">
                                  <DetailButtons
                                    projectId = {this.projectId}
                                    projectUserId = {this.props.project.userId}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = 'detail-contents-container container'>
                    <img className = 'detail-img'/>
                    <div className = 'detail-introduce  detail-block-title'>
                        프로젝트 간단 소개
                    </div>
                    <div className= 'detail-introduce-contents'>
                        {contentLines}
                    </div>
                </div>

    

        <div className="detail-info-container container">
          <div className="detail-info-title detail-block-title">진행 정보</div>
          <div className="detail-info-contents-wrapper">
            <div className="detail-info-subtitle">
              <div className="detail-info-subtitle-region">지역</div>
              <div className="detail-info-subtitle-step">진행단계</div>
              <div className="detail-info-subtitle-period">예상기간</div>
            </div>
            <div className="detail-info-contents">
              <div className="detail-info-region">
                {this.props.project.location ?  projectLocation[this.props.project.location] : projectLocation[0] }
              </div>
              <div className="detail-info-step"> 
                {this.props.project.step ?  projectStep[this.props.project.step] : projectStep[0] }
              </div>
              <div className="detail-info-period">
                {this.props.project.expectedPeriod ?  projectPeriod[this.props.project.expectedPeriod] : projectPeriod[0] }
              </div>
            </div>
          </div>
        </div>

        <div className="detail-recruit-container container">
          <div className="detail-recruit-title  detail-block-title">
            모집 직군
          </div>
          { jobgroups.map(jobgroup => <JobGroupCardView type="big" jobgroup={jobgroup} toggle="default" />)}
          
        </div>

        <div className="detail-curmember-container container">
          <div className="detail-curmember-title  detail-block-title">
            모집 직군
          </div>
          <JobGroupCardView type="small" jobgroup="developer" number="1" />
          <JobGroupCardView type="small" jobgroup="designer" number="1" />
          <JobGroupCardView type="small" jobgroup="designer" number="2" />
          <JobGroupCardView type="small" jobgroup="planner" number="1" />
        </div>

        {/* QnA 영역입니다 */}

        <DetailQnA 
          project = {this.props.project}
          openLoginModal = {this.props.openLoginModal}/>
      </div>
    );
  }
}

export default Detail;
