import '../css/Park/applicant.scss'
import '../css/container.scss'

import ProjectJobGroup from '../componets/Park/ProjectJobGroup'
import UserProfileImg from '../componets/Park/UserProfileImg'
import PortfolioSimpleComponent from '../componets/MyPage/PortfolioSimpleComponent'
import ApplicantSimpleComponent from '../componets/MyPage/ApplicantSimpleComponent'
import ApplicantQnA from '../componets/Park/ApplicantQnA'

class applicant extends React.Component{

    static async getInitialProps(ctx){
        var projectId = ctx.query.project;
        var applicantId = ctx.query.id ;

        return {
            project : {
                id : 0,
                title : '프로젝트 타이틀 1'
            },
            applicant : {
                jobgroup : 'developer',
                email : 'yapp@yapp.co.kr',
                nickname : '장민정'
            },
            portfolio : [
                {
                    id : 1,
                    img : '',
                    title : '식당 웨이팅 관리 서비스',
                    roll : 'UXUI디자인',
                    stack : 'Adobe Xd, protopie',
                    link : ''
                },{
                    id : 2,
                    img : '',
                    title : '안녕하세요 관리 서비스',
                    roll : '개발',
                    stack : 'Adobe Xd, protopie',
                    link : ''
                },{
                    id : 3,
                    img : '',
                    title : '안녕하세요 관리 서비스',
                    roll : '개발',
                    stack : 'Adobe Xd, protopie',
                    link : ''
                }
            ],
            other : [
                {
                    id : 1,
                    img : '',
                    nickname : '장민정',
                    portfolios : [{},{},{}]
                },
                {
                    id : 0,
                    img : '',
                    nickname : '박준호',
                    portfolios : [{},{}]
                }
            ],
            qna : [
                {
                    q : '연락 가능한 핸드폰 번호 or 카톡 적어주세요.',
                    a : '카톡 id : ~~~~~~'
                },
                {
                    q : '연락 가능한 핸드폰 번호 or 카톡 적어주세요.',
                    a : '카톡 id : ~~~~~~'
                },
                {
                    q : '연락 가능한 핸드폰 번호 or 카톡 적어주세요.',
                    a : '카톡 id : ~~~~~~'
                },
                {
                    q : '연락 가능한 핸드폰 번호 or 카톡 적어주세요.',
                    a : '카톡 id : ~~~~~~'
                }
            ]
        };
    }

    render(){
        var projectId = this.props.project.id;

        return (
            <div className = 'applicant'>
                <div className = 'applicant-header'>
                    <div className = 'container'>
                        <div className = 'applicant-header-title'>
                            지원자 프로필
                        </div>
                        <div className = 'applicant-header-subtitle'>
                            <div className = 'applicant-flex'>
                                <div className = 'applicant-project-title'>
                                    {this.props.project.title}
                                </div>
                                <div className = 'applicant-project-jobgroup'>
                                    <ProjectJobGroup jobgroup = {this.props.applicant.jobgroup} size="big"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'container'>
                    {/*contents header*/}
                    <div className = 'applicant-contents-header'>
                        <div className = 'applicant-flex'>
                            <div className = 'applicant-contents-profile-img'>
                                <UserProfileImg size = {178}/>
                            </div>
                            <div className = 'applicant-contents-profile'>
                                <div className = 'applicant-contents-profile-nickname'>
                                    {this.props.applicant.nickname}
                                </div>
                                <div className = 'applicant-contents-profile-email'>
                                    <div className = 'applicant-flex'>
                                        <img className = 'applicant-cotents-profile-icon'></img>
                                        <div className = 'applicant-contents-profile-text'>
                                            {this.props.applicant.email ? this.props.applicant.email : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className = 'applicant-contents-profile-phonenubmer'>
                                    <div className = 'applicant-flex'>
                                        <img className = 'applicant-cotents-profile-icon'></img>
                                        <div className = 'applicant-contents-profile-text'>
                                            {this.props.applicant.phonenumber ? this.props.applicant.phonenumber : '비공개'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*contents qna*/}

                    <div className = 'applicant-cotents-qna'>
                        <div className = 'applicant-contents-section-title'>
                            지원자의 답변
                        </div>
                        <div className = 'applicant-contents-qna-container'>
                            {
                                this.props.qna.map((qna,i) =>
                                    <ApplicantQnA id = {i}
                                    q = {qna.q}
                                    a = {qna.a}/>
                            )}
                        </div>
                    </div>

                    {/*contents portfolio*/}
                    <div className = 'applicant-cotents-portfolio'>
                        <div className = 'applicant-contents-section-title'>
                            지원자이력
                        </div>
                        <div className = 'applicant-contents-portfolio-container'>
                            {
                                this.props.portfolio.map(portfolio => 
                                    <PortfolioSimpleComponent 
                                        type ='applicant'
                                        post = {portfolio}/>
                                )
                            }
                        </div>
                        <div className = 'applicant-contents-approve'>
                            <div className = 'applicant-contents-approve-button'>
                                <div className = 'applicant-contents-approve-button-text'>
                                    지원자 승인
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*contents other*/}
                    <div className = 'applicant-cotents-other'>
                        <div className = 'applicant-contents-other-title'>
                            <div className = 'applicant-flex'>
                                <div className = 'applicant-contents-other-title-project'>
                                    {this.props.project.title}
                                </div>
                                <div className = 'applicant-contents-other-title-title'>
                                    의 다른 지원자 보기
                                </div>
                            </div>
                        </div>
                        <div className = 'applicant-contents-other-container'>
                            {
                                this.props.other.map(applicant => <ApplicantSimpleComponent 
                                    projectId = {projectId}
                                    applicant = {applicant}
                                    approve = 'false'/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default applicant;