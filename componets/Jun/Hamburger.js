import React, { useState } from "react";
import "../../css/Jun/hamburger.scss";

function Hamburger() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <div className="mobile-menu" onClick={onToggle}>
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
      )}

      {!open && (
        <>
          <div className="menu-cover"></div>
          <div className="menu-trigger">
            <div className="menu_close">
              <span onClick={onToggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                >
                  <g
                    id="그룹_1983"
                    data-name="그룹 1983"
                    transform="translate(-2746.316 -5830)"
                  >
                    <rect
                      id="사각형_2939"
                      data-name="사각형 2939"
                      width="28"
                      height="28"
                      transform="translate(2746.316 5830)"
                      fill="#fff"
                      opacity="0"
                    />
                    <g
                      id="그룹_1982"
                      data-name="그룹 1982"
                      transform="translate(2751.547 5835.211)"
                    >
                      <line
                        id="선_132"
                        data-name="선 132"
                        y2="24.838"
                        transform="translate(17.563 0) rotate(45)"
                        fill="none"
                        stroke="#1f254b"
                        stroke-width="1"
                      />
                      <line
                        id="선_133"
                        data-name="선 133"
                        y2="24.838"
                        transform="translate(17.563 17.563) rotate(135)"
                        fill="none"
                        stroke="#1f254b"
                        stroke-width="1"
                      />
                    </g>
                  </g>
                </svg>
              </span>
            </div>
            <div className="hambergur_container">
              <div className="session_check">
                <h5>
                  로그인이 <br></br> 필요합니다.{" "}
                </h5>
                <div className="session_check_href">
                  <a>로그인</a>
                  <a>회원가입</a>
                </div>
              </div>
              <div className="menu-list">
                <a>모집중인 프로젝트 </a>
                <a>프로젝트 후기 </a>
                <a>마이페이지 </a>
                <a>알림 </a>
                <a>모집글 작성하기 </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Hamburger;
