(self["webpackChunkomniscraper_frontend"] = self["webpackChunkomniscraper_frontend"] || []).push([["src_pages_Video_index_js"],{

/***/ 3263:
/*!*****************************************************!*\
  !*** ./src/Components_v2/Menu/index.js + 1 modules ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Components_v2_Menu)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(885);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/Menu/Menu.css
var Menu = __webpack_require__(701);
;// CONCATENATED MODULE: ./src/Components_v2/Menu/Menu.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(Menu["default"], options);



/* harmony default export */ const Menu_Menu = (Menu["default"].locals || {});
;// CONCATENATED MODULE: ./src/Components_v2/Menu/index.js




function Components_v2_Menu_Menu(_ref) {
  var event = _ref.event,
    children = _ref.children;
  var _useState = (0,react.useState)(0),
    _useState2 = (0,slicedToArray["default"])(_useState, 2),
    xPos = _useState2[0],
    setxPos = _useState2[1];
  var _useState3 = (0,react.useState)(0),
    _useState4 = (0,slicedToArray["default"])(_useState3, 2),
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

/***/ }),

/***/ 3061:
/*!*********************************************************!*\
  !*** ./src/Components_v2/MenuItem/index.js + 1 modules ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Components_v2_MenuItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/MenuItem/MenuItem.css
var MenuItem = __webpack_require__(3862);
;// CONCATENATED MODULE: ./src/Components_v2/MenuItem/MenuItem.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(MenuItem["default"], options);



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

/***/ }),

/***/ 2509:
/*!***********************************************!*\
  !*** ./src/pages/Video/index.js + 23 modules ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src_pages_Video)
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
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/pages/Video/index.css
var Video = __webpack_require__(5879);
;// CONCATENATED MODULE: ./src/pages/Video/index.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(Video["default"], options);



/* harmony default export */ const pages_Video = (Video["default"].locals || {});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(885);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/VideoPlayer/index.css
var VideoPlayer = __webpack_require__(4234);
;// CONCATENATED MODULE: ./src/Components_v2/VideoPlayer/index.css

            

var VideoPlayer_options = {};

VideoPlayer_options.insert = "head";
VideoPlayer_options.singleton = false;

var VideoPlayer_update = injectStylesIntoStyleTag_default()(VideoPlayer["default"], VideoPlayer_options);



/* harmony default export */ const Components_v2_VideoPlayer = (VideoPlayer["default"].locals || {});
// EXTERNAL MODULE: ./src/utils/utilFunctions.js
var utilFunctions = __webpack_require__(1175);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/IconButton/index.css
var IconButton = __webpack_require__(566);
;// CONCATENATED MODULE: ./src/Components_v2/IconButton/index.css

            

var IconButton_options = {};

IconButton_options.insert = "head";
IconButton_options.singleton = false;

var IconButton_update = injectStylesIntoStyleTag_default()(IconButton["default"], IconButton_options);



/* harmony default export */ const Components_v2_IconButton = (IconButton["default"].locals || {});
;// CONCATENATED MODULE: ./src/Components_v2/IconButton/index.js


var _excluded = ["show", "children"];


function IconButton_IconButton(_ref) {
  var show = _ref.show,
    children = _ref.children,
    restProps = (0,objectWithoutProperties["default"])(_ref, _excluded);
  return /*#__PURE__*/react.createElement("button", (0,esm_extends["default"])({
    className: "".concat(show ? 'icon-btn ml-2 bg-neutral-200 rounded-full p-2 hover:bg-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-500' : 'icon-btn-hide')
  }, restProps), children);
}
/* harmony default export */ const src_Components_v2_IconButton = (IconButton_IconButton);
;// CONCATENATED MODULE: ./src/assets/download.svg
/* harmony default export */ const download = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgOTYgOTYwIDk2MCIgd2lkdGg9IjIwIj48cGF0aCBkPSJNMjIwIDg5NnEtMjQgMC00Mi0xOHQtMTgtNDJWNjkzaDYwdjE0M2g1MjBWNjkzaDYwdjE0M3EwIDI0LTE4IDQydC00MiAxOEgyMjBabTI2MC0xNTNMMjg3IDU1MGw0My00MyAxMjAgMTIwVjI1Nmg2MHYzNzFsMTIwLTEyMCA0MyA0My0xOTMgMTkzWiIvPjwvc3ZnPg==");
;// CONCATENATED MODULE: ./src/assets/twitter.svg
/* harmony default export */ const twitter = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMjAiIHdpZHRoPSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjIuNDYsNkMyMS42OSw2LjM1IDIwLjg2LDYuNTggMjAsNi42OUMyMC44OCw2LjE2IDIxLjU2LDUuMzIgMjEuODgsNC4zMUMyMS4wNSw0LjgxIDIwLjEzLDUuMTYgMTkuMTYsNS4zNkMxOC4zNyw0LjUgMTcuMjYsNCAxNiw0QzEzLjY1LDQgMTEuNzMsNS45MiAxMS43Myw4LjI5QzExLjczLDguNjMgMTEuNzcsOC45NiAxMS44NCw5LjI3QzguMjgsOS4wOSA1LjExLDcuMzggMyw0Ljc5QzIuNjMsNS40MiAyLjQyLDYuMTYgMi40Miw2Ljk0QzIuNDIsOC40MyAzLjE3LDkuNzUgNC4zMywxMC41QzMuNjIsMTAuNSAyLjk2LDEwLjMgMi4zOCwxMEMyLjM4LDEwIDIuMzgsMTAgMi4zOCwxMC4wM0MyLjM4LDEyLjExIDMuODYsMTMuODUgNS44MiwxNC4yNEM1LjQ2LDE0LjM0IDUuMDgsMTQuMzkgNC42OSwxNC4zOUM0LjQyLDE0LjM5IDQuMTUsMTQuMzYgMy44OSwxNC4zMUM0LjQzLDE2IDYsMTcuMjYgNy44OSwxNy4yOUM2LjQzLDE4LjQ1IDQuNTgsMTkuMTMgMi41NiwxOS4xM0MyLjIyLDE5LjEzIDEuODgsMTkuMTEgMS41NCwxOS4wN0MzLjQ0LDIwLjI5IDUuNywyMSA4LjEyLDIxQzE2LDIxIDIwLjMzLDE0LjQ2IDIwLjMzLDguNzlDMjAuMzMsOC42IDIwLjMzLDguNDIgMjAuMzIsOC4yM0MyMS4xNiw3LjYzIDIxLjg4LDYuODcgMjIuNDYsNloiLz48L3N2Zz4=");
// EXTERNAL MODULE: ./src/assets/share.svg
var share = __webpack_require__(6825);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/VideoPlayer/VideoPlayerActions/index.css
var VideoPlayerActions = __webpack_require__(3584);
;// CONCATENATED MODULE: ./src/Components_v2/VideoPlayer/VideoPlayerActions/index.css

            

var VideoPlayerActions_options = {};

VideoPlayerActions_options.insert = "head";
VideoPlayerActions_options.singleton = false;

var VideoPlayerActions_update = injectStylesIntoStyleTag_default()(VideoPlayerActions["default"], VideoPlayerActions_options);



