
import { useSelector, useDispatch } from "react-redux";
import { OPEN_APPLY_MODAL , OPEN_LOGIN_MODAL } from '../../action/index.js';

export default function DetailButtons(props){

    const dispatch = useDispatch();
    const { user } = useSelector(state => state);

    const openApplyModal = ()=>{
        dispatch({
            type : OPEN_APPLY_MODAL,
            postId : props.query.id
        })
        
    }

    const openLoginModal = () => {
      dispatch({
        type: OPEN_LOGIN_MODAL
      });
    };

    
    function handleClickApplyButton(){
        var userToken = cookies.getCookie('user-token');
        if(userToken == undefined || userToken == ''){
            openLoginModal();
        }
        else{
            openApplyModal()
        }
    }

    console.log(user.userId != '' && props.projectUserId != '' && user.userId == props.projectUserId)

    return !(user.userId != '' && props.projectUserId != '' && user.userId == props.projectUserId) ? (
        <div className = 'detail-button-flex'>
            <div className = "button detail-favorite-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.854" height="25.768" viewBox="0 0 17.854 25.768">
                <g id="그룹_1901" data-name="그룹 1901" transform="translate(-1450.769 -61)">
                    <path id="패스_1756" data-name="패스 1756" d="M1477.957,92.98v12.79h-.166l-8.582-6.594Z" transform="translate(-9.334 -19.003)" fill="#afafaf"/>
                    <path id="패스_1757" data-name="패스 1757" d="M1464.623,61V73.977l-8.749,6.2-9.106,6.452V61Z" transform="translate(4 0)" fill="#cccdd0"/>
                </g>
                </svg>
            </div>
            <div className = "button detail-apply-button" onClick = {handleClickApplyButton}>지원하기</div>
        </div>) :(
            <div className = 'detail-button-flex'>
                <div className = "button detail-apply-button">수정</div>
                <div className = "button detail-apply-button">모집마감</div>
            </div>
        )
}