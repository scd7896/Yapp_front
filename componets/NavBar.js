import React from "react";

import "../css/NavBar.scss";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src="" />
        </div>

        <div className="nav_right">
          <span className="nav_list">
            <a href="/">모집중인 프로젝트</a>
            <a href="/find">프로젝트 후기</a>
          </span>
          <span className="nav_png">
            <a href="#">
              <img src="" />
            </a>
            <a href="#">
              <img src="" />
            </a>
          </span>
          <span className="nav_button">
            <button>모집글 작성 ></button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
