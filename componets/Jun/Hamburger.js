import React, { useState } from "react";
import "../../css/Jun/hamburger.scss";

import { useSelector, useDispatch } from "react-redux";
import {  USER_LOGOUT_REQUEST, SET_LOGIN_MODAL, OPEN_LOGIN_MODAL } from "../../action";
import Link from 'next/link'
import UserProfileImg from "../Park/UserProfileImg";

function Hamburger(props) {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  const dispatch = useDispatch();
  var {user } = useSelector(state => state);

  const openLoginModal = () => {
    dispatch({
      type: OPEN_LOGIN_MODAL
    });
  };
  const openJoinModal = () => {
    dispatch({
      type: SET_LOGIN_MODAL,
      data : 1
    });
    dispatch({
      type: OPEN_LOGIN_MODAL
    });
  };

  
  const logout = () => {
    dispatch({
        type : USER_LOGOUT_REQUEST
    })
  }

  return (
    <>
      {!open && (
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

      {open && (
        <>
          <div className="menu-cover" onClick={onToggle}></div>
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
                {!user.isLogging ?(
                <h5>
                  로그인이 <br></br> 필요합니다.{" "}
                </h5>
                ) : (
                  <React.Fragment>
                    <UserProfileImg src = {user.userProfileImage} size = {89}></UserProfileImg>
                    <div className="hambergur_user-name">{user.userName + ' 님'}</div>
                  </React.Fragment>
                )}
                <div className="session_check_href">
                {!user.isLogging ?(
                  <React.Fragment>
                    <a onClick = {openLoginModal}>로그인</a>
                    <a onClick = {openJoinModal}>회원가입</a>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <a onClick = {logout}>로그아웃</a>
                  </React.Fragment>
                )}
                </div>
              </div>
              <div className="menu-list">
                <Link href="/recruit"><a>모집중인 프로젝트 </a></Link>
                <a>프로젝트 후기 </a>
                {user.isLogging ? <Link href="/mypage"><a>마이페이지 </a></Link> : null}
                {user.isLogging ? <a>알림 </a> : null}
                {user.isLogging ? (props.isMobile ? <a onClick={() => alert('모집글은 PC에서 작성해주세요!')}>모집글 작성하기</a> :  <Link href="/enrollment/create/1/0"><a>모집글 작성하기 </a></Link>) : null}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Hamburger;
