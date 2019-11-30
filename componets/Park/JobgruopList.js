import roles from '../../methods/role'
import ProjectJobGroup from './ProjectJobGroup'
import '../../css/Park/detail.scss'

export default (props) => {

    var jobgroups = [];
    var roleNumber = 1;
    for(var i = 0 ; i < roles.length ; i ++){
      if((props.role & roleNumber) !== 0){
        jobgroups.push(roles[i]);
      }
      roleNumber *= 2;
    }

    return (
        <div className = 'jobgroup-list-wrapper'>
            {jobgroups.map(jobgroup => <ProjectJobGroup jobgroup = {jobgroup} size = {props.size}/>)}
        </div>
    )
    
}