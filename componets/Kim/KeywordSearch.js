import React from "react";

import "../../css/kim/componentcss/KeywordSearch.scss";
import Icons from '../icons/index'
import { ANDROID } from "../icons/name";
const KeywordSearch = ({ data }) => {
  return (
    <div id="keyword_search">
      <div id="keyword_container">
        <div id="keyword_search_img_container">
          <Icons keyword = {ANDROID} isSelected = {true}/>
        </div>
        <div id="keyword_search_contents_container">
          <p id="keyword_search_hashtag">#{data.name}</p>
          <div id="keyword_search_contents_count">
            <p id="keyword_search_contents_text">{data.count}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordSearch;
