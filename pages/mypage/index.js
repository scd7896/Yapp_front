import React from 'react'

const mypage = ({user_id, routing})=>{
    console.log(user_id, routing)
    return(
        <div>
            <div id = "mypages_header_container"></div>
            <div id = "mypages_router_container">
                <div>{user_id}</div>
                <div>{routing}</div>
            </div>
        </div>
    )
}

mypage.getInitialProps = async(context)=>{
    
    return {user_id : context.query.user_id, routing : context.query.routing}
}
export default mypage;