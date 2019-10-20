//마이페이지의 '모집 현황' 섹션입니다.

import '../../css/Park/mypage.scss';
import '../../css/MyPage/MyPageRecruit.scss';

class MyPageRecruit extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            recruit : [
                
            ]
        }
    }
    
    render(){
        return (
            <div className = 'mypage-bottom-section-bg'>
                <div className = 'container'>
                    <div className = 'mypage-sub-container mypage-recruit-container'>

                    </div>
                </div>
            </div>
        )
    }
}

export default MyPageRecruit; 