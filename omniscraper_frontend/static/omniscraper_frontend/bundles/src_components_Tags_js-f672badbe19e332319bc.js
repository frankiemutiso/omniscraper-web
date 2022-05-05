"use strict";
(self["webpackChunkomniscraper_frontend"] = self["webpackChunkomniscraper_frontend"] || []).push([["src_components_Tags_js"],{

/***/ 550:
/*!********************************************!*\
  !*** ./src/components/Tags.js + 1 modules ***!
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
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(461);
// EXTERNAL MODULE: ./node_modules/@mui/material/Menu/Menu.js + 8 modules
var Menu = __webpack_require__(453);
// EXTERNAL MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js + 3 modules
var MenuItem = __webpack_require__(1753);
// EXTERNAL MODULE: ./node_modules/@mui/material/AppBar/AppBar.js + 1 modules
var AppBar = __webpack_require__(3720);
// EXTERNAL MODULE: ./node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar = __webpack_require__(4386);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 2 modules
var react_router = __webpack_require__(1203);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/Tags.css
var Tags = __webpack_require__(8268);
;// CONCATENATED MODULE: ./src/components/Tags.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(Tags.default, options);



/* harmony default export */ const components_Tags = (Tags.default.locals || {});
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 26 modules
var es = __webpack_require__(399);
;// CONCATENATED MODULE: ./src/components/Tags.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










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
  var history = (0,react_router.useHistory)();
  var tagEditor = /*#__PURE__*/react.createElement(Menu.default, {
    disableScrollLock: true,
    keepMounted: true,
    open: mouseY !== null,
    onClose: handleClose,
    anchorReference: "anchorPosition",
    anchorPosition: mouseY !== null && mouseX !== null ? {
      top: mouseY,
      left: mouseX
    } : undefined
  }, /*#__PURE__*/react.createElement(MenuItem.default, {
    onClick: function onClick() {
      return handleEditTagDialogOpen();
    }
  }, "Edit"));
  return /*#__PURE__*/react.createElement(AppBar.default, {
    style: {
      background: "#fff",
      position: "fixed",
      top: 64,
      opacity: 0.95,
      transition: "all 0.5s ease"
    }
  }, /*#__PURE__*/react.createElement(Toolbar.default, {
    classes: "toolBarRoot"
  }, loggedIn && tagEditor, /*#__PURE__*/react.createElement("div", {
    className: "tags"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      paddingRight: 16
    }
  }), videoTags.map(function (tag) {
    return /*#__PURE__*/react.createElement(Chip.default, {
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

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread(_objectSpread({}, state.users), state.tags);
};

/* harmony default export */ const src_components_Tags = ((0,es.connect)(mapStateToProps)(Tags_Tags));

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
___CSS_LOADER_EXPORT___.push([module.id, ".tags {\r\n  overflow-x: auto;\r\n  display: flex;\r\n  -ms-overflow-style: none; /* IE and Edge */\r\n  scrollbar-width: none;\r\n}\r\n\r\n.tags::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.toolBarRoot {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n  height: 64;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/Tags.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,aAAa;EACb,wBAAwB,EAAE,gBAAgB;EAC1C,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,UAAU;AACZ","sourcesContent":[".tags {\r\n  overflow-x: auto;\r\n  display: flex;\r\n  -ms-overflow-style: none; /* IE and Edge */\r\n  scrollbar-width: none;\r\n}\r\n\r\n.tags::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.toolBarRoot {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n  height: 64;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=src_components_Tags_js-f672badbe19e332319bc.js.map