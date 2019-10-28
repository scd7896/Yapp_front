//마이페이지의 '이력 관리' 섹션입니다.

import '../../css/Park/mypage.scss';
import '../../css/MyPage/MyPagePortfolio.scss';

import MyPortfolioSection from './MyPortfolioSection';
import PortfolioAddSection from './PortfolioAddSection';

class MyPagePortfolio extends React.Component{
    
    render(){
        return (
            <div className = 'mypage-bottom-section-bg'>
                <div className = 'container'>
                    <div className = 'mypage-sub-container'>
                        <PortfolioAddSection/>
                        <MyPortfolioSection/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyPagePortfolio; 