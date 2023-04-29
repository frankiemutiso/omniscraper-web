"use strict";
(self["webpackChunkomniscraper_frontend"] = self["webpackChunkomniscraper_frontend"] || []).push([["main"],{

/***/ 1725:
/*!*****************************************************************!*\
  !*** ./src/components/reusableComponents/Button.js + 1 modules ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_reusableComponents_Button)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/Button.css
var Button = __webpack_require__(1161);
;// CONCATENATED MODULE: ./src/components/reusableComponents/Button.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(Button["default"], options);



/* harmony default export */ const reusableComponents_Button = (Button["default"].locals || {});
;// CONCATENATED MODULE: ./src/components/reusableComponents/Button.js


var _excluded = ["children", "type", "href", "endIcon", "startIcon"];



// Button Types: default, outlined, icon Button

function Button_Button(props) {
  var children = props.children,
    type = props.type,
    href = props.href,
    endIcon = props.endIcon,
    startIcon = props.startIcon,
    restProps = (0,objectWithoutProperties["default"])(props, _excluded);
  return /*#__PURE__*/react.createElement("div", {
    className: "button__ring"
  }, href ? /*#__PURE__*/react.createElement("a", (0,esm_extends["default"])({
    href: href,
    className: type === 'icon' ? 'button__icon' : type === 'outlined' ? 'button__outlined' : 'button__default'
  }, restProps), startIcon && /*#__PURE__*/react.createElement("span", {
    className: "button__start-icon"
  }, startIcon), children, endIcon && /*#__PURE__*/react.createElement("span", {
    className: "button__end-icon"
  }, endIcon)) : /*#__PURE__*/react.createElement("button", (0,esm_extends["default"])({
    type: "submit",
    className: type === 'icon' ? 'button__icon' : type === 'outlined' ? 'button__outlined' : 'button__default'
  }, restProps), startIcon && /*#__PURE__*/react.createElement("span", {
    className: "button__start-icon"
  }, startIcon), children, endIcon && /*#__PURE__*/react.createElement("span", {
    className: "button__end-icon"
  }, endIcon)));
}
/* harmony default export */ const components_reusableComponents_Button = (Button_Button);

/***/ }),

/***/ 1198:
/*!********************************************************************!*\
  !*** ./src/components/reusableComponents/MediaCard.js + 4 modules ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_reusableComponents_MediaCard)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/PlayArrow.js
var PlayArrow = __webpack_require__(655);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/MediaCard.css
var MediaCard = __webpack_require__(7907);
;// CONCATENATED MODULE: ./src/components/reusableComponents/MediaCard.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(MediaCard["default"], options);



/* harmony default export */ const reusableComponents_MediaCard = (MediaCard["default"].locals || {});
;// CONCATENATED MODULE: ./src/assets/broken-image.png
/* harmony default export */ const broken_image = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAANCElEQVR42u3dW4ykZZnA8f8rchrUBY0o8SwEUARnVW5cdZ3B00aN0eyqF5IYYWK81UiMJOsh0RujMV6tRzZixAN4wsQTMCZyhTfGXVEUUAdkDijgWWP08aLqHWva7p7q7qp63u97/7+kYzJg91Mv9fzr6+qaLpAkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkScdTsgfYrogowIXAHuBi4DzgCcAu4LTs+TRKv59+HABuA24B9gP/X0qJ7OG2Y3ABiIjHAPuAS4EnZ88jAXcAVwMfLaXckz3MVgwmABHxaOCdwOuBk7PnkdbxZ+ATwLtKKYezh5lH8wGYXuq/CXgv8C/Z80hzeAB4G/CR1r81aDoAEXEGcBXwiuxZpG34IvCGUsoD2YNspNkARMRZwNeBi7JnkXbgVuDFpZS7swdZT5MBmD7RdzPwxOxZpAX4KfCcFp8gfFD2AGtNL/u/gcuv8XgS8PWIaO45rKYCMH3C7+PABdmzSAt2IXD19D7ejKYCwOTZ/ldmDyEtycuZvIalGc3UKCIeBfwIOD17FmmJ7gfOL6UcyR4E2roCeBcuv8bvDOAd2UNUTVwBTH/kdydwSvYs0gr8GXhyCz8VaOUK4I24/OrHycDl2UNAA1cA02dFfwKcnT2LtEK3A+dmv1S4hSuAC3H51Z9zgKdmD9FCAPZmDyAlSb/vtxCAZ2UPICVJv++3EIDzsweQkqTf91sIwGOzB5CSPC57gBYC8NDsAaQkD8seoIUfA/6thTmkBFFKSX0QbuEKwOVXr9Lv+y0EQFISAyB1zABIHTMAUscMgNQxAyB1zABIHTMAUscMgNQxAyB1zABIHTMAUscMgNQxAyB1zABIHTMAUscMgNQxAyB1zABIHTMAUscMgNQxAyB1zABIHTMAUscMgNQxAyB1zABIHTMAUscMgNQxAyB1zABIHTMAUscMgNQxAyB1zABIHTMAUscMwHDckT3ACN01/eiWARiGm4HdwFuyBxmRu4A9wHOBn2UPk8UAtO9m4D9KKb8rpXwAI7AIdwN7Sil3lFJ+DjyfTiNgANp2dPnrHxiBHTu6/PUPeo6AAWjXPy1/ZQS2rS7/7Wv/wTQCe+gsAgagTRsuf2UEtmzD5a9KKT8DXgj8InvYVTEA7Tnu8ldGYG7HXf5q+u/soZMIGIC2zL38lRE4rkPAi+ZZ/qqU8hM6iYABaMeWl78yAhs6BOwtpfxwq//HXiJgANqw7eWvjMA/2fbyVz1EwADk2/HyV0bgqMPscPmrmQjck32jlqGFAFybPUCibwMvWcTyV9MIXJF9wxLdAzxvEctfTSOwFziYfeMWrYUAvBa4JnuIBDcDLy+l/H7Rn7iU8j76vBI4DLywlPLjRX/iUsptTF4sNKorgfQAlFL+ClxKXxFY2GX/Rjr8dqBe9t+6rC8wDcuovh1IDwAcE4HPZM+yAktf/qqjCCx9+auxRaCJAMDRCLyOcUdgZctfdRCBlS1/NY3AXkYQgZI9wFoRcSLwWeCV2bMs2MqXf1ZEvBl4f/YhLNjKl39WRJwH7AfO2u7nKKWk7mAzVwBVKeUvwGuAL2XPskCpyw+jvBJIXX44+sTgHgb804HmAgBHI/BqxhGB9OWvRhSBI8AlmctfDT0CTQYARhOBZpa/GkEEjjB55P9B9iDVNAKDfJ1AswGAwUegueWvBhyB5pa/KqX8iIFGoHkRcVJEfCmG4zsR8ZDsc5vjXN+cfVBbcDgiLsg+sznO9PyIODjvjcqedzBiOBEYxPLPnOsQInA4Ip6WfVZbONO5I5A966DEJAJfzr43bmJQyz9zri1HYFDLP3Omc0Uge87BiXYjMMjlnznXFiMwyOWfOdOnxHEikD3jIEV7ERj08s+ca0sRGPTyz5zpphHInm+wop0IjGL5Z861hQgciREs/8yZXhQR9653Q7NnG7SYROAriXfUUS3/zLlmRuBIRFyYfQZLONN1I5A91+BFXgRGufwz55oRgVEu/8yZPn1tBLJnGoVpBK53+Rd+rquMwKiXf+ZMj4lA9jyjERGnRMTXVnBH3R8RpyXcvjOTzvWtY13+iHhwRDw44evujohfGoAFi+VfCaQ88s/cYa5MOtdlXglkLf8JEfHpiLg2Jn8FfdVff3dE/HLVX3f0YnIl8I0l3FH3R84j/zMi4lczc6T8ws9YzpVA1vKfOF386nORcyXwjFV/zS5ExMkR8dUF3lGzH/nXGsOVwJGIuCjhNtRH/rU+nxEBLckCI9Da8o8hAvdFxDMTZj8hIq7ZZC4jMCYLiECryz/kCGQt/4kR8YU55jMCYxIRp0bEt0a4/EOMQOvLX6U8J6Al2UYEhrL8Q4rAUJbfCIzRFiIwtOUfQgTui4hnJcx2YkR8cQdnagTGZBqBG0a4/C1H4P6BLn/1WSMwIhGxa4MIDH35W4zA0JffCCxbRJyd8DV3RcRNM/+B90cbL/JZlLeu+rZMb88VMzP8KiL+NWGGZf3quKsj4oSMcx21iDgQEeckfN1dEXFjjOeRf63MK4H7I+eR/6RY7CP/Wp8JrwQWa3qwByLnSuC0GNcj/1pZVwIr/4tLsbpfEPPJ8EpgcWYO9q5IuBJIuL3LfuRfK+VKYMVnuurfGO2VwKKsOdiDEfGU7JmWeFtXvfyjj0DC8lfXhFcCO7fOwY4yAonLX40uApH/eyGNwE5tcLAHI+Kp2bMt8DZmL381mghE/vJXV0VE02+x17RNDvZQjCAC0c7yV4OPQLSz/NVVYQS25zgHO+gIRHvLXw02AtHe8lefCCOwdXMc7CAjEO0ufzW4CES7y18Zga2a82AHFYFof/mrwUQg8t8DYl4fDyMwvy0c7KEYxttDD2X5q7dnn9kcZzqU5a+MwLy2eLBNRyCGt/xVsxGI4S1/ZQTmsY2DPRwNRiCGu/xVcxGI1b/hy6I1H4Gmh9vAmcBN0VAEImI3cAPwiOxZduA9LUUgIk4CrgNelj3LDrwB+EjLEWh2sOOoEUh/B9mRLH/VRAQi4mSGv/zVZTQcgSaHmtOZwI2ZERjZ8lepEZgu/7WMY/mry4APtxiB5gbaorQIjHT5q5QIjHT5q8tpMAJNDbNNNQIre4upkS9/tdIIjOyyfyOXA//TUgSaGWSHVhaBTpa/WkkEZpb/pdk3eAX2MYlAyR4ExhMAgEey5Ah0tvzVUiPQ2fJX+5h8O5AegTEFACYRuGEZzwnE5J1cb6Sv5a/eE0v49WIRcSpwPX0tf7UP+FD2EOkFiohYwqe9F7iklPJ/C5pxN/098q/nylLKexfxiabL/xXgBdk3KlMpJXUHx3YFUNVvB3b89tMu/zEW8u2Ay9+OsQYAJhH4duzg/ehc/nXtKAIuf1vGHACAM4BvbScCLv+mthWBiNiFy9+UsQcAthEBl38uW4qAy9+mHgIA/4jAcd+txuXfkrkiMLP8l2QPrGP1EgCYROCbm0XA5d+WTSPg8retpwDAJlcCLv+OrBuB6fJfj8vfrN4CAHA6kwhcXP/A5V+IYyIws/x7swfTxsb6QqB5PAC8CPgLLv8iXQl8EJd/LtkvBOo5AAD3Tf/34dnnMDJ3ACt/t+chMgC5AZBSZQegx+cAJE0ZAKljBkDqmAGQOmYApI4ZAKljBkDqmAGQOmYApI4ZAKljBkDqmAGQOmYApI4ZAKljBkDqmAGQOmYApI4ZAKljBkDqmAGQOmYApI4ZAKljBkDqmAGQOmYApI4ZAKljBkDqmAGQOmYApI4ZAKljBkDqmAGQOmYApI4ZAKljBkDqmAGQOtZCACJ7AClJ+n2/hQD8MXsAKckfsgdoIQC/zR5ASvKb7AFaCMBd2QNISQ5kD9BCAG7LHkBK8uPsAVoIwHezB5CS3JI9QAsBuCl7AClJ+n2/ZA8AEBG3AedmzyGt0O3AuaWU1B8FtnAFAHBN9gDSin0ye/mhnSuARwN3AqdmzyKtwJ+As0sp92QP0sQVQCnlEPC/2XNIK/KxFpYfGrkCAIiIRwE/BM7InkVaovuB80op92YPAo1cAQCUUg4Db8+eQ1qyK1pZfmjoCqCKiOuAV2XPIS3BtaWU/8oeYlaLATgd+A7wtOxZpAX6PvDcUkr66/9nNRcAgIh4DJMIPCl7FmkB7mSy/E088TermecAZpVSfgH8G/C97FmkHfoB8O8tLj80GgCAUspB4PnAddmzSNv0eeDZpZS7swfZSLMBACil/LqU8p/AG5n8+EQagvuAfaWUV7f2Pf9aTT4HsJ6IOBP4b+Ay4JTseaR1/An4GPDuln7Ut5nBBKCKiLOAfcClwDnZ80hM/l7/p4CPTl/VOhiDC8CsiLgA2AtcDJwHPB54yPRDWrTfTT8OMPlFNrcAN5VSbs0eTJIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkLc/fAaYNUhnapwOBAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTAzLTE4VDA4OjAwOjU5KzAwOjAw8lTlDQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wMy0xOFQwODowMDo1OSswMDowMIMJXbEAAAAASUVORK5CYII=");
// EXTERNAL MODULE: ./node_modules/@mui/styles/makeStyles/makeStyles.js + 20 modules
var makeStyles = __webpack_require__(4290);
;// CONCATENATED MODULE: ./src/components/reusableComponents/ProgressBar.js


var useStyles = (0,makeStyles["default"])(function (theme) {
  return {
    track: {
      background: '#0287FE',
      height: '5px',
      position: 'absolute',
      bottom: 0,
      zIndex: 1
    },
    container: {}
  };
});
function ProgressBar(props) {
  var classes = useStyles();
  return (
    /*#__PURE__*/
    // <div className={classes.container}>
    react.createElement("div", {
      className: classes.track,
      style: props.style
    })
    // </div>
  );
}

/* harmony default export */ const reusableComponents_ProgressBar = (ProgressBar);
;// CONCATENATED MODULE: ./src/components/reusableComponents/TimeBubble.js


var TimeBubble_useStyles = (0,makeStyles["default"])(function (theme) {
  return {
    bubble: {
      background: '#000',
      height: 10,
      position: 'absolute',
      width: 50,
      bottom: 10,
      right: 10,
      zIndex: 1,
      opacity: 0.8,
      padding: 8,
      color: '#fff',
      borderRadius: 3,
      display: 'grid',
      placeItems: 'center',
      fontSize: 12,
      fontFamily: 'inherit',
      paddingBottom: 20,
      paddingTop: 4,
      transition: 'ease 0.25s'
    },
    container: {}
  };
});
function TimeBubble(_ref) {
  var duration = _ref.duration,
    children = _ref.children;
  var classes = TimeBubble_useStyles();
  return /*#__PURE__*/react.createElement("div", {
    className: classes.bubble
  }, children);
}
/* harmony default export */ const reusableComponents_TimeBubble = (TimeBubble);
;// CONCATENATED MODULE: ./src/components/reusableComponents/MediaCard.js


var _excluded = ["type", "alt", "src", "autoPlay", "height", "text", "lapse", "handleClick", "buttons", "view", "device", "play", "displayBottomActions", "playIconSize", "desktopTrending", "handlePlayButtonState", "updateCurrentTime", "progress", "duration", "currentTime", "formatDuration"];






// Media Card Types: image, video

var MediaCard_MediaCard = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var type = props.type,
    alt = props.alt,
    src = props.src,
    autoPlay = props.autoPlay,
    height = props.height,
    text = props.text,
    lapse = props.lapse,
    handleClick = props.handleClick,
    buttons = props.buttons,
    view = props.view,
    device = props.device,
    play = props.play,
    displayBottomActions = props.displayBottomActions,
    playIconSize = props.playIconSize,
    desktopTrending = props.desktopTrending,
    handlePlayButtonState = props.handlePlayButtonState,
    updateCurrentTime = props.updateCurrentTime,
    progress = props.progress,
    duration = props.duration,
    currentTime = props.currentTime,
    formatDuration = props.formatDuration,
    restProps = (0,objectWithoutProperties["default"])(props, _excluded);
  var handleImageError = function handleImageError(evt) {
    evt.target.src = "".concat(broken_image);
  };
  return /*#__PURE__*/react.createElement("div", (0,esm_extends["default"])({}, restProps, {
    className: "media-card"
  }), /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'relative'
    }
  }, type === 'video' ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(reusableComponents_ProgressBar, {
    style: {
      width: "".concat(progress, "%")
    },
    onClick: handleClick
  }), /*#__PURE__*/react.createElement("video", {
    ref: ref && ref,
    autoPlay: autoPlay,
    disablePictureInPicture: true
    // controls
    ,
    controlsList: "nodownload",
    className: desktopTrending ? 'media-card__desktop__trending' : 'media-card__video',
    onContextMenu: function onContextMenu(e) {
      return e.preventDefault();
    },
    onClick: handleClick,
    onPlay: function onPlay() {
      return handlePlayButtonState(true);
    },
    onPause: function onPause() {
      return handlePlayButtonState(false);
    },
    onEnded: function onEnded() {
      return handlePlayButtonState(false);
    },
    onTimeUpdate: updateCurrentTime,
    style: {
      height: height,
      objectFit: view !== 'detail' ? 'cover' : 'contain',
      border: 'none',
      position: 'relative',
      zIndex: 0
    }
  }, /*#__PURE__*/react.createElement("source", {
    src: src,
    type: "video/mp4"
  }))) : /*#__PURE__*/react.createElement("img", {
    ref: ref && ref,
    crossOrigin: "anonymous",
    src: src,
    alt: src
    // height={height}
    ,
    loading: "lazy",
    className: desktopTrending ? 'media-card__desktop__trending' : 'media-card__image',
    onError: handleImageError,
    onContextMenu: function onContextMenu(e) {
      return e.preventDefault();
    },
    onClick: handleClick,
    style: {
      height: height,
      objectFit: device !== 'mobile' ? 'cover' : 'contain',
      border: 'none'
    }
  }), !play && /*#__PURE__*/react.createElement(PlayArrow["default"], {
    style: {
      color: 'white',
      fontSize: playIconSize,
      opacity: 0.8,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      cursor: 'pointer',
      borderRadius: 5
    },
    onClick: handleClick,
    size: "large"
  })), displayBottomActions && /*#__PURE__*/react.createElement("div", {
    className: device === 'mobile' && view === 'detail' ? 'media-card__actions__mobile__detail' : 'media-card__actions'
  }, text && /*#__PURE__*/react.createElement("div", {
    className: "media-card__actions__text-container"
  }, (text === null || text === void 0 ? void 0 : text.length) > 0 && /*#__PURE__*/react.createElement("p", {
    className: "media-card__actions__text"
  }, text)), /*#__PURE__*/react.createElement("div", {
    className: "media-card__actions__bottom"
  }, /*#__PURE__*/react.createElement("p", {
    className: "media-card__actions__text",
    style: {
      marginLeft: 8
    }
  }, lapse), /*#__PURE__*/react.createElement("div", {
    className: "media-card__actions__buttons"
  }, buttons && /*#__PURE__*/react.createElement(react.Fragment, null, buttons)))));
});
/* harmony default export */ const components_reusableComponents_MediaCard = (MediaCard_MediaCard);