/* harmony default export */ const VideoPlayer_VideoPlayerActions = (VideoPlayerActions["default"].locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/VideoPlayer/VideoPlayerActions/IconButton/index.css
var VideoPlayerActions_IconButton = __webpack_require__(1896);
;// CONCATENATED MODULE: ./src/Components_v2/VideoPlayer/VideoPlayerActions/IconButton/index.css

            

var VideoPlayerActions_IconButton_options = {};

VideoPlayerActions_IconButton_options.insert = "head";
VideoPlayerActions_IconButton_options.singleton = false;

var VideoPlayerActions_IconButton_update = injectStylesIntoStyleTag_default()(VideoPlayerActions_IconButton["default"], VideoPlayerActions_IconButton_options);



/* harmony default export */ const VideoPlayer_VideoPlayerActions_IconButton = (VideoPlayerActions_IconButton["default"].locals || {});
;// CONCATENATED MODULE: ./src/Components_v2/VideoPlayer/VideoPlayerActions/IconButton/index.js


var IconButton_excluded = ["show", "children"];


function VideoPlayerActions_IconButton_IconButton(_ref) {
  var show = _ref.show,
    children = _ref.children,
    restProps = (0,objectWithoutProperties["default"])(_ref, IconButton_excluded);
  return /*#__PURE__*/react.createElement("button", (0,esm_extends["default"])({
    className: "".concat(show ? 'icon-btn rounded-full p-2 focus:outline-none focus:ring-1 focus:ring-white' : 'icon-btn-hide')
  }, restProps), children);
}
/* harmony default export */ const Components_v2_VideoPlayer_VideoPlayerActions_IconButton = (VideoPlayerActions_IconButton_IconButton);
;// CONCATENATED MODULE: ./src/assets/play.svg
/* harmony default export */ const play = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDk2IDk2MCA5NjAiIHdpZHRoPSIyMCI+PHBhdGggZD0iTTMyMCA4NTNWMjkzbDQ0MCAyODAtNDQwIDI4MFptNjAtMjgwWm0wIDE3MSAyNjktMTcxLTI2OS0xNzF2MzQyWiIvPjwvc3ZnPg==");
;// CONCATENATED MODULE: ./src/assets/pause.svg
/* harmony default export */ const pause = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDk2IDk2MCA5NjAiIHdpZHRoPSIyMCI+PHBhdGggZD0iTTUyNSA4NTZWMjk2aDIzNXY1NjBINTI1Wm0tMzI1IDBWMjk2aDIzNXY1NjBIMjAwWm0zODUtNjBoMTE1VjM1Nkg1ODV2NDQwWm0tMzI1IDBoMTE1VjM1NkgyNjB2NDQwWm0wLTQ0MHY0NDAtNDQwWm0zMjUgMHY0NDAtNDQwWiIvPjwvc3ZnPg==");
;// CONCATENATED MODULE: ./src/assets/volume.svg
/* harmony default export */ const volume = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDk2IDk2MCA5NjAiIHdpZHRoPSIyMCI+PHBhdGggZD0iTTU2MCA5MjV2LTYycTk3LTI4IDE1OC41LTEwNy41VDc4MCA1NzVxMC0xMDEtNjEtMTgxVDU2MCAyODd2LTYycTEyNCAyOCAyMDIgMTI1LjVUODQwIDU3NXEwIDEyNy03OCAyMjQuNVQ1NjAgOTI1Wk0xMjAgNjk2VjQ1NmgxNjBsMjAwLTIwMHY2NDBMMjgwIDY5NkgxMjBabTQyMCA0OFY0MDdxNTUgMTcgODcuNSA2NFQ2NjAgNTc2cTAgNTctMzMgMTA0dC04NyA2NFpNNDIwIDQwOCAzMDcgNTE2SDE4MHYxMjBoMTI3bDExMyAxMDlWNDA4Wm0tOTQgMTY4WiIvPjwvc3ZnPg==");
;// CONCATENATED MODULE: ./src/assets/volume_off.svg
/* harmony default export */ const volume_off = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDk2IDk2MCA5NjAiIHdpZHRoPSIyMCI+PHBhdGggZD0iTTgxMyAxMDAwIDY4MSA4NjhxLTI4IDIwLTYwLjUgMzQuNVQ1NTMgOTI1di02MnEyMy03IDQ0LjUtMTUuNVQ2MzggODI1TDQ3MyA2NTl2MjM3TDI3MyA2OTZIMTEzVjQ1NmgxNTZMNDkgMjM2bDQzLTQzIDc2NCA3NjMtNDMgNDRabS0zNi0yMzItNDMtNDNxMjAtMzQgMjkuNS03MS45MjNUNzczIDU3NXEwLTEwMy4zMjItNjAtMTg0LjY2MVQ1NTMgMjg3di02MnExMjQgMjggMjAyIDEyNS41VDgzMyA1NzVxMCA1MS0xNCAxMDB0LTQyIDkzWk02NDMgNjM0bC05MC05MFY0MTRxNDcgMjIgNzMuNSA2NnQyNi41IDk2cTAgMTUtMi41IDI5LjVUNjQzIDYzNFpNNDczIDQ2NCAzNjkgMzYwbDEwNC0xMDR2MjA4Wm0tNjAgMjg2VjYwMGwtODQtODRIMTczdjEyMGgxMjZsMTE0IDExNFptLTQyLTE5MloiLz48L3N2Zz4=");
;// CONCATENATED MODULE: ./src/assets/fullscreen.svg
/* harmony default export */ const fullscreen = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDk2IDk2MCA5NjAiIHdpZHRoPSIyMCI+PHBhdGggZD0iTTIwMCA4NTZWNjYzaDYwdjEzM2gxMzN2NjBIMjAwWm0wLTM2N1YyOTZoMTkzdjYwSDI2MHYxMzNoLTYwWm0zNjcgMzY3di02MGgxMzNWNjYzaDYwdjE5M0g1NjdabTEzMy0zNjdWMzU2SDU2N3YtNjBoMTkzdjE5M2gtNjBaIi8+PC9zdmc+");
;// CONCATENATED MODULE: ./src/assets/fullscreen_exit.svg
/* harmony default export */ const fullscreen_exit = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IndoaXRlIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDk2IDk2MCA5NjAiIHdpZHRoPSIyMCI+PHBhdGggZD0iTTMzMyA4NTZWNzIzSDIwMHYtNjBoMTkzdjE5M2gtNjBabTIzNCAwVjY2M2gxOTN2NjBINjI3djEzM2gtNjBaTTIwMCA0ODl2LTYwaDEzM1YyOTZoNjB2MTkzSDIwMFptMzY3IDBWMjk2aDYwdjEzM2gxMzN2NjBINTY3WiIvPjwvc3ZnPg==");
;// CONCATENATED MODULE: ./src/Components_v2/VideoPlayer/VideoPlayerActions/index.js










function formatVideoTime(time) {
  if (time < 60) {
    return "00: ".concat(Math.floor(time).toString().padStart(2, '0'));
  }
  var minutes = Math.floor(time / 60).toString().padStart(2, '0');
  var seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return "".concat(minutes, ":").concat(seconds);
}
function VideoPlayerActions_VideoPlayerActions(_ref) {
  var canShowAction = _ref.canShowAction,
    setActionsState = _ref.setActionsState,
    handlePlayState = _ref.handlePlayState,
    videoDuration = _ref.videoDuration,
    currentTime = _ref.currentTime,
    changeCurrentTime = _ref.changeCurrentTime,
    toggleFullscreen = _ref.toggleFullscreen,
    isFullScreen = _ref.isFullScreen,
    handleVolumeBtnClick = _ref.handleVolumeBtnClick,
    isMuted = _ref.isMuted,
    isPlaying = _ref.isPlaying,
    volumeLevel = _ref.volumeLevel,
    handleVolumeChange = _ref.handleVolumeChange;
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray["default"])(_useState, 2),
    canShowDraggablePoint = _useState2[0],
    setDraggablePointState = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = (0,slicedToArray["default"])(_useState3, 2),
    isHovered = _useState4[0],
    setVolumeHover = _useState4[1];
  var handleCurrentTimeChange = function handleCurrentTimeChange(e) {
    var target = e === null || e === void 0 ? void 0 : e.currentTarget;
    var rect = target.getBoundingClientRect();
    var width = rect === null || rect === void 0 ? void 0 : rect.width;
    var mouseXPos = e.clientX - rect.left;
    var percentage = mouseXPos / width;
    var currentTime = Number(percentage * videoDuration).toFixed(5);
    changeCurrentTime(currentTime);
  };
  var videoProgress = Math.floor(currentTime / videoDuration * 100);
  return /*#__PURE__*/react.createElement("div", {
    className: canShowAction || !isPlaying ? 'videoPlayerActions px-2 w-full' : 'videoPlayerActions-hide',
    onMouseEnter: function onMouseEnter() {
      return setActionsState(true);
    }
    // onMouseLeave={() => setActionsState(false)}
  }, /*#__PURE__*/react.createElement("div", {
    className: "videoPlayerActions-track bg-neutral-600 h-1 w-full",
    onMouseEnter: function onMouseEnter() {
      return setDraggablePointState(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setDraggablePointState(false);
    },
    onClick: function onClick(e) {
      return handleCurrentTimeChange(e);
    },
    style: {
      position: 'relative',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "bg-neutral-200 h-1 transition duration-1000 ease-in",
    style: {
      width: "".concat(videoProgress, "%"),
      position: 'absolute'
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "flex item-center justify-between mt-2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex items-center"
  }, !isPlaying ? /*#__PURE__*/react.createElement(Components_v2_VideoPlayer_VideoPlayerActions_IconButton, {
    show: true,
    onClick: function onClick() {
      return handlePlayState();
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: play,
    className: "ease-in-out duration-700"
  })) : /*#__PURE__*/react.createElement(Components_v2_VideoPlayer_VideoPlayerActions_IconButton, {
    show: true,
    onClick: function onClick() {
      return handlePlayState();
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: pause,
    className: "ease-in-out duration-700"
  })), /*#__PURE__*/react.createElement("div", {
    className: "videoPlayerActions-volume"
  }, isMuted ? /*#__PURE__*/react.createElement(Components_v2_VideoPlayer_VideoPlayerActions_IconButton, {
    show: true,
    style: {
      marginLeft: '8px !important'
    },
    onClick: function onClick() {
      return handleVolumeBtnClick();
    },
    onMouseEnter: function onMouseEnter() {
      return setVolumeHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setVolumeHover(false);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: volume_off
  })) : /*#__PURE__*/react.createElement(Components_v2_VideoPlayer_VideoPlayerActions_IconButton, {
    show: true,
    style: {
      marginLeft: '8px !important'
    },
    onClick: function onClick() {
      return handleVolumeBtnClick();
    },
    onMouseEnter: function onMouseEnter() {
      return setVolumeHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setVolumeHover(false);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: volume
  })), isHovered ? /*#__PURE__*/react.createElement("div", {
    className: "transition ease-in-out delay-700",
    onMouseEnter: function onMouseEnter() {
      return setVolumeHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setVolumeHover(false);
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "videoPlayerActions-knob-container p-3 transition ease-in-out delay-250"
  }, /*#__PURE__*/react.createElement("div", {
    className: "videoPlayerActions-knob rounded-full bg-neutral-400 transition ease-in-out delay-300",
    onClick: function onClick(e) {
      return handleVolumeChange(e);
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "videoPlayerActions-knob-inner rounded-full transition ease-in-out delay-350",
    style: {
      width: "".concat(volumeLevel, "%"),
      position: 'absolute'
    }
  })))) : null), videoDuration ? /*#__PURE__*/react.createElement("span", {
    className: "videoPlayerActions-time p-2 flex items-center"
  }, /*#__PURE__*/react.createElement("p", {
    className: "text-xs text-white"
  }, formatVideoTime(currentTime)), /*#__PURE__*/react.createElement("p", {
    className: "text-xs text-white mx-1"
  }, "/"), /*#__PURE__*/react.createElement("p", {
    className: "text-xs text-white"
  }, formatVideoTime(videoDuration))) : null), /*#__PURE__*/react.createElement("div", null, !isFullScreen ? /*#__PURE__*/react.createElement(Components_v2_VideoPlayer_VideoPlayerActions_IconButton, {
    show: true,
    onClick: toggleFullscreen
  }, /*#__PURE__*/react.createElement("img", {
    src: fullscreen
  })) : /*#__PURE__*/react.createElement(Components_v2_VideoPlayer_VideoPlayerActions_IconButton, {
    show: true,
    onClick: toggleFullscreen
  }, /*#__PURE__*/react.createElement("img", {
    src: fullscreen_exit
  })))));
}
/* harmony default export */ const Components_v2_VideoPlayer_VideoPlayerActions = (VideoPlayerActions_VideoPlayerActions);
// EXTERNAL MODULE: ./src/store/actions/videosActions.js
var videosActions = __webpack_require__(3953);
;// CONCATENATED MODULE: ./src/Components_v2/VideoPlayer/index.js










var redirectToTweet = function redirectToTweet(parentTweetId) {
  window.open("https://twitter.com/i/status/".concat(parentTweetId), '_blank');
};
function VideoPlayer_VideoPlayer(_ref) {
  var videoUrl = _ref.videoUrl,
    videoText = _ref.videoText,
    elapsedTime = _ref.elapsedTime,
    handleVideoDownload = _ref.handleVideoDownload,
    parentTweetId = _ref.parentTweetId,
    videoSlug = _ref.videoSlug;
  var videoRef = (0,react.useRef)(null);
  var _useState = (0,react.useState)(null),
    _useState2 = (0,slicedToArray["default"])(_useState, 2),
    videoDuration = _useState2[0],
    setVideoDuration = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = (0,slicedToArray["default"])(_useState3, 2),
    canShowAction = _useState4[0],
    setActionsState = _useState4[1];
  var _useState5 = (0,react.useState)(0),
    _useState6 = (0,slicedToArray["default"])(_useState5, 2),
    currentTime = _useState6[0],
    setCurrentTime = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = (0,slicedToArray["default"])(_useState7, 2),
    isFullScreen = _useState8[0],
    setFullScreen = _useState8[1];
  var _useState9 = (0,react.useState)(false),
    _useState10 = (0,slicedToArray["default"])(_useState9, 2),
    isMuted = _useState10[0],
    setMuteState = _useState10[1];
  var _useState11 = (0,react.useState)(false),
    _useState12 = (0,slicedToArray["default"])(_useState11, 2),
    isPlaying = _useState12[0],
    setPlayState = _useState12[1];
  var _useState13 = (0,react.useState)(0),
    _useState14 = (0,slicedToArray["default"])(_useState13, 2),
    volumeLevel = _useState14[0],
    setVolumeLevel = _useState14[1];
  var handlePlayState = function handlePlayState() {
    var current = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current;
    if (!current) {
      return;
    }
    if (current.paused) {
      current.play();
      setPlayState(true);
      return;
    }
    current.pause();
    setPlayState(false);
  };
  var getVideoMetadata = function getVideoMetadata() {
    var videoDuration = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current.duration;
    var volumeLevel = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current.volume;
    setVideoDuration(videoDuration);
    setVolumeLevel(volumeLevel * 100);
  };
  var updateCurrentTime = function updateCurrentTime() {
    var _videoRef$current;
    var currentTime = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current.currentTime;
    setCurrentTime(currentTime);
    if (currentTime > 0 && !(videoRef !== null && videoRef !== void 0 && (_videoRef$current = videoRef.current) !== null && _videoRef$current !== void 0 && _videoRef$current.paused)) {
      setPlayState(true);
    }
  };
  var handleMouseEnter = function handleMouseEnter() {
    setActionsState(true);
  };
  var changeCurrentTime = function changeCurrentTime(currentTime) {
    var target = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current;
    target.currentTime = currentTime;
    setCurrentTime(currentTime);
  };
  var toggleFullscreen = function toggleFullscreen() {
    var element = document.getElementById('videoPlayer');
    if (document.fullscreenElement || window.event.key === 'Escape' || window.event.key === 'Esc' || window.event.keyCode === 27) {
      element.classList.remove('videoPlayer-fullscreen');
      element.classList.add('videoPlayer');
      setFullScreen(false);
      document.exitFullscreen();
    } else {
      document.getElementById('videoPlayer-container').requestFullscreen();
      element.classList.remove('videoPlayer');
      element.classList.add('videoPlayer-fullscreen');
      setFullScreen(true);
      console.log(window.innerHeight);
    }
  };
  var handleVolumeBtnClick = function handleVolumeBtnClick() {
    var target = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current;
    if (target !== null && target !== void 0 && target.muted) {
      target.volume = 1;
      target.muted = false;
      setMuteState(false);
      setVolumeLevel(100);
    } else {
      target.volume = 0;
      target.muted = true;
      setMuteState(true);
      setVolumeLevel(0);
    }
  };
  var handleVolumeChange = function handleVolumeChange(e) {
    var videoTarget = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current;
    var target = e === null || e === void 0 ? void 0 : e.currentTarget;
    var rect = target.getBoundingClientRect();
    var mouseXPos = e.clientX - rect.left;
    var vol = Number((mouseXPos / (rect === null || rect === void 0 ? void 0 : rect.width)).toFixed(1));
    videoTarget.volume = vol;
    setVolumeLevel(vol * 100);
  };
  var _onKeyDown = function onKeyDown() {
    var element = document.getElementById('videoPlayer');
    debugger;
    if (document.fullscreenElement && (window.event.key === 'Escape' || window.event.key === 'Esc' || window.event.keyCode === 27)) {
      element.classList.remove('videoPlayer-fullscreen');
      element.classList.add('videoPlayer');
      setFullScreen(false);
      document.exitFullscreen();
    }
  };
  var strippedText = (0,utilFunctions.getStrippedVideoText)(videoText);
  return /*#__PURE__*/react.createElement("div", {
    onKeyDown: function onKeyDown() {
      debugger;
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "videoPlayer-container",
    id: "videoPlayer-container",
    onKeyDown: function onKeyDown() {
      return _onKeyDown();
    }
  }, /*#__PURE__*/react.createElement("video", {
    ref: videoRef,
    autoPlay: true,
    disablePictureInPicture: true,
    controlsList: "nodownload",
    onContextMenu: function onContextMenu(e) {
      return e.preventDefault();
    },
    className: "videoPlayer lg:rounded-lg",
    onMouseEnter: function onMouseEnter() {
      return handleMouseEnter();
    },
    onMouseLeave: function onMouseLeave() {
      return setActionsState(false);
    },
    onLoadedMetadata: function onLoadedMetadata() {
      return getVideoMetadata();
    },
    onTimeUpdate: function onTimeUpdate(e) {
      return updateCurrentTime();
    },
    onEnded: function onEnded() {
      return setPlayState(false);
    },
    id: "videoPlayer",
    onClick: function onClick() {
      return handlePlayState();
    }
  }, /*#__PURE__*/react.createElement("source", {
    src: videoUrl,
    type: "video/mp4"
  })), /*#__PURE__*/react.createElement(Components_v2_VideoPlayer_VideoPlayerActions, {
    canShowAction: canShowAction,
    setActionsState: setActionsState,
    handlePlayState: handlePlayState,
    videoDuration: videoDuration,
    currentTime: currentTime,
    changeCurrentTime: changeCurrentTime,
    toggleFullscreen: toggleFullscreen,
    isFullScreen: isFullScreen,
    handleVolumeBtnClick: handleVolumeBtnClick,
    isMuted: isMuted,
    isPlaying: isPlaying,
    volumeLevel: volumeLevel,
    handleVolumeChange: handleVolumeChange
  })), /*#__PURE__*/react.createElement("div", {
    className: "mt-4 videoPlayer-video-info"
  }, strippedText && strippedText.length > 0 ? /*#__PURE__*/react.createElement("div", {
    className: ""
  }, /*#__PURE__*/react.createElement("p", {
    className: "videoPlayer-text lg:text-lg font-semibold"
  }, strippedText)) : null, /*#__PURE__*/react.createElement("div", {
    className: "videoPlayer-actions mt-2 flex justify-between items-center"
  }, elapsedTime ? /*#__PURE__*/react.createElement("p", {
    className: "videoCard-elapsed-time text-sm"
  }, elapsedTime) : null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(src_Components_v2_IconButton, {
    show: true,
    style: {
      marginLeft: '32px !important'
    },
    onClick: function onClick() {
      return redirectToTweet(parentTweetId);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: twitter
  })), /*#__PURE__*/react.createElement(src_Components_v2_IconButton, {
    show: true,
    style: {
      marginLeft: '32px !important'
    },
    onClick: function onClick() {
      return (0,utilFunctions.shareVideo)(videoSlug);
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: share["default"]
  })), /*#__PURE__*/react.createElement(src_Components_v2_IconButton, {
    show: true,
    style: {
      marginLeft: '32px !important'
    },
    onClick: function onClick() {
      return handleVideoDownload();
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: download
  }))))));
}
/* harmony default export */ const src_Components_v2_VideoPlayer = (VideoPlayer_VideoPlayer);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 26 modules
var es = __webpack_require__(1399);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 2 modules
var react_router = __webpack_require__(2573);
// EXTERNAL MODULE: ./src/utils/calculateTimeLapse.js
var calculateTimeLapse = __webpack_require__(128);
;// CONCATENATED MODULE: ./src/Components_v2/VideoPlayer/VideoPlayerPlaceholder.js


function VideoPlayerPlaceholder() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "videoPlayer lg:rounded-lg bg-neutral-200"
  }), /*#__PURE__*/react.createElement("div", {
    className: "mt-6 videoPlayer-video-info"
  }, Array.from(new Array(2)).map(function (x) {
    return /*#__PURE__*/react.createElement("div", {
      className: "bg-neutral-200 mt-1 animate-pulse",
      style: {
        height: 16,
        width: '100%'
      }
    });
  }), /*#__PURE__*/react.createElement("div", {
    className: "bg-neutral-200 mt-4 animate-pulse",
    style: {
      height: 16,
      width: 100
    }
  })));
}
/* harmony default export */ const VideoPlayer_VideoPlayerPlaceholder = (VideoPlayerPlaceholder);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/TrendingVideos/index.css
var TrendingVideos = __webpack_require__(8546);
;// CONCATENATED MODULE: ./src/Components_v2/TrendingVideos/index.css

            

