webpackHotUpdate("static/development/pages/index.js",{

/***/ "./componets/Park/ProjectCardView.js":
/*!*******************************************!*\
  !*** ./componets/Park/ProjectCardView.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_Park_ProjectCardView_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/Park/ProjectCardView.scss */ "./css/Park/ProjectCardView.scss");
/* harmony import */ var _css_Park_ProjectCardView_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Park_ProjectCardView_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ProjectCardView = function ProjectCardView() {
  return __jsx("div", {
    "class": "project-cardview"
  }, __jsx("img", {
    "class": "project-cardview-detail"
  }), __jsx("img", {
    "class": "project-cardview-banner",
    src: "https://www.10wallpaper.com/wallpaper/medium/1909/2019_Planetary_Nebula_Clouds_4K_Universe_medium.jpg"
  }), __jsx("div", {
    "class": "project-cardview-contents"
  }, __jsx("div", {
    "class": "jobgroup"
  }, __jsx("div", {
    "class": "jobgroup-circle"
  }), __jsx("div", {
    "class": "jobgroup-main"
  }, "\uAC1C\uBC1C\uC790"), __jsx("div", {
    "class": "jobgroup-sub"
  }, "\uD504\uB860\uD2B8,\uBC31\uC5D4\uB4DC")), __jsx("div", {
    "class": "project-cardview-main"
  }, "\uD574\uCEE4\uD1A4 \uD300\uC6D0 \uBAA8\uC9D1"), __jsx("div", {
    "class": "project-cardview-step"
  }, "\uD300 \uBE4C\uB529 \uB2E8\uACC4"), __jsx("div", {
    "class": "project-cardview-region"
  }, "\uD300 \uBE4C\uB529 \uB2E8\uACC4"), __jsx("div", {
    "class": "project-cardview-time"
  }, "5\uC2DC\uAC04 \uC804")));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectCardView);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _componets_Park_ProjectCardView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componets/Park/ProjectCardView */ "./componets/Park/ProjectCardView.js");
/* harmony import */ var _css_kim_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/kim/index.scss */ "./css/kim/index.scss");
/* harmony import */ var _css_kim_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_kim_index_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* pages에는 파일이랑 폴더를 만드실 때 주의하셔야 합니다
    이유는 여기에 있는 파일명이 곧 url 주소가 되버립니다
    예를 들어 user.js 파일을 만들면 localhost:3000/user 로 접속하면 그 화면을 뿌려줍니다.
    만일 user라는 폴더를 만들고 index.js 파일을 만들면 해당 화면을 뿌려주고
    내부에 usertest.js 를 만들경우에는 localhost:3000/user/usertest 주소에 뿌려지게됩니다 
    _로 시작되는 파일명은 nextjs를 제대로 알고 쓰지않으면 절대로 금지합니다. */



var Index = function Index() {
  /* jquery 쓰실때는 다음과같이 useEffect라는 함수를 가져와서 사용하시거나
  클래스기반 컴포넌트면 componentDidMount에 작성해주셔야합니다. */
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    $("#test_button").click(function () {
      console.log('제이쿼리 동작 완료');
    });
  }, []);
  return __jsx("div", null, __jsx("div", {
    id: "header_container"
  }, __jsx("div", {
    id: "header"
  }), __jsx("div", {
    id: "header_input_container"
  }, __jsx("div", {
    id: "header_input_icon_container"
  }, " "), __jsx("div", {
    id: "right_input_container"
  }, __jsx("input", {
    type: "text",
    id: "header_input",
    placeholder: "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825 \uD574\uC8FC\uC138\uC694"
  }), __jsx("div", {
    id: "header_input_button"
  }, "\uAC80\uC0C9")))), __jsx("div", {
    id: "post_text_container"
  }, __jsx("p", null, "\uCD5C\uC2E0\uB4F1\uB85D \uBAA8\uC9D1\uAE00"), __jsx(_componets_Park_ProjectCardView__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("p", null, "\uB354 \uB9CE\uC740 \uBAA8\uC9D1\uAE00\uC744 \uB9CC\uB098\uBCF4\uC138\uC694")), __jsx("div", {
    id: "post_card_container"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.3fa980a3c462ff4109e6.hot-update.js.map