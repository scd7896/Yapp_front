import '../../css/MyPage/ProjectSimpleContainer.scss'

var RecruitSimpleComponent =(props) => {

    var applicant = props.info.applicant;

    return (
        <div className = 'recruit-simple-contents-container'>
            <div className = 'recruit-simple-applicant'>
                {applicant + '명 지원'}
            </div>
            <div className = 'recruit-simple-view'>
                <div className = 'recruit-simple-view-text'>
                    지원자 보기
                </div>
            </div>
            <div className = 'recruit-simple-finish-button'>
                <div className = 'recruit-simple-finish-text'>
                    모집마감
                </div>
            </div>
        </div>
    )
}

export default RecruitSimpleComponent;