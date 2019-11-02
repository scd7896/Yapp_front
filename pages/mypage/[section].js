import Router from 'next/router'
import React from 'react'
import Link from 'next/link'


import '../../css/Park/mypage.scss'
import '../../css/container.scss'

import MyPageApply from '../../componets/MyPage/MyPageApply';
import MyPageRecruit from '../../componets/MyPage/MyPageRecruit';
import MyPagePortfolio from '../../componets/MyPage/MyPagePortfolio';
import MyPageInterest from '../../componets/MyPage/MyPageInterest';

class MyPage extends React.Component{

    
    static async getInitialProps(ctx) {

        if(ctx.query.section  != 'apply' &&
            ctx.query.section  != 'recruit' &&
            ctx.query.section  != 'portfolio' && 
            ctx.query.section  != 'interest'){

                if (ctx.res) {
                    ctx.res.writeHead(302, {
                        Location: '/mypage/apply'
                    })
                    ctx.res.end();
                } else {
                    Router.push('/mypage/apply');
                }

            }

        console.log(ctx);

        return {}
    }


    constructor(props){
        super(props);

    }

    render(){

        const section = this.props.query.section;
        var curSectionComponent = null ;

        if(section == 'apply'){
            curSectionComponent = <MyPageApply/>
        }
        else if(section == 'recruit'){
            curSectionComponent = <MyPageRecruit/>
        }
        else if(section == 'portfolio'){
            curSectionComponent = <MyPagePortfolio/>
        }
        else if(section == 'interest'){
            curSectionComponent = <MyPageInterest/>
        }
        const goToModifyProfile = ()=>{
            Router.push('/modify/profile');
        }
        const goToKeywordManagement = ()=>{
            Router.push('/keyword/management');
        }
        return (
            <div className = 'mypage'>     

                {/*마이 페이지 프로필 섹션*/}      
                <div className = 'mypage-profile-section'>
                    <div className = 'mypage-profile-container container'>
                        <div className = 'mypage-sub-container'>
                            <div className = 'mypage-profile-flex'>
                                <div className = 'mypage-profile-picture'>

                                </div>
                                <div className = 'mypage-profile-detail'>
                                    <div className = 'mypage-profile-nickname'>
                                        사용자이름
                                    </div>
                                    <div className = 'mypage-profile-id'>
                                        사용자 ID
                                    </div>
                                    <div className = 'mypage-profile-button-container'>

                                        <div className = 'mypage-profile-button' onClick = {goToModifyProfile}>
                                            프로필 수정
                                        </div>
                                        <div className = 'mypage-profile-button' onClick = {goToKeywordManagement}>
                                            키워드 관리
                                        </div>
                                    </div>

                                </div>                        
                            </div>
                        </div>

                    </div>
                    
                </div>

                {/*마이 페이지 탭 섹션*/}
                <div className = 'mypage-tab-section'>

                    <div className = ' container'>
                        <div className = 'mypage-tabs-container mypage-sub-container'>
                            <Link href='/mypage/apply'><a>
                                <div className = {'mypage-tab ' + (section=='apply' ? 'mypage-tab-active':'mypage-tab-inactive')}>
                                    <div className = 'mypage-tab-text'>
                                        지원현황
                                    </div>
                                </div>
                            </a></Link>
                            <Link href='/mypage/recruit'><a>
                                <div className = {'mypage-tab ' + (section=='recruit' ? 'mypage-tab-active':'mypage-tab-inactive')}>
                                    <div className = 'mypage-tab-text'>
                                        모집글 관리
                                    </div>
                                </div>
                            </a></Link>
                            <Link href='/mypage/portfolio'><a>
                                <div className = {'mypage-tab ' + (section=='portfolio' ? 'mypage-tab-active':'mypage-tab-inactive')}>
                                    <div className = 'mypage-tab-text'>
                                        이력 관리
                                    </div>
                                </div>
                            </a></Link>
                            <Link href='/mypage/interest'><a>
                                <div className = {'mypage-tab ' + (section=='interest' ? 'mypage-tab-active':'mypage-tab-inactive')}>
                                    <div className = 'mypage-tab-text'>
                                        관심 프로젝트
                                    </div>
                                </div>
                            </a></Link>
                        </div>
                    </div>
                </div>

                {curSectionComponent}
            </div>
        )


    }
}

export default MyPage;