/***/ }),

/***/ 5957:
/*!****************************************************************!*\
  !*** ./src/components/reusableComponents/Modal.js + 2 modules ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ reusableComponents_Modal)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(8653);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(7745);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(2962);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(4498);
// EXTERNAL MODULE: ./src/components/reusableComponents/Button.js + 1 modules
var Button = __webpack_require__(1725);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/Spinner.css
var Spinner = __webpack_require__(6015);
;// CONCATENATED MODULE: ./src/components/reusableComponents/Spinner.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(Spinner["default"], options);



/* harmony default export */ const reusableComponents_Spinner = (Spinner["default"].locals || {});
;// CONCATENATED MODULE: ./src/components/reusableComponents/Spinner.js


var _excluded = ["size", "color"];


function Spinner_Spinner(props) {
  var size = props.size,
    color = props.color,
    restProps = (0,objectWithoutProperties["default"])(props, _excluded);
  return /*#__PURE__*/react.createElement("div", (0,esm_extends["default"])({
    className: "spinner",
    style: {
      border: "2px solid #f3f3f3",
      borderTop: "2px solid ".concat(color),
      borderRadius: "50%",
      width: size,
      height: size
    }
  }, restProps));
}
/* harmony default export */ const components_reusableComponents_Spinner = (Spinner_Spinner);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(594);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Autocomplete/Autocomplete.js + 7 modules
var Autocomplete = __webpack_require__(9586);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/CheckBoxOutlineBlank.js
var CheckBoxOutlineBlank = __webpack_require__(4320);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/CheckBox.js
var CheckBox = __webpack_require__(7171);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Checkbox/Checkbox.js + 6 modules
var Checkbox = __webpack_require__(8328);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/TextField/TextField.js + 22 modules
var TextField = __webpack_require__(3283);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Divider/Divider.js
var Divider = __webpack_require__(4373);
;// CONCATENATED MODULE: ./src/components/reusableComponents/Modal.js















var icon = /*#__PURE__*/react.createElement(CheckBoxOutlineBlank["default"], {
  fontSize: "small"
});
var checkedIcon = /*#__PURE__*/react.createElement(CheckBox["default"], {
  fontSize: "small",
  color: "primary"
});
function Modal(props) {
  var title = props.title,
    type = props.type,
    open = props.open,
    videoTags = props.videoTags,
    handleRightButtonClick = props.handleRightButtonClick,
    handleClose = props.handleClose,
    handleChange = props.handleChange,
    isSpinning = props.isSpinning,
    fullScreen = props.fullScreen,
    fullWidth = props.fullWidth,
    description = props.description,
    tagName = props.tagName,
    checkedTags = props.checkedTags;
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Dialog["default"], {
    fullScreen: fullScreen,
    fullWidth: true,
    maxWidth: "sm",
    open: open
  }, /*#__PURE__*/react.createElement(DialogTitle["default"], null, /*#__PURE__*/react.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement("p", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: '0.05px',
      fontSize: 14
    }
  }, title), /*#__PURE__*/react.createElement(Button["default"], {
    type: "icon",
    onClick: handleClose
  }, /*#__PURE__*/react.createElement(Close["default"], null)))), /*#__PURE__*/react.createElement(Divider["default"], null), /*#__PURE__*/react.createElement(DialogContent["default"], null, type === 'report' ? /*#__PURE__*/react.createElement("p", null, "Are you sure you want to report this video?") : type === 'editVideo' ? /*#__PURE__*/react.createElement(Autocomplete["default"], {
    fullWidth: true,
    open: open,
    multiple: true,
    onChange: handleChange,
    options: videoTags,
    disableCloseOnSelect: true,
    filterSelectedOptions: true,
    getOptionLabel: function getOptionLabel(option) {
      return option.tag_name;
    },
    defaultValue: checkedTags,
    renderOption: function renderOption(props, option, _ref) {
      var selected = _ref.selected;
      return /*#__PURE__*/react.createElement("li", (0,esm_extends["default"])({
        key: option.id
      }, props), /*#__PURE__*/react.createElement(Checkbox["default"], {
        icon: icon,
        checkedIcon: checkedIcon,
        style: {
          marginRight: 8
        },
        checked: selected,
        color: "primary"
      }), option.tag_name);
    },
    style: {
      width: '100%',
      height: '52vh'
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/react.createElement(TextField["default"], (0,esm_extends["default"])({}, params, {
        variant: "outlined",
        label: "Tags",
        style: {
          marginTop: 8
        }
      }));
    }
  }) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(TextField["default"], {
    required: true,
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    label: "Tag name",
    name: "tagName",
    onChange: handleChange,
    value: tagName
  }), /*#__PURE__*/react.createElement(TextField["default"], {
    variant: "outlined",
    margin: "normal",
    fullWidth: true,
    label: "Description (optional)",
    multiline: true,
    minRows: 2,
    name: "description",
    onChange: handleChange,
    value: description
  }))), /*#__PURE__*/react.createElement(DialogActions["default"], {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/react.createElement(Button["default"], {
    onClick: handleClose,
    type: "outlined"
  }, "Cancel"), /*#__PURE__*/react.createElement(Button["default"], {
    onClick: handleRightButtonClick,
    endIcon: isSpinning ? /*#__PURE__*/react.createElement(components_reusableComponents_Spinner, {
      size: 12,
      color: "white"
    }) : ''
  }, type === 'report' ? 'Report' : 'Save'))));
}
/* harmony default export */ const reusableComponents_Modal = (Modal);

/***/ }),

/***/ 9155:
/*!**********************************************************************!*\
  !*** ./src/components/reusableComponents/Placeholder.js + 1 modules ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_reusableComponents_Placeholder)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/Placeholder.css
var Placeholder = __webpack_require__(5262);
;// CONCATENATED MODULE: ./src/components/reusableComponents/Placeholder.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(Placeholder["default"], options);



/* harmony default export */ const reusableComponents_Placeholder = (Placeholder["default"].locals || {});
;// CONCATENATED MODULE: ./src/components/reusableComponents/Placeholder.js


var _excluded = ["height", "screen", "device", "loggedIn", "hideTextContainer"];


function Placeholder_Placeholder(props) {
  var height = props.height,
    screen = props.screen,
    device = props.device,
    loggedIn = props.loggedIn,
    hideTextContainer = props.hideTextContainer,
    restProps = (0,objectWithoutProperties["default"])(props, _excluded);
  return /*#__PURE__*/react.createElement("div", (0,esm_extends["default"])({
    className: "placeholder"
  }, restProps), /*#__PURE__*/react.createElement("div", {
    className: "placeholder__media",
    style: {
      height: height
    }
  }), (screen !== "detail" || device !== "mobile") && /*#__PURE__*/react.createElement("div", {
    className: "placeholder__actions"
  }, !hideTextContainer && /*#__PURE__*/react.createElement("div", {
    className: "placeholder__text"
  }, /*#__PURE__*/react.createElement("div", {
    className: "placeholder__text-item"
  }), /*#__PURE__*/react.createElement("div", {
    className: "placeholder__text-item"
  })), /*#__PURE__*/react.createElement("div", {
    className: "placeholder__actions__bottom"
  }, /*#__PURE__*/react.createElement("div", {
    className: "placeholder__time"
  }), /*#__PURE__*/react.createElement("div", {
    className: "placeholder__buttons"
  }, screen === "detail" ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "placeholder__button-rect"
  }), loggedIn && /*#__PURE__*/react.createElement("div", {
    className: "placeholder__button-rect"
  })) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "placeholder__button-circle"
  }), loggedIn && /*#__PURE__*/react.createElement("div", {
    className: "placeholder__button-circle"
  }))))));
}
/* harmony default export */ const components_reusableComponents_Placeholder = (Placeholder_Placeholder);

/***/ }),

