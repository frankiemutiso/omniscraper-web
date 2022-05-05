"use strict";
(self["webpackChunkomniscraper_frontend"] = self["webpackChunkomniscraper_frontend"] || []).push([["src_pages_Home_js"],{

/***/ 4883:
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 5671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 3144);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 136);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 6215);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 1120);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var _mui_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/styles/withStyles */ 9027);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var List = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_components_List_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/List */ 347));
});

var styles = function styles(theme) {
  return {
    root: {
      color: "#185adb",
      flex: 1,
      marginRight: theme.spacing(3),
      marginLeft: theme.spacing(3),
      paddingTop: 72
    }
  };
};

var Home = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Home);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Home, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          videoTags = _this$props.videoTags,
          error = _this$props.error,
          loading = _this$props.loading,
          hasMore = _this$props.hasMore,
          videos = _this$props.videos,
          loadVideos = _this$props.loadVideos;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(List, {
        hasMore: hasMore,
        loadVideos: loadVideos,
        error: error,
        videos: videos,
        loading: loading,
        scrollPosition: this.props.scrollPosition,
        handleScrollPosition: this.props.handleScrollPosition
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__.default)(styles)(Home));

/***/ })

}]);
//# sourceMappingURL=src_pages_Home_js-ca3b2d20b079dd2c9d4f.js.map