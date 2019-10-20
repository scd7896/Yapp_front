import "../../css/Park/ProjectCardView.scss";

export default (props) => {

    var jobgroup = props.jobgroup;
    var jobgroupCircleClass = '';

    if(props.jobgroup == '개발자'){
        jobgroupCircleClass = 'jobgroup-circle-developer';
    }
    else if(props.jobgroup == '디자이너'){
        jobgroupCircleClass = 'jobgroup-circle-designer';
    }
    else if(props.jobgroup == '기획자'){
        jobgroupCircleClass ='jobgroup-circle-planner';
    }

    return (        
        <div className="jobgroup">
            <div className={"jobgroup-circle " + jobgroupCircleClass}></div>
            <div className="jobgroup-main">{jobgroup}</div>
        </div>
    )
}