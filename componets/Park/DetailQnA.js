import '../../css/park/detail_qna.scss'
import '../../css/container.scss'

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
    }

    async fetchQnAList(){

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert(this.state.value);   
        event.preventDefault();
    }

    render(){

        var contents = this.state.contents.map(function(content){
            if(content.type == 'Q'){
                return (
                    <div className = 'detail-wrapper-wrapper'>
                        <div className= 'detail-q-wrapper'>
                            <div className = 'detail-q'>
                                Q
                            </div>
                            <div className = 'detail-q-content-wrapper'>
                                <div className= 'detail-name'>
                                    {content.user}
                                </div>
                                <div className = 'detail-content'>
                                    {content.content}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else{
                return (
                    <div className = 'detail-wrapper-wrapper'>
                        <div className= 'detail-a-wrapper'>
                            <div className = 'detail-a-stair'>

                            </div>
                            <div className = 'detail-a'>
                                A
                            </div>
                            <div className = 'detail-a-content-wrapper'>
                                <div clasName= 'detail-name'>
                                    {content.user}
                                </div>
                                <div className = 'detail-content'>
                                    {content.content}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })

        return (
            <div className = 'detail-qna-wrapper'>
                <div className = 'detail-qna-container container'>
                    <div className = 'detail-qna-title'>Q & A</div>
                    <div className = 'detail-qna-input-container'>
                        <div className = 'detail-qna-input-flex'>
                            <div className = 'detail-qna-input-wrapper'>
                                <textarea className = 'detail-qna-input' value = {this.state.value} onChange={this.handleChange} placeholder = '프로젝트에 궁금한 점을 남겨주세요'/>
                            </div>
                            <div className = 'detail-qna-submit'>
                                댓글달기
                            </div>
                        </div>
                    </div>
                    <div className = 'detail-qna-contents'>
                        {contents}
                    </div>
                    <div className = 'detail-qna-more'>
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
                </div>


            </div>

        );
    }
}