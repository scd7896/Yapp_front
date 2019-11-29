import React,{useEffect} from 'react'

import '../css/park/detail.scss'
import '../css/container.scss'

import roles from '../methods/role'

import JobGroupCardView from './Park/JobGroupCardView'
import DetailQnA from './Park/DetailQnA'

import DetailButtons from './Park/DetailButtons'

import cookies from '../methods/cookies'

import projectLocation from '../methods/location'
import projectStep from '../methods/step'
import projectPeriod from '../methods/expectedPeriod'


import fetch from 'isomorphic-unfetch'
import baseURL from '../url'
import  Router  from 'next/router'
import JobgruopList from './Park/JobgruopList';

class Detail extends React.Component{

    constructor(props){
        super(props);

        this.state = {
          isClosed : this.props.project.isClosed 
        }

        this.projectId = this.props.query.id;
        this.setIsClosed = this.setIsClosed.bind(this);
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

    setIsClosed(isClosed){
      var curState = JSON.parse(JSON.stringify(this.state));

      curState.isClosed = isClosed;

      this.setState(curState);
    }

    
    render(){
        
        var jobgroups = [];
        var roleNumber = 1;
        for(var i = 0 ; i < roles.length ; i ++){
          if((this.props.project.role & roleNumber) !== 0){
            jobgroups.push(roles[i]);
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

        var curMember = parseInt(this.props.project.currentMember);
        var curDesigner = curMember % 10;
        curMember = parseInt(curMember/ 10);
        var curDeveloper = curMember % 10;
        curMember = parseInt(curMember/ 10);
        var curPlanner = curMember % 10;
        
        return(
            <div id = 'detail_root'>
                
                {/* 컨텐츠 영역입니다 */}

                <div className = 'detail-title-wrapper'>
                    <div className = 'detail-title-container container'>
                        <div className = 'detail-title-jobgroup-wrapper'>
                          <JobgruopList role = {this.props.project.role}/>
                        </div>
                        <div className = 'detail-title-contents-wrapper'>
                            <div className = 'detail-title-flex'>
                                <div className = 'detail-title'>{title}</div>
                                <div className = "detail-button-wrapper">
                                  <DetailButtons
                                    projectId = {this.projectId}
                                    projectUserId = {this.props.project.userId}
                                    isClosed = {this.state.isClosed}
                                    setIsClosed = {this.setIsClosed}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                  this.state.isClosed 
                  ? (
                    <div className ='container'>
                      <div className = 'detail-finished'>
                        <svg className ='detail-finished-svg' xmlns="http://www.w3.org/2000/svg" width="388" height="201" viewBox="0 0 388 201">
                          <g id="그룹_2241" dataName="그룹 2241" transform="translate(-766 -486)">
                            <text id="아쉽지만_해당_모집글은_마감되었습니다_:_다른_모집글을_더_찾아보시겠어요_" dataName="아쉽지만 해당 모집글은 마감되었습니다 :( 다른 모집글을 더 찾아보시겠어요?" transform="translate(960 644)" fill="#333" fontSize="24" fontFamily="'Noto Sans KR', sans-serif" letterSpacing="-0.05em" fontWeight="500"><tspan x="-193.116" y="0">아쉽지만 해당 모집글은 </tspan><tspan y="0" fill="#5c5cff">마감</tspan><tspan y="0">되었습니다 :(</tspan><tspan fontSize="22" fontFamily="'Noto Sans KR', sans-serif" fontWeight="400"><tspan x="-144.826" y="37">다른 모집글을 더 찾아보시겠어요?</tspan></tspan></text>
                            <g id="icon_recruit_closed" transform="translate(889 486)">
                              <path id="패스_1916" dataName="패스 1916" d="M-1790.7,645.149l-36.506-7.013,3.273-17.036,32.855,6.311Z" transform="translate(1848.439 -609.999)" fill="none"/>
                              <path id="패스_1917" dataName="패스 1917" d="M-1788.713,636.228-1825.219,629l1.282-7.9,32.855,6.5Z" transform="translate(1689.787 -932.908) rotate(-11)" fill="none" stroke="#4ce4bd" strokeMiterlimit="10" strokeWidth="3"/>
                              <rect id="사각형_3831" dataName="사각형 3831" width="86.118" height="54.521" transform="translate(22.455 18.857) rotate(9.874)" fill="none"/>
                              <rect id="사각형_3832" dataName="사각형 3832" width="86.118" height="54.521" transform="translate(17.891 32.859) rotate(-0.126)" fill="none" stroke="#5c63ff" strokeMiterlimit="10" strokeWidth="3"/>
                              <circle id="타원_693" dataName="타원 693" cx="22.614" cy="22.614" r="22.614" transform="matrix(1, -0.017, 0.017, 1, 83.772, 9.383)" fill="#eaebff"/>
                              <g id="그룹_2201" dataName="그룹 2201" transform="matrix(1, -0.017, 0.017, 1, 96.547, 22.049)">
                                <line id="선_988" dataName="선 988" x2="4.56" y2="5.351" transform="translate(14.326 16.103)" fill="none" stroke="#5c63ff" strokeMiterlimit="10" strokeWidth="3"/>
                                <circle id="타원_694" dataName="타원 694" cx="8.865" cy="8.865" r="8.865" transform="translate(0 0)" fill="none" stroke="#5c63ff" strokeMiterlimit="10" strokeWidth="3"/>
                              </g>
                              <g id="사각형_3833" dataName="사각형 3833" fill="none" stroke="#707070" strokeWidth="1" opacity="0">
                                <rect width="142" height="100" stroke="none"/>
                                <rect x="0.5" y="0.5" width="141" height="99" fill="none"/>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <br/>
                        <div className = 'button detail-finished-other'
                        onClick= {() => Router.push('/recruit')}>
                          다른 모집글 보기
                        </div> 
                      </div>
                    </div> 
                  )
                  : null
                }

                <div className = 'detail-contents-container container'>
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
            현재 팀원
          </div>

          {curPlanner > 0 ? <JobGroupCardView type="small" jobgroup="planner" number={curPlanner} /> : null}
          {curDeveloper > 0 ? <JobGroupCardView type="small" jobgroup="developer" number={curDeveloper} />: null}
          {curDesigner > 0 ? <JobGroupCardView type="small" jobgroup="designer" number={curDesigner} />: null}
          {(curDesigner <= 0 && curDeveloper <= 0 && curPlanner <= 0 )? (
            <div className = 'detail-curmember-none'>
              아직 현재 팀원이 없습니다.
            </div>) : null}
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
