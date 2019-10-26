import '../../css/MyPage/ProjectSimpleContainer.scss'
import ProjectJobGroup from '../Park/ProjectJobGroup.js'

var ProjectSimpleHOC = (RightSection) => {
    
    return (props) => {

        var title = props.info.title;
        var jobgroup = props.info.jobgroup;
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
                    <RightSection 
                        id = {props.id}
                        onDelete = {props.onDelete}
                        info = {props.info}/>
    
                </div>
            </div>
        )
    }
}

   

export default ProjectSimpleHOC;