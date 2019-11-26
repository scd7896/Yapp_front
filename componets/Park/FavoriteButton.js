import '../../css/Park/favoriteButton.scss'

export default function FavoriteButton(props){

    return (
        <div className = "favorite-button-bg" onClick = {props.onClick}>
            {
                <svg xmlns="http://www.w3.org/2000/svg" width="27.27%" viewBox="0 0 17.855 25.767">
                    <g id="그룹_2030" data-name="그룹 2030" transform="translate(-1182.282 -597.054)">
                        <path id="패스_1756" data-name="패스 1756" d="M1477.957,92.98v12.79h-.166l-8.582-6.594Z" transform="translate(-277.82 517.051)" fill={props.finish ? '#cccdd0' : (props.toggle ? "#5c63ff" : "#afafaf")}/>
                        <path id="패스_1757" data-name="패스 1757" d="M1464.623,61V73.977l-8.749,6.2-9.106,6.452V61Z" transform="translate(-264.486 536.054)" fill={props.finish ? '#afafaf' : (props.toggle ? "#4ce4bd" : "#cccdd0")}/>
                    </g>
                </svg>
            }
        </div>
    )
}