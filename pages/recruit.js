
import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import RecruitSearch from '../componets/Kim/RecruitSearch'
import Keyword from '../componets/Kim/Keyword'
import CardView from '../componets/Park/ProjectCardView'
import{keyword} from '../dummydatas/dummyKeywords'
import FindSelectbox from "../componets/FindSelectbox";
import '../css/kim/recruit.scss'
const recruit = ()=>{
    const {selects} = useSelector(state=>state.button);
    const [cardListDatas, setCardListDatas] = useState([])

    useEffect(()=>{
        const arr = [];
        for(let i = 0; i<12 ; i++){
            arr.push(0)
        }
        setCardListDatas(arr)
    },[])
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
                            {keyword.map((e,i)=>{
                                const isSelected = selects.findIndex((el)=> el === e.name) === -1? false: true;
                                return <Keyword data = {e} index = {i} isSelected ={isSelected} key = {i} />
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

export default recruit;
