
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

            if(this.WrapperDOM.scrollLeft > this.props.scrollSize)
                this.WrapperDOM.scrollLeft -= this.props.scrollSize;
            else if(this.WrapperDOM.scrollLeft > 0)
                this.WrapperDOM.scrollLeft = 0;


        }
        HandleClickRight(e){

            console.log('??');

            if(this.WrapperDOM.scrollLeft >= (this.state.data.length -2) * this.props.scrollSize){
                this.getNextDataFromServer(function(){
                    this.WrapperDOM.scrollLeft += this.props.scrollSize;
                })

            }
            else{
                this.WrapperDOM.scrollLeft +=this.props.scrollSize;

            }
 
        }

        componentWillMount(){
            this.getNextDataFromServer();
        }

        componentDidMount(){

            this.WrapperDOM = this.wrapperRef.current;
             ;  

        }


        render(){

            return (
                <div  className = "CardView-Wrapper">
                    <button className = "CardView-Hover-Left" onClick = {this.HandleClickLeft}></button>
                    <button className = "CardView-Hover-Right" onClick = {this.HandleClickRight}></button>
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