//마이페이지의 '지원 현황' 섹션입니다.

import '../../css/Park/mypage.scss';
import '../../css/MyPage/MyPageApply.scss';

import ProjectSimpleHOC from './ProjectSimpleHOC';
import ApplySimpleContents from './ApplySimpleContents';

import cookies from '../../methods/cookies'

var ApplySimpleComponent = ProjectSimpleHOC(ApplySimpleContents);

import baseURL from '../../url'

class MyPageApply extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            "applicantCnt": 0,
            "seenCnt": 0,
            "acceptedCnt": 0,
            "list" : []
        }

        this.updateScreen = this.updateScreen.bind(this);
    }

    async updateScreen(){

        try{

            var userToken = cookies.getCookie('user-token');

            if(userToken != '' && userToken != undefined){
                var res = await fetch(baseURL + '/mypage/status', {
                    'headers' : {
                        "Authorization" : "bearer " + userToken,
                        'accept' : 'application/json',
                        'Content-Type' : 'application/json'
                    }
                })
                if(res.ok){
                    var resJson = await res.json();

                    this.setState(resJson);
                }
            }

        }
        catch{}

    }

    componentDidMount(){
        this.updateScreen();
    }
    
    render(){
        var updateScreen = this.updateScreen;

        var ApplySimpleComponents = this.state.list.map((info) => {

            if(info.reading == true){
                readingNumber ++;
            }

            if(info.finish == true){
                finishNumber ++ ;
            }

            return (
                <ApplySimpleComponent 
                    key = {info.projectId}
                    id = {info.projectId}
                    info = {info}
                    updateScreen = {updateScreen}/>
            )
        })

        return (
            <div className = 'mypage-bottom-section-bg'>
                <div className = 'container'>
                    <div className = 'mypage-sub-container'>
                        <div className = 'mypage-apply-scoreboard'>
                            <div className = 'mypage-apply-scoreboard-section'>
                                <div className = 'mypage-apply-scoreboard-number'>
                                    {this.state.applicantCnt}
                                </div>
                                <div className = 'mypage-apply-scoreboard-text'>
                                    지원완료
                                </div>
                            </div>
                            <div className = 'mypage-apply-scoreboard-section mypage-apply-scoreboard-center'>
                                <div className = 'mypage-apply-scoreboard-number'>
                                    {this.state.seenCnt}
                                </div>
                                <div className = 'mypage-apply-scoreboard-text'>
                                    열람
                                </div>
                            </div>
                            <div className = 'mypage-apply-scoreboard-section'>
                                <div className = 'mypage-apply-scoreboard-number'>
                                    {this.state.acceptedCnt}
                                </div>
                                <div className = 'mypage-apply-scoreboard-text'>
                                    승인완료
                                </div>
                            </div>
                        </div>

                        {ApplySimpleComponents}
                    </div>
                </div>
            </div>
        )
    }
}

export default MyPageApply; 