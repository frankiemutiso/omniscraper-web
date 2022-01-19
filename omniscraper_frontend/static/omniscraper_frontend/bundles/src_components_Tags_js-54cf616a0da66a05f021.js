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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ 3727);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Chip */ 461);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ 4125);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ 4347);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/AppBar */ 3720);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Toolbar */ 4386);
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/styles/makeStyles */ 4290);
/* harmony import */ var _HideOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HideOnScroll */ 3124);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ 2734);










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
    }, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolBarRoot, theme.breakpoints.down("md"), {
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
      handleScrollPosition = props.handleScrollPosition,
      window = props.window;
  var classes = styles(props);
  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.default)();
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
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
      to: "/tags/".concat(tag.slug),
      onClick: function onClick() {
        return handleScrollPosition();
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

/***/ }),

/***/ 3727:
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ Link)
/* harmony export */ });
/* unused harmony exports BrowserRouter, HashRouter, NavLink */
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ 5977);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ 4578);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ 9731);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ 5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tiny-warning */ 5298);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 7462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ 3366);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tiny-invariant */ 2177);











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_5__.createBrowserHistory)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  BrowserRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    forceRefresh: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    keyLength: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
  };

  BrowserRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_7__.default)(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : 0;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__.default)(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_5__.createHashHistory)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

if (true) {
  HashRouter.propTypes = {
    basename: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
    getUserConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    hashType: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
     true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_7__.default)(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : 0;
  };
}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_5__.createLocation)(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__.default)(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.default)({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", props);
});

if (true) {
  LinkAnchor.displayName = "LinkAnchor";
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__.default)(_ref2, ["component", "replace", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__.__RouterContext.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_8__.default)(false, "You should not use <Link> outside a <Router>") : 0 : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.default)({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(component, props);
  });
});

if (true) {
  var toType = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)]);
  var refType = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    current: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any)
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    replace: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    target: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    to: toType.isRequired
  };
}

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__.default)(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__.__RouterContext.Consumer, null, function (context) {
    !context ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_8__.default)(false, "You should not use <NavLink> outside a <Router>") : 0 : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? (0,react_router__WEBPACK_IMPORTED_MODULE_6__.matchPath)(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.default)({}, styleProp, {}, activeStyle) : styleProp;

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.default)({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Link, props);
  });
});

if (true) {
  NavLink.displayName = "NavLink";
  var ariaCurrentType = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["page", "step", "location", "date", "time", "true"]);
  NavLink.propTypes = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.default)({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    activeStyle: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    exact: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    isActive: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
    location: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
    sensitive: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    strict: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    style: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  });
}


//# sourceMappingURL=react-router-dom.js.map


/***/ })

}]);
//# sourceMappingURL=src_components_Tags_js-54cf616a0da66a05f021.js.map