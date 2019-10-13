import React from "react";
import Router from 'next/router'
import Link from 'next/link'
import {useSelector} from 'react-redux'
import "../css/NavBar.scss";
import "../css/container.scss";

const NavBar = () => {
  const {selectPage} = useSelector(state => state.button)
  const routeToMain = ()=>{
    Router.push('/')
  }
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="50"
            viewBox="0 0 96 50"
          >
            <text
              id="Toys"
              transform="translate(0 40)"
              fill="#1f254b"
              font-size="41"
              font-family="Montserrat-Bold, Montserrat"
              font-weight="700"            
            >
              <tspan x="0" y="0" onClick = {routeToMain}>
                Toys
              </tspan>
            </text>
          </svg>
        </div>

        <div className="nav_right">
          <span className="nav_list">
            
              <a id = {selectPage ==='recruit' ? "ubderline_menubar":""} href = "/recruit"> 모집중인 프로젝트</a>
            
            <a id = {selectPage ==='review' ? "ubderline_menubar":""} href="/review">프로젝트 후기</a>
          </span>
          <span className="nav_png">
            <button>
              <img
                style={{ width: "25px", height: "32px" }}
                src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/34B2916A-4DBF-46B6-94E2-B9F802EE2A0B.svg"
              />
            </button>
            <button>
              <img
                style={{ width: "20px", height: "26px" }}
                src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/31B34105-463E-4989-A29E-CE86470707C9.svg"
              />
            </button>
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
