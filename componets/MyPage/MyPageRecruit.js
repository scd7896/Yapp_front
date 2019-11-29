//마이페이지의 '모집 현황' 섹션입니다.

import '../../css/Park/mypage.scss';
import '../../css/MyPage/MyPageRecruit.scss';

import RecruitSimpleContents from './RecruitSimpleContents.js'
import ProjectSimpleHOC from './ProjectSimpleHOC.js'
import ApplicantList from './ApplicantList'
import cookies from '../../methods/cookies'
import baseURL from '../../url'

var RecruitSimpleComponent = ProjectSimpleHOC(RecruitSimpleContents);

class MyPageRecruit extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            recruitProjects : [
            
            ]
        }

        this.updateScreen = this.updateScreen.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount(){
        this.updateScreen();
    }

    async updateScreen(){

        try{

            var userToken = cookies.getCookie('user-token');

            if(userToken != '' && userToken != undefined){
                var res = await fetch(baseURL + '/mypage/recruit', {
                    'headers' : {
                        "Authorization" : "bearer " + userToken,
                        'accept' : 'application/json',
                        'Content-Type' : 'application/json'
                    }
                })
                if(res.ok){
                    var curState = await res.json();

                    var toggleState = window.sessionStorage.getItem('toggleState');

                    if(toggleState){
                        toggleState = JSON.parse(toggleState);
                        var toggleStateKeys = Object.keys(toggleState);
            
                        for(var i = 0 ; i < toggleStateKeys.length ; i ++){
                            var toggleStateKey = toggleStateKeys[i];
            
                            for(var j = 0 ; j < curState.recruitProjects.length ; j ++){
                                if(curState.recruitProjects[j].projectId == toggleStateKey){
                                    curState.recruitProjects[j].toggle = toggleState[toggleStateKey];
                                }
                            }
                        }

                    }
                    else{
                        for(var i = 0 ; i < curState.recruitProjects.length ; i++){
                            curState.recruitProjects[i].toggle = 0;
                        }
                    }

                    console.log(curState)

                    this.setState(curState);
                }
            }else{
            }

        }
        catch(e){
            console.log(e)
        }
    }

    handleToggle(id){

        var curState = JSON.parse(JSON.stringify(this.state));
        var curRecruit = curState.recruitProjects;

        for(var i = 0 ; i < curRecruit.length ; i ++){
            if(curRecruit[i].projectId == id){
                if(curRecruit[i].toggle == -1){
                    curRecruit[i].toggle = 2;
                }
                else if(curRecruit[i].toggle == 0){
                    curRecruit[i].toggle = 1;
                }
                else if(curRecruit[i].toggle == 1){
                    curRecruit[i].toggle = 2;
                }
                else{
                    curRecruit[i].toggle = 1;
                }
            }
        }

        var toggleState = {};

        for(var i = 0 ; i < curRecruit.length ; i ++){
            if(curRecruit[i].toggle == 1){
                toggleState[curRecruit[i].projectId] = -1;
            }
            else{
                if(toggleState.hasOwnProperty(curRecruit[i].projectId)){
                    delete toggleState[curRecruit[i].projectId];
                }
            }
        }

        sessionStorage.setItem('toggleState', JSON.stringify(toggleState));



        this.setState(curState);
    }
    
    render(){

        
        var handleToggle = this.handleToggle;

        var recruitSimpleComponents = this.state.recruitProjects.map((info) => {
                var toggle = info.toggle;
        
                return (
                    <div className = 'recruit-simple-set'>
                        <div className = {('recruit-simple-component-' + (toggle == -1 ? 'init-off' : (toggle == 0 ? 'init' : (toggle == 1 ? 'off' : 'on'))))}>
                            <RecruitSimpleComponent
                                key = {info.projectId}
                                id = {info.projectId}
                                info = {info}
                                handleToggle = {handleToggle} //HOC개조해야함
                            />
                        </div> 
                        <div className = {('applicant-list-' + (toggle == -1 ? 'init-on' : (toggle == 0 ? 'init' : (toggle == 1 ? 'on' : 'off'))))}>
                            <ApplicantList
                                key = {info.projectId}
                                id = {info.projectId}
                                project = {info}
                                handleToggle = {handleToggle}
                                updateScreen = {updateScreen}
                            />
                        </div> 
                    </div>
                )
            }
        );

        return (
            <div className = 'mypage-bottom-section-bg'>
                <div className = 'container'>
                    <div className = 'mypage-sub-container mypage-recruit-container'>
                        {recruitSimpleComponents}
                    </div>
                </div>
            </div>
        )
    }
}

export default MyPageRecruit; 