import React from 'react'
import '../../css/MyPage/MyPortfolioSection.scss'

class PortfolioSimpleComponent extends React.Component{
    render(){

        var type = this.props.type;

        return (
            <div className = {'portfolio-simple-container ' + (type ? ('portfolio-simple-container-'+type) : '')} >
                <div className = 'portfolio-simple-container-space-between'>
                    <div className = 'portfolio-simple-left'>
                        <img 
                            className = 'portfolio-simple-img'
                            src = {this.props.portfolio.thumbnailImage ? this.props.portfolio.thumbnailImage : ''}/>
                        <div className = 'portfolio-simple-contents-container'>
                            <div className = 'portfolio-simple-title'>
                                {this.props.portfolio.title ? this.props.portfolio.title : ''}
                            </div>
                            <div className = 'portfolio-simple-row'>
                                <div className = 'portfolio-simple-row-title'>
                                    담당 역할
                                </div>
                                <div className = 'portfolio-simple-row-content'>
                                    {this.props.portfolio.myRole ? this.props.portfolio.myRole : ''}
                                </div>
                            </div>
                            <div className = 'portfolio-simple-row'>
                                <div className = 'portfolio-simple-row-title'>
                                    사용스택
                                </div>
                                <div className = 'portfolio-simple-row-content'>
                                    {this.props.portfolio.useStack ? this.props.portfolio.useStack : ''}
                                </div>
                            </div>
                            <div className = 'portfolio-simple-row'>
                                <div className = 'portfolio-simple-row-title'>
                                    링크
                                </div>
                                <div className = 'portfolio-simple-row-content'>
                                    {
                                        this.props.portfolio.link ? 
                                        (this.props.portfolio.link == '' ? '링크 없음' : this.props.link) :
                                        '링크 없음'
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        type != 'applicant' ? 
                        (
                            <div className = 'portfolio-simple-right'>
                                <div className = 'portfolio-simple-delete-button' onClick = {() => this.props.onDelete(this.props.id)}>
                                    삭제
                                </div>
                                <div className = 'portfolio-simple-edit-button'>
                                    편집
                                </div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );
    }
}
export default PortfolioSimpleComponent