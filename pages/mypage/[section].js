import Router from 'next/router'
import React from 'react'

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

        return {}
    }


    constructor(props){
        super(props);

    }

    render(){
        return (<div>o</div>)


    }
}

export default MyPage;