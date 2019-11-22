import React,{useEffect} from 'react'

import '../css/park/detail.scss'
import '../css/container.scss'


import JobGroupCardView from './Park/JobGroupCardView'
import DetailQnA from './Park/DetailQnA'
import role from '../methods/role'
import ProjectJobGroup from './Park/ProjectJobGroup'

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
        this. handleClickApplyButton = this. handleClickApplyButton.bind(this);
    }

    handleClickFavorite(){
    }

    fetchIsFavorite(){
      
    }

    componentDidMount(){

      var userToken = cookies.getCookie('user-token');
      var headers = {
        'accept' : 'application/json'
      }
      if(userToken != '' && userToken == undefined){
        headers.Authorization = "bearer " + userToken;
      }

      fetch(baseURL + '/project/' + this.projectId + '/viewCnt', {
        headers : headers,
        method : 'PATCH'
      })
    }

    handleClickApplyButton(){
      var userToken = cookies.getCookie('user-token');
      if(userToken == undefined || userToken == ''){
          this.props.openLoginModal();
      }
      else{
        this.props.openApplyModal()
      }
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

        var buttons = (
          <div className = 'detail-button-flex'>
            <div className = "detail-favorite-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.854" height="25.768" viewBox="0 0 17.854 25.768">
                <g id="그룹_1901" data-name="그룹 1901" transform="translate(-1450.769 -61)">
                    <path id="패스_1756" data-name="패스 1756" d="M1477.957,92.98v12.79h-.166l-8.582-6.594Z" transform="translate(-9.334 -19.003)" fill="#afafaf"/>
                    <path id="패스_1757" data-name="패스 1757" d="M1464.623,61V73.977l-8.749,6.2-9.106,6.452V61Z" transform="translate(4 0)" fill="#cccdd0"/>
                </g>
                </svg>
            </div>
            <div className = "detail-apply-button" onClick = {this.handleClickApplyButton}>지원하기</div>
          </div>
        )
        console.log(this.props.user.userId);

        if(this.props.project && this.props.user.userId && 
          this.props.project.userId == this.props.userId){
            <div className = 'detail-button-flex'>
            <div className = "detail-apply-button">수정</div>
              <div className = "detail-apply-button">모집마감</div>
            </div>
        }
        
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
                                  {buttons}
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
