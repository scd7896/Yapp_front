import '../../css/MyPage/RecruitSimpleContainer.scss'
import ProjectJobGroup from '../Park/ProjectJobGroup.js'

var RecruitSimpleComponent =(props) => {

    var title = props.info.title;
    var jobgroup = props.info.jobgroup;
    var applicant = props.info.applicant;
    var finish = props.info.finish

    return (
        <div className = {'recruit-simple-container '+ (finish ? 'mypage-finish' : '')}>
            <div className = 'recruit-simple-flex'>
                <div className = 'recruit-simple-title-container'>
                    <div className = 'recruit-simple-title'>
                        {title}
                    </div>
                    <div className = 'recurit-simple-jobgroup'>
                        <ProjectJobGroup jobgroup = {jobgroup}/>
                    </div>
                </div>
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

            </div>
        </div>
    )
}

export default RecruitSimpleComponent;