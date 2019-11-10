import React from 'react'


const ErrorContents = ({errorStatus})=>{
    const textTop = errorStatus === 404 ? `존재하지 않는 주소를 입력하셨거나,` :`일시적 서버오류로 페이지를 표시할 수 없습니다.`
    const textBottom = errorStatus === 404 ? `요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.`: '잠시 후 다시 시도해주세요.'
    return(
        <div style = {{
            fontFamily: '"Noto Sans KR", sans-serif',
            fontSize: '22px',
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.73',
            letterSpacing: '-1.1px',
            textAlign: 'left',
            color: '#666666'
        }}>
            <p>{textTop}</p>
            <p>{textBottom}</p>
            
        </div>
    )
    
}

export default ErrorContents