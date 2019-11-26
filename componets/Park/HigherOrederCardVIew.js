
import '../../css/Park/CardViewSection.scss'
import fetch from 'isomorphic-unfetch'
import baseURL from '../../url'
              
import hammer from '@egjs/hammerjs'

function HigherOrderCardViewSection(CardView, CardViewTypeStr){
    return class CardViewSectionWrapper extends React.Component{
        constructor(props){
            super(props);

            this.state ={
                data :[]
            }

            this.HandleClickLeft = this.HandleClickLeft.bind(this);
            this.HandleClickRight = this.HandleClickRight.bind(this);

            this.wrapperRef = React.createRef();
            this.cardViewRef = React.createRef();

            
            this.curContents = 0;


            //scroll 버튼을 누르면 스크롤 뮤텍스를 취득하지만, 화면 resize에 의해 mutex를 박탈당할수 있다.
            this.scrollMutex = 0;

            this.getNextDataFromServer();

            this.initialAct = false;
        }

        getNextDataFromServer(callback){

            //index 부터 약속된 갯수만큼 ajax콜로 불러온다.
            function ajaxCallPromise(index){
                return new Promise((resolve, reject) => {
                    var data = [];
                    var size = 5;

                    if(CardViewTypeStr == 'project'){
                        fetch(baseURL + '/projects/popularity',{
                            headers : {
                                'accepet' : 'application/json',
                                'Content-Type' : 'application/json'
                            }
                        }).then(res => {
                            if(res.ok){
                                return res.json()
                            }
                        }).then(res => resolve(res.projects))
                    }
                    else if(CardViewTypeStr == 'post'){
                        for(let i = index ; i < index + size; i ++){
                            data.push({
                                'title' : '완성된 프로젝트 #' + i,
                                'view' : 456,
                                'like' : 123,
                                'star' : 2 + index % 3
                            })
                        }
                        resolve(data);
                    }

                    
                    
                });
            }

            var xhrPromise = ajaxCallPromise(this.state.data.length);

            (function(_this)
            {
                xhrPromise.then(function(value){
                
                    var data = JSON.parse(JSON.stringify(_this.state.data));

                    data  = data.concat(value);

                    _this.setState({data: data});
                });
            })(this);

        }


        animatedScroll(target, endOffset, scrollDuration) {

            //scroll 버튼을 누르면 스크롤 뮤텍스를 취득하지만, 화면 resize에 의해 mutex를 박탈당하며, 그 즉시 그와 관련된 행동을 중지해야한다.

            ((_this) => {
                var cosParameter = (endOffset - target.scrollLeft)/ 2,
                start = target.scrollLeft,
                scrollCount = 0,
                oldTimestamp = performance.now();
                function step (newTimestamp) {

                    if(_this.scrollMutex == 1){
                        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
                        if (scrollCount >= Math.PI) {
                            target.scrollLeft = endOffset;
                            _this.scrollMutex = 0;
                            return;
                        }
    
                        target.scrollLeft = start + Math.round(cosParameter - cosParameter * Math.cos(scrollCount));
                        oldTimestamp = newTimestamp;
                        window.requestAnimationFrame(step);
                    }
                    else{
                            //scroll 버튼을 누르면 스크롤 뮤텍스를 취득하지만, 화면 resize에 의해 mutex를 박탈당할수 있다.
                        return;
                    }

                }
                window.requestAnimationFrame(step);
            })(this);
        

        }


        HandleClickLeft(e){

            if(this.scrollMutex == 0){
                this.scrollMutex = 1;
                if(this.curContents > 0)
                    this.curContents --;
                
                this.animatedScroll(this.WrapperDOM, this.WrapperDOM.children[this.curContents].offsetLeft, 700);
            }

        }
        HandleClickRight(e){

            if(this.scrollMutex == 0){
                this.scrollMutex = 1;
            
                if(this.curContents >= this.state.data.length - parseInt(this.WrapperDOM.offsetWidth / this.WrapperDOM.children[this.curContents].offsetWidth)){
                    this.scrollMutex = 0;
                }
                else{
                    this.curContents ++;
                    this.animatedScroll(this.WrapperDOM, this.WrapperDOM.children[this.curContents].offsetLeft, 700);
                }
            }


        }

        componentDidMount(){
            var HandleClickLeft = this.HandleClickLeft;
            var HandleClickRight = this.HandleClickRight;

            if(this.WrapperDOM != this.wrapperRef.current){
                
  
                this.WrapperDOM = this.wrapperRef.current;

                // device detection
                if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
                || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 

                    var swiper = new hammer(this.WrapperDOM);
                    swiper.get('swipe').set({ velocity: 0.3,direction: Hammer.DIRECTION_HORIZONTAL}) 

                    swiper.on('swipe', function (e) {
                        switch (e.direction) {
                          case Hammer.DIRECTION_RIGHT:
                            HandleClickRight();
                          break;
                          case Hammer.DIRECTION_LEFT:
                            HandleClickLeft();
                          break;
                        }
                    })
                }
            }


            if(this.initialAct == false){
                //ie 체크 후에 resize이벤트 등록
                var agent = navigator.userAgent.toLowerCase();
                if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {

                }
                else{
                    (function(_this){
                        window.addEventListener('resize',function(){
                            _this.scrollMutex = 0;
                            if(_this.curContents >= _this.state.data.length - parseInt(_this.WrapperDOM.offsetWidth / _this.WrapperDOM.children[_this.curContents].offsetWidth)){
                                _this.curContents = _this.state.data.length - parseInt(_this.WrapperDOM.offsetWidth / _this.WrapperDOM.children[_this.curContents].offsetWidth);
                            }
                            _this.WrapperDOM.scrollLeft = _this.WrapperDOM.children[_this.curContents].offsetLeft;
                        })
                    })(this);
                }

                this.initialAct = true;

                // device detection
                if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
                || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
                    document.getElementsByClassName('CardView-Hover-PC').forEach(element => {
                        element.style.display = "none !important";
                    });
                }
            }

        }


        render(){

            return (
                <div  className = "CardView-Wrapper">
                    <button className = "CardView-Hover-PC CardView-Hover-Left" 
                        onClick = {this.HandleClickLeft}
                        style = {{top :  this.props.buttonTop }}>
                        <svg className = 'CardView-Hover-Arrrow' xmlns="http://www.w3.org/2000/svg" width="14.484" height="26.139" viewBox="0 0 14.484 26.139">
                        <path id="icon_prev" d="M1213.814,697.353l-11.655,11.655,11.655,11.655" transform="translate(-1200.745 -695.939)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                        </svg>
                    </button>
                    <button className = "CardView-Hover-PC CardView-Hover-Right" 
                        onClick = {this.HandleClickRight}
                        style = {{top :  this.props.buttonTop}}>
                        <svg className = 'CardView-Hover-Arrrow' xmlns="http://www.w3.org/2000/svg" width="14.484" height="26.139" viewBox="0 0 14.484 26.139">
                        <path id="icon_next" d="M1213.814,697.353l-11.655,11.655,11.655,11.655" transform="translate(1215.228 722.078) rotate(180)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                        </svg>
                    </button>
                    <div ref = {this.wrapperRef} className = "CardView-Section">
                        {
                            this.state.data ? this.state.data.map((e)=>{
                                return(<CardView project = {e}></CardView>)
                            }): null
                        }
                    </div>
                    
                </div>
            );
        }
    }

}


export default HigherOrderCardViewSection;