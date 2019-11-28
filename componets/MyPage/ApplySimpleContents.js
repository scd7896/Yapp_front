import '../../css/MyPage/ProjectSimpleContainer.scss'
import baseURL from '../../url'
import Router from 'next/router';
import cookies from '../../methods/cookies'

var ApplySimpleContents = (props) =>
{
    var seenFlag = props.info.seenFlag;
    var isAccepted = props.info.isAccepted;
    var isClosed = props.info.isClosed;

    async function handleClickCancle(){

        if(confirm('정말 지원을 취소하시겠습니까?')){
            var userToken = cookies.getCookie('user-token');

            if(userToken != '' && userToken != undefined){
    
                try{
                    var cancleResult = await fetch(baseURL + '/mypage/status/cancel', {
                        headers : {
                            Authorization : 'bearer ' + userToken,
                            'accpet' : 'application/json',
                            "Content-Type" : 'application/json'
                        },
                        method : "DELETE",
                        body : JSON.stringify({"projectId": props.info.projectId})
                    })

                    if(cancleResult.ok)
                        props.updateScreen();
                    else   
                        throw cancleResult.responseText
                }
                catch(e){
                    alert(e);
                }

            }
            else{
                alert('로그인 후 다시 시도해주세요');
                Router.push('/');
            }
        }
    }

    return (
        <div className = 'apply-simple-container'>
            <div className = 'apply-simple-flex'>
                <div className = {
                    'apply-simple-reading-status '
                    + 'apply-simple-reading-' + ((seenFlag || isAccepted) ? 'true' : 'false')
                    }>
                    {
                        isAccepted ? 
                        '승인완료' : 
                        (seenFlag ? '열람' :'미열람')
                    }
                </div>
                <div className = {'apply-simple-progress-status ' + 'apply-simple-progress-' + (isClosed ? 'finish' : 'in')}>
                    {isClosed ? '모집완료' : '모집중'}
                </div>
                <div className = 'apply-simple-cancel-button' onClick = {() => handleClickCancle()}>
                    <div className = 'apply-simple-cancel-button-text'>
                        지원취소
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ApplySimpleContents;