import Router from 'next/router'
import React from 'react'

//마이페이지의 리다이렉트용 파일입니다. pages/mypage/[section].js에서 본 내용을 고쳐주세요

class MyPage extends React.Component{

    static async getInitialProps(ctx) {
        if (ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/mypage/apply'
            })
            ctx.res.end();
        } else {
            Router.push('/mypage/apply');
        }
        return {}
    }

    render(){
        return null;

    }
}

export default MyPage;