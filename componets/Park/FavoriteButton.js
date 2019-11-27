import '../../css/Park/favoriteButton.scss'
import {useSelector, useDispatch} from 'react-redux'
import {ADD_FAVORITE_REQUEST,DELETE_FAVORITE_REQUEST,OPEN_LOGIN_MODAL} from '../../action'
import {useState, useEffect} from 'react'

export default function FavoriteButton(props){
    var {user, favorite} = useSelector(state => state);
    var [toggle,setToggle] = useState(favorite.favoriteList.includes(parseInt(props.project.projectId)));
    
    var dispatch = useDispatch();

    if(props.afterClick ){
        useEffect(() => {
            if(favorite.lastEdited == props.project.projectId)
            {
                props.afterClick();
            }
        },[favorite.lastEdited])
    }

    useEffect(() => {
        if(favorite.lastEdited == props.project.projectId || favorite.lastEdited == 0)
        {
            var newToggle = favorite.favoriteList.includes(parseInt(props.project.projectId));
            if(newToggle !== toggle){
                setToggle(newToggle)
            }
        }

    },[favorite])


    function handleClick(event){
        event.preventDefault();
        
        if(user.isLogging){
            console.log(props.project.projectId, toggle)
            if(toggle == false){
                dispatch({
                    type : ADD_FAVORITE_REQUEST,
                    favoriteId : parseInt(props.project.projectId)
                })
            }
            else if(toggle == true){
                dispatch({
                    type : DELETE_FAVORITE_REQUEST,
                    favoriteId : parseInt(props.project.projectId)
                })
            }
        }
        else{
            dispatch({
                type: OPEN_LOGIN_MODAL
            });
        }


    }

    return (
        <div className = "favorite-button-bg" onClick = {handleClick}>
            {
                <svg xmlns="http://www.w3.org/2000/svg" width={props.type == 'detail' ? "33%":"27.27%" }viewBox="0 0 17.855 25.767">
                    <g id="그룹_2030" data-name="그룹 2030" transform="translate(-1182.282 -597.054)">
                        <path id="패스_1756" data-name="패스 1756" d="M1477.957,92.98v12.79h-.166l-8.582-6.594Z" transform="translate(-277.82 517.051)" fill={props.finish ? '#cccdd0' : (toggle ? "#5c63ff" : "#afafaf")}/>
                        <path id="패스_1757" data-name="패스 1757" d="M1464.623,61V73.977l-8.749,6.2-9.106,6.452V61Z" transform="translate(-264.486 536.054)" fill={props.finish ? '#afafaf' : (toggle ? "#4ce4bd" : "#cccdd0")}/>
                    </g>
                </svg>
            }
        </div>
    )
}