/***/ 2797:
/*!***********************************!*\
  !*** ./src/index.js + 20 modules ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 26 modules
var es = __webpack_require__(1399);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 1 modules
var redux = __webpack_require__(7779);
// EXTERNAL MODULE: ./node_modules/redux-thunk/es/index.js
var redux_thunk_es = __webpack_require__(3894);
// EXTERNAL MODULE: ./node_modules/redux-devtools-extension/index.js
var redux_devtools_extension = __webpack_require__(8500);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./src/store/actionTypes/index.js
var actionTypes = __webpack_require__(5443);
;// CONCATENATED MODULE: ./src/store/reducers/flagRequestsReducer.js

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initalState = {
  flagRequestsList: [],
  flagRequestsError: false,
  flagRequestsLoading: false,
  flagRequestLoading: false,
  flagRequestError: false,
  slugFlagRequests: [],
  slugFlagRequestsLoading: false,
  slugFlagRequestsError: false,
  submittingApprovalStatus: false,
  approvalStatusSubmissionError: false
};
var flagRequestReducer = function flagRequestReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case actionTypes.GET_FLAG_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        flagRequestsLoading: true,
        flagRequestsError: false
      });
    case actionTypes.GET_FLAG_REQUEST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        flagRequestsLoading: false,
        flagRequestsError: false,
        flagRequestsList: action.payload
      });
    case actionTypes.GET_FLAG_REQUEST_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        flagRequestsLoading: false,
        flagRequestsError: true
      });
    case actionTypes.POST_FLAG_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        flagRequestLoading: true,
        flagRequestError: false
      });
    case actionTypes.POST_FLAG_REQUEST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        flagRequestLoading: false,
        flagRequestError: false
      });
    case actionTypes.POST_FLAG_REQUEST_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        flagRequestLoading: false,
        flagRequestError: true
      });
    case actionTypes.GET_SLUG_FLAG_REQUESTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        slugFlagRequestsLoading: true,
        slugFlagRequestsError: false
      });
    case actionTypes.GET_SLUG_FLAG_REQUESTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        slugFlagRequests: action.payload,
        slugFlagRequestsLoading: false
      });
    case actionTypes.GET_SLUG_FLAG_REQUESTS_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        slugFlagRequestsError: true,
        slugFlagRequestsLoading: false
      });
    case actionTypes.SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS:
      return _objectSpread(_objectSpread({}, state), {}, {
        submittingApprovalStatus: true,
        approvalStatusSubmissionError: false
      });
    case actionTypes.SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        submittingApprovalStatus: false,
        approvalStatusSubmissionError: false
      });
    case actionTypes.SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        submittingApprovalStatus: false,
        approvalStatusSubmissionError: true
      });
    default:
      return state;
  }
};
/* harmony default export */ const flagRequestsReducer = (flagRequestReducer);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(5785);
;// CONCATENATED MODULE: ./src/store/reducers/videosReducer.js


function videosReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function videosReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? videosReducer_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : videosReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var videosReducer_initalState = {
  videoLoading: false,
  videoError: false,
  videoObject: null,
  flaggingVideo: false,
  flaggingError: false,
  videosLoading: false,
  videos: [],
  videosLoadingError: false
};
var videosReducer = function videosReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : videosReducer_initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case actionTypes.GET_VIDEO:
      return videosReducer_objectSpread(videosReducer_objectSpread({}, state), {}, {
        videoLoading: true,
        videoError: false
      });
    case actionTypes.GET_VIDEO_SUCCESS:
      return videosReducer_objectSpread(videosReducer_objectSpread({}, state), {}, {
        videoLoading: false,
        videoError: false,
        videoObject: action.payload
      });
    case actionTypes.GET_VIDEO_ERROR:
      return videosReducer_objectSpread(videosReducer_objectSpread({}, state), {}, {
        videoLoading: false,
        videoError: true
      });
    case actionTypes.FLAG_VIDEO:
      return videosReducer_objectSpread(videosReducer_objectSpread({}, state), {}, {
        flaggingVideo: true,
        flaggingError: false
      });
    case actionTypes.FLAG_VIDEO_SUCCESS:
      return videosReducer_objectSpread(videosReducer_objectSpread({}, state), {}, {
        flaggingVideo: false,
        flaggingError: false
      });
    case actionTypes.FLAG_VIDEO_ERROR:
      return videosReducer_objectSpread(videosReducer_objectSpread({}, state), {}, {
        flaggingVideo: false,
        flaggingError: true
      });
    case actionTypes.GET_VIDEOS_LIST:
      return videosReducer_objectSpread(videosReducer_objectSpread({}, state), {}, {
        videosLoading: true
      });
    case actionTypes.GET_VIDEOS_LIST_SUCCESS:
      return videosReducer_objectSpread(videosReducer_objectSpread({}, state), {}, {
        videosLoading: true,
        videos: [].concat((0,toConsumableArray["default"])(state.videos), (0,toConsumableArray["default"])(action.videosData.videos)),
        hasMoreVideos: action.videosData.hasMore
      });
    case actionTypes.GET_VIDEOS_LIST_ERROR:
      return videosReducer_objectSpread(videosReducer_objectSpread({}, state), {}, {
        videosLoadingError: true,
        videosLoading: false
      });
    default:
      return state;
  }
};
/* harmony default export */ const reducers_videosReducer = (videosReducer);
;// CONCATENATED MODULE: ./src/store/reducers/index.js



/* harmony default export */ const reducers = ((0,redux.combineReducers)({
  flagRequests: flagRequestsReducer,
  videos: reducers_videosReducer
}));
;// CONCATENATED MODULE: ./src/store/index.js




var store_initalState = {};
var middleware = [redux_thunk_es["default"]];
var store = (0,redux.createStore)(reducers, store_initalState, (0,redux_devtools_extension.composeWithDevTools)(redux.applyMiddleware.apply(void 0, middleware)));
/* harmony default export */ const src_store = (store);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/createTheme.js
var createTheme = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 2 modules
var react_router = __webpack_require__(2573);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/ThemeProvider.js
var ThemeProvider = __webpack_require__(2233);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Toolbar/Toolbar.js + 1 modules
var Toolbar = __webpack_require__(4384);
// EXTERNAL MODULE: ./node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js
var StyledEngineProvider = __webpack_require__(4810);
// EXTERNAL MODULE: ./node_modules/history/createBrowserHistory.js
var createBrowserHistory = __webpack_require__(2827);
var createBrowserHistory_default = /*#__PURE__*/__webpack_require__.n(createBrowserHistory);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./src/utils/axiosInstance.js
var axiosInstance = __webpack_require__(1628);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/AppBar/AppBar.js + 1 modules
var AppBar = __webpack_require__(3421);
;// CONCATENATED MODULE: ./src/assets/omniscraperLogo.png
/* harmony default export */ const omniscraperLogo = (__webpack_require__.p + "906ffc1111c85378935e0d742d100ad1.png");
// EXTERNAL MODULE: ./src/components/reusableComponents/Button.js + 1 modules
var Button = __webpack_require__(1725);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/Nav.css
var Nav = __webpack_require__(2057);
;// CONCATENATED MODULE: ./src/components/Nav.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(Nav["default"], options);



/* harmony default export */ const components_Nav = (Nav["default"].locals || {});
;// CONCATENATED MODULE: ./src/components/Nav.js







var Nav_Nav = function Nav(props) {
  var loggedIn = props.loggedIn,
    handleLogout = props.handleLogout;
  var history = (0,react_router.useHistory)();
  return /*#__PURE__*/react.createElement("div", {
    style: {
      flexGrow: 1
    }
  }, /*#__PURE__*/react.createElement(AppBar["default"], {
    style: {
      backgroundColor: '#000'
    }
  }, /*#__PURE__*/react.createElement(Toolbar["default"], null, /*#__PURE__*/react.createElement("div", {
    style: {
      marginRight: 'auto',
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
      height: 64
    },
    onClick: function onClick() {
      history.push('/');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: omniscraperLogo,
    alt: "Omniscraper Logo",
    className: "logo"
  }), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: -7
    }
  }, /*#__PURE__*/react.createElement("p", {
    variant: "subtitle1",
    style: {
      textTransform: 'uppercase',
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 600,
      letterSpacing: 0.1,
      fontFamily: 'Sora'
    },
    className: "title"
  }, "Omniscraper"), /*#__PURE__*/react.createElement("p", {
    className: "title",
    style: {
      textTransform: 'uppercase',
      fontSize: 8,
      letterSpacing: 0.6,
      fontFamily: 'Sora'
    }
  }, "smart content delivery"))), /*#__PURE__*/react.createElement("div", null, loggedIn && /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("a", {
    href: "/flag-requests",
    style: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: 14,
      marginRight: 16
    }
  }, "Flag requests")), /*#__PURE__*/react.createElement(Button["default"], {
    type: "default",
    onClick: function onClick() {
      return handleLogout();
    }
  }, "Logout"))))));
};
/* harmony default export */ const src_components_Nav = (/*#__PURE__*/react.memo(Nav_Nav));
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(7961);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(5705);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/Textfield.css
var Textfield = __webpack_require__(6040);
;// CONCATENATED MODULE: ./src/components/reusableComponents/Textfield.css

            

var Textfield_options = {};

Textfield_options.insert = "head";
Textfield_options.singleton = false;

var Textfield_update = injectStylesIntoStyleTag_default()(Textfield["default"], Textfield_options);



/* harmony default export */ const reusableComponents_Textfield = (Textfield["default"].locals || {});
;// CONCATENATED MODULE: ./src/components/reusableComponents/Textfield.js


var _excluded = ["type", "required", "value", "placeholder", "autoComplete", "name", "id", "autoFocus", "error"];



// Textfield Types: text, password
function Textfield_Textfield(props) {
  var type = props.type,
    required = props.required,
    value = props.value,
    placeholder = props.placeholder,
    autoComplete = props.autoComplete,
    name = props.name,
    id = props.id,
    autoFocus = props.autoFocus,
    error = props.error,
    restProps = (0,objectWithoutProperties["default"])(props, _excluded);
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", (0,esm_extends["default"])({
    className: error ? "textfield--error" : "textfield",
    type: type
  }, restProps, {
    id: id && id,
    name: name,
    required: required,
    autoFocus: autoFocus,
    value: value,
    placeholder: placeholder && placeholder,
    autoComplete: autoComplete && autoComplete
  })));
}
/* harmony default export */ const components_reusableComponents_Textfield = (Textfield_Textfield);
// EXTERNAL MODULE: ./node_modules/@mui/styles/withStyles/withStyles.js + 1 modules
var withStyles = __webpack_require__(1366);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/LockOutlined.js
var LockOutlined = __webpack_require__(3845);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Visibility.js
var Visibility = __webpack_require__(2961);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/VisibilityOff.js
var VisibilityOff = __webpack_require__(2450);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(5722);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/pages/Login.css
var Login = __webpack_require__(6566);
;// CONCATENATED MODULE: ./src/pages/Login.css

            

var Login_options = {};

Login_options.insert = "head";
Login_options.singleton = false;

var Login_update = injectStylesIntoStyleTag_default()(Login["default"], Login_options);



/* harmony default export */ const pages_Login = (Login["default"].locals || {});
;// CONCATENATED MODULE: ./src/pages/Login.js







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }











var styles = function styles(theme) {
  var _paper;
  return {
    paper: (_paper = {
      padding: 24,
      paddingBottom: 40,
      margin: 'auto',
      width: '40vw'
    }, (0,defineProperty["default"])(_paper, theme.breakpoints.down('md'), {
      width: '80vw'
    }), (0,defineProperty["default"])(_paper, "display", 'flex'), (0,defineProperty["default"])(_paper, "flexDirection", 'column'), (0,defineProperty["default"])(_paper, "justifyContent", 'center'), (0,defineProperty["default"])(_paper, "alignItems", 'center'), _paper),
    avatar: {
      marginTop: theme.spacing(1),
      marginBottom: 8,
      backgroundColor: 'black'
    },
    successAvatar: {
      marginTop: theme.spacing(1),
      marginBottom: 16,
      backgroundColor: '#1DB954'
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1)
    }
  };
};
var Login_Login = /*#__PURE__*/function (_PureComponent) {
  (0,inherits["default"])(Login, _PureComponent);
  var _super = _createSuper(Login);
  function Login() {
    var _this;
    (0,classCallCheck["default"])(this, Login);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "state", {
      showPassword: false
    });
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "handleClickShowPassword", function (event) {
      event.preventDefault();
      _this.setState({
        showPassword: !_this.state.showPassword
      });
    });
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "handleMouseDownPassword", function (event) {
      event.preventDefault();
    });
    return _this;
  }
  (0,createClass["default"])(Login, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var location = this.props.location;
      window.gtag('event', 'page_view', {
        page_title: 'Video',
        page_path: location.pathname + location.search,
        page_location: window.location.href
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        classes = _this$props.classes,
        handleChange = _this$props.handleChange,
        handleSubmit = _this$props.handleSubmit,
        username = _this$props.username,
        password = _this$props.password,
        loginLoading = _this$props.loginLoading,
        error = _this$props.error,
        successfulLogin = _this$props.successfulLogin;
      var showPassword = this.state.showPassword;
      var handleClickShowPassword = this.handleClickShowPassword,
        handleMouseDownPassword = this.handleMouseDownPassword;
      return /*#__PURE__*/react.createElement("div", {
        style: {
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center'
        }
      }, /*#__PURE__*/react.createElement(Paper["default"], {
        elevation: 0,
        className: classes.paper,
        square: true
      }, /*#__PURE__*/react.createElement(Avatar["default"], {
        className: classes.avatar
      }, /*#__PURE__*/react.createElement(LockOutlined["default"], null)), successfulLogin ? /*#__PURE__*/react.createElement("p", {
        className: "login__success-text"
      }, "You have successfully logged in.") : /*#__PURE__*/react.createElement("p", {
        className: "login__error-text"
      }, error), /*#__PURE__*/react.createElement("h4", {
        style: {
          color: '#1a1c20',
          textTransform: 'uppercase',
          fontFamily: 'inherit',
          letterSpacing: '0.1em',
          marginBottom: 8
        }
      }, "Log In To Omniscraper"), /*#__PURE__*/react.createElement("form", {
        className: classes.form,
        noValidate: true,
        onSubmit: handleSubmit
      }, /*#__PURE__*/react.createElement(components_reusableComponents_Textfield, {
        error: error,
        type: "text",
        id: "username",
        placeholder: "Username",
        name: "username",
        value: username,
        required: "required",
        autoComplete: "on",
        autoFocus: true,
        onChange: handleChange,
        style: {
          width: '100%',
          marginBottom: 16
        }
      }), /*#__PURE__*/react.createElement("div", {
        style: {
          position: 'relative'
        }
      }, /*#__PURE__*/react.createElement(components_reusableComponents_Textfield, {
        error: error,
        type: showPassword ? 'text' : 'password',
        id: "password",
        value: password,
        onChange: handleChange,
        placeholder: "Password",
        name: "password",
        required: true,
        autoComplete: "on",
        style: {
          width: '100%',
          marginBottom: 16
        }
      }), /*#__PURE__*/react.createElement(Button["default"], {
        type: "icon",
        onClick: handleClickShowPassword,
        onMouseDown: handleMouseDownPassword,
        style: {
          position: 'absolute',
          top: '15%',
          right: 16
        }
      }, showPassword ? /*#__PURE__*/react.createElement(Visibility["default"], {
        color: "primary",
        style: {
          fontSize: 18
        }
      }) : /*#__PURE__*/react.createElement(VisibilityOff["default"], {
        color: "primary",
        style: {
          fontSize: 18
        }
      }))), /*#__PURE__*/react.createElement(Button["default"], {
        onClick: function onClick() {
          return handleSubmit();
        },
        style: {
          marginTop: 16,
          width: '100%'
        },
        endIcon: loginLoading ? /*#__PURE__*/react.createElement(CircularProgress["default"], {
          size: 12,
          style: {
            color: 'white'
          }
        }) : ''
      }, "Log In"))));
    }
  }]);
  return Login;
}(react.PureComponent);
/* harmony default export */ const src_pages_Login = ((0,withStyles["default"])(styles)(Login_Login));
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/MenuItem/MenuItem.js + 3 modules
var MenuItem = __webpack_require__(5841);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Table/Table.js + 1 modules
var Table = __webpack_require__(3150);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(6140);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(3030);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(8561);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(8736);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/TextField/TextField.js + 22 modules
var TextField = __webpack_require__(3283);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(1647);
// EXTERNAL MODULE: ./src/store/actions/flagRequestsActions.js
var flagRequestsActions = __webpack_require__(3257);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/pages/FlagRequests.css
var FlagRequests = __webpack_require__(7207);
;// CONCATENATED MODULE: ./src/pages/FlagRequests.css

            

