import '../../css/MyPage/ApplicantList.scss'
import '../../css/Park/mypage.scss';
import Router from 'next/router';
import UserProfileImg from '../Park/UserProfileImg'
import Link from 'next/link'
import cookies from '../../methods/cookies'
import baseURL from '../../url'

var ApplicantSimpleComponent = (props) => {

    var projectId = props.projectId;
    var applicantId = props.applicant.userId;
    var profileImg = props.applicant.profileImage;
    var profileNickname = props.applicant.name;
    var profilePortfolioCnt = props.applicant.portfolioCnt;

    var toggleState = props.toggleState;

    function handleClickApprove(){
        var userToken = cookies.getCookie('user-token');
        if(userToken != '' || userToken != undefined){
            if(confirm( props.applicant.name +' 지원자를 정말 승인하겠습니까?')){
                fetch(baseURL + '/mypage/recruit/' + projectId + '/accept', {
                    headers : {
                        'Authorization' : 'bearer ' + userToken,
                        'accpet' : 'application/json',
                        'Content-Type' : 'application/json'
                    },
                    method : 'POST',
                    body : JSON.stringify({'applicantId' : applicantId})
                }).then(res => {
                    if(res.ok){
                        props.updateScreen();
                    }
                })
        
            }
        }

    }

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
                    ? (props.applicant.isAccepted == true 
                    ? <div className = 'applicant-simple-accept-button-finish'>
                            <div className = 'applicant-simple-accept-button-text'>
                                승인완료
                            </div>
                    </div>
                    : <div className = 'applicant-simple-accept-button' onClick = {() => handleClickApprove()}>
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