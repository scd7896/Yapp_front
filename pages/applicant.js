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
            alert('로그인 후 시도해주세요')
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
            ohter : []
        }

        var interviewQuestions = JSON.parse(JSON.stringify(this.props.res.project.interviewQuestions));
        var interviewAnswers = JSON.parse(JSON.stringify(this.props.res.project.interviewAnswers));
        this.interviewSet = [];

        interviewQuestions.sort((a,b) => a.sn - b.sn);
        interviewAnswers.sort((a,b) => a.sn - b.sn);

        var interviewAnswer , interviewQuestion ;

        while(interviewQuestions.length > 0){
            interviewQuestion = interviewQuestions.shift();
            if(interviewAnswers[0].sn == interviewQuestion.sn){
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
        if(confirm('이 지원자를 정말 승인하겠습니까?')){
            fetch(baseURL + '/mypage/recruit/' + projectId + '/accept', {
                headers : {
                    'Authorization' : 'bearer ' + userToken,
                    'accpet' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                method : 'POST',
                body : JSON.stringify({'applicantId' : applicantId})
            })
    
        }

    }

    componentDidMount(){
        if(this.initialLoad == false){
            this.initialLoad = true;

            var curProjectId = this.props.res.project.projectId;

            var curState = JSON.parse(JSON.stringify(this.state));
            var setState = this.setState;

            var userToken = cookies.getCookie('user-token');

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
                    var applicants = curProject.applicants;
                    curState.other = applicants;
                    setState(curState);
                })
            }

        }
    }

    render(){
        var projectId = this.props.project.id;

        var role = parseInt(this.props.res.project.role) ;
        var roleTexts = [];

        if((role & 1) == 1){
            roleTexts.push(roles[0]);
        }
        else if((role & 2) == 2){
            roleTexts.push(roles[1]);
        }
        else if((role & 4) == 4){
            roleTexts.push(roles[2]);
        }

        var roleComponentes = roleTexts.map(role =>  <ProjectJobGroup jobgroup = {role} size="big"/>)


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
                                    {this.props.res.project.title}
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
                                        <img className = 'applicant-cotents-profile-icon'></img>
                                        <div className = 'applicant-contents-profile-text'>
                                            {this.props.res.applicant.email ? this.props.res.applicant.email : ''}
                                        </div>
                                    </div>
                                </div>
                                <div className = 'applicant-contents-profile-phonenubmer'>
                                    <div className = 'applicant-flex'>
                                        <img className = 'applicant-cotents-profile-icon'></img>
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
                                        post = {portfolio}/>
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
                                    {this.props.res.project.title}
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