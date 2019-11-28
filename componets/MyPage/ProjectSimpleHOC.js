import '../../css/MyPage/ProjectSimpleContainer.scss'
import JobgruopList from '../Park/JobgruopList';
import  Router  from 'next/router';

var ProjectSimpleHOC = (RightSection) => {
    
    return (props) => {

        var title = props.info.title;
        var role = props.info.role;
        var isClosed = props.info.isClosed ? props.info.finish : false

        var info = JSON.parse(JSON.stringify(props.info));
        info.isClosed = props.info.isClosed ? props.info.isClosed : false

        return (
            <div className = {'recruit-simple-container '+ (isClosed ? 'mypage-finish' : '')}>
                <div className = 'recruit-simple-flex'>
                    <div className = 'recruit-simple-title-container'>
                        <div className = 'recruit-simple-title' 
                            style = {{cursor:'pointer'}}
                            onClick = {() => Router.push('/detail/[id]','/detail/' + props.info.projectId)}>
                            {title}
                        </div>
                        <div className = 'recurit-simple-jobgroup'>
                            <JobgruopList role = {role}/>
                        </div>
                    </div>
                    <RightSection 
                        id = {props.id}
                        updateScreen = {props.updateScreen}
                        info = {info}/>
    
                </div>
            </div>
        )
    }
}

   

export default ProjectSimpleHOC;