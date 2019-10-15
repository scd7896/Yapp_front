import React,{useEffect} from 'react'

import '../css/park/detail.scss'
import '../css/container.scss'
import JobGroupCardView from '../componets/Park/JobGroupCardView'
import DetailQnA from '../componets/Park/DetailQnA'

class Detail extends React.Component{
    static async getInitialProps(ctx){
        return {}
    }

    constructor(props){
        super(props);
    }

    render(){

        var jobgroups = '디자이너';
        var title = '모임장소 추천서비스모';

        return(
            <div id = 'detail_root'>

                {/* 컨텐츠 영역입니다 */}

                <div className = 'detail-title-wrapper'>
                    <div className = 'detail-title-container container'>
                        <div className = 'detail-title-jobgroup-wrapper'>
                            <div className = 'detail-title-jobgroup-mark'></div>
                            <div className = 'detail-title-jobgroups'>{jobgroups}</div>
                        </div>
                        <div className = 'detail-title-contents-wrapper'>
                            <div className = 'detail-title'>{title}</div>
                            <div className = "detail-button-wrapper">
                                <div className = "detail-favorite-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.854" height="25.768" viewBox="0 0 17.854 25.768">
                                    <g id="그룹_1901" data-name="그룹 1901" transform="translate(-1450.769 -61)">
                                        <path id="패스_1756" data-name="패스 1756" d="M1477.957,92.98v12.79h-.166l-8.582-6.594Z" transform="translate(-9.334 -19.003)" fill="#afafaf"/>
                                        <path id="패스_1757" data-name="패스 1757" d="M1464.623,61V73.977l-8.749,6.2-9.106,6.452V61Z" transform="translate(4 0)" fill="#cccdd0"/>
                                    </g>
                                    </svg>
                                </div>
                                <div className = "detail-apply-button">지원하기</div>
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
                        모임장소 정할 때 중간지점 찾아주는 모바일 앱 서비스입니다. 서비스 기능 정의는 다 되어 있습니다!<br/>
                        현재 iOS 개발자와, 안드로이드 개발자 팀원이 있으며 서비스 디자인 해주실 디자이너 분이 필요한 상황입니다.<br/>
                    </div>
                </div>

                <div className = 'detail-info-container container'>
                    <div className = 'detail-info-title detail-block-title'>진행 정보</div>
                    <div className = 'detail-info-contents-wrapper'>
                        <div className = 'detail-info-subtitle'>
                            <div className = 'detail-info-subtitle-region'>지역</div>
                            <div className = 'detail-info-subtitle-step'>진행단계</div>
                        </div>
                        <div className = 'detail-info-contents'>
                            <div className = 'detail-info-region'>서울</div>
                            <div className = 'detail-info-step'>팀 빌딩 단계</div>
                        </div>
                    </div>
                </div>

                <div className = 'detail-recruit-container container'>
                    <div className = 'detail-recruit-title  detail-block-title'>모집 직군</div>
                    <JobGroupCardView type = 'big' jobgroup = 'designer'/>
                </div>

                <div className = 'detail-curmember-container container'>
                    <div className = 'detail-curmember-title  detail-block-title'>모집 직군</div>
                    <JobGroupCardView type = 'small' jobgroup = 'developer' number = '1'/>
                    <JobGroupCardView type = 'small' jobgroup = 'designer' number = '1'/>
                    <JobGroupCardView type = 'small' jobgroup = 'designer' number = '2'/>
                    <JobGroupCardView type = 'small' jobgroup = 'planner' number = '1'/>
                </div>

                {/* QnA 영역입니다 */}

                <DetailQnA/>                

            </div>
        )
    }

}

export default Detail