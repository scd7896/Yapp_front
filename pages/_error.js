import Error from 'next/error'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import ErrorCode from '../componets/Kim/error/atomic/ErrorCode'
import ErrorContents from '../componets/Kim/error/atomic/ErrorContents'
import ErrorImage from '../componets/Kim/error/atomic/ErrorImage'
import '../css/kim/_error.scss'
const MyError = ({statusCode})=>{
    
    return(
        <div className = "error_page_container">
            <Head>
                <title>Toys 에러 {statusCode}</title> 
            </Head>
            <div className = "error_page_left_container">
                <ErrorCode errorStatus = {statusCode}/>
                <ErrorContents errorStatus = {statusCode}/>
                <Link href = '/'>
                    <div className = "error_page_home_button">
                        <p className = "error_page_home_button_text">홈으로 이동</p>
                        <img src = "https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/CA153ACE-A9AF-4405-A002-A2800E77AA69.svg"/>
                    </div>
                </Link>
                
            </div>
            <div>
                <ErrorImage errorStatus = {statusCode}/>
            </div>
        </div>
    )
}
MyError.getInitialProps = async(context)=>{
    const statusCode = context.res ? context.res.statusCode : context.err? context.err.statusCode : null;
    return {statusCode}
}
export default MyError;