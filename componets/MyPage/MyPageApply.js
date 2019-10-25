//마이페이지의 '지원 현황' 섹션입니다.

import '../../css/Park/mypage.scss';
import '../../css/MyPage/MyPageApply.scss';

import ApplySimpleComponent from './ApplySimpleComponent';

class MyPageApply extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            apply : [{
                title : '프로젝트 타이틀 1',
                jobgroup : '디자이너',
                reading : true,
                finish : false
            },
            {
                title : '프로젝트 타이틀 2',
                jobgroup : '디자이너',
                reading : true,
                finish : false
            },
            {
                title : '프로젝트 타이틀 3',
                jobgroup : '디자이너',
                reading : false,
                finish : false
            },
            {
                title : '프로젝트 타이틀 4',
                jobgroup : '디자이너',
                reading : false,
                finish : true
            },
            {
                title : '프로젝트 타이틀 5',
                jobgroup : '디자이너',
                reading : false,
                finish : true
            }]
        }
    }
    
    render(){

        var totalNumber = this.state.apply.length;
        var readingNumber = 0; 
        var finishNumber = 0;

        var ApplySimpleComponents = this.state.apply.map((info) => {

            if(info.reading == true){
                readingNumber ++;
            }

            if(info.finish == true){
                finishNumber ++ ;
            }

            return (
                <ApplySimpleComponent info = {info}/>
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