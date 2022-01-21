"use strict";
(self["webpackChunkomniscraper_frontend"] = self["webpackChunkomniscraper_frontend"] || []).push([["src_components_Tags_js"],{

/***/ 3720:
/*!*****************************************************************!*\
  !*** ./node_modules/@mui/material/AppBar/AppBar.js + 1 modules ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AppBar_AppBar)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(7192);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 2 modules
var styled = __webpack_require__(9602);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(9130);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(8216);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(6501);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(8979);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(6087);
;// CONCATENATED MODULE: ./node_modules/@mui/material/AppBar/appBarClasses.js

function getAppBarUtilityClass(slot) {
  return (0,generateUtilityClass.default)('MuiAppBar', slot);
}
const appBarClasses = (0,generateUtilityClasses.default)('MuiAppBar', ['root', 'positionFixed', 'positionAbsolute', 'positionSticky', 'positionStatic', 'positionRelative', 'colorDefault', 'colorPrimary', 'colorSecondary', 'colorInherit', 'colorTransparent']);
/* harmony default export */ const AppBar_appBarClasses = (appBarClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/AppBar/AppBar.js


const _excluded = ["className", "color", "enableColorOnDark", "position"];











const useUtilityClasses = ownerState => {
  const {
    color,
    position,
    classes
  } = ownerState;
  const slots = {
    root: ['root', `color${(0,capitalize.default)(color)}`, `position${(0,capitalize.default)(position)}`]
  };
  return (0,composeClasses.default)(slots, getAppBarUtilityClass, classes);
};

const AppBarRoot = (0,styled.default)(Paper.default, {
  name: 'MuiAppBar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`position${(0,capitalize.default)(ownerState.position)}`], styles[`color${(0,capitalize.default)(ownerState.color)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  const backgroundColorDefault = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
  return (0,esm_extends.default)({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
    // Prevent padding issue with the Modal and fixed positioned AppBar.
    flexShrink: 0
  }, ownerState.position === 'fixed' && {
    position: 'fixed',
    zIndex: theme.zIndex.appBar,
    top: 0,
    left: 'auto',
    right: 0,
    '@media print': {
      // Prevent the app bar to be visible on each printed page.
      position: 'absolute'
    }
  }, ownerState.position === 'absolute' && {
    position: 'absolute',
    zIndex: theme.zIndex.appBar,
    top: 0,
    left: 'auto',
    right: 0
  }, ownerState.position === 'sticky' && {
    // ⚠️ sticky is not supported by IE11.
    position: 'sticky',
    zIndex: theme.zIndex.appBar,
    top: 0,
    left: 'auto',
    right: 0
  }, ownerState.position === 'static' && {
    position: 'static'
  }, ownerState.position === 'relative' && {
    position: 'relative'
  }, ownerState.color === 'default' && {
    backgroundColor: backgroundColorDefault,
    color: theme.palette.getContrastText(backgroundColorDefault)
  }, ownerState.color && ownerState.color !== 'default' && ownerState.color !== 'inherit' && ownerState.color !== 'transparent' && {
    backgroundColor: theme.palette[ownerState.color].main,
    color: theme.palette[ownerState.color].contrastText
  }, ownerState.color === 'inherit' && {
    color: 'inherit'
  }, theme.palette.mode === 'dark' && !ownerState.enableColorOnDark && {
    backgroundColor: null,
    color: null
  }, ownerState.color === 'transparent' && (0,esm_extends.default)({
    backgroundColor: 'transparent',
    color: 'inherit'
  }, theme.palette.mode === 'dark' && {
    backgroundImage: 'none'
  }));
});
const AppBar = /*#__PURE__*/react.forwardRef(function AppBar(inProps, ref) {
  const props = (0,useThemeProps.default)({
    props: inProps,
    name: 'MuiAppBar'
  });

  const {
    className,
    color = 'primary',
    enableColorOnDark = false,
    position = 'fixed'
  } = props,
        other = (0,objectWithoutPropertiesLoose.default)(props, _excluded);

  const ownerState = (0,esm_extends.default)({}, props, {
    color,
    position,
    enableColorOnDark
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(AppBarRoot, (0,esm_extends.default)({
    square: true,
    component: "header",
    ownerState: ownerState,
    elevation: 4,
    className: (0,clsx_m.default)(classes.root, className, position === 'fixed' && 'mui-fixed'),
    ref: ref
  }, other));
});
 true ? AppBar.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types_default()).node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types_default()).object,

  /**
   * @ignore
   */
  className: (prop_types_default()).string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color: prop_types_default().oneOfType([prop_types_default().oneOf(['default', 'inherit', 'primary', 'secondary', 'transparent']), (prop_types_default()).string]),

  /**
   * If true, the `color` prop is applied in dark mode.
   * @default false
   */
  enableColorOnDark: (prop_types_default()).bool,

  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   * @default 'fixed'
   */
  position: prop_types_default().oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object, (prop_types_default()).bool])), (prop_types_default()).func, (prop_types_default()).object])
} : 0;
/* harmony default export */ const AppBar_AppBar = (AppBar);

/***/ }),

/***/ 3124:
/*!****************************************!*\
  !*** ./src/components/HideOnScroll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export HideOnScroll */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var _mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/useScrollTrigger */ 8298);
/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Slide */ 4776);



var HideOnScroll = function HideOnScroll(_ref) {
  var children = _ref.children,
      window = _ref.window;
  var trigger = (0,_mui_material_useScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.default)({
    target: window ? window() : undefined
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Slide__WEBPACK_IMPORTED_MODULE_2__.default, {
    appear: false,
    direction: "down",
    "in": !trigger,
    timeout: {
      enter: 500,
      exit: 500
    }
  }, children);
};

/***/ }),

/***/ 9632:
/*!********************************!*\
  !*** ./src/components/Tags.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 4942);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Chip */ 461);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ 4125);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ 4347);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/AppBar */ 3720);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Toolbar */ 4386);
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/styles/makeStyles */ 4290);
/* harmony import */ var _HideOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HideOnScroll */ 3124);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ 5977);











var styles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__.default)(function (theme) {
  var _toolBarRoot;

  return {
    tags: {
      overflowX: "auto",
      display: "flex",
      alignItems: "center",
      "&::-webkit-scrollbar": {
        width: 0
      }
    },
    toolBarRoot: (_toolBarRoot = {
      paddingRight: 0,
      paddingLeft: 0
    }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolBarRoot, theme.breakpoints.down("sm"), {
      paddingTop: 16
    }), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolBarRoot, "height", 64), _toolBarRoot),
    appBar: {}
  };
});

function Tags(props) {
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
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();
  var tagEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.default, {
    disableScrollLock: true,
    keepMounted: true,
    open: mouseY !== null,
    onClose: handleClose,
    anchorReference: "anchorPosition",
    anchorPosition: mouseY !== null && mouseX !== null ? {
      top: mouseY,
      left: mouseX
    } : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.default, {
    onClick: function onClick() {
      return handleEditTagDialogOpen();
    }
  }, "Edit"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__.default, {
    style: {
      background: "#fff",
      position: "fixed",
      top: 64,
      opacity: 0.95,
      transition: "all 0.5s ease"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__.default, {
    classes: {
      root: classes.toolBarRoot
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classes.tags
  }, loggedIn && tagEditor, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      paddingRight: 16
    }
  }), videoTags.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_9__.default, {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      paddingRight: 16
    }
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tags);

/***/ })

}]);
//# sourceMappingURL=src_components_Tags_js-7edc65f525b44b8925aa.js.map