
import moment from 'moment-timezone'


export default (time) => {
    var createAtSeoul = moment(time).tz("Asia/Seoul");
    var nowSeoul = moment().tz("Asia/seoul");
    var diff = nowSeoul.diff(createAtSeoul,'seconds');

    var timeStr = ''

    if(diff > 24 * 60 * 60){
        timeStr = createAtSeoul.format('YYYY.MM.DD HH:mm')
    }
    else if(diff > 60 * 60){
        timeStr = nowSeoul.diff(createAtSeoul,'hours') + '시간 전';
    }
    else if(diff > 60){
        timeStr = nowSeoul.diff(createAtSeoul,'minutes') + '분 전';
    }
    else{
        timeStr = diff +'초 전';
    }

    return timeStr;
}