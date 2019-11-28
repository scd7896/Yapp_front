import '../../css/MyPage/ApplicantList.scss'
import '../../css/Park/mypage.scss';
import Router from 'next/router';
import UserProfileImg from '../Park/UserProfileImg'
import Link from 'next/link'

var ApplicantSimpleComponent = (props) => {

    var projectId = props.projectId;
    var applicantId = props.applicant.id;
    var profileImg = props.applicant.profileImage;
    var profileNickname = props.applicant.name;
    var profilePortfolioCnt = props.applicant.portfolioCnt;

    var toggleState = props.toggleState;

    return (
        <div className = 'applicant-simple-container'>
            <div className = 'applicant-simple-flex'>
                <div className = 'applicant-simple-left'>
                    <div className = 'applicant-simple-left-flex'>
                        <UserProfileImg
                            src = {profileImg} size ={78}/>
                        <div className = 'applicant-simple-contents'>
                            <Link href = {'/applicant?project='+ projectId+'&id='+props.applicant.userId}>
                                <a>
                                    <div className = 'applicant-simple-nickname'>
                                        {profileNickname}
                                    </div>
                                </a>
                            </Link>
                            <div className = 'applicant-simple-portfolio'>
                                <div className = 'applicant-simple-portfolio-flex'>
                                    <div className = 'applicant-simple-portfolio-in'>
                                        {'이력 ' + profilePortfolioCnt + '개'}
                                    </div>
                                    <div className = 'applicant-simple-portfolio-out'>
                                        {''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className = 'applicant-simple-right'>
                {
                    props.type != 'other'
                    ? (props.aaaa == true 
                    ? <div className = 'applicant-simple-accept-button'>
                            <div className = 'applicant-simple-accept-button-text'>
                                승인완료
                            </div>
                    </div>
                    : <div className = 'applicant-simple-accept-button'>
                        <div className = 'applicant-simple-accept-button-text'>
                            승인
                        </div>
                    </div>) :null
                }
                </div>
            </div>
        </div>
    )
}

export default ApplicantSimpleComponent;