var FlagRequests_options = {};

FlagRequests_options.insert = "head";
FlagRequests_options.singleton = false;

var FlagRequests_update = injectStylesIntoStyleTag_default()(FlagRequests["default"], FlagRequests_options);



/* harmony default export */ const pages_FlagRequests = (FlagRequests["default"].locals || {});
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Hidden/Hidden.js + 5 modules
var Hidden = __webpack_require__(5228);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Comment.js
var Comment = __webpack_require__(4603);
// EXTERNAL MODULE: ./src/store/actions/videosActions.js
var videosActions = __webpack_require__(3953);
// EXTERNAL MODULE: ./src/components/reusableComponents/MediaCard.js + 4 modules
var MediaCard = __webpack_require__(1198);
// EXTERNAL MODULE: ./src/components/reusableComponents/Placeholder.js + 1 modules
var Placeholder = __webpack_require__(9155);
// EXTERNAL MODULE: ./src/utils/calculateTimeLapse.js
var calculateTimeLapse = __webpack_require__(128);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/SlugFlagRequests.css
var SlugFlagRequests = __webpack_require__(751);
;// CONCATENATED MODULE: ./src/components/SlugFlagRequests.css

            

var SlugFlagRequests_options = {};

SlugFlagRequests_options.insert = "head";
SlugFlagRequests_options.singleton = false;

var SlugFlagRequests_update = injectStylesIntoStyleTag_default()(SlugFlagRequests["default"], SlugFlagRequests_options);



/* harmony default export */ const components_SlugFlagRequests = (SlugFlagRequests["default"].locals || {});
// EXTERNAL MODULE: ./src/components/reusableComponents/Modal.js + 2 modules
var Modal = __webpack_require__(5957);
;// CONCATENATED MODULE: ./src/components/SlugFlagRequests.js








function SlugFlagRequests_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function SlugFlagRequests_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? SlugFlagRequests_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : SlugFlagRequests_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function SlugFlagRequests_createSuper(Derived) { var hasNativeReflectConstruct = SlugFlagRequests_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn["default"])(this, result); }; }
function SlugFlagRequests_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }













var SlugFlagRequests_styles = function styles(theme) {
  return {
    root: (0,defineProperty["default"])({
      flex: 1,
      margin: 'auto',
      // padding: 16,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      marginTop: 40
    }, theme.breakpoints.down('sm'), {
      marginTop: 8
    })
  };
};
var SlugFlagRequests_SlugFlagRequests = /*#__PURE__*/function (_Component) {
  (0,inherits["default"])(SlugFlagRequests, _Component);
  var _super = SlugFlagRequests_createSuper(SlugFlagRequests);
  function SlugFlagRequests(props) {
    var _this;
    (0,classCallCheck["default"])(this, SlugFlagRequests);
    _this = _super.call(this, props);
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "componentDidMount", /*#__PURE__*/(0,asyncToGenerator["default"])( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getFlagRequestsDetails();
            case 2:
              _context.next = 4;
              return _this.loadVideo();
            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "getFlagRequestsDetails", /*#__PURE__*/(0,asyncToGenerator["default"])( /*#__PURE__*/regenerator_default().mark(function _callee2() {
      var _this$props, getGroupedFlagRequests, slug;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$props = _this.props, getGroupedFlagRequests = _this$props.getGroupedFlagRequests, slug = _this$props.slug;
              _context2.next = 3;
              return getGroupedFlagRequests(slug);
            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "loadVideo", /*#__PURE__*/(0,asyncToGenerator["default"])( /*#__PURE__*/regenerator_default().mark(function _callee3() {
      var _this$props2, getVideo, slug, videoObject;
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this$props2 = _this.props, getVideo = _this$props2.getVideo, slug = _this$props2.slug;
              _context3.next = 3;
              return getVideo(slug);
            case 3:
              videoObject = _this.props.videoObject;
            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "handleVideoPlayState", function (e) {
      var _this$vidRef$current;
      console.log('Current time: ', _this.vidRef.current.currentTime);
      console.log('Duration: ', _this.vidRef.current.duration);
      if ((_this$vidRef$current = _this.vidRef.current) !== null && _this$vidRef$current !== void 0 && _this$vidRef$current.paused) {
        var _this$vidRef$current2;
        _this.setState({
          play: true
        });
        (_this$vidRef$current2 = _this.vidRef.current) === null || _this$vidRef$current2 === void 0 ? void 0 : _this$vidRef$current2.play();
      } else {
        var _this$vidRef$current3;
        _this.setState({
          play: false
        });
        (_this$vidRef$current3 = _this.vidRef.current) === null || _this$vidRef$current3 === void 0 ? void 0 : _this$vidRef$current3.pause();
      }
    });
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "handleFlagRequestsRejection", /*#__PURE__*/function () {
      var _ref4 = (0,asyncToGenerator["default"])( /*#__PURE__*/regenerator_default().mark(function _callee4(video) {
        var submitFlagRequestsApprovalStatus, requestStatus, slug;
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                submitFlagRequestsApprovalStatus = _this.props.submitFlagRequestsApprovalStatus;
                requestStatus = 'Rejected';
                slug = video.slug;
                _context4.next = 5;
                return submitFlagRequestsApprovalStatus(slug, requestStatus);
              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "handleFlagRequestsApproval", /*#__PURE__*/(0,asyncToGenerator["default"])( /*#__PURE__*/regenerator_default().mark(function _callee5() {
      var _this$props3, submitFlagRequestsApprovalStatus, flagVideo, approvalStatusSubmissionError, reportedVideo, flagged, slug, requestStatus;
      return regenerator_default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this$props3 = _this.props, submitFlagRequestsApprovalStatus = _this$props3.submitFlagRequestsApprovalStatus, flagVideo = _this$props3.flagVideo, approvalStatusSubmissionError = _this$props3.approvalStatusSubmissionError;
              reportedVideo = _this.state.reportedVideo;
              flagged = true;
              slug = reportedVideo.slug;
              requestStatus = 'Approved';
              _context5.next = 7;
              return submitFlagRequestsApprovalStatus(slug, requestStatus);
            case 7:
              _context5.next = 9;
              return flagVideo(slug, flagged);
            case 9:
              if (!approvalStatusSubmissionError) {
                _this.closeReportPrompt();
              }
            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "openReportPrompt", function (video) {
      _this.setState({
        reportPromptOpen: true,
        reportedVideo: video
      });
    });
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "closeReportPrompt", function () {
      _this.setState({
        reportPromptOpen: false
      });
    });
    _this.vidRef = /*#__PURE__*/(0,react.createRef)();
    _this.state = {
      play: true,
      reportedVideo: null,
      reportPromptOpen: false
    };
    return _this;
  }
  (0,createClass["default"])(SlugFlagRequests, [{
    key: "render",
    value: function render() {
      var _video$text, _video$text2, _flagRequestsList$fin;
      var _this$props4 = this.props,
        classes = _this$props4.classes,
        videoObject = _this$props4.videoObject,
        videoLoading = _this$props4.videoLoading,
        slugFlagRequests = _this$props4.slugFlagRequests,
        slugFlagRequestsLoading = _this$props4.slugFlagRequestsLoading,
        flagRequestsList = _this$props4.flagRequestsList,
        flaggingVideo = _this$props4.flaggingVideo;
      var handleVideoPlayState = this.handleVideoPlayState,
        handleFlagRequestsRejection = this.handleFlagRequestsRejection,
        handleFlagRequestsApproval = this.handleFlagRequestsApproval,
        closeReportPrompt = this.closeReportPrompt,
        openReportPrompt = this.openReportPrompt;
      var _this$state = this.state,
        play = _this$state.play,
        reportPromptOpen = _this$state.reportPromptOpen,
        reportedVideo = _this$state.reportedVideo;
      var video = videoObject !== null && videoObject;
      var lapse = (0,calculateTimeLapse.calculateTimeSinceSave)(video);
      var indexOfHttps = video.text !== null && ((_video$text = video.text) === null || _video$text === void 0 ? void 0 : _video$text.indexOf('https'));
      var text = video.text !== null && ((_video$text2 = video.text) === null || _video$text2 === void 0 ? void 0 : _video$text2.slice(0, indexOfHttps).trim());
      var requestStatus = flagRequestsList === null || flagRequestsList === void 0 ? void 0 : (_flagRequestsList$fin = flagRequestsList.find(function (x) {
        return x.slug == (videoObject === null || videoObject === void 0 ? void 0 : videoObject.slug);
      })) === null || _flagRequestsList$fin === void 0 ? void 0 : _flagRequestsList$fin.request_status;
      var reportDialog = /*#__PURE__*/react.createElement(Modal["default"], {
        type: "report",
        open: reportPromptOpen,
        handleClose: closeReportPrompt,
        title: "Report?",
        handleRightButtonClick: function handleRightButtonClick() {
          return handleFlagRequestsApproval();
        },
        isSpinning: flaggingVideo
      });
      return /*#__PURE__*/react.createElement("div", {
        className: "slug__flag__requests-container"
      }, reportDialog, /*#__PURE__*/react.createElement("div", {
        className: classes.root
      }, /*#__PURE__*/react.createElement(Hidden["default"], {
        mdDown: true
      }, videoLoading || slugFlagRequestsLoading ? /*#__PURE__*/react.createElement(Placeholder["default"], {
        style: {
          width: '100%'
        },
        height: "61vh",
        view: "detail"
        // loggedIn={loggedIn}
      }) : /*#__PURE__*/react.createElement(MediaCard["default"], {
        view: "detail",
        device: "desktop",
        displayBottomActions: true,
        playIconSize: 60,
        style: {
          width: '100%'
        },
        type: "video",
        height: "60vh",
        src: video.url,
        handleClick: function handleClick(e) {
          handleVideoPlayState(e);
        },
        play: play,
        buttons: requestStatus == 'Pending' && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button["default"], {
          type: "outlined",
          onClick: function onClick() {
            return handleFlagRequestsRejection(video);
          }
        }, "Reject"), /*#__PURE__*/react.createElement(Button["default"], {
          onClick: function onClick() {
            return openReportPrompt(video);
          },
          style: {
            margin: '0 8px'
          }
        }, "Approve")),
        autoPlay: false,
        text: text,
        lapse: lapse,
        ref: this.vidRef
      })), /*#__PURE__*/react.createElement(Hidden["default"], {
        mdUp: true
      }, videoLoading || slugFlagRequestsLoading ? /*#__PURE__*/react.createElement(Placeholder["default"], {
        style: {
          width: '100vw'
        },
        height: "42vh",
        view: "list"
        // loggedIn={loggedIn}
      }) : /*#__PURE__*/react.createElement(MediaCard["default"], {
        displayBottomActions: true,
        playIconSize: 60,
        view: "detail",
        device: "mobile",
        src: video.url,
        play: play,
        handleClick: function handleClick() {
          return handleVideoPlayState();
        },
        autoPlay: false,
        height: "42vh",
        style: {
          width: '100vw'
        },
        ref: this.vidRef,
        type: "video",
        text: text,
        lapse: lapse,
        buttons: requestStatus == 'Pending' && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button["default"], {
          type: "outlined",
          onClick: function onClick() {
            return handleFlagRequestsRejection(video);
          }
        }, "Reject"), /*#__PURE__*/react.createElement(Button["default"], {
          onClick: function onClick() {
            return openReportPrompt(video);
          },
          style: {
            margin: '0 8px'
          }
        }, "Approve"))
      }))), /*#__PURE__*/react.createElement("div", {
        className: "slug__flag__requests-reasons"
      }, /*#__PURE__*/react.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: 8
        }
      }, /*#__PURE__*/react.createElement(Comment["default"], {
        style: {
          margin: '0 8px',
          color: '#423f3e'
        }
      }), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h4", {
        className: "slug__flag__requests-h3"
      }, "Reasons"))), /*#__PURE__*/react.createElement("ul", null, slugFlagRequests.map(function (x) {
        var date = new Date("".concat(x.date_requested));
        var formattedDate = date.toLocaleString();
        return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("li", {
          className: "slug__flag__requests-li"
        }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", {
          className: "slug__flag__requests-reason"
        }, x.flagging_reason)), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", {
          className: "slug__flag__requests-date"
        }, "Requested ", formattedDate))));
      }))));
    }
  }]);
  return SlugFlagRequests;
}(react.Component);
var mapStateToProps = function mapStateToProps(state) {
  return SlugFlagRequests_objectSpread(SlugFlagRequests_objectSpread({}, state.flagRequests), state.videos);
};
var mapDispatchToProps = {
  getGroupedFlagRequests: flagRequestsActions.getGroupedFlagRequests,
  getVideo: videosActions.getVideo,
  submitFlagRequestsApprovalStatus: flagRequestsActions.submitFlagRequestsApprovalStatus,
  flagVideo: videosActions.flagVideo
};
/* harmony default export */ const src_components_SlugFlagRequests = ((0,es.connect)(mapStateToProps, mapDispatchToProps)((0,withStyles["default"])(SlugFlagRequests_styles)(SlugFlagRequests_SlugFlagRequests)));
;// CONCATENATED MODULE: ./src/pages/FlagRequests.js








