"use strict";
(self["webpackChunkomniscraper_frontend"] = self["webpackChunkomniscraper_frontend"] || []).push([["src_components_Tags_js"],{

/***/ 1645:
/*!********************************************!*\
  !*** ./src/components/Tags.js + 2 modules ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src_components_Tags)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(3483);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Menu/Menu.js + 8 modules
var Menu = __webpack_require__(102);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/MenuItem/MenuItem.js + 3 modules
var MenuItem = __webpack_require__(5841);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/AppBar/AppBar.js + 1 modules
var AppBar = __webpack_require__(3421);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Toolbar/Toolbar.js + 1 modules
var Toolbar = __webpack_require__(4384);
// EXTERNAL MODULE: ./node_modules/@mui/styles/makeStyles/makeStyles.js + 20 modules
var makeStyles = __webpack_require__(4290);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/useScrollTrigger/useScrollTrigger.js
var useScrollTrigger = __webpack_require__(2971);
// EXTERNAL MODULE: ./node_modules/@mui/material/esm/Slide/Slide.js
var Slide = __webpack_require__(5425);
;// CONCATENATED MODULE: ./src/components/HideOnScroll.js



var HideOnScroll = function HideOnScroll(_ref) {
  var children = _ref.children,
    window = _ref.window;
  var trigger = (0,useScrollTrigger["default"])({
    target: window ? window() : undefined
  });
  return /*#__PURE__*/react.createElement(Slide["default"], {
    appear: false,
    direction: "down",
    "in": !trigger,
    timeout: {
      enter: 500,
      exit: 500
    }
  }, children);
};
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 2 modules
var react_router = __webpack_require__(2573);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/Tags.css
var Tags = __webpack_require__(8268);
;// CONCATENATED MODULE: ./src/components/Tags.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(Tags["default"], options);



/* harmony default export */ const components_Tags = (Tags["default"].locals || {});
;// CONCATENATED MODULE: ./src/components/Tags.js












var styles = (0,makeStyles["default"])(function (theme) {
  var _toolBarRoot;
  return {
    toolBarRoot: (_toolBarRoot = {
      paddingRight: 0,
      paddingLeft: 0
    }, (0,defineProperty["default"])(_toolBarRoot, theme.breakpoints.down("sm"), {
      // paddingTop: 16,
    }), (0,defineProperty["default"])(_toolBarRoot, "height", 64), _toolBarRoot),
    appBar: {}
  };
});
function Tags_Tags(props) {
  var videoTags = props.videoTags,
    clickedTag = props.clickedTag,
    handleEditTagDialogOpen = props.handleEditTagDialogOpen,
    mouseX = props.mouseX,
    mouseY = props.mouseY,
    handleRightClick = props.handleRightClick,
    handleClose = props.handleClose,
    loggedIn = props.loggedIn,
    loading = props.loading,
    handleScrollPosition = props.handleScrollPosition;
  var classes = styles(props);
  var history = (0,react_router.useHistory)();
  var tagEditor = /*#__PURE__*/react.createElement(Menu["default"], {
    disableScrollLock: true,
    keepMounted: true,
    open: mouseY !== null,
    onClose: handleClose,
    anchorReference: "anchorPosition",
    anchorPosition: mouseY !== null && mouseX !== null ? {
      top: mouseY,
      left: mouseX
    } : undefined
  }, /*#__PURE__*/react.createElement(MenuItem["default"], {
    onClick: function onClick() {
      return handleEditTagDialogOpen();
    }
  }, "Edit"));
  return /*#__PURE__*/react.createElement(AppBar["default"], {
    style: {
      background: "#fff",
      position: "fixed",
      top: 64,
      opacity: 0.95,
      transition: "all 0.5s ease"
    }
  }, /*#__PURE__*/react.createElement(Toolbar["default"], {
    classes: {
      root: classes.toolBarRoot
    }
  }, loggedIn && tagEditor, /*#__PURE__*/react.createElement("div", {
    className: "tags"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      paddingRight: 16
    }
  }), videoTags.map(function (tag) {
    return /*#__PURE__*/react.createElement(Chip["default"], {
      onContextMenu: function onContextMenu(e) {
        return handleRightClick(e, tag);
      },
      onClick: function onClick() {
        handleScrollPosition();
        history.push("/tags/".concat(tag.slug));
      },
      key: tag.tag_name,
      label: tag.tag_name,
      disabled: loading,
      clickable: true,
      color: "primary",
      variant: clickedTag === tag.slug ? "default" : "outlined",
      style: {
        marginLeft: 4,
        marginRight: 4,
        fontWeight: 500
      }
    });
  }), /*#__PURE__*/react.createElement("div", {
    style: {
      paddingRight: 16
    }
  }))));
}
/* harmony default export */ const src_components_Tags = (Tags_Tags);

/***/ }),

/***/ 8268:
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Tags.css ***!
  \***********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".tags {\n  overflow-x: auto;\n  display: flex;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none;\n}\n\n.tags::-webkit-scrollbar {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Tags.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,aAAa;EACb,wBAAwB,EAAE,gBAAgB;EAC1C,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf","sourcesContent":[".tags {\n  overflow-x: auto;\n  display: flex;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none;\n}\n\n.tags::-webkit-scrollbar {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=src_components_Tags_js-2aa166a11381308afe95.js.map