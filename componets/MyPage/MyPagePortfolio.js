//마이페이지의 '이력 관리' 섹션입니다.

import '../../css/Park/mypage.scss';
import '../../css/MyPage/MyPagePortfolio.scss';

import MyPortfolioSection from './MyPortfolioSection';
import PortfolioAddSection from './PortfolioAddSection';

import fetch from 'isomorphic-unfetch'

import cookies from '../../methods/cookies'
import baseURL from '../../url'
import { Router } from 'next/router';

/* /user/portfolio  데이터 가져오고, post /user/portfolio로 보내기  */
class MyPagePortfolio extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            portfolios : [],
            post : []
        }

        this.fetchPortfolios = this.fetchPortfolios.bind(this);

        this.post_id = 0;
        
        this.deletePost = this.deletePost.bind(this);
        this.addPost = this.addPost.bind(this);
    }

    /*
        포트폴리오 수정 루틴
        addPortfolio(portfolio)
        -> 수정 
        -> 각 MyPortfolioPost 의 updatePortfolio()
        (결과가 true면)
        -> deletePost(post.id, true)
        -> fetchPortfolios()
    */

    deletePost(victim,complete){
        
        var deleteConfirm = (complete ? true : false);
        
        if(deleteConfirm == false){
            deleteConfirm = confirm('정말 취소하시겠습니까?');
        }

        if(deleteConfirm == true){
            var curState = JSON.parse(JSON.stringify(this.state));
            
            curState.post = curState.post.filter(post => post.id != victim);

            this.setState(curState);
        }
    }

    addPost(portfolio){
        var contain = this.state.post.filter(post => post.portfolio.portfolioId == portfolio.portfolioId);
        if(contain.length == 0){
            var curState = JSON.parse(JSON.stringify(this.state));
            curState.post.push({
                id : this.post_id, 
                portfolio : portfolio
            });
            this.post_id ++;
            this.setState(curState);
        }
    }

    fetchPortfolios(){

        var userToken = cookies.getCookie('user-token');

        var setPortfolios = ((portfolios) => {
            var curState = JSON.parse(JSON.stringify(this.state));
            curState.portfolios = portfolios;
            this.setState(curState);
        }).bind(this);

        fetch(baseURL + '/mypage/portfolio' , {
            headers : {
                method : 'GET',
                'Authorization' : 'bearer ' + userToken,
                'accept' : 'application/json'
            }
        }).then(
            res =>
            {
                if(res.ok){
                    return res.json()
                }
                else{
                    throw res.statusText;
                }
            } 
        ).then(res => {
            if(res.portfolios){
                setPortfolios(res.portfolios);
            }
            else{
                throw "서버에서 포트폴리오가 넘어오지 않았습니다."
            }
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount(){
        
        this.fetchPortfolios();
    }
    
    render(){
        return (
            <div className = 'mypage-bottom-section-bg'>
                <div className = 'container'>
                    <div className = 'mypage-sub-container'>
                        <PortfolioAddSection
                            post = {this.state.post}
                            addPost = {this.addPost}
                            deletePost= {this.deletePost}
                            fetchPortfolios = {this.fetchPortfolios}/>
                        <MyPortfolioSection
                            portfolios = {this.state.portfolios}
                            addPost = {this.addPost}
                            fetchPortfolios = {this.fetchPortfolios}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyPagePortfolio; 