var TrendingVideos_options = {};

TrendingVideos_options.insert = "head";
TrendingVideos_options.singleton = false;

var TrendingVideos_update = injectStylesIntoStyleTag_default()(TrendingVideos["default"], TrendingVideos_options);



/* harmony default export */ const Components_v2_TrendingVideos = (TrendingVideos["default"].locals || {});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/TrendingVideo/index.css
var TrendingVideo = __webpack_require__(3442);
;// CONCATENATED MODULE: ./src/Components_v2/TrendingVideo/index.css

            

var TrendingVideo_options = {};

TrendingVideo_options.insert = "head";
TrendingVideo_options.singleton = false;

var TrendingVideo_update = injectStylesIntoStyleTag_default()(TrendingVideo["default"], TrendingVideo_options);



/* harmony default export */ const Components_v2_TrendingVideo = (TrendingVideo["default"].locals || {});
// EXTERNAL MODULE: ./src/assets/more.svg
var more = __webpack_require__(5664);
// EXTERNAL MODULE: ./src/Components_v2/Menu/index.js + 1 modules
var Menu = __webpack_require__(3263);
// EXTERNAL MODULE: ./src/Components_v2/MenuItem/index.js + 1 modules
var MenuItem = __webpack_require__(3061);
// EXTERNAL MODULE: ./src/assets/flag.svg
var flag = __webpack_require__(9270);
;// CONCATENATED MODULE: ./src/Components_v2/TrendingVideo/index.js










var HIDDEN = false;
function TrendingVideo_TrendingVideo(_ref) {
  var imageSource = _ref.imageSource,
    text = _ref.text,
    elapsedTime = _ref.elapsedTime,
    handleClick = _ref.handleClick,
    videoSlug = _ref.videoSlug;
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray["default"])(_useState, 2),
    canDisplayBtn = _useState2[0],
    setBtnDisplayState = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = (0,slicedToArray["default"])(_useState3, 2),
    menuEvent = _useState4[0],
    setMenuEvent = _useState4[1];
  var handleBtnClick = function handleBtnClick(e) {
    e.stopPropagation();
    setMenuEvent(e);
  };
  var hideButton = function hideButton() {
    setBtnDisplayState(false);
    setMenuEvent(null);
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "trendingVideo rounded-l-lg lg:grid lg:grid-cols-7 lg:gap-4 mb-2 lg:hover:bg-neutral-100 pr-2",
    onClick: function onClick() {
      return handleClick();
    },
    onMouseLeave: function onMouseLeave() {
      return hideButton();
    },
    onMouseEnter: function onMouseEnter() {
      return setBtnDisplayState(true);
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-span-3"
  }, /*#__PURE__*/react.createElement("img", {
    className: "rounded-lg trendingVideo-img",
    src: imageSource,
    alt: "Omniscraper Trending Twitter Video"
  })), /*#__PURE__*/react.createElement("div", {
    className: "col-span-4 sm:pt-2"
  }, text && /*#__PURE__*/react.createElement("div", {
    className: "trendingVideo-text-container mb-2"
  }, /*#__PURE__*/react.createElement("p", {
    className: "text-sm font-semibold"
  }, text)), /*#__PURE__*/react.createElement("div", {
    className: "trendingVideo-bottom flex justify-between items-center"
  }, elapsedTime ? /*#__PURE__*/react.createElement("p", {
    className: "text-xs text-inherit"
  }, elapsedTime) : null, canDisplayBtn ? /*#__PURE__*/react.createElement("span", {
    className: "mt-1",
    onClick: function onClick(e) {
      return handleBtnClick(e);
    },
    onBlur: function onBlur() {
      return setMenuEvent(null);
    }
  }, /*#__PURE__*/react.createElement(src_Components_v2_IconButton, {
    show: true
  }, /*#__PURE__*/react.createElement("img", {
    src: more["default"]
  }))) : null, menuEvent && /*#__PURE__*/react.createElement(Menu["default"], {
    event: menuEvent
  }, /*#__PURE__*/react.createElement(MenuItem["default"], {
    label: "Share",
    icon: /*#__PURE__*/react.createElement("img", {
      src: share["default"]
    }),
    onClick: function onClick() {
      return (0,utilFunctions.shareVideo)(videoSlug);
    }
  }), HIDDEN ? /*#__PURE__*/react.createElement(MenuItem["default"], {
    label: "Report",
    icon: /*#__PURE__*/react.createElement("img", {
      src: flagIcon
    })
  }) : null))));
}
/* harmony default export */ const src_Components_v2_TrendingVideo = (TrendingVideo_TrendingVideo);
;// CONCATENATED MODULE: ./src/Components_v2/TrendingVideo/TrendingVideoPlaceholder.js

