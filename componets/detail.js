import React,{useEffect} from 'react'

import '../css/park/detail.scss'
import '../css/container.scss'


import JobGroupCardView from './Park/JobGroupCardView'
import DetailQnA from './Park/DetailQnA'
import role from '../methods/role'
import ProjectJobGroup from './Park/ProjectJobGroup'



class Detail extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){
        
        var jobgroups = role[this.props.role];
        var title = this.props.title;
        var content = this.props.content ? this.props.content : '';
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
                            <ProjectJobGroup jobgroup = {jobgroups}/>
                        </div>
                        <div className = 'detail-title-contents-wrapper'>
                            <div className = 'detail-title-flex'>
                                <div className = 'detail-title'>{title}</div>
                                <div className = "detail-button-wrapper">
                                    <div className = 'detail-button-flex'>
                                    <div className = "detail-favorite-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17.854" height="25.768" viewBox="0 0 17.854 25.768">
                                        <g id="그룹_1901" data-name="그룹 1901" transform="translate(-1450.769 -61)">
                                            <path id="패스_1756" data-name="패스 1756" d="M1477.957,92.98v12.79h-.166l-8.582-6.594Z" transform="translate(-9.334 -19.003)" fill="#afafaf"/>
                                            <path id="패스_1757" data-name="패스 1757" d="M1464.623,61V73.977l-8.749,6.2-9.106,6.452V61Z" transform="translate(4 0)" fill="#cccdd0"/>
                                        </g>
                                        </svg>
                                    </div>
                                    <div className = "detail-apply-button" onClick = {this.props.openModal}>지원하기</div>
                                    
                                    </div>
                                    
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
            </div>
            <div className="detail-info-contents">
              <div className="detail-info-region">서울</div>
              <div className="detail-info-step">팀 빌딩 단계</div>
            </div>
          </div>
        </div>

        <div className="detail-recruit-container container">
          <div className="detail-recruit-title  detail-block-title">
            모집 직군
          </div>
          <JobGroupCardView type="big" jobgroup={jobgroups} toggle="default" />
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

        <DetailQnA />
      </div>
    );
  }
}

export default Detail;
