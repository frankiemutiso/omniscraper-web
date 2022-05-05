"use strict";
(self["webpackChunkomniscraper_frontend"] = self["webpackChunkomniscraper_frontend"] || []).push([["src_pages_FilteredVideos_js"],{

/***/ 8755:
/*!*************************************!*\
  !*** ./src/pages/FilteredVideos.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilteredVideos": () => (/* binding */ FilteredVideos),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 5785);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 5671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 3144);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ 7326);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 136);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 6215);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 1120);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 4942);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ 9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router */ 1203);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ 399);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var List = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_components_List_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/List */ 347));
});
var FilteredVideos = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(FilteredVideos, _Component);

  var _super = _createSuper(FilteredVideos);

  function FilteredVideos(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, FilteredVideos);

    _this = _super.call(this, props);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "loadVideos", function (slug, offset) {
      var limit = _this.state.limit;
      var url = "/api/tags/".concat(slug, "?limit=").concat(limit, "&offset=").concat(offset);

      _this.setState({
        loading: true
      }, function () {
        axios__WEBPACK_IMPORTED_MODULE_9___default().get(url).then(function (res) {
          var newVideos = res.data.videos;

          _this.setState({
            loading: false,
            videos: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this.state.videos), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(newVideos)),
            offset: offset + limit,
            hasMore: res.data.has_more
          });
        })["catch"](function (err) {
          _this.setState({
            error: err.message,
            loading: false
          });
        });
      });
    });

    _this.state = {
      error: false,
      loading: false,
      videos: [],
      loadingTags: false,
      slug: _this.props.match.params.slug,
      limit: 12,
      offset: 0,
      hasMore: true,
      videosLoadingError: false
    };
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(FilteredVideos, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadVideos();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.match.params.slug !== this.props.match.params.slug) {
        var slug = this.props.match.params.slug;
        var offset = 0;
        this.loadVideos(slug, offset);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          videos = _this$state.videos,
          hasMore = _this$state.hasMore,
          videosLoadingError = _this$state.videosLoadingError;
      var _this$props = this.props,
          classes = _this$props.classes,
          location = _this$props.location,
          handleScrollPosition = _this$props.handleScrollPosition;
      var pathParams = location.pathname.split("/");
      var clickedTag = pathParams[pathParams.length - 1];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(List, {
        videos: videos,
        loading: loading,
        hasMore: hasMore,
        error: videosLoadingError,
        loadVideos: this.loadVideos,
        clickedTag: clickedTag,
        scrollPosition: 0,
        handleScrollPosition: handleScrollPosition
      }));
    }
  }]);

  return FilteredVideos;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router__WEBPACK_IMPORTED_MODULE_11__.withRouter)(FilteredVideos));

/***/ })

}]);
//# sourceMappingURL=src_pages_FilteredVideos_js-6eb885761e528228f1a7.js.map