function FlagRequests_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function FlagRequests_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? FlagRequests_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : FlagRequests_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function FlagRequests_createSuper(Derived) { var hasNativeReflectConstruct = FlagRequests_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn["default"])(this, result); }; }
function FlagRequests_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
















var FlagRequests_styles = function styles() {
  return {};
};
var STATUSES = ['Pending', 'Approved', 'Rejected'];
var FlagRequests_FlagRequests = /*#__PURE__*/function (_Component) {
  (0,inherits["default"])(FlagRequests, _Component);
  var _super = FlagRequests_createSuper(FlagRequests);
  function FlagRequests() {
    var _this;
    (0,classCallCheck["default"])(this, FlagRequests);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "state", {
      slug: '',
      requestStatus: 'Pending'
    });
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "componentDidMount", /*#__PURE__*/(0,asyncToGenerator["default"])( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var _URLSearchParams;
      var slug, requestStatus;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              slug = (_URLSearchParams = new URLSearchParams(_this.props.location.search)) === null || _URLSearchParams === void 0 ? void 0 : _URLSearchParams.get('slug');
              requestStatus = _this.state.requestStatus;
              if (!slug) {
                _context.next = 6;
                break;
              }
              _this.setState({
                slug: slug
              });
              _context.next = 8;
              break;
            case 6:
              _context.next = 8;
              return _this.props.getFlagRequests(requestStatus);
            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "componentDidUpdate", /*#__PURE__*/function () {
      var _ref2 = (0,asyncToGenerator["default"])( /*#__PURE__*/regenerator_default().mark(function _callee2(prevProps, prevState) {
        var requestStatus;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                requestStatus = _this.state.requestStatus;
                if (!(prevState.requestStatus !== requestStatus)) {
                  _context2.next = 4;
                  break;
                }
                _context2.next = 4;
                return _this.props.getFlagRequests(requestStatus);
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "handleSlugFlagRequestsClick", function (slug, requestStatus) {
      var url = new URL(window.location.href);
      url.searchParams.append('slug', slug);
      window.history.pushState({}, '', url);
      _this.setState({
        slug: slug
      });
    });
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "handleChange", function (e) {
      _this.setState({
        requestStatus: e.target.value
      });
    });
    return _this;
  }
  (0,createClass["default"])(FlagRequests, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        flagRequestsList = _this$props.flagRequestsList,
        flagRequestsLoading = _this$props.flagRequestsLoading;
      var handleSlugFlagRequestsClick = this.handleSlugFlagRequestsClick,
        handleChange = this.handleChange;
      var _this$state = this.state,
        slug = _this$state.slug,
        requestStatus = _this$state.requestStatus;
      if (slug && slug.length > 0) {
        return /*#__PURE__*/react.createElement(src_components_SlugFlagRequests, {
          slug: slug
        });
      }
      return /*#__PURE__*/react.createElement("div", {
        className: "flag__requests__container"
      }, /*#__PURE__*/react.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: 16
        }
      }, /*#__PURE__*/react.createElement(TextField["default"], {
        id: "standard-select-currency",
        select: true,
        label: "Request status",
        value: requestStatus,
        onChange: handleChange,
        size: "small",
        style: {
          width: 160
        }
      }, STATUSES.map(function (option) {
        return /*#__PURE__*/react.createElement(MenuItem["default"], {
          key: option,
          value: option
        }, option);
      }))), flagRequestsLoading && /*#__PURE__*/react.createElement("div", {
        className: "flag__requests"
      }, "Loading..."), flagRequestsList.length == 0 && !flagRequestsLoading && /*#__PURE__*/react.createElement("div", {
        className: "flag__requests"
      }, /*#__PURE__*/react.createElement("p", null, "No data to display at the moment.")), flagRequestsList.length > 0 && !flagRequestsLoading && /*#__PURE__*/react.createElement(Paper["default"], {
        variant: "outlined"
      }, /*#__PURE__*/react.createElement(Table["default"], {
        className: "",
        "aria-label": "simple table"
      }, /*#__PURE__*/react.createElement(TableHead["default"], {
        className: "flag__requests-header"
      }, /*#__PURE__*/react.createElement(TableRow["default"], null, /*#__PURE__*/react.createElement(TableCell["default"], null, /*#__PURE__*/react.createElement(Typography["default"], {
        variant: "overline",
        className: "flag__requests-text"
      }, "Slug")), /*#__PURE__*/react.createElement(TableCell["default"], null, /*#__PURE__*/react.createElement(Typography["default"], {
        variant: "overline",
        className: "flag__requests-text"
      }, "Status")), /*#__PURE__*/react.createElement(TableCell["default"], null, /*#__PURE__*/react.createElement(Typography["default"], {
        variant: "overline",
        className: "flag__requests-text"
      }, "Requests")))), /*#__PURE__*/react.createElement(TableBody["default"], null, flagRequestsList === null || flagRequestsList === void 0 ? void 0 : flagRequestsList.map(function (x) {
        return /*#__PURE__*/react.createElement(TableRow["default"], {
          hover: true,
          key: x.slug,
          className: "flag__requests-row",
          onClick: function onClick() {
            return handleSlugFlagRequestsClick(x.slug, x.request_status);
          }
        }, /*#__PURE__*/react.createElement(TableCell["default"], {
          component: "th",
          scope: "row"
        }, x.slug), /*#__PURE__*/react.createElement(TableCell["default"], null, x.request_status), /*#__PURE__*/react.createElement(TableCell["default"], null, x.total));
      })))));
    }
  }]);
  return FlagRequests;
}(react.Component);
var FlagRequests_mapStateToProps = function mapStateToProps(state) {
  return FlagRequests_objectSpread({}, state.flagRequests);
};
var FlagRequests_mapDispatchToProps = {
  getFlagRequests: flagRequestsActions.getFlagRequests,
  getGroupedFlagRequests: flagRequestsActions.getGroupedFlagRequests
};
/* harmony default export */ const src_pages_FlagRequests = ((0,es.connect)(FlagRequests_mapStateToProps, FlagRequests_mapDispatchToProps)((0,withStyles["default"])(FlagRequests_styles)((0,react_router.withRouter)(FlagRequests_FlagRequests))));
;// CONCATENATED MODULE: ./src/components/ProtectedComponent.js


function ProtectedComponent(props) {
  var loggedIn = props.loggedIn,
    children = props.children;
  if (!loggedIn) {
    return /*#__PURE__*/react.createElement(react_router.Redirect, {
      to: ""
    });
  }
  return /*#__PURE__*/react.createElement("div", null, children);
}
/* harmony default export */ const components_ProtectedComponent = (ProtectedComponent);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/DotPulse.css
var DotPulse = __webpack_require__(6947);
;// CONCATENATED MODULE: ./src/components/reusableComponents/DotPulse.css

            

var DotPulse_options = {};

DotPulse_options.insert = "head";
DotPulse_options.singleton = false;

var DotPulse_update = injectStylesIntoStyleTag_default()(DotPulse["default"], DotPulse_options);



/* harmony default export */ const reusableComponents_DotPulse = (DotPulse["default"].locals || {});
;// CONCATENATED MODULE: ./src/components/reusableComponents/DotPulse.js


function DotPulse_DotPulse(props) {
  return /*#__PURE__*/react.createElement("div", {
    className: "dot-pulse"
  });
}
/* harmony default export */ const components_reusableComponents_DotPulse = (DotPulse_DotPulse);
;// CONCATENATED MODULE: ./src/App.js











function App_createSuper(Derived) { var hasNativeReflectConstruct = App_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn["default"])(this, result); }; }
function App_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }














var Video = /*#__PURE__*/react.lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_pages_Video_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Video */ 4535));
});
var Home = /*#__PURE__*/react.lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_pages_Home_Home_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/Home/Home */ 834));
});
var FilteredVideos = /*#__PURE__*/react.lazy(function () {
  return __webpack_require__.e(/*! import() */ "src_pages_FilteredVideos_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/FilteredVideos */ 8755));
});
var theme = (0,createTheme["default"])({
  typography: {
    fontFamily: ['Plus Jakarta Sans', 'Sora'].join(',')
  },
  palette: {
    primary: {
      main: '#0071E3'
    },
    secondary: {
      main: '#FF2626'
    },
    "delete": {
      main: '#cf0000'
    },
    white: {
      main: '#fff'
    }
  }
});
var App_history = createBrowserHistory_default()();
App_history.listen(function (location) {
  window.ga('set', 'page', location.pathname + location.search);
  window.ga('send', 'pageview');
});
var App = /*#__PURE__*/function (_Component) {
  (0,inherits["default"])(App, _Component);
  var _super = App_createSuper(App);
  function App() {
    var _this;
    (0,classCallCheck["default"])(this, App);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "state", {
      username: '',
      password: '',
      loggedIn: typeof window !== 'undefined' ? localStorage.getItem('access_token') ? true : false : null,
      loginLoading: false,
      error: null,
      tagsLoading: false,
      videoTags: [],
      videosLoadingError: false,
      loading: false,
      offset: 0,
      limit: 12,
      videos: [],
      hasMore: true,
      scrollPosition: 0,
      autoplayVideo: false,
      successfulLogin: false,
      trendingVideos: [],
      trendingVideosLoading: false
    });
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "componentDidMount", /*#__PURE__*/(0,asyncToGenerator["default"])( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              window.ga('create', 'UA-190601275-1', 'auto');
              window.ga('send', 'pageview');
              _context.next = 4;
              return _this.loadTags();
            case 4:
              _context.next = 6;
              return _this.loadTrendingVideos();
            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "loadVideos", function () {
      _this.setState({
        loading: true
      }, function () {
        var _this$state = _this.state,
          offset = _this$state.offset,
          limit = _this$state.limit;
        var url = "/api/videos/?limit=".concat(limit, "&offset=").concat(offset);
        axios_default().get(url).then(function (res) {
          var newVideos = res.data.videos;
          var hasMore = res.data.has_more;
          _this.setState({
            hasMore: hasMore,
            loading: false,
            videos: [].concat((0,toConsumableArray["default"])(_this.state.videos), (0,toConsumableArray["default"])(newVideos)),
            offset: offset + limit
          });
        })["catch"](function (err) {
          _this.setState({
            videosLoadingError: err.message,
            loading: false
          });
        });
      });
    });
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "loadTags", function () {
      _this.setState({
        tagsLoading: true
      }, function () {
        var url = '/api/tags/';
        axios_default().get(url).then(function (res) {
          var newTags = res.data.tags;
          _this.setState({
            videoTags: newTags,
            tagsLoading: false
          });
        })["catch"](function (err) {
          _this.setState({
            tagsLoading: false
          });
        });
      });
    });
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "loadTrendingVideos", function () {
      var url = '/api/trending/';
      _this.setState({
        trendingVideosLoading: true
      }, function () {
        axios_default().get(url).then(function (res) {
          var trendingVideos = res.data.trending_videos;
          _this.setState({
            trendingVideos: trendingVideos,
            trendingVideosLoading: false
          });
        })["catch"](function (err) {});
      });
    });
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "handleChange", function (e) {
      _this.setState((0,defineProperty["default"])({}, e.target.name, e.target.value));
    });
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "handleLogin", function (e) {
      var _assertThisInitialize = (0,assertThisInitialized["default"])(_this),
        handleRedirectionDelay = _assertThisInitialize.handleRedirectionDelay;
      var _this$state2 = _this.state,
        username = _this$state2.username,
        password = _this$state2.password;
      e.preventDefault();
      _this.setState({
        loginLoading: true
      }, function () {
        axiosInstance.axiosInstance.post('token/obtain/', {
          username: username,
          password: password
        }).then(function (response) {
          if (response.status === 200) {
            axiosInstance.axiosInstance.defaults.headers.Authorization = 'JWT ' + response.data.access;
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            _this.setState({
              successfulLogin: true,
              loginLoading: false,
              error: null
            }, handleRedirectionDelay());
          } else {
            _this.setState({
              loggedIn: false,
              loginLoading: false,
              username: '',
              password: '',
              error: response.statusText
            });
          }
        })["catch"](function (error) {
          var errorMessage = error.response.data.detail;
          _this.setState({
            loggedIn: false,
            loginLoading: false,
            error: errorMessage
          });
        });
      });
    });
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "handleRedirectionDelay", function () {
      setTimeout(function () {
        return _this.setState({
          username: '',
          password: '',
          error: null,
          loggedIn: true
        });
      }, 2500);
    });
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "handleLogout", function () {
      axiosInstance.axiosInstance.post('blacklist/', {
        refresh_token: localStorage.getItem('refresh_token')
      }).then(function (response) {
        if (response.status === 205) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          axiosInstance.axiosInstance.defaults.headers.Authorization = null;
          _this.setState({
            loggedIn: false
          });
        }
      })["catch"](function (e) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.axiosInstance.defaults.headers.Authorization = null;
        _this.setState({
          loggedIn: false
        });
      });
    });
    (0,defineProperty["default"])((0,assertThisInitialized["default"])(_this), "handleScrollPosition", function () {
      _this.setState({
        autoplayVideo: true,
        scrollPosition: window.pageYOffset
      });
    });
    return _this;
  }
  (0,createClass["default"])(App, [{
    key: "render",
    value: function render() {
      var handleChange = this.handleChange,
        handleLogin = this.handleLogin,
        handleLogout = this.handleLogout,
        loadTags = this.loadTags,
        loadVideos = this.loadVideos,
        handleScrollPosition = this.handleScrollPosition;
      var _this$state3 = this.state,
        username = _this$state3.username,
        password = _this$state3.password,
        error = _this$state3.error,
        loggedIn = _this$state3.loggedIn,
        loginLoading = _this$state3.loginLoading,
        videoTags = _this$state3.videoTags,
        tagsLoading = _this$state3.tagsLoading,
        successfulLogin = _this$state3.successfulLogin,
        videosLoadingError = _this$state3.videosLoadingError,
        loading = _this$state3.loading,
        hasMore = _this$state3.hasMore,
        videos = _this$state3.videos,
        scrollPosition = _this$state3.scrollPosition,
        autoplayVideo = _this$state3.autoplayVideo,
        trendingVideos = _this$state3.trendingVideos,
        trendingVideosLoading = _this$state3.trendingVideosLoading;
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Toolbar["default"], null), /*#__PURE__*/react.createElement(StyledEngineProvider["default"], {
        injectFirst: true
      }, /*#__PURE__*/react.createElement(ThemeProvider["default"], {
        theme: theme
      }, /*#__PURE__*/react.createElement(react_router.Router, {
        history: App_history
      }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(react.Suspense, {
        fallback: /*#__PURE__*/react.createElement("div", {
          style: {
            height: '100vh',
            display: 'grid',
            placeItems: 'center'
          }
        }, /*#__PURE__*/react.createElement(components_reusableComponents_DotPulse, null))
      }, /*#__PURE__*/react.createElement(src_components_Nav, {
        loggedIn: loggedIn,
        handleLogout: handleLogout
      }), /*#__PURE__*/react.createElement(react_router.Switch, null, loggedIn ? /*#__PURE__*/react.createElement(react_router.Redirect, {
        from: "/login",
        to: "/"
      }) : '', /*#__PURE__*/react.createElement(react_router.Route, {
        exact: true,
        path: "/",
        render: function render(props) {
          return /*#__PURE__*/react.createElement(Home, (0,esm_extends["default"])({}, props, {
            // loadVideos={loadVideos}
            scrollPosition: scrollPosition,
            handleScrollPosition: handleScrollPosition
          }));
        }
      }), /*#__PURE__*/react.createElement(react_router.Route, {
        path: "/tags/:slug",
        render: function render(props) {
          return /*#__PURE__*/react.createElement(FilteredVideos, (0,esm_extends["default"])({}, props, {
            videoTags: videoTags,
            loggedIn: loggedIn,
            tagsLoading: tagsLoading,
            loadTags: loadTags,
            scrollPosition: scrollPosition,
            handleScrollPosition: handleScrollPosition
          }));
        }
      }), /*#__PURE__*/react.createElement(react_router.Route, {
        path: "/login",
        render: function render(props) {
          return /*#__PURE__*/react.createElement(src_pages_Login, (0,esm_extends["default"])({}, props, {
            username: username,
            password: password,
            loginLoading: loginLoading,
            error: error,
            handleChange: handleChange,
            handleSubmit: handleLogin,
            successfulLogin: successfulLogin
          }));
        }
      }), /*#__PURE__*/react.createElement(react_router.Route, {
        path: "/flag-requests",
        render: function render() {
          return /*#__PURE__*/react.createElement(components_ProtectedComponent, {
            loggedIn: loggedIn
          }, /*#__PURE__*/react.createElement(src_pages_FlagRequests, null));
        }
      }), /*#__PURE__*/react.createElement(react_router.Route, {
        path: "/:slug",
        render: function render() {
          return /*#__PURE__*/react.createElement(Video, {
            trendingVideosLoading: trendingVideosLoading,
            autoplayVideo: autoplayVideo,
            loggedIn: loggedIn,
            trendingVideos: trendingVideos
          });
        }
      }))))))));
    }
  }]);
  return App;
}(react.Component);
/* harmony default export */ const src_App = (App);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/index.css
var cjs_js_src = __webpack_require__(1424);
;// CONCATENATED MODULE: ./src/index.css

            

var src_options = {};

src_options.insert = "head";
src_options.singleton = false;

var src_update = injectStylesIntoStyleTag_default()(cjs_js_src["default"], src_options);



/* harmony default export */ const src = (cjs_js_src["default"].locals || {});
;// CONCATENATED MODULE: ./src/index.js






react_dom.render( /*#__PURE__*/react.createElement(es.Provider, {
  store: src_store
}, /*#__PURE__*/react.createElement(src_App, null)), document.getElementById('app'));

/***/ }),

/***/ 5443:
/*!****************************************!*\
  !*** ./src/store/actionTypes/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FLAG_VIDEO": () => (/* binding */ FLAG_VIDEO),
/* harmony export */   "FLAG_VIDEO_ERROR": () => (/* binding */ FLAG_VIDEO_ERROR),
/* harmony export */   "FLAG_VIDEO_SUCCESS": () => (/* binding */ FLAG_VIDEO_SUCCESS),
/* harmony export */   "GET_FLAG_REQUEST": () => (/* binding */ GET_FLAG_REQUEST),
/* harmony export */   "GET_FLAG_REQUEST_ERROR": () => (/* binding */ GET_FLAG_REQUEST_ERROR),
/* harmony export */   "GET_FLAG_REQUEST_SUCCESS": () => (/* binding */ GET_FLAG_REQUEST_SUCCESS),
/* harmony export */   "GET_SLUG_FLAG_REQUESTS": () => (/* binding */ GET_SLUG_FLAG_REQUESTS),
/* harmony export */   "GET_SLUG_FLAG_REQUESTS_ERROR": () => (/* binding */ GET_SLUG_FLAG_REQUESTS_ERROR),
/* harmony export */   "GET_SLUG_FLAG_REQUESTS_SUCCESS": () => (/* binding */ GET_SLUG_FLAG_REQUESTS_SUCCESS),
/* harmony export */   "GET_VIDEO": () => (/* binding */ GET_VIDEO),
/* harmony export */   "GET_VIDEOS_LIST": () => (/* binding */ GET_VIDEOS_LIST),
/* harmony export */   "GET_VIDEOS_LIST_ERROR": () => (/* binding */ GET_VIDEOS_LIST_ERROR),
/* harmony export */   "GET_VIDEOS_LIST_SUCCESS": () => (/* binding */ GET_VIDEOS_LIST_SUCCESS),
/* harmony export */   "GET_VIDEO_ERROR": () => (/* binding */ GET_VIDEO_ERROR),
/* harmony export */   "GET_VIDEO_SUCCESS": () => (/* binding */ GET_VIDEO_SUCCESS),
/* harmony export */   "POST_FLAG_REQUEST": () => (/* binding */ POST_FLAG_REQUEST),
/* harmony export */   "POST_FLAG_REQUEST_ERROR": () => (/* binding */ POST_FLAG_REQUEST_ERROR),
/* harmony export */   "POST_FLAG_REQUEST_SUCCESS": () => (/* binding */ POST_FLAG_REQUEST_SUCCESS),
/* harmony export */   "SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS": () => (/* binding */ SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS),
/* harmony export */   "SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_ERROR": () => (/* binding */ SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_ERROR),
/* harmony export */   "SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_SUCCESS": () => (/* binding */ SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_SUCCESS)
/* harmony export */ });
/* unused harmony exports GET_TAGGED_VIDEOS_LIST, GET_TAGGED_VIDEOS_LIST_SUCCESS, GET_TAGGED_VIDEOS_LIST_ERROR */
var GET_FLAG_REQUEST = 'GET_FLAG_REQUEST';
var GET_FLAG_REQUEST_SUCCESS = 'GET_FLAG_REQUEST_SUCCESS';
var GET_FLAG_REQUEST_ERROR = 'GET_FLAG_REQUEST_ERROR';
var POST_FLAG_REQUEST = 'POST_FLAG_REQUEST';
var POST_FLAG_REQUEST_SUCCESS = 'POST_FLAG_REQUEST_SUCCESS';
var POST_FLAG_REQUEST_ERROR = 'POST_FLAG_REQUEST_ERROR';
var GET_SLUG_FLAG_REQUESTS = 'GET_SLUG_FLAG_REQUESTS';
var GET_SLUG_FLAG_REQUESTS_SUCCESS = 'GET_SLUG_FLAG_REQUESTS_SUCCESS';
var GET_SLUG_FLAG_REQUESTS_ERROR = 'GET_SLUG_FLAG_REQUESTS_ERROR';
var SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS = 'SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS';
var SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_SUCCESS = 'SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_SUCCESS';
var SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_ERROR = 'SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_ERROR';
var GET_VIDEO = 'GET_VIDEO';
var GET_VIDEO_SUCCESS = 'GET_VIDEO_SUCCESS';
var GET_VIDEO_ERROR = 'GET_VIDEO_ERROR';
var FLAG_VIDEO = 'FLAG_VIDEO';
var FLAG_VIDEO_SUCCESS = 'FLAG_VIDEO_SUCCESS';
var FLAG_VIDEO_ERROR = 'FLAG_VIDEO_ERROR';
var GET_VIDEOS_LIST = 'GET_VIDEOS_LIST';
var GET_VIDEOS_LIST_SUCCESS = 'GET_VIDEOS_LIST_SUCCESS';
var GET_VIDEOS_LIST_ERROR = 'GET_VIDEOS_LIST_ERROR';
var GET_TAGGED_VIDEOS_LIST = 'GET_TAGGED_VIDEOS_LIST';
var GET_TAGGED_VIDEOS_LIST_SUCCESS = 'GET_TAGGED_VIDEOS_LIST_SUCCESS';
var GET_TAGGED_VIDEOS_LIST_ERROR = 'GET_TAGGED_VIDEOS_LIST_ERROR';

/***/ }),

/***/ 3257:
/*!**************************************************!*\
  !*** ./src/store/actions/flagRequestsActions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFlagRequests": () => (/* binding */ getFlagRequests),
/* harmony export */   "getGroupedFlagRequests": () => (/* binding */ getGroupedFlagRequests),
/* harmony export */   "postFlagRequest": () => (/* binding */ postFlagRequest),
/* harmony export */   "submitFlagRequestsApprovalStatus": () => (/* binding */ submitFlagRequestsApprovalStatus)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 5861);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ 4687);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actionTypes */ 5443);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/axiosInstance */ 1628);




var postFlagRequest = function postFlagRequest(payload) {
  return /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__.POST_FLAG_REQUEST
              });
              try {
                res = _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_3__.axiosInstance.post('flag-requests/', payload);
                if (res.statusText === 'OK') {
                  dispatch({
                    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__.POST_FLAG_REQUEST_SUCCESS,
                    payload: res.data
                  });
                } else {
                  dispatch({
                    type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__.POST_FLAG_REQUEST_ERROR
                  });
                }
              } catch (error) {
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__.POST_FLAG_REQUEST_ERROR
                });
              }
            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getFlagRequests = function getFlagRequests(requestStatus) {
  return /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(dispatch) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__.GET_FLAG_REQUEST
              });
              _context2.prev = 1;
              _context2.next = 4;
              return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_3__.axiosInstance.get("flag-requests/?request_status=".concat(requestStatus));
            case 4:
              res = _context2.sent;
              if (res.statusText === 'OK') {
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__.GET_FLAG_REQUEST_SUCCESS,
                  payload: res.data.flag_requests
                });
              } else {
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__.GET_FLAG_REQUEST_ERROR
                });
              }
              _context2.next = 11;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__.GET_FLAG_REQUEST_ERROR
              });
            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var getGroupedFlagRequests = function getGroupedFlagRequests(slug) {
  return /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(dispatch) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__.GET_SLUG_FLAG_REQUESTS
              });
              _context3.prev = 1;
              _context3.next = 4;
              return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_3__.axiosInstance.get("flag-requests/?slug=".concat(slug));
            case 4:
              res = _context3.sent;
              if (res.statusText == 'OK') {
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__.GET_SLUG_FLAG_REQUESTS_SUCCESS,
                  payload: res.data.flag_requests
                });
              } else {
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__.GET_SLUG_FLAG_REQUESTS_ERROR
                });
              }
              _context3.next = 11;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__.GET_SLUG_FLAG_REQUESTS_ERROR
              });
            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 8]]);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var submitFlagRequestsApprovalStatus = function submitFlagRequestsApprovalStatus(slug, requestStatus) {
  return /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(dispatch) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__.SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS
              });
              _context4.prev = 1;
              _context4.next = 4;
              return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_3__.axiosInstance.patch("flag-requests/?slug=".concat(slug), {
                request_status: requestStatus
              });
            case 4:
              res = _context4.sent;
              if (res.statusText == 'OK') {
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__.SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_SUCCESS
                });
              } else {
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__.SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_ERROR
                });
              }
              _context4.next = 11;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](1);
              dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__.SUBMIT_FLAG_REQUESTS_APPROVAL_STATUS_ERROR
              });
            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 8]]);
    }));
    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ 3953:
/*!********************************************!*\
  !*** ./src/store/actions/videosActions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flagVideo": () => (/* binding */ flagVideo),
/* harmony export */   "getVideo": () => (/* binding */ getVideo),
/* harmony export */   "getVideos": () => (/* binding */ getVideos)
/* harmony export */ });
/* unused harmony export getTaggedVideos */
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 5861);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ 4687);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ 9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var json_bigint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! json-bigint */ 4400);
/* harmony import */ var json_bigint__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(json_bigint__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/axiosInstance */ 1628);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actionTypes */ 5443);






var getVideo = function getVideo(slug) {
  return /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var url, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__.GET_VIDEO
              });
              _context.prev = 1;
              url = "/api/".concat(slug);
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().get(url, {
                transformResponse: function transformResponse(data) {
                  return json_bigint__WEBPACK_IMPORTED_MODULE_3___default().parse(data);
                }
              });
            case 5:
              res = _context.sent;
              if (res.statusText === 'OK') {
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__.GET_VIDEO_SUCCESS,
                  payload: res.data
                });
              } else {
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__.GET_VIDEO_ERROR
                });
              }
              _context.next = 13;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.log('Error: ', _context.t0);
              dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__.GET_VIDEO_ERROR,
                payload: _context.t0.message
              });
            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var flagVideo = function flagVideo(slug, flagged) {
  return /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(dispatch) {
      var url, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__.FLAG_VIDEO
              });
              _context2.prev = 1;
              url = "".concat(slug);
              _context2.next = 5;
              return _utils_axiosInstance__WEBPACK_IMPORTED_MODULE_4__.axiosInstance.patch(url, {
                flagged: flagged
              });
            case 5:
              res = _context2.sent;
              if (res.statusText = 'OK') {
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__.FLAG_VIDEO_SUCCESS
                });
              } else {
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__.FLAG_VIDEO_ERROR
                });
              }
              _context2.next = 12;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__.FLAG_VIDEO_ERROR
              });
            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 9]]);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var getVideos = function getVideos(offset, limit) {
  return /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(dispatch) {
      var url, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__.GET_VIDEOS_LIST
              });
              _context3.prev = 1;
              url = "/api/videos/?limit=".concat(limit, "&offset=").concat(offset);
              _context3.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().get(url);
            case 5:
              res = _context3.sent;
              if (res.statusText === 'OK') {
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__.GET_VIDEOS_LIST_SUCCESS,
                  videosData: res.data
                });
              } else {
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__.GET_VIDEOS_LIST_ERROR
                });
              }
              _context3.next = 12;
              break;
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_5__.GET_VIDEOS_LIST_ERROR
              });
            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 9]]);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var getTaggedVideos = function getTaggedVideos(tag) {
  return /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ 1628:
/*!************************************!*\
  !*** ./src/utils/axiosInstance.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "axiosInstance": () => (/* binding */ axiosInstance)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 4942);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ 9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


