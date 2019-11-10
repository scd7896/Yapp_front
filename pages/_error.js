import Error from 'next/error'
import React from 'react'
import ErrorCode from '../componets/Kim/error/atomic/ErrorCode'
import ErrorContents from '../componets/Kim/error/atomic/ErrorContents'
import ErrorImage from '../componets/Kim/error/atomic/ErrorImage'
import '../css/kim/_error.scss'
const MyError = ({statusCode})=>{
    return(
        <div className = "error_page_container">
            
            <div className = "error_page_left_container">
                <ErrorCode errorStatus = {statusCode}/>
                <ErrorContents errorStatus = {statusCode}/>
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