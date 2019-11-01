import '../../css/MyPage/ApplicantList.scss'
import '../../css/Park/mypage.scss';

var ApplicantSimpleComponent = (props) => {

    var projectId = props.projectId;
    var applicantId = props.applicant.id;
    var profileImg = props.applicant.img;
    var profileNickname = props.applicant.nickname;
    var profilePortfolios = props.applicant.portfolios;

    return (
        <div className = 'applicant-simple-container'>
            <div className = 'applicant-simple-flex'>
                <div className = 'applicant-simple-left'>
                    <div className = 'applicant-simple-left-flex'>
                        <img className = 'applicant-simple-img'
                            src = {profileImg}/>
                        <div className = 'applicant-simple-contents'>
                            <div className = 'applicant-simple-nickname'>
                                {profileNickname}
                            </div>
                            <div className = 'applicant-simple-portfolio'>
                                <div className = 'applicant-simple-portfolio-flex'>
                                    <div className = 'applicant-simple-portfolio-in'>
                                        {'이력 ' + profilePortfolios.length + '개'}
                                    </div>
                                    <div className = 'applicant-simple-portfolio-out'>
                                        {'이력에있는 프로젝트 외 '}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className = 'applicant-simple-right'>
                    <div className = 'applicant-simple-accept-button'>
                        <div className = 'applicant-simple-accept-button-text'>
                            승인
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicantSimpleComponent;