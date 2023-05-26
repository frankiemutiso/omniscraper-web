(self["webpackChunkomniscraper_frontend"] = self["webpackChunkomniscraper_frontend"] || []).push([["src_pages_Home_index_js"],{

/***/ 460:
/*!**********************************************!*\
  !*** ./src/pages/Home/index.js + 18 modules ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Home": () => (/* binding */ pages_Home_Home),
  "default": () => (/* binding */ pages_Home)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(6215);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mui/styles/withStyles/withStyles.js + 1 modules
var withStyles = __webpack_require__(1366);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(4593);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 26 modules
var es = __webpack_require__(1399);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/pages/Home/Home.css
var Home = __webpack_require__(8901);
;// CONCATENATED MODULE: ./src/pages/Home/Home.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(Home["default"], options);



/* harmony default export */ const Home_Home = (Home["default"].locals || {});
// EXTERNAL MODULE: ./src/store/actions/videosActions.js
var videosActions = __webpack_require__(3953);
// EXTERNAL MODULE: ./src/utils/calculateTimeLapse.js
var calculateTimeLapse = __webpack_require__(128);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(181);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || (0,unsupportedIterableToArray["default"])(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/VideoCard/VideoCard.css
var VideoCard = __webpack_require__(6677);
;// CONCATENATED MODULE: ./src/Components_v2/VideoCard/VideoCard.css

            

var VideoCard_options = {};

VideoCard_options.insert = "head";
VideoCard_options.singleton = false;

var VideoCard_update = injectStylesIntoStyleTag_default()(VideoCard["default"], VideoCard_options);



/* harmony default export */ const VideoCard_VideoCard = (VideoCard["default"].locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/Menu/Menu.css
var Menu = __webpack_require__(701);
;// CONCATENATED MODULE: ./src/Components_v2/Menu/Menu.css

            

var Menu_options = {};

Menu_options.insert = "head";
Menu_options.singleton = false;

var Menu_update = injectStylesIntoStyleTag_default()(Menu["default"], Menu_options);



/* harmony default export */ const Menu_Menu = (Menu["default"].locals || {});
;// CONCATENATED MODULE: ./src/Components_v2/Menu/index.js




function Components_v2_Menu_Menu(_ref) {
  var event = _ref.event,
    children = _ref.children;
  var _useState = (0,react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    xPos = _useState2[0],
    setxPos = _useState2[1];
  var _useState3 = (0,react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    yPos = _useState4[0],
    setyPos = _useState4[1];
  var ref = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    var _ref$current;
    var clientWidth = document.documentElement.clientWidth;
    var newXPos = event === null || event === void 0 ? void 0 : event.pageX;
    var newyPos = event === null || event === void 0 ? void 0 : event.pageY;
    var menuWidth = ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.clientWidth;
    var canFit = clientWidth - newXPos > menuWidth;
    if (newXPos && ref && canFit == false) {
      newXPos -= menuWidth;
    }
    setyPos(newyPos);
    setxPos(newXPos);
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    ref: ref,
    className: event ? 'menu menu-open shadow-lg py-1' : 'menu-closed',
    style: {
      position: 'absolute',
      top: yPos,
      left: xPos
    }
  }, children));
}
/* harmony default export */ const Components_v2_Menu = (Components_v2_Menu_Menu);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/MenuItem/MenuItem.css
var MenuItem = __webpack_require__(3862);
;// CONCATENATED MODULE: ./src/Components_v2/MenuItem/MenuItem.css

            

var MenuItem_options = {};

MenuItem_options.insert = "head";
MenuItem_options.singleton = false;

var MenuItem_update = injectStylesIntoStyleTag_default()(MenuItem["default"], MenuItem_options);



/* harmony default export */ const MenuItem_MenuItem = (MenuItem["default"].locals || {});
;// CONCATENATED MODULE: ./src/Components_v2/MenuItem/index.js


function Components_v2_MenuItem_MenuItem(_ref) {
  var label = _ref.label,
    icon = _ref.icon;
  return /*#__PURE__*/react.createElement("div", {
    className: "p-2 px-4 flex align-center menuItem hover:bg-neutral-100 focus:ring-1 focus:ring-neutral-300"
  }, icon ? /*#__PURE__*/react.createElement("span", {
    "class": "mr-2"
  }, icon) : null, /*#__PURE__*/react.createElement("p", {
    className: "text-sm"
  }, label));
}
/* harmony default export */ const Components_v2_MenuItem = (Components_v2_MenuItem_MenuItem);
;// CONCATENATED MODULE: ./src/assets/share.svg
/* harmony default export */ const share = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMjAiIHdpZHRoPSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQsNVY5QzcsMTAgNCwxNSAzLDIwQzUuNSwxNi41IDksMTQuOSAxNCwxNC45VjE5TDIxLDEyTDE0LDVNMTYsOS44M0wxOC4xNywxMkwxNiwxNC4xN1YxMi45SDE0QzExLjkzLDEyLjkgMTAuMDcsMTMuMjggOC4zNCwxMy44NUM5Ljc0LDEyLjQ2IDExLjU0LDExLjM3IDE0LjI4LDExTDE2LDEwLjczVjkuODNaIi8+PC9zdmc+");
;// CONCATENATED MODULE: ./src/assets/flag.svg
/* harmony default export */ const flag = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgOTYgOTYwIDk2MCIgd2lkdGg9IjIwIj48cGF0aCBkPSJNMjAwIDkzNlYyNTZoMzQzbDE5IDg2aDIzOHYzNzBINTQ0bC0xOC45MzMtODVIMjYwdjMwOWgtNjBabTMwMC00NTJabTk1IDE2OGgxNDVWNDAySDUxMWwtMTktODZIMjYwdjI1MWgzMTZsMTkgODVaIi8+PC9zdmc+");
;// CONCATENATED MODULE: ./src/assets/more.svg
/* harmony default export */ const more = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgOTYgOTYwIDk2MCIgd2lkdGg9IjIwIj48cGF0aCBkPSJNNDgwLjI4MSA5MTUuMjE4cS0yMi41NDIgMC0zOC41Mi0xNS45NjgtMTUuOTc5LTE1Ljk2OC0xNS45NzktMzguMzkxIDAtMjEuODkzIDE1LjkyNy0zOC4yNjcgMTUuOTI3LTE2LjM3NCAzOC4yOTMtMTYuMzc0IDIyLjgyNCAwIDM4LjUyIDE2LjQ0NSAxNS42OTYgMTYuNDQ1IDE1LjY5NiAzOC41MjIgMCAyMi4wNzctMTUuNjk4IDM4LjA1NS0xNS42OTcgMTUuOTc4LTM4LjIzOSAxNS45NzhabTAtMjg1cS0yMi41NDIgMC0zOC41Mi0xNS45MjctMTUuOTc5LTE1LjkyNy0xNS45NzktMzguMjkzIDAtMjIuODI0IDE1LjkyNy0zOC41MiAxNS45MjctMTUuNjk2IDM4LjI5My0xNS42OTYgMjIuODI0IDAgMzguNTIgMTUuNjk4IDE1LjY5NiAxNS42OTcgMTUuNjk2IDM4LjIzOSAwIDIyLjU0Mi0xNS42OTggMzguNTItMTUuNjk3IDE1Ljk3OS0zOC4yMzkgMTUuOTc5Wm0wLTI4NC40MzZxLTIyLjU0MiAwLTM4LjUyLTE2LjE0LTE1Ljk3OS0xNi4xNC0xNS45NzktMzguODA0IDAtMjIuNjY1IDE1LjkyNy0zOC42NDMgMTUuOTI3LTE1Ljk3OSAzOC4yOTMtMTUuOTc5IDIyLjgyNCAwIDM4LjUyIDE2LjEyIDE1LjY5NiAxNi4xMiAxNS42OTYgMzguNzg1IDAgMjIuNjY1LTE1LjY5OCAzOC42NjMtMTUuNjk3IDE1Ljk5OC0zOC4yMzkgMTUuOTk4WiIvPjwvc3ZnPg==");
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 2 modules
var react_router = __webpack_require__(2573);
;// CONCATENATED MODULE: ./src/utils/utilFunctions.js
var getStrippedVideoText = function getStrippedVideoText(text) {
  var indexOfHttps = text ? text.indexOf('https') : -1;
  if (indexOfHttps > -1) {
    return text.slice(0, indexOfHttps).trim();
  }
  return null;
};
var shareVideo = function shareVideo(slug) {
  if (navigator.share) {
    navigator.share({
      url: slug
    }).then(function () {
      // this.setState({ snackBarOpen: true, shareSuccessful: true });
      console.log('Thanks for sharing!');
    })["catch"](function (err) {
      // this.setState({ snackBarOpen: true, shareSuccessful: false });
      console.log("Couldn't share url because of ".concat(err.message));
    });
  } else {
    // this.setState({ snackBarOpen: true, shareSupported: false });
    console.log('Web share not supported!');
  }
};
;// CONCATENATED MODULE: ./src/Components_v2/VideoCard/index.js










var HIDDEN = true;
function Components_v2_VideoCard_VideoCard(_ref) {
  var imageSource = _ref.imageSource,
    text = _ref.text,
    elapsedTime = _ref.elapsedTime,
    videoSlug = _ref.videoSlug,
    handleScrollPosition = _ref.handleScrollPosition;
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isBtnOnDisplay = _useState2[0],
    setBtnOnDisplay = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    target = _useState4[0],
    setMenuTarget = _useState4[1];
  var history = (0,react_router.useHistory)();
  var strippedText = getStrippedVideoText(text);
  var handleMouseLeave = function handleMouseLeave() {
    setBtnOnDisplay(false);
    setMenuTarget(null);
  };
  var handleClick = function handleClick(videoSlug) {
    handleScrollPosition();
    history.push("/".concat(videoSlug));
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "videoCard p-2 focus:ring-1 focus:ring-neutral-500",
    onMouseLeave: function onMouseLeave() {
      return handleMouseLeave();
    },
    onMouseEnter: function onMouseEnter() {
      return setBtnOnDisplay(true);
    },
    onClick: function onClick() {
      return handleClick(videoSlug);
    }
  }, /*#__PURE__*/react.createElement("img", {
    className: "rounded-lg bg-neutral-200",
    src: imageSource,
    alt: "Omniscraper Twitter Video",
    style: {
      height: 190,
      objectFit: 'cover',
      width: '100%'
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "videoCard-actions mt-2"
  }, strippedText && strippedText.length > 0 && /*#__PURE__*/react.createElement("div", {
    className: "videoCard-text-container"
  }, /*#__PURE__*/react.createElement("p", {
    className: "text-sm font-semibold"
  }, strippedText)), /*#__PURE__*/react.createElement("div", {
    className: "videoCard-bottom flex justify-between items-center"
  }, /*#__PURE__*/react.createElement("p", {
    className: "videoCard-elapsed-time text-xs text-inherit"
  }, elapsedTime), target && /*#__PURE__*/react.createElement(Components_v2_Menu, {
    event: target
  }, /*#__PURE__*/react.createElement(Components_v2_MenuItem, {
    label: "Share",
    icon: /*#__PURE__*/react.createElement("img", {
      src: share
    }),
    onClick: function onClick() {
      return shareVideo(videoSlug);
    }
  }), !HIDDEN ? /*#__PURE__*/react.createElement(Components_v2_MenuItem, {
    label: "Report",
    icon: /*#__PURE__*/react.createElement("img", {
      src: flag
    })
  }) : null), /*#__PURE__*/react.createElement("button", {
    className: "".concat(isBtnOnDisplay ? 'videoCard-btn-hover bg-neutral-200 rounded-full p-2 hover:bg-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-500' : 'videoCard-btn bg-neutral-200 rounded-full p-2 hover:bg-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-500'),
    onClick: function onClick(e) {
      e.stopPropagation();
      setMenuTarget(e);
    },
    onBlur: function onBlur() {
      return setMenuTarget(null);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: more
  })))));
}
/* harmony default export */ const Components_v2_VideoCard = (Components_v2_VideoCard_VideoCard);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/Videos/Videos.css
var Videos = __webpack_require__(2739);
;// CONCATENATED MODULE: ./src/Components_v2/Videos/Videos.css

            

var Videos_options = {};

Videos_options.insert = "head";
Videos_options.singleton = false;

var Videos_update = injectStylesIntoStyleTag_default()(Videos["default"], Videos_options);



/* harmony default export */ const Videos_Videos = (Videos["default"].locals || {});
// EXTERNAL MODULE: ./src/components/reusableComponents/Placeholder.js + 1 modules
var Placeholder = __webpack_require__(9155);
;// CONCATENATED MODULE: ./src/Components_v2/VideoCard/VideoCardPlaceholder.js


function VideoCardPlaceholder() {
  return /*#__PURE__*/react.createElement("div", {
    className: "videoCard p-2 w-full"
  }, /*#__PURE__*/react.createElement("div", {
    className: "bg-neutral-200 rounded-lg animate-pulse mb-2",
    style: {
      height: 190
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "w-full videoCard-actions mt-2"
  }, Array.from(new Array(2)).map(function (x) {
    return /*#__PURE__*/react.createElement("div", {
      className: "bg-neutral-200 mt-1 animate-pulse w-full",
      style: {
        height: 12
      }
    });
  }), /*#__PURE__*/react.createElement("div", {
    className: "bg-neutral-200 mt-4 animate-pulse",
    style: {
      height: 12,
      width: 100
    }
  })));
}
/* harmony default export */ const VideoCard_VideoCardPlaceholder = (VideoCardPlaceholder);
;// CONCATENATED MODULE: ./src/Components_v2/Videos/index.js






function Components_v2_Videos_Videos(_ref) {
  var videos = _ref.videos,
    hasMoreVideos = _ref.hasMoreVideos,
    videosLoading = _ref.videosLoading,
    videosLoadingError = _ref.videosLoadingError,
    loadVideos = _ref.loadVideos,
    offset = _ref.offset,
    handleScrollPosition = _ref.handleScrollPosition;
  return /*#__PURE__*/react.createElement("div", {
    className: "videos-grid flex fle-wrap grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-4 gap-3 p-4"
  }, videosLoading && offset === 1 ? /*#__PURE__*/react.createElement(react.Fragment, null, Array.from(new Array(12)).map(function (item, index) {
    return /*#__PURE__*/react.createElement(VideoCard_VideoCardPlaceholder, {
      key: index
    });
  })) : /*#__PURE__*/react.createElement(react.Fragment, null, videos.map(function (x) {
    var elapsedTime = (0,calculateTimeLapse.calculateTimeSinceSave)(x);
    return /*#__PURE__*/react.createElement(Components_v2_VideoCard, {
      key: x.id,
      imageSource: x.video_thumbnail_link_https,
      text: x.text,
      elapsedTime: elapsedTime,
      videoSlug: x.slug,
      handleScrollPosition: handleScrollPosition
    });
  })), videosLoading && offset > 1 && /*#__PURE__*/react.createElement(react.Fragment, null, Array.from(new Array(12)).map(function (item, index) {
    return /*#__PURE__*/react.createElement(VideoCard_VideoCardPlaceholder, {
      key: index
    });
  })));
}
/* harmony default export */ const Components_v2_Videos = (Components_v2_Videos_Videos);
;// CONCATENATED MODULE: ./src/pages/Home/index.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var List = /*#__PURE__*/react.lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_components_List_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/List */ 7000));
});
var styles = function styles(theme) {
  return {
    root: {
      color: '#185adb',
      flex: 1,
      marginRight: theme.spacing(3),
      marginLeft: theme.spacing(3),
      paddingTop: 72
    }
  };
};
var LIMIT = 12;
var pages_Home_Home = /*#__PURE__*/function (_Component) {
  (0,inherits["default"])(Home, _Component);
  var _super = _createSuper(Home);
  function Home() {
    var _this;
    (0,classCallCheck["default"])(this, Home);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "componentDidMount", function () {
      var _this$props = _this.props,
        location = _this$props.location,
        updateHomeFirstLoad = _this$props.updateHomeFirstLoad,
        isHomeFirstLoad = _this$props.isHomeFirstLoad,
        scrollPosition = _this$props.scrollPosition;
      window.gtag('event', 'page_view', {
        page_title: 'Home',
        page_path: location.pathname + location.search,
        page_location: window.location.href
      });
      window.scrollTo(0, scrollPosition);
      if (isHomeFirstLoad) {
        updateHomeFirstLoad(false);
        _this.loadVideos();
      }
      window.addEventListener('scroll', _this.handleInfiniteScroll);
    });
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "handleInfiniteScroll", function () {
      var _this$props2 = _this.props,
        videosLoadingError = _this$props2.videosLoadingError,
        videosLoading = _this$props2.videosLoading,
        hasMoreVideos = _this$props2.hasMoreVideos;
      var _document$documentEle = document.documentElement,
        scrollHeight = _document$documentEle.scrollHeight,
        scrollTop = _document$documentEle.scrollTop,
        clientHeight = _document$documentEle.clientHeight;
      if (videosLoadingError || videosLoading || !hasMoreVideos) return;
      var checkHeight = scrollTop >= scrollHeight - clientHeight - 200;
      if (checkHeight) {
        _this.loadVideos();
      }
    });
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "loadVideos", /*#__PURE__*/(0,asyncToGenerator["default"])( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var homeVideosOffset, _this$props3, videosLoadingError, videosLoading;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              homeVideosOffset = _this.props.homeVideosOffset;
              _context.next = 3;
              return _this.props.getVideos(homeVideosOffset, LIMIT);
            case 3:
              _this$props3 = _this.props, videosLoadingError = _this$props3.videosLoadingError, videosLoading = _this$props3.videosLoading;
              if (!videosLoadingError && !videosLoading) {
                _this.props.handleHomeOffsetUpdate(homeVideosOffset + LIMIT);
              }
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "componentWillUnmount", function () {
      window.removeEventListener('scroll', _this.handleInfiniteScroll);
    });
    return _this;
  }
  (0,createClass["default"])(Home, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        videosLoadingError = _this$props4.videosLoadingError,
        videosLoading = _this$props4.videosLoading,
        hasMoreVideos = _this$props4.hasMoreVideos,
        videos = _this$props4.videos,
        handleScrollPosition = _this$props4.handleScrollPosition,
        homeVideosOffset = _this$props4.homeVideosOffset;
      var loadVideos = this.loadVideos;
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Helmet.Helmet, null, /*#__PURE__*/react.createElement("meta", {
        charset: "UTF-8"
      }), /*#__PURE__*/react.createElement("meta", {
        name: "description",
        content: "The most efficient Twitter Videos and GIFs downloader. Log into Twitter, Find a tweet with a video and comment with @OMNISCRAPER, Click on the replied link, Download and share your video!"
      }), /*#__PURE__*/react.createElement("meta", {
        name: "keywords",
        content: "Viral Tweets. Viral Videos. Funny Tweets. Funny Videos. Cat Videos. NFL. Rap. Sports. NFL players. Gaming. Barstool Sports. Joe Rogan. Actors. NBA players. MLB. Baseball. Bitcoin cryptocurrency. Tiktok Videos. Football Videos."
      }), /*#__PURE__*/react.createElement("title", null, "Home - Omniscraper: The Best Twitter Videos Downloader!")), /*#__PURE__*/react.createElement(Components_v2_Videos, {
        videos: videos,
        hasMoreVideos: hasMoreVideos,
        videosLoading: videosLoading,
        videosLoadingError: videosLoadingError,
        loadVideos: loadVideos,
        handleScrollPosition: handleScrollPosition,
        offset: homeVideosOffset
      }));
    }
  }]);
  return Home;
}(react.Component);
var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state.videos);
};
var mapDispatchToProps = {
  getVideos: videosActions.getVideos
};
/* harmony default export */ const pages_Home = ((0,es.connect)(mapStateToProps, mapDispatchToProps)((0,withStyles["default"])(styles)(pages_Home_Home)));

/***/ }),

/***/ 701:
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/Menu/Menu.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu {\n\tz-index: 1;\n\tbackground-color: #fff;\n}\n\n.menu-open {\n\tdisplay: block;\n}\n\n.menu-closed {\n\tdisplay: none;\n}\n", "",{"version":3,"sources":["webpack://./src/Components_v2/Menu/Menu.css"],"names":[],"mappings":"AAAA;CACC,UAAU;CACV,sBAAsB;AACvB;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,aAAa;AACd","sourcesContent":[".menu {\n\tz-index: 1;\n\tbackground-color: #fff;\n}\n\n.menu-open {\n\tdisplay: block;\n}\n\n.menu-closed {\n\tdisplay: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3862:
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/MenuItem/MenuItem.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menuItem {\n\twidth: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/Components_v2/MenuItem/MenuItem.css"],"names":[],"mappings":"AAAA;CACC,WAAW;AACZ","sourcesContent":[".menuItem {\n\twidth: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6677:
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/VideoCard/VideoCard.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".videoCard {\n\twidth: 340px;\n\tcursor: pointer;\n}\n\n.videoCard-bottom {\n\theight: 36px;\n}\n\nvideoCard-elapsed-time {\n}\n\n.videoCard-btn {\n\tdisplay: none;\n}\n\n.videoCard-btn-hover {\n\tdisplay: block;\n}\n\n.videoCard-btn:hover {\n}\n\n/* For Mobile Screens */\n@media screen and (max-width: 640px) {\n\t.videoCard {\n\t\twidth: 100%;\n\t\tcursor: pointer;\n\t\tpadding: 0;\n\t}\n\n\t.rounded-lg {\n\t\tborder-radius: 0px;\n\t}\n\n\t.videoCard-actions {\n\t\tpadding: 8px;\n\t\tmargin-top: 0;\n\t}\n\n\t.videoCard-btn {\n\t\tdisplay: block;\n\t}\n}\n\n/* For tabs */\n@media screen and (max-width: 1300px) and (min-width: 640px) {\n\t.videoCard {\n\t\twidth: 390px;\n\t\tcursor: pointer;\n\t}\n\n\t.videoCard-btn {\n\t\tdisplay: none;\n\t}\n}\n\n@media screen and (min-width: 411px) {\n\t.videoCard-text-container {\n\t\tmax-height: 42px;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\twhite-space: initial;\n\t\t-webkit-line-clamp: 2;\n\t\t-webkit-box-orient: vertical;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/Components_v2/VideoCard/VideoCard.css"],"names":[],"mappings":"AAAA;CACC,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,YAAY;AACb;;AAEA;AACA;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,cAAc;AACf;;AAEA;AACA;;AAEA,uBAAuB;AACvB;CACC;EACC,WAAW;EACX,eAAe;EACf,UAAU;CACX;;CAEA;EACC,kBAAkB;CACnB;;CAEA;EACC,YAAY;EACZ,aAAa;CACd;;CAEA;EACC,cAAc;CACf;AACD;;AAEA,aAAa;AACb;CACC;EACC,YAAY;EACZ,eAAe;CAChB;;CAEA;EACC,aAAa;CACd;AACD;;AAEA;CACC;EACC,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;EACvB,oBAAoB;EACpB,oBAAoB;EACpB,qBAAqB;EACrB,4BAA4B;CAC7B;AACD","sourcesContent":[".videoCard {\n\twidth: 340px;\n\tcursor: pointer;\n}\n\n.videoCard-bottom {\n\theight: 36px;\n}\n\nvideoCard-elapsed-time {\n}\n\n.videoCard-btn {\n\tdisplay: none;\n}\n\n.videoCard-btn-hover {\n\tdisplay: block;\n}\n\n.videoCard-btn:hover {\n}\n\n/* For Mobile Screens */\n@media screen and (max-width: 640px) {\n\t.videoCard {\n\t\twidth: 100%;\n\t\tcursor: pointer;\n\t\tpadding: 0;\n\t}\n\n\t.rounded-lg {\n\t\tborder-radius: 0px;\n\t}\n\n\t.videoCard-actions {\n\t\tpadding: 8px;\n\t\tmargin-top: 0;\n\t}\n\n\t.videoCard-btn {\n\t\tdisplay: block;\n\t}\n}\n\n/* For tabs */\n@media screen and (max-width: 1300px) and (min-width: 640px) {\n\t.videoCard {\n\t\twidth: 390px;\n\t\tcursor: pointer;\n\t}\n\n\t.videoCard-btn {\n\t\tdisplay: none;\n\t}\n}\n\n@media screen and (min-width: 411px) {\n\t.videoCard-text-container {\n\t\tmax-height: 42px;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\twhite-space: initial;\n\t\t-webkit-line-clamp: 2;\n\t\t-webkit-box-orient: vertical;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2739:
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/Videos/Videos.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".videos-grid {\n\toverflow-y: auto;\n\tmin-height: 100vh;\n}\n\n.videos-grid::-webkit-scrollbar {\n\twidth: 8px;\n}\n\n.videos-grid::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n\tborder-radius: 999px;\n}\n\n.videos-grid::-webkit-scrollbar-thumb {\n\tbackground-color: #c4c4c4;\n\tborder-radius: 999px;\n}\n\n@media screen and (max-width: 640px) {\n\t.videos-grid {\n\t\tpadding-bottom: 0 !important;\n\t\tpadding-right: 0 !important;\n\t\tpadding-left: 0 !important;\n\t}\n\n\t.videos-grid::-webkit-scrollbar {\n\t\twidth: 8px;\n\t}\n\n\t.videos-grid::-webkit-scrollbar-track {\n\t\tbackground-color: transparent;\n\t\tborder-radius: 999px;\n\t}\n\n\t.videos-grid::-webkit-scrollbar-thumb {\n\t\tbackground-color: #c4c4c4;\n\t\tborder-radius: 999px;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/Components_v2/Videos/Videos.css"],"names":[],"mappings":"AAAA;CACC,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,6BAA6B;CAC7B,oBAAoB;AACrB;;AAEA;CACC,yBAAyB;CACzB,oBAAoB;AACrB;;AAEA;CACC;EACC,4BAA4B;EAC5B,2BAA2B;EAC3B,0BAA0B;CAC3B;;CAEA;EACC,UAAU;CACX;;CAEA;EACC,6BAA6B;EAC7B,oBAAoB;CACrB;;CAEA;EACC,yBAAyB;EACzB,oBAAoB;CACrB;AACD","sourcesContent":[".videos-grid {\n\toverflow-y: auto;\n\tmin-height: 100vh;\n}\n\n.videos-grid::-webkit-scrollbar {\n\twidth: 8px;\n}\n\n.videos-grid::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n\tborder-radius: 999px;\n}\n\n.videos-grid::-webkit-scrollbar-thumb {\n\tbackground-color: #c4c4c4;\n\tborder-radius: 999px;\n}\n\n@media screen and (max-width: 640px) {\n\t.videos-grid {\n\t\tpadding-bottom: 0 !important;\n\t\tpadding-right: 0 !important;\n\t\tpadding-left: 0 !important;\n\t}\n\n\t.videos-grid::-webkit-scrollbar {\n\t\twidth: 8px;\n\t}\n\n\t.videos-grid::-webkit-scrollbar-track {\n\t\tbackground-color: transparent;\n\t\tborder-radius: 999px;\n\t}\n\n\t.videos-grid::-webkit-scrollbar-thumb {\n\t\tbackground-color: #c4c4c4;\n\t\tborder-radius: 999px;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8901:
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/Home/Home.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9590:
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/***/ ((module) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.3
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    // START: Modifications:
    // Apply guards for `Object.create(null)` handling. See:
    // - https://github.com/FormidableLabs/react-fast-compare/issues/64
    // - https://github.com/epoberezkin/fast-deep-equal/issues/49
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
    // END: Modifications

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ 4593:
/*!************************************************!*\
  !*** ./node_modules/react-helmet/es/Helmet.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Helmet": () => (/* binding */ HelmetExport)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ 5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-side-effect */ 3524);
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_side_effect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fast-compare */ 9590);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! object-assign */ 7418);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_3__);






var ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target"
};

var REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = "data-react-helmet";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return Array.isArray(innermostTitle) ? innermostTitle.join("") : innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === TAG_PROPERTIES.INNER_HTML || attributeKey === TAG_PROPERTIES.CSS_TEXT || attributeKey === TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET], propsList),
        bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : __webpack_require__.g.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : __webpack_require__.g.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [react__WEBPACK_IMPORTED_MODULE_2__.createElement(TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return react__WEBPACK_IMPORTED_MODULE_2__.createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case ATTRIBUTE_NAMES.BODY:
        case ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            classCallCheck(this, HelmetWrapper);
            return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case TAG_NAMES.SCRIPT:
                case TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _babelHelpers$extends;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _babelHelpers$extends2, _babelHelpers$extends3;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends({}, newChildProps), _babelHelpers$extends2));

                case TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends({}, newChildProps), _babelHelpers$extends3));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _babelHelpers$extends4;

                newFlattenedProps = _extends({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (true) {
                if (!VALID_TAG_NAMES.some(function (name) {
                    return child.type === name;
                })) {
                    if (typeof child.type === "function") {
                        return warn("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
                    }

                    return warn("Only elements types " + VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
                }

                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
                    return typeof nestedChild !== "string";
                }))) {
                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
                }
            }

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            react__WEBPACK_IMPORTED_MODULE_2__.Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = convertReactPropstoHtmlAttributes(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case TAG_NAMES.LINK:
                    case TAG_NAMES.META:
                    case TAG_NAMES.NOSCRIPT:
                    case TAG_NAMES.SCRIPT:
                    case TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, newProps);
        };

        createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
             * @param {Object} bodyAttributes: {"className": "root"}
             * @param {String} defaultTitle: "Default Title"
             * @param {Boolean} defer: true
             * @param {Boolean} encodeSpecialCharacters: true
             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
             * @param {String} title: "Title"
             * @param {Object} titleAttributes: {"itemprop": "name"}
             * @param {String} titleTemplate: "MySite.com - %s"
             */
            set: function set$$1(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);
        return HelmetWrapper;
    }(react__WEBPACK_IMPORTED_MODULE_2__.Component), _class.propTypes = {
        base: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
        bodyAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
        children: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)]),
        defaultTitle: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
        defer: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
        encodeSpecialCharacters: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
        htmlAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
        link: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),
        meta: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),
        noscript: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),
        onChangeClientState: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
        script: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),
        style: prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)),
        title: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
        titleAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
        titleTemplate: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = mapStateOnServer({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = react_side_effect__WEBPACK_IMPORTED_MODULE_0___default()(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (HelmetExport);



/***/ }),

/***/ 3524:
/*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ 7294);
var React__default = _interopDefault(React);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect =
    /*#__PURE__*/
    function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it
      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.PureComponent);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ })

}]);
//# sourceMappingURL=src_pages_Home_index_js-c5edb8a0a294efe4d5ec.js.map