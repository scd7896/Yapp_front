export default (props) => {
    return (
        <div className = "applicant-qna-container">
            <div className = 'applicant-qna-question'>
                <div className = 'applicant-qna-flex'>
                    <div className = 'applicant-qna-q'>
                        Q
                    </div>
                    <div className = 'applicant-qna-number'>
                        {props.id + 1}
                    </div>
                    <div className = 'applicant-qna-title-text'>
                        {props.q}
                    </div>
                </div>
            </div>
            <div className = 'applicant-qna-answer'>
                <div className = 'applicant-qna-answer-text'>
                    {props.a}
                </div>
            </div>
        </div>
    )
}