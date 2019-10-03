webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./componets/AppLayOut.js":
/*!********************************!*\
  !*** ./componets/AppLayOut.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ "./componets/NavBar.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* 이 파일이 보통 리액트를 시작할때 보는 
    첫 화면 뿌려주기시작하는 단계로 보는것이 무방합니다
    children에는 pages에 있는 index.js가 들어가서 뿌려지게됩니다.
*/



var AppLayOut = function AppLayOut(_ref) {
  var children = _ref.children;
  var style = {
    zIndex: '1000'
  };
  return __jsx("div", null, __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: style
  }), __jsx("div", {
    style: {
      zIndex: '0'
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayOut);

/***/ })

})
//# sourceMappingURL=_app.js.db185f6389f8f2e68a22.hot-update.js.map