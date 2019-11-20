import '../../css/MyPage/PortfolioAddSection.scss'
import MypagePortfolioPost from './MyPortfolioPost';

class PortfolioAddSection extends React.Component{

    constructor(props){
        super(props);
    }

    render() {

        var postPortfolioSection = this.props.post.map(post => 
            <MypagePortfolioPost 
                key = {post.id}
                id = {post.id}
                portfolio = {post.portfolio}
                fetchPortfolios = {this.props.fetchPortfolios}
                onDelete = {this.props.deletePost}
            />
        )

        var addPost = this.props.addPost

        return (
            <div className = 'portfolio-add-section'>
                
                {postPortfolioSection}
                <div className = 'portfolio-add-button' onClick = {() => addPost(null)}>
                    <div className = 'portfolio-add-button-flex'>
                        <div className = 'portfolio-add-button-svg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                <g id="그룹_2030" data-name="그룹 2030" transform="translate(-849.5 -1892.5)">
                                    <line id="선_467" data-name="선 467" y2="22" transform="translate(860.5 1892.5)" fill="none" stroke="#b9b9b9" strokeWidth="3"/>
                                    <line id="선_468" data-name="선 468" x2="22" transform="translate(849.5 1903.5)" fill="none" stroke="#b9b9b9" strokeWidth="3"/>
                                </g>
                            </svg>
                        </div>
                        <div className = 'portfolio-add-button-text'>
                            프로젝트 이력 추가하기
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default PortfolioAddSection