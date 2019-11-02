import '../css/Park/applicant.scss'
import '../css/container.scss'

import ProjectJobGroup from '../componets/Park/ProjectJobGroup'
import UserProfileImg from '../componets/Park/UserProfileImg'

class applicant extends React.Component{

    static async getInitialProps(ctx){
        var projectId = ctx.query.project;
        var applicantId = ctx.query.id ;

        return {
            project : {
                title : '프로젝트 타이틀 1'
            },
            applicant : {
                jobgroup : 'developer',
                email : 'yapp@yapp.co.kr',
                nickname : '장민정'
            }
        };
    }

    render(){

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
                                <div className = 'applicant-contents-profile'>
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

                        </div>
                    </div>

                    {/*contents portfolio*/}
                    <div className = 'applicant-cotents-portfolio'>
                        <div className = 'applicant-contents-section-title'>
                            지원자이력
                        </div>
                        <div className = 'applicant-contents-portfolio-container'>

                        </div>
                        <div className = 'applicant-contents-approve'>
                            <div className = 'applicant-contents-approve-button'>

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
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default applicant;