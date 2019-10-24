import React from "react";

import "../../css/kim/componentcss/KeywordSearch.scss";
const KeywordSearch = ({ data }) => {
  return (
    <div id="keyword_search">
      <div id="keyword_container">
        <div id="keyword_search_img_container">
          <img id="keyword_search_img_contents" src={data.image} />
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
