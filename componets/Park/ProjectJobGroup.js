import "../../css/Park/ProjectCardView.scss";

export default (props) => {

    var jobgroup = props.jobgroup;
    var size = props.size;
    var jobgroupCircleClass = '';

    if(props.jobgroup == '개발자' || props.jobgroup =='developer'){
        jobgroupCircleClass = 'jobgroup-circle-developer';
        jobgroup = '개발자'
    }
    else if(props.jobgroup == '디자이너'|| props.jobgroup =='designer'){
        jobgroupCircleClass = 'jobgroup-circle-designer';
        jobgroup = '디자이너'
    }
    else if(props.jobgroup == '기획자'|| props.jobgroup =='planner'){
        jobgroupCircleClass ='jobgroup-circle-planner';
        jobgroup = '기획자'
    }

    return (        
        <div className={"jobgroup " + (props.size ? "jobgroup-"+size : '')}>
            <div className={"jobgroup-circle " + jobgroupCircleClass}></div>
            <div className="jobgroup-main">{jobgroup}</div>
        </div>
    )
}