function TrendingVideoPlaceholder() {
  return /*#__PURE__*/react.createElement("div", {
    className: "trendingVideo rounded-l-lg lg:grid lg:grid-cols-7 lg:gap-4 mb-2 lg:hover:bg-neutral-100 pr-2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-span-3"
  }, /*#__PURE__*/react.createElement("div", {
    className: "rounded-lg bg-neutral-200 animate-pulse trendingVideo-img",
    alt: "Omniscraper Trending Twitter Video"
  })), /*#__PURE__*/react.createElement("div", {
    className: "col-span-4"
  }, Array.from(new Array(2)).map(function (x) {
    return /*#__PURE__*/react.createElement("div", {
      className: "bg-neutral-200 mt-1 animate-pulse trendingVideo-text-container",
      style: {
        height: 16,
        width: '100%'
      }
    });
  }), /*#__PURE__*/react.createElement("div", {
    className: "bg-neutral-200 mt-4 animate-pulse",
    style: {
      height: 16,
      width: 100
    }
  })));
}
/* harmony default export */ const TrendingVideo_TrendingVideoPlaceholder = (TrendingVideoPlaceholder);
;// CONCATENATED MODULE: ./src/Components_v2/TrendingVideos/index.js







function TrendingVideos_TrendingVideos(_ref) {
  var trendingVideos = _ref.trendingVideos,
    trendingVideosLoading = _ref.trendingVideosLoading;
  var history = (0,react_router.useHistory)();
  var handleVideoClick = function handleVideoClick(videoSlug) {
    history.push("/".concat(videoSlug));
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "trendingVideos px-2 sm:px-4"
  }, /*#__PURE__*/react.createElement("p", {
    className: "font-bold lg:text-lg mb-1 py-2"
  }, "Trending this week"), /*#__PURE__*/react.createElement("div", {
    className: "trendingVideos-container lg:rounded-lg lg:pr-1"
  }, trendingVideosLoading ? /*#__PURE__*/react.createElement(react.Fragment, null, Array.from(new Array(5)).map(function (item, index) {
    return /*#__PURE__*/react.createElement(TrendingVideo_TrendingVideoPlaceholder, {
      key: index
    });
  })) : /*#__PURE__*/react.createElement(react.Fragment, null, trendingVideos.map(function (trendingVideo) {
    var elapsedTime = (0,calculateTimeLapse.calculateTimeSinceSave)(trendingVideo);
    var text = (0,utilFunctions.getStrippedVideoText)(trendingVideo.text);
    return /*#__PURE__*/react.createElement(src_Components_v2_TrendingVideo, {
      key: trendingVideo.id,
      text: text,
      imageSource: trendingVideo.video_thumbnail_link_https,
      elapsedTime: elapsedTime,
      handleClick: function handleClick() {
        return handleVideoClick(trendingVideo.slug);
      },
      videoSlug: trendingVideo.slug
    });
  }))));
}
/* harmony default export */ const src_Components_v2_TrendingVideos = (TrendingVideos_TrendingVideos);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(4593);
;// CONCATENATED MODULE: ./src/pages/Video/index.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var Video_Video = /*#__PURE__*/function (_Component) {
  (0,inherits["default"])(Video, _Component);
  var _super = _createSuper(Video);
  function Video() {
    var _this;
    (0,classCallCheck["default"])(this, Video);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "loadVideo", /*#__PURE__*/(0,asyncToGenerator["default"])( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var _this$props, getVideo, match, slug;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, getVideo = _this$props.getVideo, match = _this$props.match;
              slug = match.params.slug;
              _context.next = 4;
              return getVideo(slug);
            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "handleVideoDownload", /*#__PURE__*/function () {
      var _ref2 = (0,asyncToGenerator["default"])( /*#__PURE__*/regenerator_default().mark(function _callee2(videoObj) {
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.props.downloadVideo({
                  url: videoObj.url,
                  slug: videoObj.slug
                });
              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    return _this;
  }
  (0,createClass["default"])(Video, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadVideo();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.match.params.slug !== this.props.match.params.slug) {
        this.loadVideo();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        videoObject = _this$props2.videoObject,
        videoLoading = _this$props2.videoLoading,
        trendingVideos = _this$props2.trendingVideos,
        trendingVideosLoading = _this$props2.trendingVideosLoading;
      var _handleVideoDownload = this.handleVideoDownload;
      var elapsedTime = videoObject ? (0,calculateTimeLapse.calculateTimeSinceSave)(videoObject) : null;
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Helmet.Helmet, null, /*#__PURE__*/react.createElement("meta", {
        name: "description",
        content: "The most efficient Twitter Videos and GIFs downloader. Log into Twitter, Find a tweet with a video and comment with @OMNISCRAPER, Click on the replied link, Download and share your video!"
      }), /*#__PURE__*/react.createElement("meta", {
        name: "keywords",
        content: "Viral Tweets. Viral Videos. Funny Tweets. Funny Videos. Cat Videos. NFL. Rap. Sports. NFL players. Gaming. Barstool Sports. Joe Rogan. Actors. NBA players. MLB. Baseball. Bitcoin cryptocurrency. Tiktok Videos. Football Videos."
      }), /*#__PURE__*/react.createElement("meta", {
        property: "og:image:width",
        content: "600"
      }), /*#__PURE__*/react.createElement("meta", {
        property: "og:image:height",
        content: "314"
      }), /*#__PURE__*/react.createElement("meta", {
        property: "og:image",
        content: videoObject === null || videoObject === void 0 ? void 0 : videoObject.video_thumbnail_link_https
      }), /*#__PURE__*/react.createElement("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/react.createElement("meta", {
        name: "twitter:title",
        content: videoObject === null || videoObject === void 0 ? void 0 : videoObject.text
      }), /*#__PURE__*/react.createElement("meta", {
        name: "twitter:description",
        content: "Log into Twitter, Find a tweet with a video and comment with @OMNISCRAPER, Click on the link, Download and share your video!"
      }), /*#__PURE__*/react.createElement("meta", {
        name: "twitter:image",
        content: videoObject === null || videoObject === void 0 ? void 0 : videoObject.video_thumbnail_link_https
      }), /*#__PURE__*/react.createElement("meta", {
        name: "twitter:site",
        content: "@omniscraper"
      }), /*#__PURE__*/react.createElement("title", null, "Video - Omniscraper: The Best Twitter Videos Downloader!")), /*#__PURE__*/react.createElement("div", {
        className: "lg:p-4 grid flex lg:grid-cols-6 md:grid-cols-1 lg:gap-6 xs:gap-0"
      }, /*#__PURE__*/react.createElement("div", {
        className: "col-span-4 videoVideoPlayer-container"
      }, videoLoading ? /*#__PURE__*/react.createElement(VideoPlayer_VideoPlayerPlaceholder, null) : /*#__PURE__*/react.createElement(react.Fragment, null, videoObject ? /*#__PURE__*/react.createElement(src_Components_v2_VideoPlayer, {
        videoUrl: videoObject.url,
        videoText: videoObject.text,
        elapsedTime: elapsedTime,
        handleVideoDownload: function handleVideoDownload() {
          return _handleVideoDownload(videoObject);
        },
        parentTweetId: videoObject.parent_tweet_id,
        videoSlug: videoObject.slug
      }) : null)), /*#__PURE__*/react.createElement("div", {
        className: "col-span-2"
      }, /*#__PURE__*/react.createElement(src_Components_v2_TrendingVideos, {
        trendingVideos: trendingVideos,
        trendingVideosLoading: trendingVideosLoading
      }))));
    }
  }]);
  return Video;
}(react.Component);
var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state.videos);
};
var mapDispatchToProps = {
  getVideo: videosActions.getVideo,
  downloadVideo: videosActions.downloadVideo
};
/* harmony default export */ const src_pages_Video = ((0,react_router.withRouter)((0,es.connect)(mapStateToProps, mapDispatchToProps)(Video_Video)));

