import React from 'react'

const ErrorImage = ({errorStatus})=>{
    const path = errorStatus === 404 ? 'https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/C383DD8C-8A2B-4499-B273-44296EAAFB20.svg' 
    : '';
    return(
        <div>
            <img src = {path}/>
        </div>
        
    )
}

export default ErrorImage;