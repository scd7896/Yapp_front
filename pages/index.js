import React,{useEffect} from 'react'
import Link from 'next/link'

import ProjectCardView from '../componets/Park/ProjectCardView'
/* pages에는 파일이랑 폴더를 만드실 때 주의하셔야 합니다
    이유는 여기에 있는 파일명이 곧 url 주소가 되버립니다
    예를 들어 user.js 파일을 만들면 localhost:3000/user 로 접속하면 그 화면을 뿌려줍니다.
    만일 user라는 폴더를 만들고 index.js 파일을 만들면 해당 화면을 뿌려주고
    내부에 usertest.js 를 만들경우에는 localhost:3000/user/usertest 주소에 뿌려지게됩니다 
    _로 시작되는 파일명은 nextjs를 제대로 알고 쓰지않으면 절대로 금지합니다. */
import '../css/kim/index.scss'
const Index = ()=>{
    /* jquery 쓰실때는 다음과같이 useEffect라는 함수를 가져와서 사용하시거나
    클래스기반 컴포넌트면 componentDidMount에 작성해주셔야합니다. */
    useEffect(()=>{
        $("#test_button").click(()=>{
            console.log('제이쿼리 동작 완료')
        })
    },[])
    
    return(
        <div id = "index_root">
            <div id ="header_container">
                <div id ="header"></div>
            </div>
                <div id = "index_body">
                    <div id = "header_input_container">
                        <div id = "header_input_icon_container"> </div>
                        <div id = "right_input_container">
                            <input type = 'text' id = "header_input" placeholder = "검색어를 입력 해주세요"></input>
                            <div id = "header_input_button">
                                검색
                            </div>
                        </div>
                    </div>
                
                    <div id = "post_text_container">
                        <p id = "post_text_head">최신등록 모집글</p>
                        <div id ="post_text_sub_container">
                            <span id = "post_text_sub">더 많은 모집글을 만나보세요</span>  
                            <span id = 'post_text_more'>더보기</span>
                        </div>
                    </div>
                    <div id = "post_card_container">
                        {[1,2,3,4,5,6].map((e,i)=>{
                            return <ProjectCardView />
                        })}
                    </div>
                    <div id = "post_more_button_container">
                        <button id = "post_more_button">더보기</button>
                    </div>
                    <p id = "keyword_search_text">관심 키워드로 보기</p>
                    <div id = "keyword_list_box_container">
                        
                    </div>
                </div>
        </div>
    )
}
export default Index