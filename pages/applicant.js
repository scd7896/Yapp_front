import '../css/Park/applicant.scss'
import '../css/container.scss'

import ProjectJobGroup from '../componets/Park/ProjectJobGroup'
import UserProfileImg from '../componets/Park/UserProfileImg'
import PortfolioSimpleComponent from '../componets/MyPage/PortfolioSimpleComponent'
import ApplicantSimpleComponent from '../componets/MyPage/ApplicantSimpleComponent'
import ApplicantQnA from '../componets/Park/ApplicantQnA'

import baseURL from '../url';
import nextCookies from'next-cookies';
import cookies from '../methods/cookies'

import roles from '../methods/role'

import LogoutCheck from '../componets/Park/LogoutCheck'

/*
{ 
   "project":[ 
      { 
         "projectId":1,
         "title":"해커톤 팀원 모집",
         "content":"2019 yapp 해커톤에 참여하실 분들 구합니다. ",
         "role":3,
         "step":0,
         "currentMember":"0",
         "location":1,
         "expectedPeriod":3,
         "thumbnailImage":null,
         "attachFile":null,
         "viewCnt":593,
         "createAt":"2019-11-24T04:32:23.000Z",
         "isClosed":false,
         "userId":1,
         "interviewQuestions":[ 
            { 
               "sn":1,
               "content":"일주일에 몇 회정도 참여 가능하신가요?",
               "role":0,
               "projectId":1
            },
            { 
               "sn":2,
               "content":"개발자와 협업 경험이 있으신가요?",
               "role":2,
               "projectId":1
            }
         ],
         "interviewAnswers":[ 
            { 
               "id":5,
               "content":"네 참여할 수 있습니다.",
               "sn":1,
               "role":0,
               "userId":5,
               "projectId":1
            },
            { 
               "id":6,
               "content":"네 참여할 수 있습니다.",
               "sn":2,
               "role":0,
               "userId":5,
               "projectId":1
            }
         ]
      }
   ],
   "applicant":{ 
      "email":"admin@toys.com",
      "name":"박준호",
      "profileImage":"https://yapp-backend.kr.object.ncloudstorage.com/avatar/dfd80c65c4e2747af925b32f07a6a973"
   },
   "portfolios":[ 
      { 
         "portfolioId":7,
         "title":"portfolioImage",
         "useStack":"portfolioImage",
         "myRole":"portfolioImage",
         "thumbnailImage":"https://yapp-backend.kr.object.ncloudstorage.com/project/6ea476b05b2cdba465fdc8bcaf1a7c5d",
         "attachFile":""
      }
   ]
}

*/

class applicant extends React.Component{

