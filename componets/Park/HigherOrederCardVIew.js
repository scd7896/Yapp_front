
import '../../css/Park/CardViewSection.scss'

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
        }

        getNextDataFromServer(callback){

            //index 부터 약속된 갯수만큼 ajax콜로 불러온다.
            function ajaxCallPromise(index){
                return new Promise((resolve, reject) => {
                    var data = [];
                    var size = 5;

                    if(CardViewTypeStr == 'project'){
                        for(let i = index ; i < index + size; i ++){
                            data.push({
                                'jobgroup' : ['개발자', '프론트','백엔드'] ,
                                'title' : '팀원 모집 #' + i,
                                'step' : '팀 빌딩 단계',
                                'region' : '서울',
                                'time' : '5시간 전'
                            })
                        }
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
                    }

                    resolve(data);
                    
                });
            }

            var xhrPromise = ajaxCallPromise(this.state.data.length);

            (function(_this)
            {
                xhrPromise.then(function(value){
                
                    var data = JSON.parse(JSON.stringify(_this.state.data));

                    data  = data.concat(value);

                    _this.setState({data: data});

                    if(typeof(callback) === 'function'){
                        callback.call(_this);
                    }
                });
            })(this);

        }



        HandleClickLeft(e){

            if(this.curContents > 0)
                this.curContents --;

            this.WrapperDOM.scrollLeft = this.WrapperDOM.children[this.curContents].offsetLeft;


        }
        HandleClickRight(e){
            
            this.curContents ++;

            if(this.curContents >= this.state.data.length - 3){
                this.getNextDataFromServer(function(){
                    this.WrapperDOM.scrollLeft = this.WrapperDOM.children[this.curContents].offsetLeft;
                })
            }
            else{
                this.WrapperDOM.scrollLeft = this.WrapperDOM.children[this.curContents].offsetLeft;
            }

 
        }

        componentWillMount(){
            this.getNextDataFromServer();
        }

        componentDidMount(){

            this.WrapperDOM = this.wrapperRef.current;

            
            //ie 체크 후에 resize이벤트 등록
            var agent = navigator.userAgent.toLowerCase();
            if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {

            }
            else{
                (function(wrapperDom,_this){
                    window.addEventListener('resize',function(){
                        wrapperDom.scrollLeft = wrapperDom.children[_this.curContents].offsetLeft;
                    })
                })(this.WrapperDOM,this);
            }

        }


        render(){

            return (
                <div  className = "CardView-Wrapper">
                    <button className = "CardView-Hover-Left" 
                        onClick = {this.HandleClickLeft}
                        style = {{top :  this.props.buttonTop }}>
                        <svg className = 'CardView-Hover-Arrrow' xmlns="http://www.w3.org/2000/svg" width="14.484" height="26.139" viewBox="0 0 14.484 26.139">
                        <path id="icon_prev" d="M1213.814,697.353l-11.655,11.655,11.655,11.655" transform="translate(-1200.745 -695.939)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                        </svg>
                    </button>
                    <button className = "CardView-Hover-Right" 
                        onClick = {this.HandleClickRight}
                        style = {{top :  this.props.buttonTop}}>
                        <svg className = 'CardView-Hover-Arrrow' xmlns="http://www.w3.org/2000/svg" width="14.484" height="26.139" viewBox="0 0 14.484 26.139">
                        <path id="icon_next" d="M1213.814,697.353l-11.655,11.655,11.655,11.655" transform="translate(1215.228 722.078) rotate(180)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                        </svg>
                    </button>
                    <div ref = {this.wrapperRef} className = "CardView-Section">
                        {
                            this.state.data ? this.state.data.map((e)=>{
                                return(<CardView data = {e}></CardView>)
                            }): null
                        }
                    </div>
                    
                </div>
            );
        }
    }

}


export default HigherOrderCardViewSection;