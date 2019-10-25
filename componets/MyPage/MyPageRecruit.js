//마이페이지의 '모집 현황' 섹션입니다.

import '../../css/Park/mypage.scss';
import '../../css/MyPage/MyPageRecruit.scss';

import RecruitSimpleComponent from './RecruitSimpleComponent.js'

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
                    finish : false
                },
                {
                    id : 2,
                    title : '프로젝트 타이틀2',
                    jobgroup : '기획자',
                    applicant : 20,
                    finish : true
                }
            ]
        }
    }
    
    render(){

        var recruitSimpleComponents = this.state.recruit.map((info) => 
            <RecruitSimpleComponent
                info = {info}
            />
        );

        console.log(recruitSimpleComponents);

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