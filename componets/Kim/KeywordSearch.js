import React from "react";

import "../../css/kim/componentcss/KeywordSearch.scss";
import Icons from '../icons/index'
import keyword from '../../methods/keywords'
const KeywordSearch = ({data, selected }) => {
  return (
    <div id="keyword_search">
      <div id="keyword_container">
        <div id="keyword_search_img_container">
          <Icons id = {data.id} isSelected = {selected}/>
        </div>
        <div id="keyword_search_contents_container">
          <p id="keyword_search_hashtag">#{keyword[data.id]}</p>
          <div id="keyword_search_contents_count">
            <p id="keyword_search_contents_text">{data.count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordSearch;
