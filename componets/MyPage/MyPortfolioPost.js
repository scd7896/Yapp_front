import React from 'react'
import fetch from 'isomorphic-unfetch'
import baseURL from '../../url'
import cookies from '../../methods/cookies'

//실제 DB에 올릴 경우 : https://stackoverflow.com/questions/5587973/javascript-upload-file

class MyPortfolioPost extends React.Component{

    constructor(props){
        super(props);

        this.state={
            title : (this.props.portfolio ? this.props.portfolio.title : ''),
            roll : (this.props.portfolio ? this.props.portfolio.myRole : ''),
            stack : (this.props.portfolio ? this.props.portfolio.useStack : ''),
            link : '',
            previewURL : (this.props.portfolio ? this.props.portfolio.thumbnailImage : ''),
            mutax : 0
        }

        this.handleLinkChange = this.handleLinkChange.bind(this);
        this.handleRollChange = this.handleRollChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleStackChange = this.handleStackChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);

        this.handleClickDelete = this.handleClickDelete.bind(this);

        this.fileFormData = new FormData();
    }

    handleTitleChange(event){
        var curState = JSON.parse(JSON.stringify(this.state));
        curState.title = event.target.value;

        this.setState(curState);
    }

    handleRollChange(event){
        var curState = JSON.parse(JSON.stringify(this.state));
        curState.roll = event.target.value;

        this.setState(curState);
    }

    handleStackChange(event){
        var curState = JSON.parse(JSON.stringify(this.state));
        curState.stack = event.target.value;

        this.setState(curState);
    }

    handleLinkChange(event){
        var curState = JSON.parse(JSON.stringify(this.state));
        curState.link = event.target.value;

        this.setState(curState);
    }

    handleFileChange(event){
        var fileList = event.target.files;

        if(fileList[0] != undefined){
            if(fileList[0].type == 'image/png' ||
                fileList[0].type == 'image/x-png' ||
                fileList[0].type == 'image/gif' ||
                fileList[0].type == 'image/jpeg'){
                    var curState = JSON.parse(JSON.stringify(this.state));
                    curState.previewURL = URL.createObjectURL(fileList[0]);
                    this.setState(curState);
                }
            else{
                alert('이미지 파일만 업로드 가능합니다.');
            }
        }

        this.fileFormData = new FormData();
        this.fileFormData.append('thumbnailImage', fileList[0]);

        
    }

    handleClickDelete(event){
        if(typeof(this.props.onDelete) == 'function'){
            this.props.onDelete(this.props.id);
        }
    }

    registerPortfolio(){
        
        var userToken = cookies.getCookie('user-token');
        /*
        var data = {
            "title": this.state.title,
            "myRole": this.state.roll,
            "useStack": this.state.stack,
            "thumbnailImage": null,
            "attachFile": this.state.link
        };
        */

        
        this.fileFormData.forEach((v,k) => data[v]  = k);

        
        var fileFormData = this.fileFormData;
        fileFormData.append('title',this.state.title);
        fileFormData.append("myRole", this.state.roll);
        fileFormData.append("useStack", this.state.stack);
        fileFormData.append("attachFile", this.state.link);
        
        

        return fetch(baseURL + '/mypage/portfolio',{
            headers : {
                
                'Authorization' : 'bearer ' + userToken,
                'accpet'  : 'application/json',
                'Content-Type' : 'application/json'
            },
            'method' : "POST",
            'body' : fileFormData
        });
    }

    render(){

        var registerPortfolio = this.registerPortfolio.bind(this);
        var fetchPortfolios = this.props.fetchPortfolios;
        var onDelete = this.props.onDelete;
        var state = this.state;
        var id = this.props.id;
        
        var toggleMutax = ((curMuatx) => {
            
            var curState = JSON.parse(JSON.stringify(this.state));
            curState.mutax = curMuatx;
            this.setState(curState);
        }).bind(this);

        return (
            <div className = 'portfolio-post-container'>
                <div className = 'portfolio-post-contents-container'>
                    <div className= 'portfolio-post-top'></div>
                    <div className = 'portfolio-post-title-section portfolio-post-section'>
                        
                        <div className = 'portfolio-post-section-title'>
                            프로젝트명
                        </div>
                        <textarea 
                            className = 'portfolio-post-textarea'
                            placeholder = '프로젝트 제목을 입력하세요'
                            value = {this.state.title}
                            onChange = {this.handleTitleChange}
                        />
                    </div>
                    <div className = 'portfolio-post-section'>
                        <div className = 'portfolio-post-section-title'>
                            담당 역할
                        </div>
                        <textarea 
                            className = 'portfolio-post-textarea'
                            placeholder = 'ex) UXUI디자인, 프론트개발'
                            value = {this.state.roll}
                            onChange = {this.handleRollChange}
                        />
                    </div>
                    <div className = 'portfolio-post-section'>
                        <div className = 'portfolio-post-section-title'>
                            사용스택 또는 프로그램
                        </div>
                        <textarea 
                            className = 'portfolio-post-textarea'
                            placeholder = 'ex) python, react, JS, Adobe Xd, sketch'
                            value = {this.state.stack}
                            onChange = {this.handleStackChange}
                        />
                    </div>
                    <div className = 'portfolio-post-section'>
                        <div className = 'portfolio-post-section-title'>
                            프로젝트 링크 첨부
                        </div>
                        <textarea 
                            className = 'portfolio-post-textarea'
                            placeholder = '링크를 첨부하세요'
                            value = {this.state.link}
                            onChange = {this.handleLinkChange}
                        />
                    </div>
                    <div className = 'portfolio-post-image-section'>
                        <div className = 'portfolio-post-image-section-title'>
                            프로젝트 사진 업로드
                        </div>
                        <div className = 'portfolio-post-image-section-subtitle'>
                            대표사진 딱 1장만 올려주세요 (권장사이즈 000X000px)
                        </div>
                        <label className = 'portfolio-post-image-label' for={'portfolio-img-' + this.props.id}>
                            <div className = 'portfolio-post-image'>
                                {/* placeholder */}
                                <div className = {this.state.previewURL == '' ? 'portfolio-post-image-placeholder' : 'portfolio-post-image-none'}>
                                    <svg  xmlns="http://www.w3.org/2000/svg" width="106" height="71.121" viewBox="0 0 106 71.121">
                                    <g id="그룹_2030" data-name="그룹 2030" transform="translate(-682 -1486.879)">
                                        <g id="그룹_1981" data-name="그룹 1981" transform="translate(707.855 1487.879)">
                                        <path id="패스_1745" data-name="패스 1745" d="M1242.54,390.146h-17.822l-3.4-4.221,2.752-3.409,6.156-7.625,6.156,7.625Z" transform="translate(-1202.616 -364.11)" fill="none" stroke="#b9b9b9" strokeMiterlimit="10" strokeWidth="2"/>
                                        <ellipse id="타원_278" data-name="타원 278" cx="3.1" cy="3.1" rx="3.1" ry="3.1" transform="translate(10.144 6.199)" fill="none" stroke="#b9b9b9" strokeMiterlimit="10" strokeWidth="2"/>
                                        <path id="패스_1746" data-name="패스 1746" d="M1217.392,393.615h-15.981l4-4.952,4-4.946,4,4.946.906,1.12Z" transform="translate(-1195.051 -367.465)" fill="none" stroke="#b9b9b9" strokeMiterlimit="10" strokeWidth="2"/>
                                        </g>
                                        <text id="이미지_추가" data-name="이미지 추가" transform="translate(682 1553)" fill="#8d8d8f" fontSize="21" fontFamily="MalgunGothic-Semilight, Malgun Gothic" fontWeight="300" letterSpacing="-0.05em"><tspan x="0" y="0">이미지</tspan><tspan y="0" fontFamily="Montserrat-Light, Montserrat"> </tspan><tspan y="0">추가</tspan></text>
                                        <rect id="사각형_2772" data-name="사각형 2772" width="30.995" height="45.084" transform="translate(752.939 1487.879) rotate(90)" fill="none" stroke="#b9b9b9" strokeMiterlimit="10" strokeWidth="2"/>
                                    </g>
                                    </svg>
                                </div>
                                {/* img content */}

                                <div className = {this.state.previewURL != '' ? 'portfolio-post-image-content-container' : 'portfolio-post-image-none'}>
                                    <img 
                                        className = 'portfolio-post-image-content'
                                        src = {this.state.previewURL}/>
                                </div>
                                
                            </div>
                        </label>

                        <input 
                            className='portfolio-img-input' 
                            id={'portfolio-img-' + this.props.id} 
                            type="file" 
                            name="myImage" 
                            accept="image/x-png,image/gif,image/jpeg,image/x-png" 
                            onChange={this.handleFileChange}/>
                        
                    </div>

                </div>
                <div className = 'portfolio-post-button-container'>
                    <div className = 'portfolio-post-button-cancle' onClick={this.handleClickDelete}>
                        취소
                    </div>
                    <div 
                        className = 'portfolio-post-button-submit'
                        onClick = {() => {
                            if(state.mutax == 0){
                                toggleMutax(1);
                                registerPortfolio().then(res => {
                                    if(res.ok){
                                        fetchPortfolios();
                                    }
                                    toggleMutax(0);
                                    onDelete(id,true);
                                }).catch(err => {
                                    toggleMutax(0);
                                    console.log(err);
                                })
                            }
                        }}>
                        {this.props.portfolio ? '수정완료' : '등록'}
                    </div>
                </div>


            </div>
        );
    }
}

export default MyPortfolioPost