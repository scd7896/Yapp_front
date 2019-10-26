import '../../css/MyPage/ProjectSimpleContainer.scss'

var ApplySimpleContents = (props) =>
{
    var reading = props.info.reading;
    var finish = props.info.finish;

    return (
        <div className = 'apply-simple-container'>
            <div className = 'apply-simple-flex'>
                <div className = {'apply-simple-reading-status '+ 'apply-simple-reading-' + (reading ? 'true' : 'false')}>
                    {reading ? '열람' : '미열람'}
                </div>
                <div className = {'apply-simple-progress-status ' + 'apply-simple-progress-' + (finish ? 'finish' : 'in')}>
                    {finish ? '모집완료' : '모집중'}
                </div>
                <div className = 'apply-simple-cancel-button' onClick = {() => props.onDelete(props.id)}>
                    <div className = 'apply-simple-cancel-button-text'>
                        지원취소
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ApplySimpleContents;