import React from 'react'

const ErrorCode = ({errorStatus})=>{
    const text = errorStatus == 404 ? `404 error` : `500 error`
    return(
        <p style = {{
            fontFamily: 'RedHatDisplay',
            fontSize: '110px',
            fontWeight: 900,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.06',
            letterSpacing: '-2.75px',
            textAlign: 'left'
        }}>
            {text}
        </p>
    )
}

export default ErrorCode;