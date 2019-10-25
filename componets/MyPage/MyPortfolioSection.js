import PorfolioSimpleComponent from './PortfolioSimpleComponent.js'

import '../../css/Mypage/MyPortfolioSection.scss'

export default class MyPortfolioSection extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            post : [{
                id : 1,
                img : '',
                title : '식당 웨이팅 관리 서비스',
                roll : 'UXUI디자인',
                stack : 'Adobe Xd, protopie',
                link : ''
            }]
        }

        this.deletePortfolio = this.deletePortfolio.bind(this);
    }

    async deletePortfolio(victim){

        var deleteConfirm = confirm('정말 삭제하시겠습니까?');

        //실제로 서버와 통신할 공간

        var deleteResult = await true;

        if(deleteConfirm  && deleteResult){
            var curState = JSON.parse(JSON.stringify(this.state));
            
            curState.post = curState.post.filter(post => post.id != victim);

            this.setState(curState);
        }

        
    }

    render() {

        var PortfolioSection = this.state.post.map(post => 
            <PorfolioSimpleComponent 
                key = {post.id}
                post = {post}
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