//마이페이지의 '관심 프로젝트' 섹션입니다.

import '../../css/Park/mypage.scss';
import '../../css/MyPage/MyPageInterest.scss';

import ProjectSimpleHOC from './ProjectSimpleHOC';
import InterestSimpleContents from './InterestSimpleContents';
import cookies from '../../methods/cookies'

import baseURL from '../../url'

var InterestSimpleComponent = ProjectSimpleHOC(InterestSimpleContents);

class MyPageInterest extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            cart : [

            ]
        }

        this.updateScreen = this.updateScreen.bind(this);
    }

    async updateScreen(){

        try{

            var userToken = cookies.getCookie('user-token');

            if(userToken != '' && userToken != undefined){
                var res = await fetch(baseURL + '/mypage/cart', {
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
            }else{
            }

        }
        catch(e){
        }
    }

    componentDidMount(){
        this.updateScreen();
    }

    render(){        

        var updateScreen = this.updateScreen;

        var InterestSimpleComponents = this.state.cart.map(info => {
            return <InterestSimpleComponent 
                        key = {info.projectId}
                        id = {info.projectId}
                        info = {info} 
                        updateScreen = {updateScreen}/>
        })

        return (
            <div className = 'mypage-bottom-section-bg'>
                <div className = 'container'>
                    <div className = 'mypage-sub-container'>
                        {InterestSimpleComponents}
                    </div>
                </div>
            </div>
        )
    }
}

export default MyPageInterest; 