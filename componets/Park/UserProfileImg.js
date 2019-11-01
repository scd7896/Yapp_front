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

        </div>
    )

    return (
        <div className = 'user-profile-img' style = {{width:size, height:size}}>
            {props.src ? img : thumbnail}
        </div>
    )

}