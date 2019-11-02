import '../../css/Park/UserProfileImg.scss'

export default (props) => {
    var size = props.size;
    var src = props.src;

    var img = (
        <img className = 'user-profile-img-img'
            src = {props.src}
            style = {{width:size, height:size}}>

            </img>
    )

    var thumbnail = (
        <div className = 'user-profile-thubnail' style = {{width:size, height:size}}>
            <svg style = {{'marginLeft' : (62.7/178) * parseInt(size), 'marginTop' : (56/178) * parseInt(size)} } xmlns="http://www.w3.org/2000/svg" width={(58.768/178) * parseInt(size)} height={(66.813/178) * parseInt(size)} viewBox="0 0 58.768 66.813">
            <g id="그룹_2072" data-name="그룹 2072" transform="translate(-426.72 -530.998)">
                <ellipse id="타원_11" data-name="타원 11" cx="14.979" cy="14.978" rx="14.979" ry="14.978" transform="translate(440.749 530.998) rotate(7)" fill="#cccdd0"/>
                <path id="패스_1555" data-name="패스 1555" d="M55.3,23.761.3,31.837a27.8,27.8,0,1,1,55-8.075Z" transform="translate(430.6 559.473) rotate(7)" fill="#afafaf"/>
            </g>
            </svg>
        </div>
    )

    return (
        <div className = 'user-profile-img' style = {{width:size, height:size}}>
            {props.src ? img : thumbnail}
        </div>
    )

}