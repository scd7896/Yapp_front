import '../../css/MyPage/ProjectSimpleContainer.scss'

var RecruitSimpleComponent =(props) => {

    return (
        <div className = 'recruit-simple-contents-container'>
            <div className = 'recruit-simple-applicant'>
                {props.info.applicants.length + '명 지원'}
            </div>
            <div className = 'recruit-simple-view' onClick ={() => props.handleToggle(props.id)}>
                <div className = 'recruit-simple-view-flex'>
                    <div className = 'recruit-simple-view-text' >
                        지원자 보기 
                    </div>
                    <svg className = 'recruit-simple-view-svg' xmlns="http://www.w3.org/2000/svg" width="14.076" height="8.452" viewBox="0 0 14.076 8.452">
                        <path id="패스_1810" data-name="패스 1810" d="M5.624,0,0,5.624l5.624,5.624" transform="translate(1.414 7.038) rotate(-90)" fill="none" stroke="#4244ff" strokeLinecap="round" strokeWidth="2"/>
                    </svg>
                </div>

            </div>
        </div>
    )
}

export default RecruitSimpleComponent;