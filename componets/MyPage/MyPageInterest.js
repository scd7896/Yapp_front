//마이페이지의 '관심 프로젝트' 섹션입니다.

import '../../css/Park/mypage.scss';
import '../../css/MyPage/MyPageInterest.scss';

import ProjectSimpleHOC from './ProjectSimpleHOC';
import InterestSimpleContents from './InterestSimpleContents';

class MyPageInterest extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            info : [{
                title : '프로젝트 타이틀 1',
                jobgroup : '디자이너',
                id : 0,
                finish : false
            }, {
                title : '프로젝트 타이틀 2',
                jobgroup : '디자이너',
                id : 1,
                finish : true
            }]
        }

        this.onDelete = this.onDelete.bind(this);
    }

    async onDelete(victim){
        var deleteConfirm = confirm('관심 프로젝트에서 제거하시겠습니까?');

        //실제로 서버와 통신할 공간

        var deleteResult = await true;

        if(deleteConfirm  && deleteResult){
            var curState = JSON.parse(JSON.stringify(this.state));
            
            curState.info = curState.info.filter(info => info.id != victim);

            this.setState(curState);
        }

        //실제로는 전체 데이터를 긁어와야할수도있음
    }
    
    render(){

        var InterestSimpleComponent = ProjectSimpleHOC(InterestSimpleContents);

        var onDelete = this.onDelete;

        var InterestSimpleComponents = this.state.info.map(info => {
            return <InterestSimpleComponent 
                        key = {info.id}
                        id = {info.id}
                        info = {info} 
                        onDelete = {onDelete}/>
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