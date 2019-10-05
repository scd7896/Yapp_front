import React from "react";
import "../css/kim/recruit.scss";
import FindSelectbox from "../componets/FindSelectbox";

const recruit = () => {
  return (
    <div id="reqcruit_root">
      <div id="recruit_container">
        <div className="container">
          <p id="project_serch_text">프로젝트 검색</p>
          <FindSelectbox />
        </div>
      </div>
    </div>
  );
};

export default recruit;