    static async getInitialProps(ctx){

        var userToken = nextCookies(ctx)['user-token']

        if(userToken == undefined || userToken == ''){
            if (ctx.res) {
                ctx.res.writeHead(302, {
                    Location: '/'
                })
                ctx.res.end();
            } else {
                Router.push('/');
            }
        }

        try {
            var projectId = parseInt(ctx.query.project);
            var applicantId = parseInt(ctx.query.id);
            var data = {};

            if(isNaN(projectId) || isNaN(applicantId)){
                throw 404
            }

            var res = await fetch(baseURL + '/mypage/recruit/' + projectId , {
                headers : {
                    'Authorization' : 'bearer ' + userToken,
                    'accpet' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                method : 'POST',
                body : JSON.stringify({'applicantId' : applicantId})
            })

            if(! res.ok)
                throw 500

            var resJson = await res.json();

            data.res = resJson
            data.projectId = projectId
            data.applicantId = applicantId

            return data;
        }
        catch(e){
            var Location = '/error/404'
            if(e == 500){
                Location = '/error/500'
            }

            if (ctx.res) {
                ctx.res.writeHead(302, {
                    Location: Location
                })
                ctx.res.end();
            } else {
                Router.push(Location);
            }
            return {};
        }

     
    }

    constructor(props){
        super(props);
        this.state = {
            other : []
        }

        console.log(this.props);

        var interviewQuestions = JSON.parse(JSON.stringify(this.props.res.project[0].interviewQuestions));
        var interviewAnswers = JSON.parse(JSON.stringify(this.props.res.project[0].interviewAnswers));
        this.interviewSet = [];

        interviewQuestions.sort((a,b) => a.sn - b.sn);
        interviewAnswers.sort((a,b) => a.sn - b.sn);

        var interviewAnswer , interviewQuestion ;

        while(interviewQuestions.length > 0){
            interviewQuestion = interviewQuestions.shift();

            if(interviewAnswers.length >0 && interviewAnswers[0].sn == interviewQuestion.sn){
                interviewAnswer = interviewAnswers.shift();

                this.interviewSet.push({
                    q : interviewQuestion,
                    a : interviewAnswer
                })
            }
            else{
                this.interviewSet.push({
                    q : interviewQuestion
                })
            }
        }

        this.initialLoad = false;

        this.handleClickApprove = this.handleClickApprove.bind(this);
    }

    handleClickApprove(){
        var userToken = cookies.getCookie('user-token');
        if(userToken != '' || userToken != undefined){
            if(confirm('이 지원자를 정말 승인하겠습니까?')){
                fetch(baseURL + '/mypage/recruit/' + this.props.projectId + '/accept', {
                    headers : {
                        'Authorization' : 'bearer ' + userToken,
                        'accpet' : 'application/json',
                        'Content-Type' : 'application/json'
                    },
                    method : 'POST',
                    body : JSON.stringify({'applicantId' : this.props.applicantId})
                })
        
            }
        }


    }

    componentDidMount(){
        if(this.initialLoad == false){
            this.initialLoad = true;

            var curProjectId = this.props.res.project[0].projectId;

            var curState = JSON.parse(JSON.stringify(this.state));
            var setState = (this.setState).bind(this);

            var userToken = cookies.getCookie('user-token');
            var applicantId = this.props.applicantId;
            console.log(this.props)

            if(userToken != '' && userToken != undefined){
                fetch(baseURL + '/mypage/recruit' , {
                    headers : {
                        'Authorization' : 'bearer ' + userToken,
                        'accept' : 'application/json',
                        'Content-Type' : 'application/json'
                    },
                    method : 'GET'
                }).then(res => {
                    if(res.ok){
                        return res.json()
                    }
                    else{
                        throw res.statusText
                    }
                }).then(res => {
                    
                    var curProject = res.recruitProjects.filter((project) => project.projectId == curProjectId);
                    var applicants = curProject[0].applicants.filter(applicant => applicant.userId != applicantId);
                    curState.other = applicants;
                    
                    setState(curState);
                })
            }

        }
    }

    render(){
        var projectId = this.props.res.project[0].proejctId;

        var role = parseInt(this.props.res.project[0].role) ;
        var roleTexts = ['안됨'];

        /*
        if(role <= 1){
            roleTexts.push(roles[0]);
        }
        else if(role <= 2){
            roleTexts.push(roles[1]);
        }
        else {
            roleTexts.push(roles[2]);
        }
        */

        var roleComponentes = roleTexts.map(role =>  <ProjectJobGroup jobgroup = {role} size="big"/>)


        return (
            <div className = 'applicant'>
                <LogoutCheck/>
                <div className = 'applicant-header'>
                    <div className = 'container'>
                        <div className = 'applicant-header-title'>
                            지원자 프로필
                        </div>
                        <div className = 'applicant-header-subtitle'>
                            <div className = 'applicant-flex'>
                                <div className = 'applicant-project-title'>
                                    {this.props.res.project[0].title}
                                </div>
                                <div className = 'applicant-project-jobgroup'>
                                   {roleComponentes}
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
                                    {this.props.res.applicant.name}
                                </div>
                                <div className = 'applicant-contents-profile-email'>
                                    <div className = 'applicant-flex'>
                                        <div className = 'applicant-cotents-profile-icon-box'>
                                        <svg className = 'applicant-contents-profile-icon-mail' xmlns="http://www.w3.org/2000/svg" width="19.847" height="13.59" viewBox="0 0 19.847 13.59">
                                            <g id="그룹_2280" dataName="그룹 2280" transform="translate(.347 .5)">
                                                <path id="사각형_3883" d="M0 0h18.847v12.59H0z" class="cls-1" dataName="사각형 3883" transform="translate(.153)" fill="none" strokeMiterlimit="10" stroke="#5c63ff"/>
                                                <path id="패스_1949" d="M76.317 81.1l9.533 7.106L95.5 81.1" class="cls-2" dataName="패스 1949" transform="translate(-76.317 -81.031)" fill="none" strokeMiterlimit="10" stroke="#4ce4bd"/>
                                            </g>
                                        </svg>
                                        </div>
                                        <div className = 'applicant-contents-profile-text'>
                                            {this.props.res.applicant.email ? this.props.res.applicant.email : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className = 'applicant-contents-profile-phonenubmer'>
                                    <div className = 'applicant-flex'>
                                        <div className = 'applicant-cotents-profile-icon-box'>
                                            <svg className = 'applicant-contents-profile-icon-phone' xmlns="http://www.w3.org/2000/svg" width="12.855" height="20.107" viewBox="0 0 12.855 20.107">
                                                <g id="그룹_2281" dataName="그룹 2281" transform="translate(.5 .5)">
                                                    <path id="사각형_3884" d="M0 0h19.107v11.856H0z" class="cls-1" dataName="사각형 3884" transform="rotate(90 5.928 5.928)" fill="none" strokeMiterlimit="10" stroke="#5c63ff"/>
                                                    <path id="선_1013" d="M0 0h11.685" class="cls-2" dataName="선 1013" transform="translate(.005 15.83)"  fill="none" strokeMiterlimit="10" stroke="#4ce4bd"/>
                                                    <path id="선_1014" d="M0 0h11.746" class="cls-2" dataName="선 1014" transform="translate(.035 2.065)" fill="none" strokeMiterlimit="10" stroke="#4ce4bd"/>
                                                    <path id="선_1015" d="M1.233 0H0" class="cls-1" dataName="선 1015" transform="translate(5.334 17.401)" fill="none" strokeMiterlimit="10" stroke="#5c63ff"/>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className = 'applicant-contents-profile-text'>
                                            {this.props.res.applicant.phonenumber ? this.props.res.applicant.phonenumber : '비공개'}
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
                                this.interviewSet.map((qna,i) =>
                                    <ApplicantQnA id = {i}
                                    q = {qna.q.content}
                                    a = {qna.a ? qna.a.content : ''}/>
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
                                this.props.res.portfolios.map(portfolio => 
                                    <PortfolioSimpleComponent 
                                        type ='applicant'
                                        portfolio = {portfolio}/>
                                )
                            }
                        </div>
                        <div className = 'applicant-contents-approve'>
                            <div className = 'applicant-contents-approve-button'
                                onClick = {this.handleClickApprove}>
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
                                    {this.props.res.project[0].title}
                                </div>
                                <div className = 'applicant-contents-other-title-title'>
                                    의 다른 지원자 보기
                                </div>
                            </div>
                        </div>
                        <div className = 'applicant-contents-other-container'>
                            {
                                this.state.other.map(applicant => <ApplicantSimpleComponent 
                                    projectId = {projectId}
                                    applicant = {applicant}
                                    type = 'other'/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default applicant;