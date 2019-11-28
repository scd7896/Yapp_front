import React from "react";

import "../../css/kim/componentcss/KeywordSearch.scss";
import Icons from '../icons/index'
import keyword from '../../methods/keywords'
import Router from 'next/router'
const KeywordSearch = ({data, selected }) => {
  const moveToRecruitPage = ()=>{
    Router.push(`/recruit?keyword=${data.keywordId}`)
  }
  return (
    <div id="keyword_search" onClick = {moveToRecruitPage}>
      <div id="keyword_search_container">
        <div id="keyword_search_img_container">
          <Icons id = {data.keywordId} isSelected = {selected}/>
          
        </div>
        <div id="keyword_search_contents_container">
          <p id="keyword_search_hashtag">#{keyword[data.keywordId]}</p>
          <div id="keyword_search_contents_count">
            <p id="keyword_search_contents_text">{data.count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordSearch;
