import PorfolioSimpleComponent from './PortfolioSimpleComponent.js'

import '../../css/Mypage/MyPortfolioSection.scss'

export default class MyPortfolioSection extends React.Component{

    constructor(props){
        super(props);
    }


    render() {

        var addPost = this.props.addPost
        var fetchPortfolios = this.props.fetchPortfolios

        var PortfolioSection = this.props.portfolios.map(portfolio => 
            <PorfolioSimpleComponent 
                key = {portfolio.portfolioId}
                portfolio = {portfolio}
                id = {portfolio.portfolioId}
                addPost = {addPost}
                fetchPortfolios = {fetchPortfolios}
            />
        )

        return (
            <div className = 'mypage-portfolio-section'>
                <div className = 'mypage-portfolio-section-title'>
                    나의 이력
                </div>
                {PortfolioSection}
            </div>
        )
    }
}