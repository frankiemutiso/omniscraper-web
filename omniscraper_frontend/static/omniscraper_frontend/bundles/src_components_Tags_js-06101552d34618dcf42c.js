"use strict";
(self["webpackChunkomniscraper_frontend"] = self["webpackChunkomniscraper_frontend"] || []).push([["src_components_Tags_js"],{

/***/ 8550:
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

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(1267);
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
;// CONCATENATED MODULE: ./src/components/Tags.js





function Tags_Tags(_ref) {
  var videoTags = _ref.videoTags,
      clickedTag = _ref.clickedTag;
  return /*#__PURE__*/react.createElement("div", {
    className: "tags"
  }, videoTags.map(function (tag) {
    return /*#__PURE__*/react.createElement(Chip.default, {
      onContextMenu: function onContextMenu(e) {
        return e.preventDefault();
      },
      component: react_router_dom.Link,
      to: "/tags/".concat(tag.slug),
      key: tag.tag_name,
      label: tag.tag_name,
      clickable: true,
      color: "primary",
      variant: clickedTag === tag.slug ? "default" : "outlined",
      style: {
        margin: 5,
        fontWeight: 500
      }
    });
  }));
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
___CSS_LOADER_EXPORT___.push([module.id, ".tags {\r\n  overflow-x: auto;\r\n  display: flex;\r\n}\r\n\r\n.tags::-webkit-scrollbar {\r\n  width: 0;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/Tags.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,QAAQ;AACV","sourcesContent":[".tags {\r\n  overflow-x: auto;\r\n  display: flex;\r\n}\r\n\r\n.tags::-webkit-scrollbar {\r\n  width: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=src_components_Tags_js-06101552d34618dcf42c.js.map