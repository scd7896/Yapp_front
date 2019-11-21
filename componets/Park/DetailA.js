import '../../css/park/detail_qna.scss'

export default function DetailA(props){



    return (
        <div className = {props.className + ' detail-wrapper-wrapper'}>
            <div className= 'detail-a-wrapper'>
                <div className = 'detail-a-stair'>

                </div>
                <div className = 'detail-a'>
                    A
                </div>
                <div className = 'detail-a-content-wrapper'>
                    <div className= 'detail-name'>
                        {'사용자 이름'}
                    </div>
                    <div className = 'detail-content'>
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
    )
}