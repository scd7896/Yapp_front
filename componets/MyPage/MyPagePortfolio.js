//마이페이지의 '이력 관리' 섹션입니다.

import '../../css/Park/mypage.scss';
import '../../css/MyPage/MyPagePortfolio.scss';

import MyPortfolioSection from './MyPortfolioSection';
import PortfolioAddSection from './PortfolioAddSection';

/* /user/portfolio  데이터 가져오고, post /user/portfolio로 보내기  */
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