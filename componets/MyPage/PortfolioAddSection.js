import '../../css/MyPage/PortfolioAddSection.scss'
import MypagePortfolioPost from './MyPortfolioPost';

class PortfolioAddSection extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            post : []
        }

        this.post_id = 0;

        this.deletePost = this.deletePost.bind(this);
        this.addPost = this.addPost.bind(this);
    }

    deletePost(victim){

        var deleteConfirm = confirm('정말 취소하시겠습니까?');

        if(deleteConfirm == true){
            var curState = JSON.parse(JSON.stringify(this.state));
            
            curState.post = curState.post.filter(id => id != victim);

            this.setState(curState);
        }
    }

    addPost(){
        var curState = JSON.parse(JSON.stringify(this.state));
        curState.post.push(this.post_id);
        this.post_id ++;
        this.setState(curState);
    }

    render() {

        var postPortfolioSection = this.state.post.map(id => 
            <MypagePortfolioPost 
                key = {id}
                id = {id}
                onDelete = {this.deletePost}
            />
        )

        return (
            <div className = 'portfolio-add-section'>
                
                {postPortfolioSection}
                <div className = 'portfolio-add-button' onClick = {this.addPost}>
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