import PorfolioSimpleComponent from './PortfolioSimpleComponent.js'

import '../../css/Mypage/MyPortfolioSection.scss'

export default class MyPortfolioSection extends React.Component{

    constructor(props){
        super(props);

        this.deletePortfolio = this.deletePortfolio.bind(this);
    }

    async deletePortfolio(victim){

        var deleteConfirm = confirm('정말 삭제하시겠습니까?');
/*
        var deleteResult = await true;

        if(deleteConfirm  && deleteResult){
            var curState = JSON.parse(JSON.stringify(this.state));
            
            curState.post = curState.post.filter(post => post.id != victim);

            this.setState(curState);
        }
*/
        
    }

    render() {

        var PortfolioSection = this.props.portfolios.map(portfolio => 
            <PorfolioSimpleComponent 
                key = {portfolio.id}
                portfolio = {portfolio}
                id = {portfolio.id}
                onDelete = {this.deletePortfolio}
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