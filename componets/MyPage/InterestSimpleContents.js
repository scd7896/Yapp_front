import '../../css/MyPage/ProjectSimpleContainer.scss'
import {useDispatch} from 'react-redux'
import { OPEN_APPLY_MODAL } from '../../action/index.js';
import ApplyModal from '../Kim/ApplyModal'
var InterestSimpleContents = (props) =>
{
    const dispatch = useDispatch();
    const openModal = ()=>{
        dispatch({
            type : OPEN_APPLY_MODAL,
            postId : props.id
        })
    }

    var id = props.info.id;
    var finish = props.info.finish;

    return (

        <div className = 'interest-simple-container'>
            <div className = 'interest-simple-flex'>
                <div className = 'interest-simple-bookmark-button' onClick = {() => props.onDelete(id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17.855" height="25.767" viewBox="0 0 17.855 25.767">
                        <g id="그룹_2030" data-name="그룹 2030" transform="translate(-1182.282 -597.054)">
                            <path id="패스_1756" data-name="패스 1756" d="M1477.957,92.98v12.79h-.166l-8.582-6.594Z" transform="translate(-277.82 517.051)" fill={finish ? '#cccdd0' :"#5c63ff"}/>
                            <path id="패스_1757" data-name="패스 1757" d="M1464.623,61V73.977l-8.749,6.2-9.106,6.452V61Z" transform="translate(-264.486 536.054)" fill={finish ? '#afafaf' :"#4ce4bd"}/>
                        </g>
                        </svg>
                </div>

                <div className = 'interest-simple-apply-button' onClick = {openModal}>
                    <div className = 'interest-simple-apply-button-text' >
                        지원하기
                    </div>
                </div>
                
            </div>            
            
        </div>
    )
}

export default InterestSimpleContents;