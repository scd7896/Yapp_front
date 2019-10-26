//마이페이지의 '지원 현황' 섹션입니다.

import '../../css/Park/mypage.scss';
import '../../css/MyPage/MyPageApply.scss';

import ProjectSimpleHOC from './ProjectSimpleHOC';
import ApplySimpleContents from './ApplySimpleContents';

class MyPageApply extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            apply : [{
                id : 0,
                title : '프로젝트 타이틀 1',
                jobgroup : '디자이너',
                reading : true,
                finish : false
            },
            {
                id : 1,
                title : '프로젝트 타이틀 2',
                jobgroup : '디자이너',
                reading : true,
                finish : false
            },
            {
                id : 2,
                title : '프로젝트 타이틀 3',
                jobgroup : '기획자',
                reading : false,
                finish : false
            },
            {
                id : 3,
                title : '프로젝트 타이틀 4',
                jobgroup : '디자이너',
                reading : false,
                finish : true
            },
            {
                id : 4,
                title : '프로젝트 타이틀 5',
                jobgroup : '디자이너',
                reading : false,
                finish : true
            }]
        }

        this.onDelete = this.onDelete.bind(this);
    }

    async onDelete(victim){
        var deleteConfirm = confirm('정말 지원을 취소하시겠습니까?');

        //실제로 서버와 통신할 공간

        var deleteResult = await true;

        if(deleteConfirm  && deleteResult){
            var curState = JSON.parse(JSON.stringify(this.state));
            
            curState.apply = curState.apply.filter(apply => apply.id != victim);

            this.setState(curState);
        }

        //실제로는 전체 데이터를 긁어와야할수도있음
    }
    
    render(){

        var totalNumber = this.state.apply.length;
        var readingNumber = 0; 
        var finishNumber = 0;
        
        var ApplySimpleComponent = ProjectSimpleHOC(ApplySimpleContents);
        var onDelete = this.onDelete;

        var ApplySimpleComponents = this.state.apply.map((info) => {

            if(info.reading == true){
                readingNumber ++;
            }

            if(info.finish == true){
                finishNumber ++ ;
            }

            return (
                <ApplySimpleComponent 
                    key = {info.id}
                    id = {info.id}
                    info = {info}
                    onDelete = {onDelete}/>
            )
        })

        return (
            <div className = 'mypage-bottom-section-bg'>
                <div className = 'container'>
                    <div className = 'mypage-sub-container'>
                        <div className = 'mypage-apply-scoreboard'>
                            <div className = 'mypage-apply-scoreboard-section'>
                                <div className = 'mypage-apply-scoreboard-number'>
                                    {totalNumber}
                                </div>
                                <div className = 'mypage-apply-scoreboard-text'>
                                    지원완료
                                </div>
                            </div>
                            <div className = 'mypage-apply-scoreboard-section mypage-apply-scoreboard-center'>
                                <div className = 'mypage-apply-scoreboard-number'>
                                    {readingNumber}
                                </div>
                                <div className = 'mypage-apply-scoreboard-text'>
                                    열람
                                </div>
                            </div>
                            <div className = 'mypage-apply-scoreboard-section'>
                                <div className = 'mypage-apply-scoreboard-number'>
                                    {finishNumber}
                                </div>
                                <div className = 'mypage-apply-scoreboard-text'>
                                    모집완료
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