/***/ }),

/***/ 1175:
/*!************************************!*\
  !*** ./src/utils/utilFunctions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrippedVideoText": () => (/* binding */ getStrippedVideoText),
/* harmony export */   "shareVideo": () => (/* binding */ shareVideo)
/* harmony export */ });
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

/***/ }),

/***/ 566:
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/IconButton/index.css ***!
  \**************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".videoCard-btn-hide {\n\tdisplay: none;\n}\n\n.videoCard-btn {\n\tdisplay: block;\n}\n", "",{"version":3,"sources":["webpack://./src/Components_v2/IconButton/index.css"],"names":[],"mappings":"AAAA;CACC,aAAa;AACd;;AAEA;CACC,cAAc;AACf","sourcesContent":[".videoCard-btn-hide {\n\tdisplay: none;\n}\n\n.videoCard-btn {\n\tdisplay: block;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ 3442:
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/TrendingVideo/index.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".trendingVideo {\n\tcursor: pointer;\n}\n\n.trendingVideo-bottom {\n\theight: 36px;\n}\n\n.trendingVideo-img {\n\theight: 13vh;\n\tobject-fit: cover;\n\twidth: 100%;\n}\n\n@media screen and (min-width: 411px) {\n\t.trendingVideo-text-container {\n\t\tmax-height: 42px;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\twhite-space: initial;\n\t\t-webkit-line-clamp: 2;\n\t\t-webkit-box-orient: vertical;\n\t}\n}\n\n/* For Mobile Screens */\n@media screen and (max-width: 640px) {\n\t.trendingVideo {\n\t\tmin-width: 180px;\n\t\theight: 30vh;\n\t}\n\n\t.trendingVideo-img {\n\t\theight: 20vh;\n\t}\n\n\t.trendingVideo-text-container {\n\t\t/* display: none; */\n\t}\n}\n\n/* For tabs */\n@media screen and (max-width: 1300px) and (min-width: 640px) {\n\t.trendingVideo {\n\t\tmin-width: 180px;\n\t\theight: 30vh;\n\t}\n\n\t.trendingVideo-img-container {\n\t}\n\n\t.trendingVideo-img {\n\t\theight: 20vh;\n\t}\n\n\t.trendingVideo-text-container {\n\t\t/* display: none; */\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/Components_v2/TrendingVideo/index.css"],"names":[],"mappings":"AAAA;CACC,eAAe;AAChB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,iBAAiB;CACjB,WAAW;AACZ;;AAEA;CACC;EACC,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;EACvB,oBAAoB;EACpB,oBAAoB;EACpB,qBAAqB;EACrB,4BAA4B;CAC7B;AACD;;AAEA,uBAAuB;AACvB;CACC;EACC,gBAAgB;EAChB,YAAY;CACb;;CAEA;EACC,YAAY;CACb;;CAEA;EACC,mBAAmB;CACpB;AACD;;AAEA,aAAa;AACb;CACC;EACC,gBAAgB;EAChB,YAAY;CACb;;CAEA;CACA;;CAEA;EACC,YAAY;CACb;;CAEA;EACC,mBAAmB;CACpB;AACD","sourcesContent":[".trendingVideo {\n\tcursor: pointer;\n}\n\n.trendingVideo-bottom {\n\theight: 36px;\n}\n\n.trendingVideo-img {\n\theight: 13vh;\n\tobject-fit: cover;\n\twidth: 100%;\n}\n\n@media screen and (min-width: 411px) {\n\t.trendingVideo-text-container {\n\t\tmax-height: 42px;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tdisplay: -webkit-box;\n\t\twhite-space: initial;\n\t\t-webkit-line-clamp: 2;\n\t\t-webkit-box-orient: vertical;\n\t}\n}\n\n/* For Mobile Screens */\n@media screen and (max-width: 640px) {\n\t.trendingVideo {\n\t\tmin-width: 180px;\n\t\theight: 30vh;\n\t}\n\n\t.trendingVideo-img {\n\t\theight: 20vh;\n\t}\n\n\t.trendingVideo-text-container {\n\t\t/* display: none; */\n\t}\n}\n\n/* For tabs */\n@media screen and (max-width: 1300px) and (min-width: 640px) {\n\t.trendingVideo {\n\t\tmin-width: 180px;\n\t\theight: 30vh;\n\t}\n\n\t.trendingVideo-img-container {\n\t}\n\n\t.trendingVideo-img {\n\t\theight: 20vh;\n\t}\n\n\t.trendingVideo-text-container {\n\t\t/* display: none; */\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8546:
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/TrendingVideos/index.css ***!
  \******************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".trendingVideos {\n\twidth: 100%;\n}\n\n.trendingVideos-container {\n\twidth: 100%;\n}\n\n.trendingVideos-container::-webkit-scrollbar {\n\twidth: 8px;\n}\n\n.trendingVideos-container::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n\tborder-radius: 999px;\n}\n\n.trendingVideos-container::-webkit-scrollbar-thumb {\n\tbackground-color: #c4c4c4;\n\tborder-radius: 999px;\n}\n\n/* Mobile Screens */\n@media screen and (max-width: 640px) {\n\t.trendingVideos {\n\t\twidth: 100vw;\n\t}\n\n\t.trendingVideos-container {\n\t\toverflow-x: auto;\n\t\tdisplay: flex;\n\t\t-ms-overflow-style: none;\n\t\tscrollbar-width: none;\n\t\tscroll-behavior: smooth;\n\t\tscroll-snap-type: both mandatory;\n\t\twidth: 100%;\n\t}\n\n\t.trendingVideos-container::-webkit-scrollbar {\n\t\tdisplay: none;\n\t}\n}\n\n/* Tabs */\n@media screen and (max-width: 1024px) and (min-width: 640px) {\n\t.trendingVideos {\n\t\tpadding-left: 0.5rem;\n\t\tpadding-right: 0.5rem;\n\t\twidth: 100vw;\n\t}\n\n\t.trendingVideos-container {\n\t\toverflow-x: auto;\n\t\tdisplay: flex;\n\t\t-ms-overflow-style: none;\n\t\tscrollbar-width: none;\n\t\tscroll-behavior: smooth;\n\t\tscroll-snap-type: both mandatory;\n\t\twidth: 100%;\n\t}\n\n\t.trendingVideos-container::-webkit-scrollbar {\n\t\tdisplay: none;\n\t}\n}\n\n/* Laptops and bigger screens */\n@media screen and (min-width: 1280px) {\n\t.trendingVideos {\n\t\tpadding-left: 1rem;\n\t\tpadding-right: 1rem;\n\t}\n\n\t.trendingVideos-container {\n\t\toverflow-y: auto;\n\t\theight: 70vh;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/Components_v2/TrendingVideos/index.css"],"names":[],"mappings":"AAAA;CACC,WAAW;AACZ;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,6BAA6B;CAC7B,oBAAoB;AACrB;;AAEA;CACC,yBAAyB;CACzB,oBAAoB;AACrB;;AAEA,mBAAmB;AACnB;CACC;EACC,YAAY;CACb;;CAEA;EACC,gBAAgB;EAChB,aAAa;EACb,wBAAwB;EACxB,qBAAqB;EACrB,uBAAuB;EACvB,gCAAgC;EAChC,WAAW;CACZ;;CAEA;EACC,aAAa;CACd;AACD;;AAEA,SAAS;AACT;CACC;EACC,oBAAoB;EACpB,qBAAqB;EACrB,YAAY;CACb;;CAEA;EACC,gBAAgB;EAChB,aAAa;EACb,wBAAwB;EACxB,qBAAqB;EACrB,uBAAuB;EACvB,gCAAgC;EAChC,WAAW;CACZ;;CAEA;EACC,aAAa;CACd;AACD;;AAEA,+BAA+B;AAC/B;CACC;EACC,kBAAkB;EAClB,mBAAmB;CACpB;;CAEA;EACC,gBAAgB;EAChB,YAAY;CACb;AACD","sourcesContent":[".trendingVideos {\n\twidth: 100%;\n}\n\n.trendingVideos-container {\n\twidth: 100%;\n}\n\n.trendingVideos-container::-webkit-scrollbar {\n\twidth: 8px;\n}\n\n.trendingVideos-container::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n\tborder-radius: 999px;\n}\n\n.trendingVideos-container::-webkit-scrollbar-thumb {\n\tbackground-color: #c4c4c4;\n\tborder-radius: 999px;\n}\n\n/* Mobile Screens */\n@media screen and (max-width: 640px) {\n\t.trendingVideos {\n\t\twidth: 100vw;\n\t}\n\n\t.trendingVideos-container {\n\t\toverflow-x: auto;\n\t\tdisplay: flex;\n\t\t-ms-overflow-style: none;\n\t\tscrollbar-width: none;\n\t\tscroll-behavior: smooth;\n\t\tscroll-snap-type: both mandatory;\n\t\twidth: 100%;\n\t}\n\n\t.trendingVideos-container::-webkit-scrollbar {\n\t\tdisplay: none;\n\t}\n}\n\n/* Tabs */\n@media screen and (max-width: 1024px) and (min-width: 640px) {\n\t.trendingVideos {\n\t\tpadding-left: 0.5rem;\n\t\tpadding-right: 0.5rem;\n\t\twidth: 100vw;\n\t}\n\n\t.trendingVideos-container {\n\t\toverflow-x: auto;\n\t\tdisplay: flex;\n\t\t-ms-overflow-style: none;\n\t\tscrollbar-width: none;\n\t\tscroll-behavior: smooth;\n\t\tscroll-snap-type: both mandatory;\n\t\twidth: 100%;\n\t}\n\n\t.trendingVideos-container::-webkit-scrollbar {\n\t\tdisplay: none;\n\t}\n}\n\n/* Laptops and bigger screens */\n@media screen and (min-width: 1280px) {\n\t.trendingVideos {\n\t\tpadding-left: 1rem;\n\t\tpadding-right: 1rem;\n\t}\n\n\t.trendingVideos-container {\n\t\toverflow-y: auto;\n\t\theight: 70vh;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1896:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/VideoPlayer/VideoPlayerActions/IconButton/index.css ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".videoCard-btn-hide {\n\tdisplay: none;\n}\n\n.videoCard-btn {\n\tdisplay: block;\n}\n", "",{"version":3,"sources":["webpack://./src/Components_v2/VideoPlayer/VideoPlayerActions/IconButton/index.css"],"names":[],"mappings":"AAAA;CACC,aAAa;AACd;;AAEA;CACC,cAAc;AACf","sourcesContent":[".videoCard-btn-hide {\n\tdisplay: none;\n}\n\n.videoCard-btn {\n\tdisplay: block;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3584:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/VideoPlayer/VideoPlayerActions/index.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".videoPlayerActions {\n\tposition: absolute;\n\tbottom: 0px;\n\tz-index: 1;\n\tdisplay: block;\n\tpadding-bottom: 8px;\n}\n\n.videoPlayerActions-hide {\n\tdisplay: none;\n}\n\n.videoPlayerActions-time {\n\theight: '20px';\n\twidth: '100px';\n}\n\n.videoPlayerActions-volume {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.videoPlayerActions-knob-container {\n}\n\n.videoPlayerActions-knob {\n\twidth: 60px;\n\theight: 5px;\n\tposition: relative;\n\tcursor: pointer;\n}\n\n.videoPlayerActions-knob-inner {\n\theight: 5px;\n\tbackground-color: white;\n\tposition: absolute;\n}\n", "",{"version":3,"sources":["webpack://./src/Components_v2/VideoPlayer/VideoPlayerActions/index.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,WAAW;CACX,UAAU;CACV,cAAc;CACd,mBAAmB;AACpB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,cAAc;CACd,cAAc;AACf;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,mBAAmB;AACpB;;AAEA;AACA;;AAEA;CACC,WAAW;CACX,WAAW;CACX,kBAAkB;CAClB,eAAe;AAChB;;AAEA;CACC,WAAW;CACX,uBAAuB;CACvB,kBAAkB;AACnB","sourcesContent":[".videoPlayerActions {\n\tposition: absolute;\n\tbottom: 0px;\n\tz-index: 1;\n\tdisplay: block;\n\tpadding-bottom: 8px;\n}\n\n.videoPlayerActions-hide {\n\tdisplay: none;\n}\n\n.videoPlayerActions-time {\n\theight: '20px';\n\twidth: '100px';\n}\n\n.videoPlayerActions-volume {\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.videoPlayerActions-knob-container {\n}\n\n.videoPlayerActions-knob {\n\twidth: 60px;\n\theight: 5px;\n\tposition: relative;\n\tcursor: pointer;\n}\n\n.videoPlayerActions-knob-inner {\n\theight: 5px;\n\tbackground-color: white;\n\tposition: absolute;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4234:
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components_v2/VideoPlayer/index.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".videoPlayer-container {\n\twidth: 100%;\n\tposition: relative;\n\tz-index: 0;\n}\n\n.videoPlayer {\n\tobject-fit: contain;\n\tborder: none;\n\tposition: relative;\n\twidth: 100%;\n\tbackground-color: #000;\n\toutline-width: 0px;\n}\n\n.videoPlayer-fullscreen {\n\theight: 100vh;\n\tobject-fit: contain;\n\tborder: none;\n\tposition: relative;\n\twidth: 100%;\n\tbackground-color: #000;\n\toutline-width: 0px;\n}\n\n.videoPlayer-actions {\n\t/* height: 100px; */\n}\n\n/* For Mobile Screens */\n@media screen and (max-width: 640px) {\n\t.videoPlayer {\n\t\theight: 40vh !important;\n\t}\n\n\t.videoPlayer-video-info {\n\t\tpadding-left: 0.5rem;\n\t\tpadding-right: 0.5rem;\n\t}\n}\n\n/* Tabs */\n@media screen and (max-width: 1024px) and (min-width: 640px) {\n\t.videoPlayer {\n\t\theight: 50vh !important;\n\t}\n\t.videoPlayer-video-info {\n\t\tpadding-left: 0.5rem;\n\t\tpadding-right: 0.5rem;\n\t}\n}\n\n/* Laptops */\n@media screen and (min-width: 1280px) {\n\t.videoPlayer {\n\t\theight: 65vh;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/Components_v2/VideoPlayer/index.css"],"names":[],"mappings":"AAAA;CACC,WAAW;CACX,kBAAkB;CAClB,UAAU;AACX;;AAEA;CACC,mBAAmB;CACnB,YAAY;CACZ,kBAAkB;CAClB,WAAW;CACX,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,YAAY;CACZ,kBAAkB;CAClB,WAAW;CACX,sBAAsB;CACtB,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;AACpB;;AAEA,uBAAuB;AACvB;CACC;EACC,uBAAuB;CACxB;;CAEA;EACC,oBAAoB;EACpB,qBAAqB;CACtB;AACD;;AAEA,SAAS;AACT;CACC;EACC,uBAAuB;CACxB;CACA;EACC,oBAAoB;EACpB,qBAAqB;CACtB;AACD;;AAEA,YAAY;AACZ;CACC;EACC,YAAY;CACb;AACD","sourcesContent":[".videoPlayer-container {\n\twidth: 100%;\n\tposition: relative;\n\tz-index: 0;\n}\n\n.videoPlayer {\n\tobject-fit: contain;\n\tborder: none;\n\tposition: relative;\n\twidth: 100%;\n\tbackground-color: #000;\n\toutline-width: 0px;\n}\n\n.videoPlayer-fullscreen {\n\theight: 100vh;\n\tobject-fit: contain;\n\tborder: none;\n\tposition: relative;\n\twidth: 100%;\n\tbackground-color: #000;\n\toutline-width: 0px;\n}\n\n.videoPlayer-actions {\n\t/* height: 100px; */\n}\n\n/* For Mobile Screens */\n@media screen and (max-width: 640px) {\n\t.videoPlayer {\n\t\theight: 40vh !important;\n\t}\n\n\t.videoPlayer-video-info {\n\t\tpadding-left: 0.5rem;\n\t\tpadding-right: 0.5rem;\n\t}\n}\n\n/* Tabs */\n@media screen and (max-width: 1024px) and (min-width: 640px) {\n\t.videoPlayer {\n\t\theight: 50vh !important;\n\t}\n\t.videoPlayer-video-info {\n\t\tpadding-left: 0.5rem;\n\t\tpadding-right: 0.5rem;\n\t}\n}\n\n/* Laptops */\n@media screen and (min-width: 1280px) {\n\t.videoPlayer {\n\t\theight: 65vh;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5879:
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/Video/index.css ***!
  \*************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".video {\n\tbackground-color: #fff;\n}\n\n.videoVideoPlayer-container {\n\twidth: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/pages/Video/index.css"],"names":[],"mappings":"AAAA;CACC,sBAAsB;AACvB;;AAEA;CACC,WAAW;AACZ","sourcesContent":[".video {\n\tbackground-color: #fff;\n}\n\n.videoVideoPlayer-container {\n\twidth: 100%;\n}\n"],"sourceRoot":""}]);
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


