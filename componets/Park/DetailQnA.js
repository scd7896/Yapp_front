import '../../css/park/detail_qna.scss'
import '../../css/container.scss'

import baseURL from '../../url'

import React from 'react'
import DetailQ from './DetailQ';
import DetailA from './DetailA';
import cookies from '../../methods/cookies'

export default class DetailQnA extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value : '',
            contents : [
            ],
            visibleRest : false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchQnAList = this.fetchQnAList.bind(this);
        this.handleClickViewMore = this.handleClickViewMore.bind(this);
        this.handleClickReplyButton = this.handleClickReplyButton.bind(this);
    }

    async fetchQnAList(){

        var offset = 0;
        
        var contents = [];

        while(true){

            var res = await fetch(
                baseURL + '/projects/' + this.props.project.projectId + '/qna?offset=' + offset, {
                headers : {
                    accept: "application/json"
                }
            });

            if(res.ok){
                
                var projectQnA  = await res.json();

                if(! projectQnA.projectQna)
                    break;
                
                contents = contents.concat(projectQnA.projectQna);
    
                if(projectQnA.projectQna.length == 0){
                    break;
                }
                else{
                    offset ++;
                }
            }
            else{
                break;
            }

        }
        
        var curState = JSON.parse(JSON.stringify(this.state));
        curState.contents = contents;
        this.setState(curState);
    }

    componentDidMount(){
        this.fetchQnAList();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert(this.state.value);   
        event.preventDefault();
    }

    handleClickViewMore(){
        var curState = JSON.parse(JSON.stringify(this.state));
        curState.visibleRest = true;
        this.setState(curState);
    }

    handleClickReplyButton(){
        if(this.state.value == ''){
            alert('댓글을 입력해주세요.');
        }
        else{
            var userToken = cookies.getCookie('user-token');
            if(userToken == undefined || userToken == ''){
                this.props.openLoginModal();
            }
        }

    }

    render(){

        var visibleRest = this.state.visibleRest;
        var visibleCount = 0;

        var contents = this.state.contents.map(question => {

            var questionNode = null;
            
            if(visibleRest || visibleCount < 4){
                visibleCount ++;

                questionNode = <DetailQ
                    className = {'detail-qna-#' + question.projectQnaId}
                    userId = {question.userId}
                    key = {question.projectQnaId}
                    id = {question.projectQnaId}
                    content  = {question.content}
                    createAt = {question.createAt}
                />
            }


            var answerNodes = question.answer.map(answer => {

                    if(visibleRest || visibleCount < 4){
                        visibleCount ++;

                        return <DetailA 
                            className = {'detail-qna-#' + answer.projectQnaId}
                            userId = {answer.userId}
                            key = {answer.projectQnaId}
                            id = {answer.projectQnaId}
                            content  = {answer.content}
                            createAt = {answer.createAt}
                        />
                    }
                    else{
                        return null;
                    }

                }
            )

            return (
                <React.Fragment>
                    {questionNode}
                    {answerNodes}
                </React.Fragment>
            )

        })

        return (
            <div className = 'detail-qna-wrapper'>
                <div className = 'detail-qna-container container'>
                    <div className = 'detail-qna-title'>Q & A</div>
                    <div className = 'detail-qna-ask-go-double'>프로젝트에 대해 궁금한 점을 물어보세요</div>
                    <div className = 'detail-qna-input-container'>
                        <div className = 'detail-qna-input-flex'>
                            <div className = 'detail-qna-input-wrapper'>
                                <textarea className = 'detail-qna-input' value = {this.state.value} onChange={this.handleChange} placeholder = ''/>
                            </div>
                            <div className = 'detail-qna-submit'
                                onClick = {this.handleClickReplyButton}>
                                댓글달기
                            </div>
                        </div>
                    </div>
                    <div className = 'detail-qna-contents'>
                        {contents}
                    </div>
                    {
                        this.state.visibleRest ? null :
                        (
                            <div className = 'detail-qna-more'
                                onClick = {this.handleClickViewMore }>
                                <div className = 'detail-qna-more-contents'>
                                    <div className = 'detail-qna-more-qna'>
                                        Q&A
                                    </div>
                                    <div className = 'detail-qna-more-more'>
                                        더 보기
                                    </div>
                                    <div className = 'detail-qna-more-plus'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20.289" height="20.289" viewBox="0 0 20.289 20.289">
                                        <g id="그룹_1965" data-name="그룹 1965" transform="translate(-1032.355 -2954.355)">
                                            <line id="선_129" data-name="선 129" x2="20.289" transform="translate(1032.355 2964.5)" fill="none" stroke="#5c63ff" strokeWidth="2"/>
                                            <line id="선_130" data-name="선 130" x2="20.289" transform="translate(1042.5 2954.355) rotate(90)" fill="none" stroke="#5c63ff" strokeWidth="2"/>
                                        </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>


            </div>

        );
    }
}