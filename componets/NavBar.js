import React from "react";
import Router from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";
import "../css/NavBar.scss";
import "../css/container.scss";

const NavBar = () => {
  const { selectPage } = useSelector(state => state.button);
  const { user } = useSelector(state => state);
  
  const routeToMain = () => {
    Router.push("/");
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/3AA5A2F7-12E0-43B7-AF49-91A7451A8096.svg" />
        </div>

        <div className="nav_right">
          <span className="nav_list">
            <a
              id={selectPage === "recruit" ? "ubderline_menubar" : ""}
              href="/recruit"
            >
              {" "}
              모집중인 프로젝트
            </a>

            <a
              id={selectPage === "review" ? "ubderline_menubar" : ""}
              href="/review"
            >
              프로젝트 후기
            </a>
          </span>

          <span
            id="nav_login_signup_container"
            style={user.userId ? { display: "none" } : { display: "block" }}
          >
            <a id="nav_login_signup" href="/login">
              로그인 / 회원가입
            </a>
          </span>

          <span
            className="nav_png"
            style={!user.userId ? { display: "none" } : {}}
          >
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

          <span
            className="nav_button"
            style={!user.userId ? { display: "none" } : {}}
          >
            <button>모집글 작성 ></button>
          </span>
        </div>
        <div className="nav_right_mobile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 30 5"
          >
            <line
              id="선_109"
              data-name="선 109"
              x2="30"
              transform="translate(0 1)"
              fill="none"
              stroke="#1f254b"
              strokeWidth="5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 30 5"
          >
            <line
              id="선_109"
              data-name="선 109"
              x2="30"
              transform="translate(0 1)"
              fill="none"
              stroke="#1f254b"
              strokeWidth="5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 30 5"
          >
            <line
              id="선_109"
              data-name="선 109"
              x2="30"
              transform="translate(0 1)"
              fill="none"
              stroke="#1f254b"
              strokeWidth="5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
