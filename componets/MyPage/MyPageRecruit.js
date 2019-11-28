//마이페이지의 '모집 현황' 섹션입니다.

import '../../css/Park/mypage.scss';
import '../../css/MyPage/MyPageRecruit.scss';

import RecruitSimpleContents from './RecruitSimpleContents.js'
import ProjectSimpleHOC from './ProjectSimpleHOC.js'
import ApplicantList from './ApplicantList'

var RecruitSimpleComponent = ProjectSimpleHOC(RecruitSimpleContents);

class MyPageRecruit extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            recruit : [
                {
                    id : 1,
                    title : '프로젝트 타이틀1',
                    jobgroup : '개발자',
                    applicant : 3,
                    finish : false,
                    toggle : 0 // 0 :init(off), 1 : on , 2 : off
                },
                {
                    id : 2,
                    title : '프로젝트 타이틀2',
                    jobgroup : '기획자',
                    applicant : 20,
                    finish : false,
                    toggle : 0 // 0 :init(off), 1 : on , 2 : off
                },
                {
                    id : 3,
                    title : '프로젝트 타이틀3',
                    jobgroup : '기획자',
                    applicant : 20,
                    finish : true,
                    toggle : 0 // -1 : init(on) 0 :init(off), 1 : on , 2 : off
                }
            ]
        }

        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount(){
        var toggleState = window.sessionStorage.getItem('toggleState');

        if(toggleState){
            toggleState = JSON.parse(toggleState);
            var toggleStateKeys = Object.keys(toggleState);
            var curState = JSON.parse(JSON.stringify(this.state));

            for(var i = 0 ; i < toggleStateKeys.length ; i ++){
                var toggleStateKey = toggleStateKeys[i];

                for(var j = 0 ; j < curState.recruit.length ; j ++){
                    if(curState.recruit[j].id == toggleStateKey){
                        curState.recruit[j].toggle = toggleState[toggleStateKey];
                    }
                }
            }

            this.setState(curState);
        }
    }

    handleToggle(id){

        var curState = JSON.parse(JSON.stringify(this.state));
        var curRecruit = curState.recruit;

        for(var i = 0 ; i < curRecruit.length ; i ++){
            if(curRecruit[i].id == id){
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
                toggleState[curRecruit[i].id] = -1;
            }
            else{
                if(toggleState.hasOwnProperty(curRecruit[i].id)){
                    delete toggleState[curRecruit[i].id];
                }
            }
        }

        sessionStorage.setItem('toggleState', JSON.stringify(toggleState));

        this.setState(curState);
    }
    
    render(){

        
        var handleToggle = this.handleToggle;

        var recruitSimpleComponents = this.state.recruit.map((info) => {
                var toggle = info.toggle;
        
                return (
                    <div className = 'recruit-simple-set'>
                        <div className = {('recruit-simple-component-' + (toggle == -1 ? 'init-off' : (toggle == 0 ? 'init' : (toggle == 1 ? 'off' : 'on'))))}>
                            <RecruitSimpleComponent
                                key = {info.id}
                                id = {info.id}
                                info = {info}
                                handleToggle = {handleToggle} //HOC개조해야함
                            />
                        </div> 
                        <div className = {('applicant-list-' + (toggle == -1 ? 'init-on' : (toggle == 0 ? 'init' : (toggle == 1 ? 'on' : 'off'))))}>
                            <ApplicantList
                                key = {info.id}
                                id = {info.id}
                                project = {info}
                                handleToggle = {handleToggle}
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