/***/ }),

/***/ 9270:
/*!*****************************!*\
  !*** ./src/assets/flag.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgOTYgOTYwIDk2MCIgd2lkdGg9IjIwIj48cGF0aCBkPSJNMjAwIDkzNlYyNTZoMzQzbDE5IDg2aDIzOHYzNzBINTQ0bC0xOC45MzMtODVIMjYwdjMwOWgtNjBabTMwMC00NTJabTk1IDE2OGgxNDVWNDAySDUxMWwtMTktODZIMjYwdjI1MWgzMTZsMTkgODVaIi8+PC9zdmc+");

/***/ }),

/***/ 5664:
/*!*****************************!*\
  !*** ./src/assets/more.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgOTYgOTYwIDk2MCIgd2lkdGg9IjIwIj48cGF0aCBkPSJNNDgwLjI4MSA5MTUuMjE4cS0yMi41NDIgMC0zOC41Mi0xNS45NjgtMTUuOTc5LTE1Ljk2OC0xNS45NzktMzguMzkxIDAtMjEuODkzIDE1LjkyNy0zOC4yNjcgMTUuOTI3LTE2LjM3NCAzOC4yOTMtMTYuMzc0IDIyLjgyNCAwIDM4LjUyIDE2LjQ0NSAxNS42OTYgMTYuNDQ1IDE1LjY5NiAzOC41MjIgMCAyMi4wNzctMTUuNjk4IDM4LjA1NS0xNS42OTcgMTUuOTc4LTM4LjIzOSAxNS45NzhabTAtMjg1cS0yMi41NDIgMC0zOC41Mi0xNS45MjctMTUuOTc5LTE1LjkyNy0xNS45NzktMzguMjkzIDAtMjIuODI0IDE1LjkyNy0zOC41MiAxNS45MjctMTUuNjk2IDM4LjI5My0xNS42OTYgMjIuODI0IDAgMzguNTIgMTUuNjk4IDE1LjY5NiAxNS42OTcgMTUuNjk2IDM4LjIzOSAwIDIyLjU0Mi0xNS42OTggMzguNTItMTUuNjk3IDE1Ljk3OS0zOC4yMzkgMTUuOTc5Wm0wLTI4NC40MzZxLTIyLjU0MiAwLTM4LjUyLTE2LjE0LTE1Ljk3OS0xNi4xNC0xNS45NzktMzguODA0IDAtMjIuNjY1IDE1LjkyNy0zOC42NDMgMTUuOTI3LTE1Ljk3OSAzOC4yOTMtMTUuOTc5IDIyLjgyNCAwIDM4LjUyIDE2LjEyIDE1LjY5NiAxNi4xMiAxNS42OTYgMzguNzg1IDAgMjIuNjY1LTE1LjY5OCAzOC42NjMtMTUuNjk3IDE1Ljk5OC0zOC4yMzkgMTUuOTk4WiIvPjwvc3ZnPg==");

/***/ }),

/***/ 6825:
/*!******************************!*\
  !*** ./src/assets/share.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMjAiIHdpZHRoPSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQsNVY5QzcsMTAgNCwxNSAzLDIwQzUuNSwxNi41IDksMTQuOSAxNCwxNC45VjE5TDIxLDEyTDE0LDVNMTYsOS44M0wxOC4xNywxMkwxNiwxNC4xN1YxMi45SDE0QzExLjkzLDEyLjkgMTAuMDcsMTMuMjggOC4zNCwxMy44NUM5Ljc0LDEyLjQ2IDExLjU0LDExLjM3IDE0LjI4LDExTDE2LDEwLjczVjkuODNaIi8+PC9zdmc+");

/***/ }),

/***/ 885:
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slicedToArray)
});

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

/***/ })

}]);
//# sourceMappingURL=src_pages_Video_index_js-08fc96a979674ffdd8d6.js.map