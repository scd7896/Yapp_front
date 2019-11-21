import '../../css/park/detail_qna.scss'

export default function DetailQ(props){
    return (
        <div className = {props.className + ' detail-wrapper-wrapper' }>
            <div className= 'detail-q-wrapper'>
                <div className = 'detail-q-header'>
                    <div className = 'detail-q-title-wrapper'>
                        <div className = 'detail-q'>
                            Q
                        </div>
                        <div className= 'detail-name'>
                            {'사용자 이름'}
                        </div>
                        <div className= 'detail-time'>
                            {'5시간 전'}
                        </div>
                    </div>
                </div>

                <div className = 'detail-content'>
                    {props.content}
                </div>

            </div>
        </div>
    )
}