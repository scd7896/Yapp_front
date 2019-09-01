import React,{useEffect} from 'react'

const Index = ()=>{
    useEffect(()=>{
        $("#test_button").click(()=>{
            console.log('제이쿼리 동작 완료')
        })
    },[])
    
    return(
        <div>
            <button id = "test_button">눌러봐~</button>
        </div>
    )
}
export default Index