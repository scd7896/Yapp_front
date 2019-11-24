
import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux';

import CardView from '../componets/Park/ProjectCardView'

import FindSelectbox from "../componets/FindSelectbox";
import {SET_SELECTED_PAGES, CLEAR_SELECTED_KYEWORD} from '../action'
import Keyword from '../componets/Kim/enrollment/atomic/Keyword'
import keywords from '../methods/keywords'
import axios from 'axios'
import url from '../url'
import '../css/kim/recruit.scss'
const recruit = ({firstData})=>{
    const {projectKeyword} = useSelector(state => state.enrollment)
    const [isFisrt, setIsFirst] = useState(true)
    const [cardListDatas, setCardListDatas] = useState(firstData.projects)

    const getCardListByKeyword = async()=>{
        const result = await axios.post(`${url}/projects/search`,{"keywords" : projectKeyword})
            .catch((err) =>{alert("잠시 후에 다시 시도해주세요")})
        console.log(result.data)
        setCardListDatas(result.data)
    }
    useEffect(()=>{
        if(isFisrt){
            setIsFirst(false);
            return;
        }
        getCardListByKeyword()
        
    },[projectKeyword])
    return(
        <div id = "reqcruit_root">
            <div id = "recruit_container">
                <div className = "container" >
                    <div id = "search_container">
                        <p id ="project_serch_text">프로젝트 검색</p>
                        <FindSelectbox />
                    </div>
                    <div id = "keyword_container">
                        <p id = "keyword_text">추천 키워드</p>
                        <div id = "keyword_card_container">
                            {keywords.map((el,i)=>{
                                const isSelected = projectKeyword.findIndex((el)=> el === i) !== -1
                                return <Keyword data = {el} index = {i} isSelected = {isSelected}/>
                            })}
                        </div>
                    </div>
                    <div id = "recruit_card_container">
                        {cardListDatas ? cardListDatas.map((e,i)=>{
                            return <CardView key = {i}/>
                        }) :''}
                    </div>
                </div>
            </div>
            </div>)}
recruit.getInitialProps =async(context)=>{
    context.store.dispatch({
        type : SET_SELECTED_PAGES,
        data : 'recruit'
    })
    const firstData = await axios.get(`${url}/projects`).catch((err)=>console.log("err남"))
    return {firstData : firstData.data}
}
export default recruit;
