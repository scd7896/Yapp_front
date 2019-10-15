import '../../css/park/detail_qna.scss'
import '../../css/container.scss'

export default class DetailQnA extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value : '',
            contents : [
                {type:'Q', user : 'mjmj9400', content : '네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.서비스 네이밍이나 컨셉은 있나요?'},
                {type:'A', user : 'dklfjadf', content : '네 있습니다!'},
                {type:'Q', user : '26000115', content : '개발자와 협업경험이 많지 않은데 괜찮은가요?'},
                {type:'A', user : 'dklfjadf', content : '네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.네 상관없습니다!! 디자이너라면 모두 환영입니다.'}
            ] 
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                    <div className = 'detail-qna-title'>Q&A</div>
                    <div className = 'detail-qna-input-container'>
                        <div className = 'detail-qna-input-wrapper'>
                            <textarea className = 'detail-qna-input' value = {this.state.value} onChange={this.handleChange} placeholder = '프로젝트에 궁금한 점을 남겨주세요'/>
                        </div>
                        <div className = 'detail-qna-submit'>
                            댓글달기
                        </div>
                    </div>
                    <div className = 'detail-qna-contents'>
                        {contents}
                    </div>
                </div>

                <div className = 'detail-qna-more'>
                    - Q&A 더보기 - 
                </div>
            </div>

        );
    }
}