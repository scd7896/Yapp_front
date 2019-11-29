import '../../css/MyPage/ProjectSimpleContainer.scss'
import {useDispatch} from 'react-redux'
import { OPEN_APPLY_MODAL } from '../../action/index.js';
import ApplyModal from '../Kim/ApplyModal'
import FavoriteButton from '../Park/FavoriteButton';
var InterestSimpleContents = (props) =>
{
    const dispatch = useDispatch();
    const openModal = ()=>{
        dispatch({
            type : OPEN_APPLY_MODAL,
            postId : props.id,
            role : props.info.role
        })
    }
    var isClosed = props.info.isClosed ? props.info.isClosed : false;

    return (

        <div className = 'interest-simple-container'>
            <div className = 'interest-simple-flex'>
                <div className = 'interest-simple-bookmark-button'>
                    <FavoriteButton 
                        project = {props.info}
                        finish = {isClosed}
                        checkConfirm = {true}
                        afterClick = {props.updateScreen}
                        />
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