// const API_URL =
//   process.env.NODE_ENV === "production"
//     ? process.env.REACT_APP_PROD_API_URL
//     : process.env.REACT_APP_DEV_API_URL;

var baseURL = "/api/";
var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1___default().create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    Authorization: typeof window !== "undefined" ? localStorage.getItem("access_token") ? "JWT ".concat(localStorage.getItem("access_token")) : null : null,
    "Content-Type": "application/json",
    accept: "application/json"
  }
});
axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  var originalRequest = error.config;
  if (localStorage.getItem("refresh_token") && error.response.status === 401 && error.response.statusText === "Unauthorized") {
    var refresh_token = localStorage.getItem("refresh_token");
    return axiosInstance.post("/token/refresh/", {
      refresh: refresh_token
    }).then(function (response) {
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      axiosInstance.defaults.headers["Authorization"] = "JWT " + response.data.access;
      originalRequest.headers["Authorization"] = "JWT " + response.data.access;
      return axiosInstance(originalRequest);
    })["catch"](function (err) {
      return console.log(err);
    });
  }
  return Promise.reject(_objectSpread({}, error));
});

/***/ }),

/***/ 128:
/*!*****************************************!*\
  !*** ./src/utils/calculateTimeLapse.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateTimeSinceSave": () => (/* binding */ calculateTimeSinceSave)
/* harmony export */ });
var calculateTimeSinceSave = function calculateTimeSinceSave(video) {
  var dateNow = Date.parse(new Date());
  var dateSaved = Date.parse(video.date_saved_utc);
  var timeLapse = dateNow - dateSaved;
  if (timeLapse > 0 && timeLapse < 60000) {
    var lapseInSeconds = Math.floor(timeLapse / 1000);
    var lapseInSecondsStr = "".concat(lapseInSeconds, " ").concat(lapseInSeconds === 1 ? 'second' : 'seconds', " ago");
    return lapseInSecondsStr;
  } else if (timeLapse >= 60000 && timeLapse < 3600000) {
    var lapseInMinutes = Math.floor(timeLapse / 60000);
    var lapseInMinutesStr = "".concat(lapseInMinutes, " ").concat(lapseInMinutes === 1 ? 'minute' : 'minutes', " ago");
    return lapseInMinutesStr;
  } else if (timeLapse >= 3600000 && timeLapse < 86400000) {
    var lapseInHours = Math.floor(timeLapse / 3600000);
    var lapseInHoursStr = "".concat(lapseInHours, " ").concat(lapseInHours === 1 ? 'hour' : 'hours', " ago");
    return lapseInHoursStr;
  } else if (timeLapse >= 86400000 && timeLapse < 604800000) {
    var lapseInDays = Math.floor(timeLapse / 86400000);
    var lapseInDaysStr = "".concat(lapseInDays, " ").concat(lapseInDays === 1 ? 'day' : 'days', " ago");
    return lapseInDaysStr;
  } else if (timeLapse >= 604800000 && timeLapse < 2629746000) {
    var lapseInWeeks = Math.floor(timeLapse / 604800000);
    var lapseInWeeksStr = "".concat(lapseInWeeks, " ").concat(lapseInWeeks === 1 ? 'week' : 'weeks', " ago");
    return lapseInWeeksStr;
  } else if (timeLapse >= 2629746000 && timeLapse < 31556952000) {
    var lapseInMonths = Math.floor(timeLapse / 2629746000);
    var lapseInMonthsStr = "".concat(lapseInMonths, " ").concat(lapseInMonths === 1 ? 'month' : 'months', " ago");
    return lapseInMonthsStr;
  } else if (timeLapse >= 31556952000) {
    var lapseInYears = Math.floor(timeLapse / 31556952000);
    var lapseInYearsStr = "".concat(lapseInYears, " ").concat(lapseInYears === 1 ? 'year' : 'years', " ago");
    return lapseInYearsStr;
  }
};

/***/ }),

