import React from 'react'
class PortfolioSimpleComponent extends React.Component{
    render(){
        return (
            <div className = 'portfoilo-simple-container'>
                <div className = 'portfolio-simple-container-space-between'>
                    <div className = 'portfolio-simple-left'>
                        <img 
                            className = 'portfolio-simple-img'
                            src = {this.props.post.img}/>
                        <div className = 'portfolio-simple-contents-container'>
                            <div className = 'portfolio-simple-title'>
                                {this.props.post.title}
                            </div>
                            <div className = 'portfolio-simple-row'>
                                <div className = 'portfolio-simple-row-title'>
                                    담당 역할
                                </div>
                                <div className = 'portfolio-simple-row-content'>
                                    {this.props.post.roll}
                                </div>
                            </div>
                            <div className = 'portfolio-simple-row'>
                                <div className = 'portfolio-simple-row-title'>
                                    사용스택
                                </div>
                                <div className = 'portfolio-simple-row-content'>
                                    {this.props.post.stack}
                                </div>
                            </div>
                            <div className = 'portfolio-simple-row'>
                                <div className = 'portfolio-simple-row-title'>
                                    링크
                                </div>
                                <div className = 'portfolio-simple-row-content'>
                                    {this.props.post.link == '' ? '링크 없음' : this.props.link}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = 'portfolio-simple-right'>
                        <div className = 'portfolio-simple-delete-button'>
                            삭제
                        </div>
                        <div className = 'portfolio-simple-edit-button'>
                            편집
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PortfolioSimpleComponent