/***/ 2057:
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Nav.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav__link {\n\ttext-decoration: none;\n\tcolor: #fff;\n\tborder: 1px solid #fff;\n\tbackground-color: #000;\n}\n.title {\n\ttransition: all 0.5s ease;\n}\n\n.title:hover {\n\tcolor: #f5f5f7;\n}\n.toolbarRoot {\n\theight: 64px;\n\tpadding-left: 0;\n}\n.logo {\n\twidth: 60px;\n\tmax-width: 100%;\n\theight: auto;\n\tmargin-left: -16px;\n\tmargin-right: -10px;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Nav.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;CACrB,WAAW;CACX,sBAAsB;CACtB,sBAAsB;AACvB;AACA;CACC,yBAAyB;AAC1B;;AAEA;CACC,cAAc;AACf;AACA;CACC,YAAY;CACZ,eAAe;AAChB;AACA;CACC,WAAW;CACX,eAAe;CACf,YAAY;CACZ,kBAAkB;CAClB,mBAAmB;AACpB","sourcesContent":[".nav__link {\n\ttext-decoration: none;\n\tcolor: #fff;\n\tborder: 1px solid #fff;\n\tbackground-color: #000;\n}\n.title {\n\ttransition: all 0.5s ease;\n}\n\n.title:hover {\n\tcolor: #f5f5f7;\n}\n.toolbarRoot {\n\theight: 64px;\n\tpadding-left: 0;\n}\n.logo {\n\twidth: 60px;\n\tmax-width: 100%;\n\theight: auto;\n\tmargin-left: -16px;\n\tmargin-right: -10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 751:
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/SlugFlagRequests.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".slug__flag__requests-container {\n    width: 70vw;\n    margin: auto;\n\n}\n.slug__flag__requests-reasons {\n    padding-top: 20px;\n    margin: auto;\n    padding-bottom: 80px;\n    width:100%;\n}\n\n.slug__flag__requests-li {\n    list-style: none;\n    width: 100%;\n    position: relative;\n    box-sizing: border-box;\n    text-align: left;\n    padding: 8px;\n    text-decoration: none;\n    border-bottom: 1px solid #c2c2c2;\n}\n\n.slug__flag__requests-li:hover {\n    background-color: #EBEBEB;\n\n}\n\n.slug__flag__requests-h3 {\n    font-weight: 600;\n    line-height: 1.5;\n    letter-spacing: 0.00938em;\n    color: #423f3e;\n    /* margin-top: 12px; */\n}\n\n.slug__flag__requests-reason{\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.5;\n    letter-spacing: 0.00938em;\n}\n\n.slug__flag__requests-date {\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0.00938em;\n    color: #423f3e;\n}\n\n.slug__flag__requests-hr {\n    color: #e0e0e0;\n    background-color: #e0e0e0;\n    margin: 16px 0;\n}\n\n.slug__flag__requests-separator {\n    background-color: #423f3e;\n    border-radius: 50%;\n    height: 2px;\n    width: 2px;\n    margin: 0 4px;\n    line-height: 1.5;\n}\n\n@media (max-width: 1250px) { \n    .slug__flag__requests-container {\n        width: 100vw;\n        margin: auto;\n    \n    }\n\n    .slug__flag__requests-h3 {\n        font-weight: 600;\n        line-height: 1.5;\n        letter-spacing: 0.00938em;\n        color: #423f3e;\n        /* margin-top: 0px;\n        padding: 0 8px; */\n    }\n}", "",{"version":3,"sources":["webpack://./src/components/SlugFlagRequests.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;;AAEhB;AACA;IACI,iBAAiB;IACjB,YAAY;IACZ,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;IAChB,YAAY;IACZ,qBAAqB;IACrB,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;;AAE7B;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI;QACI,YAAY;QACZ,YAAY;;IAEhB;;IAEA;QACI,gBAAgB;QAChB,gBAAgB;QAChB,yBAAyB;QACzB,cAAc;QACd;yBACiB;IACrB;AACJ","sourcesContent":[".slug__flag__requests-container {\n    width: 70vw;\n    margin: auto;\n\n}\n.slug__flag__requests-reasons {\n    padding-top: 20px;\n    margin: auto;\n    padding-bottom: 80px;\n    width:100%;\n}\n\n.slug__flag__requests-li {\n    list-style: none;\n    width: 100%;\n    position: relative;\n    box-sizing: border-box;\n    text-align: left;\n    padding: 8px;\n    text-decoration: none;\n    border-bottom: 1px solid #c2c2c2;\n}\n\n.slug__flag__requests-li:hover {\n    background-color: #EBEBEB;\n\n}\n\n.slug__flag__requests-h3 {\n    font-weight: 600;\n    line-height: 1.5;\n    letter-spacing: 0.00938em;\n    color: #423f3e;\n    /* margin-top: 12px; */\n}\n\n.slug__flag__requests-reason{\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.5;\n    letter-spacing: 0.00938em;\n}\n\n.slug__flag__requests-date {\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0.00938em;\n    color: #423f3e;\n}\n\n.slug__flag__requests-hr {\n    color: #e0e0e0;\n    background-color: #e0e0e0;\n    margin: 16px 0;\n}\n\n.slug__flag__requests-separator {\n    background-color: #423f3e;\n    border-radius: 50%;\n    height: 2px;\n    width: 2px;\n    margin: 0 4px;\n    line-height: 1.5;\n}\n\n@media (max-width: 1250px) { \n    .slug__flag__requests-container {\n        width: 100vw;\n        margin: auto;\n    \n    }\n\n    .slug__flag__requests-h3 {\n        font-weight: 600;\n        line-height: 1.5;\n        letter-spacing: 0.00938em;\n        color: #423f3e;\n        /* margin-top: 0px;\n        padding: 0 8px; */\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1161:
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/Button.css ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, ".button__outlined {\n  padding: 7px 12px;\n  color: #0087fe;\n  background-color: transparent;\n  border: 1px solid #0087fe;\n}\n\n.button__default,\n.button__outlined {\n  border-radius: 4px;\n  outline: none;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.25s ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n\n.button__outlined:hover,\n.button__default:hover,\n.button__link:hover {\n  opacity: 0.8;\n}\n\n.button__default {\n  padding: 8px 12px;\n  color: #fff;\n  background-color: #0087fe;\n  border: none;\n}\n\n.button__icon {\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  /* height: 32px;\n  width: 32px; */\n  padding:8px;\n  transition: 0.25s ease-in-out;\n  background: #e5f3fe;\n  color: #0087fe;\n  text-decoration: none;\n  display:grid;\n  place-items:center;\n  font-size: 0.8125rem;\n\n}\n\n.button__end-icon {\n  padding-left: 8px;\n}\n\n.button__start-icon {\n  padding-right: 8px;\n}\n", "",{"version":3,"sources":["webpack://./src/components/reusableComponents/Button.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,cAAc;EACd,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;EAClB,aAAa;EACb,oBAAoB;EACpB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,6BAA6B;EAC7B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;;;EAGE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,aAAa;EACb;gBACc;EACd,WAAW;EACX,6BAA6B;EAC7B,mBAAmB;EACnB,cAAc;EACd,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;;AAEtB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":[".button__outlined {\n  padding: 7px 12px;\n  color: #0087fe;\n  background-color: transparent;\n  border: 1px solid #0087fe;\n}\n\n.button__default,\n.button__outlined {\n  border-radius: 4px;\n  outline: none;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: 0.25s ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n\n.button__outlined:hover,\n.button__default:hover,\n.button__link:hover {\n  opacity: 0.8;\n}\n\n.button__default {\n  padding: 8px 12px;\n  color: #fff;\n  background-color: #0087fe;\n  border: none;\n}\n\n.button__icon {\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  /* height: 32px;\n  width: 32px; */\n  padding:8px;\n  transition: 0.25s ease-in-out;\n  background: #e5f3fe;\n  color: #0087fe;\n  text-decoration: none;\n  display:grid;\n  place-items:center;\n  font-size: 0.8125rem;\n\n}\n\n.button__end-icon {\n  padding-left: 8px;\n}\n\n.button__start-icon {\n  padding-right: 8px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6947:
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/DotPulse.css ***!
  \**********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, ".dot-pulse {\n\tposition: relative;\n\tleft: -9999px;\n\twidth: 10px;\n\theight: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #185adb;\n\tcolor: #185adb;\n\tbox-shadow: 9999px 0 0 -5px #185adb;\n\tanimation: dotPulse 1.5s infinite linear;\n\tanimation-delay: 0.25s;\n}\n\n.dot-pulse::before,\n.dot-pulse::after {\n\tcontent: '';\n\tdisplay: inline-block;\n\tposition: absolute;\n\ttop: 0;\n\twidth: 10px;\n\theight: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #185adb;\n\tcolor: #185adb;\n}\n\n.dot-pulse::before {\n\tbox-shadow: 9984px 0 0 -5px #185adb;\n\tanimation: dotPulseBefore 1.5s infinite linear;\n\tanimation-delay: 0s;\n}\n\n.dot-pulse::after {\n\tbox-shadow: 10014px 0 0 -5px #185adb;\n\tanimation: dotPulseAfter 1.5s infinite linear;\n\tanimation-delay: 0.5s;\n}\n\n@keyframes dotPulseBefore {\n\t0% {\n\t\tbox-shadow: 9984px 0 0 -5px #185adb;\n\t}\n\t30% {\n\t\tbox-shadow: 9984px 0 0 2px #185adb;\n\t}\n\t60%,\n\t100% {\n\t\tbox-shadow: 9984px 0 0 -5px #185adb;\n\t}\n}\n\n@keyframes dotPulse {\n\t0% {\n\t\tbox-shadow: 9999px 0 0 -5px #185adb;\n\t}\n\t30% {\n\t\tbox-shadow: 9999px 0 0 2px #185adb;\n\t}\n\t60%,\n\t100% {\n\t\tbox-shadow: 9999px 0 0 -5px #185adb;\n\t}\n}\n\n@keyframes dotPulseAfter {\n\t0% {\n\t\tbox-shadow: 10014px 0 0 -5px #185adb;\n\t}\n\t30% {\n\t\tbox-shadow: 10014px 0 0 2px #185adb;\n\t}\n\t60%,\n\t100% {\n\t\tbox-shadow: 10014px 0 0 -5px #185adb;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/components/reusableComponents/DotPulse.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,aAAa;CACb,WAAW;CACX,YAAY;CACZ,kBAAkB;CAClB,yBAAyB;CACzB,cAAc;CACd,mCAAmC;CACnC,wCAAwC;CACxC,sBAAsB;AACvB;;AAEA;;CAEC,WAAW;CACX,qBAAqB;CACrB,kBAAkB;CAClB,MAAM;CACN,WAAW;CACX,YAAY;CACZ,kBAAkB;CAClB,yBAAyB;CACzB,cAAc;AACf;;AAEA;CACC,mCAAmC;CACnC,8CAA8C;CAC9C,mBAAmB;AACpB;;AAEA;CACC,oCAAoC;CACpC,6CAA6C;CAC7C,qBAAqB;AACtB;;AAEA;CACC;EACC,mCAAmC;CACpC;CACA;EACC,kCAAkC;CACnC;CACA;;EAEC,mCAAmC;CACpC;AACD;;AAEA;CACC;EACC,mCAAmC;CACpC;CACA;EACC,kCAAkC;CACnC;CACA;;EAEC,mCAAmC;CACpC;AACD;;AAEA;CACC;EACC,oCAAoC;CACrC;CACA;EACC,mCAAmC;CACpC;CACA;;EAEC,oCAAoC;CACrC;AACD","sourcesContent":[".dot-pulse {\n\tposition: relative;\n\tleft: -9999px;\n\twidth: 10px;\n\theight: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #185adb;\n\tcolor: #185adb;\n\tbox-shadow: 9999px 0 0 -5px #185adb;\n\tanimation: dotPulse 1.5s infinite linear;\n\tanimation-delay: 0.25s;\n}\n\n.dot-pulse::before,\n.dot-pulse::after {\n\tcontent: '';\n\tdisplay: inline-block;\n\tposition: absolute;\n\ttop: 0;\n\twidth: 10px;\n\theight: 10px;\n\tborder-radius: 5px;\n\tbackground-color: #185adb;\n\tcolor: #185adb;\n}\n\n.dot-pulse::before {\n\tbox-shadow: 9984px 0 0 -5px #185adb;\n\tanimation: dotPulseBefore 1.5s infinite linear;\n\tanimation-delay: 0s;\n}\n\n.dot-pulse::after {\n\tbox-shadow: 10014px 0 0 -5px #185adb;\n\tanimation: dotPulseAfter 1.5s infinite linear;\n\tanimation-delay: 0.5s;\n}\n\n@keyframes dotPulseBefore {\n\t0% {\n\t\tbox-shadow: 9984px 0 0 -5px #185adb;\n\t}\n\t30% {\n\t\tbox-shadow: 9984px 0 0 2px #185adb;\n\t}\n\t60%,\n\t100% {\n\t\tbox-shadow: 9984px 0 0 -5px #185adb;\n\t}\n}\n\n@keyframes dotPulse {\n\t0% {\n\t\tbox-shadow: 9999px 0 0 -5px #185adb;\n\t}\n\t30% {\n\t\tbox-shadow: 9999px 0 0 2px #185adb;\n\t}\n\t60%,\n\t100% {\n\t\tbox-shadow: 9999px 0 0 -5px #185adb;\n\t}\n}\n\n@keyframes dotPulseAfter {\n\t0% {\n\t\tbox-shadow: 10014px 0 0 -5px #185adb;\n\t}\n\t30% {\n\t\tbox-shadow: 10014px 0 0 2px #185adb;\n\t}\n\t60%,\n\t100% {\n\t\tbox-shadow: 10014px 0 0 -5px #185adb;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7907:
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/MediaCard.css ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, ".media-card {\n  border: 5px;\n}\n.media-card__video,\n.media-card__image {\n  width: 100%;\n  cursor: pointer;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.media-card__video {\n  background: #fff;\n}\n\n.media-card__desktop__trending {\n  width: 100%;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\nmedia-card__action-area {\n}\n\n.media-card__actions {\n  padding: 8px 4px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background: #ffffff;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.media-card__actions__mobile__detail {\n  padding: 8px 4px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background: #ffffff;\n}\n\n.media-card__actions__text-container {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.media-card__actions__text {\n  font-size: 12px;\n  font-family: inherit;\n  color: #423f3e;\n}\n\n.media-card__actions__text::first-letter {\n  text-transform: uppercase;\n}\n\n.media-card__actions__bottom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 8px;\n}\n\n.media-card__actions__buttons {\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n}\n\n@media screen and (min-width: 411px) {\n  .media-card__actions__text-container {\n    height: 37px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    white-space: initial;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/components/reusableComponents/MediaCard.css"],"names":[],"mappings":"AAAA;EACE,WAAW;AACb;AACA;;EAEE,WAAW;EACX,eAAe;EACf,2BAA2B;EAC3B,4BAA4B;AAC9B;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB;;AAEA;AACA;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,mBAAmB;EACnB,8BAA8B;EAC9B,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE;IACE,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,oBAAoB;IACpB,oBAAoB;IACpB,qBAAqB;IACrB,4BAA4B;EAC9B;AACF","sourcesContent":[".media-card {\n  border: 5px;\n}\n.media-card__video,\n.media-card__image {\n  width: 100%;\n  cursor: pointer;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.media-card__video {\n  background: #fff;\n}\n\n.media-card__desktop__trending {\n  width: 100%;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\nmedia-card__action-area {\n}\n\n.media-card__actions {\n  padding: 8px 4px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background: #ffffff;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.media-card__actions__mobile__detail {\n  padding: 8px 4px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background: #ffffff;\n}\n\n.media-card__actions__text-container {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.media-card__actions__text {\n  font-size: 12px;\n  font-family: inherit;\n  color: #423f3e;\n}\n\n.media-card__actions__text::first-letter {\n  text-transform: uppercase;\n}\n\n.media-card__actions__bottom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 8px;\n}\n\n.media-card__actions__buttons {\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n}\n\n@media screen and (min-width: 411px) {\n  .media-card__actions__text-container {\n    height: 37px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    white-space: initial;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5262:
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/Placeholder.css ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, ".placeholder {\n  background-color: #ffffff;\n  border-radius: 5px;\n}\n\n.placeholder__media {\n  background-color: #e0e0e0;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.placeholder__actions {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 8px 4px;\n}\n.placeholder__text {\n  height: 29px;\n  padding-left: 8px;\n  padding-right: 8px;\n  margin-bottom: 8px;\n}\n.placeholder__text-item {\n  background-color: #e0e0e0;\n  height: 10px;\n  width: 100%;\n  margin-top: 4px;\n}\n.placeholder__actions__bottom {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 8px;\n  align-items: center;\n}\n\n.placeholder__time {\n  height: 10px;\n  width: 80px;\n  margin-right: auto;\n  background-color: #e0e0e0;\n  margin-left: 8px;\n}\n.placeholder__actions {\n  max-height: 90px;\n}\n\n.placeholder__buttons {\n  display: flex;\n  align-items: center;\n}\n\n.placeholder__button {\n  margin-right: 8px;\n  border-radius: 999px;\n  height: 20px;\n  width: 20px;\n  background-color: #e0e0e0;\n}\n.placeholder__button-rect {\n  height: 30px;\n  width: 100px;\n  margin-right: 8px;\n\n  background-color: #e0e0e0;\n  border-radius: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/components/reusableComponents/Placeholder.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,2BAA2B;EAC3B,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;AACA;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;;EAEjB,yBAAyB;EACzB,kBAAkB;AACpB","sourcesContent":[".placeholder {\n  background-color: #ffffff;\n  border-radius: 5px;\n}\n\n.placeholder__media {\n  background-color: #e0e0e0;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.placeholder__actions {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 8px 4px;\n}\n.placeholder__text {\n  height: 29px;\n  padding-left: 8px;\n  padding-right: 8px;\n  margin-bottom: 8px;\n}\n.placeholder__text-item {\n  background-color: #e0e0e0;\n  height: 10px;\n  width: 100%;\n  margin-top: 4px;\n}\n.placeholder__actions__bottom {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 8px;\n  align-items: center;\n}\n\n.placeholder__time {\n  height: 10px;\n  width: 80px;\n  margin-right: auto;\n  background-color: #e0e0e0;\n  margin-left: 8px;\n}\n.placeholder__actions {\n  max-height: 90px;\n}\n\n.placeholder__buttons {\n  display: flex;\n  align-items: center;\n}\n\n.placeholder__button {\n  margin-right: 8px;\n  border-radius: 999px;\n  height: 20px;\n  width: 20px;\n  background-color: #e0e0e0;\n}\n.placeholder__button-rect {\n  height: 30px;\n  width: 100px;\n  margin-right: 8px;\n\n  background-color: #e0e0e0;\n  border-radius: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6015:
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/Spinner.css ***!
  \*********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.spinner {\n  animation: spin 1s linear infinite;\n}\n", "",{"version":3,"sources":["webpack://./src/components/reusableComponents/Spinner.css"],"names":[],"mappings":"AAAA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,kCAAkC;AACpC","sourcesContent":["@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.spinner {\n  animation: spin 1s linear infinite;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6040:
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/Textfield.css ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, ".textfield {\n  outline-color: #0087fe;\n  border-radius: 5px;\n  padding: 16px 16px;\n  border: 1px solid #e0e0e0;\n  font-family: inherit;\n}\n\n.textfield--error {\n  outline-color: #f54f4e;\n  border-radius: 5px;\n  padding: 16px 16px;\n  border: 1px solid #f54f4e;\n  font-family: inherit;\n}\n\n.textfield--success {\n  outline-color: #24bf5f;\n  border-radius: 5px;\n  padding: 16px 16px;\n  border: 1px solid #24bf5f;\n  font-family: inherit;\n}\n", "",{"version":3,"sources":["webpack://./src/components/reusableComponents/Textfield.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,oBAAoB;AACtB","sourcesContent":[".textfield {\n  outline-color: #0087fe;\n  border-radius: 5px;\n  padding: 16px 16px;\n  border: 1px solid #e0e0e0;\n  font-family: inherit;\n}\n\n.textfield--error {\n  outline-color: #f54f4e;\n  border-radius: 5px;\n  padding: 16px 16px;\n  border: 1px solid #f54f4e;\n  font-family: inherit;\n}\n\n.textfield--success {\n  outline-color: #24bf5f;\n  border-radius: 5px;\n  padding: 16px 16px;\n  border: 1px solid #24bf5f;\n  font-family: inherit;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1424:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nhtml,\nbody {\n\tfont-family: 'Plus Jakarta Sans', sans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA,cAAc;AACd,oBAAoB;AACpB,mBAAmB;;AAEnB;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;;CAEC,4CAA4C;CAC5C,mCAAmC;CACnC,kCAAkC;AACnC","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nhtml,\nbody {\n\tfont-family: 'Plus Jakarta Sans', sans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7207:
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/FlagRequests.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".flag__requests {\n    text-align: center;\n}\n\n.flag__requests__container{\n    width:70vw;\n    margin:auto;\n    margin-top: 24px;\n}\n\n.flag__requests-text{\n    font-weight: 600;\n}\n\n.flag__requests-header {\n    background-color: #F7F7F7;\n}\n\n.flag__requests-row {\n    cursor: pointer;\n}\n\n.flag__requests-h3 {\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.00938em;\n    color: #423f3e;\n    margin-bottom: 12px;\n}\n\n@media (max-width: 1250px) { \n    .flag__requests__container{\n        width:90vw;\n        margin:auto;\n        margin-top: 24px;\n    }\n}\n\n", "",{"version":3,"sources":["webpack://./src/pages/FlagRequests.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI;QACI,UAAU;QACV,WAAW;QACX,gBAAgB;IACpB;AACJ","sourcesContent":[".flag__requests {\n    text-align: center;\n}\n\n.flag__requests__container{\n    width:70vw;\n    margin:auto;\n    margin-top: 24px;\n}\n\n.flag__requests-text{\n    font-weight: 600;\n}\n\n.flag__requests-header {\n    background-color: #F7F7F7;\n}\n\n.flag__requests-row {\n    cursor: pointer;\n}\n\n.flag__requests-h3 {\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.00938em;\n    color: #423f3e;\n    margin-bottom: 12px;\n}\n\n@media (max-width: 1250px) { \n    .flag__requests__container{\n        width:90vw;\n        margin:auto;\n        margin-top: 24px;\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6566:
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/Login.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".login__success-text {\n  color: #24bf5f;\n  margin: 8px 0px;\n  font-size: 12px;\n}\n.login__error-text {\n  color: #f54f4e;\n  margin: 8px 0px;\n  font-size: 12px;\n}\n", "",{"version":3,"sources":["webpack://./src/pages/Login.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,eAAe;EACf,eAAe;AACjB;AACA;EACE,cAAc;EACd,eAAe;EACf,eAAe;AACjB","sourcesContent":[".login__success-text {\n  color: #24bf5f;\n  margin: 8px 0px;\n  font-size: 12px;\n}\n.login__error-text {\n  color: #f54f4e;\n  margin: 8px 0px;\n  font-size: 12px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors","vendors-node_modules_mui_icons-material_CheckBox_js-node_modules_mui_icons-material_CheckBoxO-6ea5d1"], () => (__webpack_exec__(2797)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.2f3bf07fd66464181199.js.map