(self["webpackChunkomniscraper_frontend"] = self["webpackChunkomniscraper_frontend"] || []).push([["src_pages_Video_js"],{

/***/ 8385:
/*!*************************************************!*\
  !*** ./node_modules/@mui/base/Portal/Portal.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 3935);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ 5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/utils */ 67);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/utils */ 6600);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/utils */ 7960);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/utils */ 338);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/utils */ 9342);





function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */


const Portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Portal(props, ref) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
  const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children) ? children.ref : null, ref);
  (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__.default)(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__.default)(() => {
    if (mountNode && !disablePortal) {
      (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.default)(ref, mountNode);
      return () => {
        (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.default)(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);

  if (disablePortal) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
        ref: handleRef
      });
    }

    return children;
  }

  return mountNode ? /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(children, mountNode) : mountNode;
});
 true ? Portal.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The children to render into the `container`.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),

  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([_mui_utils__WEBPACK_IMPORTED_MODULE_6__.default, (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)]),

  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)
} : 0;

if (true) {
  // eslint-disable-next-line
  Portal['propTypes' + ''] = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_7__.default)(Portal.propTypes);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);

/***/ }),

/***/ 8442:
/*!*********************************************************!*\
  !*** ./node_modules/@mui/base/utils/isHostComponent.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isHostComponent);

/***/ }),

/***/ 3441:
/*!******************************************************!*\
  !*** ./node_modules/@mui/icons-material/Download.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 5318);

__webpack_unused_export__ = ({
  value: true
});
exports.default = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ 4938));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ 5893);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"
}), 'Download');

exports.default = _default;

/***/ }),

/***/ 655:
/*!*******************************************************!*\
  !*** ./node_modules/@mui/icons-material/PlayArrow.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 5318);

__webpack_unused_export__ = ({
  value: true
});
exports.default = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ 4938));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ 5893);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M8 5v14l11-7z"
}), 'PlayArrow');

exports.default = _default;

/***/ }),

/***/ 1359:
/*!***************************************************!*\
  !*** ./node_modules/@mui/icons-material/Share.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 5318);

__webpack_unused_export__ = ({
  value: true
});
exports.default = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ 4938));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ 5893);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
}), 'Share');

exports.default = _default;

/***/ }),

/***/ 5084:
/*!*****************************************************!*\
  !*** ./node_modules/@mui/icons-material/Twitter.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 5318);

__webpack_unused_export__ = ({
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ 7294));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ 4938));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ 5893);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
}), 'Twitter');

exports.default = _default;

/***/ }),

/***/ 4603:
/*!*********************************************************************!*\
  !*** ./node_modules/@mui/material/Backdrop/Backdrop.js + 2 modules ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Backdrop_Backdrop)
});

// UNUSED EXPORTS: backdropClasses

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@mui/base/utils/isHostComponent.js
var isHostComponent = __webpack_require__(8442);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(6087);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(8979);
;// CONCATENATED MODULE: ./node_modules/@mui/base/BackdropUnstyled/backdropUnstyledClasses.js


function getBackdropUtilityClass(slot) {
  return (0,generateUtilityClass.default)('MuiBackdrop', slot);
}
const backdropUnstyledClasses = (0,generateUtilityClasses.default)('MuiBackdrop', ['root', 'invisible']);
/* harmony default export */ const BackdropUnstyled_backdropUnstyledClasses = (backdropUnstyledClasses);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(7192);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@mui/base/BackdropUnstyled/BackdropUnstyled.js


const _excluded = ["classes", "className", "invisible", "component", "components", "componentsProps", "theme"];








const useUtilityClasses = ownerState => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ['root', invisible && 'invisible']
  };
  return (0,composeClasses.default)(slots, getBackdropUtilityClass, classes);
};

const BackdropUnstyled = /*#__PURE__*/react.forwardRef(function BackdropUnstyled(props, ref) {
  const {
    classes: classesProp,
    className,
    invisible = false,
    component = 'div',
    components = {},
    componentsProps = {},

    /* eslint-disable react/prop-types */
    theme
  } = props,
        other = (0,objectWithoutPropertiesLoose.default)(props, _excluded);

  const ownerState = (0,esm_extends.default)({}, props, {
    classes: classesProp,
    invisible
  });

  const classes = useUtilityClasses(ownerState);
  const Root = components.Root || component;
  const rootProps = componentsProps.root || {};
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Root, (0,esm_extends.default)({
    "aria-hidden": true
  }, rootProps, !(0,isHostComponent.default)(Root) && {
    as: component,
    ownerState: (0,esm_extends.default)({}, ownerState, rootProps.ownerState),
    theme
  }, {
    ref: ref
  }, other, {
    className: (0,clsx_m.default)(classes.root, rootProps.className, className)
  }));
});
 true ? BackdropUnstyled.propTypes
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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types_default()).elementType,

  /**
   * The components used for each slot inside the Backdrop.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: prop_types_default().shape({
    Root: (prop_types_default()).elementType
  }),

  /**
   * The props used for each slot inside the Backdrop.
   * @default {}
   */
  componentsProps: (prop_types_default()).object,

  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: (prop_types_default()).bool
} : 0;
/* harmony default export */ const BackdropUnstyled_BackdropUnstyled = (BackdropUnstyled);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 7 modules
var styled = __webpack_require__(1861);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(9130);
// EXTERNAL MODULE: ./node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(6628);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Backdrop/Backdrop.js


const Backdrop_excluded = ["children", "components", "componentsProps", "className", "invisible", "open", "transitionDuration", "TransitionComponent"];








const backdropClasses = BackdropUnstyled_backdropUnstyledClasses;

const extendUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  return classes;
};

const BackdropRoot = (0,styled.default)('div', {
  name: 'MuiBackdrop',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.invisible && styles.invisible];
  }
})(({
  ownerState
}) => (0,esm_extends.default)({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  WebkitTapHighlightColor: 'transparent'
}, ownerState.invisible && {
  backgroundColor: 'transparent'
}));
const Backdrop = /*#__PURE__*/react.forwardRef(function Backdrop(inProps, ref) {
  var _componentsProps$root;

  const props = (0,useThemeProps.default)({
    props: inProps,
    name: 'MuiBackdrop'
  });

  const {
    children,
    components = {},
    componentsProps = {},
    className,
    invisible = false,
    open,
    transitionDuration,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Fade.default
  } = props,
        other = (0,objectWithoutPropertiesLoose.default)(props, Backdrop_excluded);

  const ownerState = (0,esm_extends.default)({}, props, {
    invisible
  });

  const classes = extendUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionComponent, (0,esm_extends.default)({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(BackdropUnstyled_BackdropUnstyled, {
      className: className,
      invisible: invisible,
      components: (0,esm_extends.default)({
        Root: BackdropRoot
      }, components),
      componentsProps: {
        root: (0,esm_extends.default)({}, componentsProps.root, (!components.Root || !(0,isHostComponent.default)(components.Root)) && {
          ownerState: (0,esm_extends.default)({}, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.ownerState)
        })
      },
      classes: classes,
      ref: ref,
      children: children
    })
  }));
});
 true ? Backdrop.propTypes
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
   * The components used for each slot inside the Backdrop.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: prop_types_default().shape({
    Root: (prop_types_default()).elementType
  }),

  /**
   * The props used for each slot inside the Backdrop.
   * @default {}
   */
  componentsProps: (prop_types_default()).object,

  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: (prop_types_default()).bool,

  /**
   * If `true`, the component is shown.
   */
  open: (prop_types_default()).bool.isRequired,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object, (prop_types_default()).bool])), (prop_types_default()).func, (prop_types_default()).object]),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().shape({
    appear: (prop_types_default()).number,
    enter: (prop_types_default()).number,
    exit: (prop_types_default()).number
  })])
} : 0;
/* harmony default export */ const Backdrop_Backdrop = (Backdrop);

/***/ }),

/***/ 7750:
/*!*******************************************************************************!*\
  !*** ./node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DialogContent_DialogContent)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 7 modules
var styled = __webpack_require__(1861);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(9130);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(8979);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(6087);
;// CONCATENATED MODULE: ./node_modules/@mui/material/DialogContent/dialogContentClasses.js

function getDialogContentUtilityClass(slot) {
  return (0,generateUtilityClass.default)('MuiDialogContent', slot);
}
const dialogContentClasses = (0,generateUtilityClasses.default)('MuiDialogContent', ['root', 'dividers']);
/* harmony default export */ const DialogContent_dialogContentClasses = (dialogContentClasses);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogTitle/dialogTitleClasses.js
var dialogTitleClasses = __webpack_require__(4472);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/DialogContent/DialogContent.js


const _excluded = ["className", "dividers"];










const useUtilityClasses = ownerState => {
  const {
    classes,
    dividers
  } = ownerState;
  const slots = {
    root: ['root', dividers && 'dividers']
  };
  return (0,composeClasses.default)(slots, getDialogContentUtilityClass, classes);
};

const DialogContentRoot = (0,styled.default)('div', {
  name: 'MuiDialogContent',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.dividers && styles.dividers];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends.default)({
  flex: '1 1 auto',
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: 'touch',
  overflowY: 'auto',
  padding: '20px 24px'
}, ownerState.dividers ? {
  padding: '16px 24px',
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`
} : {
  [`.${dialogTitleClasses.default.root} + &`]: {
    paddingTop: 0
  }
}));
const DialogContent = /*#__PURE__*/react.forwardRef(function DialogContent(inProps, ref) {
  const props = (0,useThemeProps.default)({
    props: inProps,
    name: 'MuiDialogContent'
  });

  const {
    className,
    dividers = false
  } = props,
        other = (0,objectWithoutPropertiesLoose.default)(props, _excluded);

  const ownerState = (0,esm_extends.default)({}, props, {
    dividers
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DialogContentRoot, (0,esm_extends.default)({
    className: (0,clsx_m.default)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 true ? DialogContent.propTypes
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
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: (prop_types_default()).bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object, (prop_types_default()).bool])), (prop_types_default()).func, (prop_types_default()).object])
} : 0;
/* harmony default export */ const DialogContent_DialogContent = (DialogContent);

/***/ }),

/***/ 7645:
/*!***************************************************************!*\
  !*** ./node_modules/@mui/material/DialogTitle/DialogTitle.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 7462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ 3366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ 5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ 6010);
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/base */ 7192);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Typography */ 2658);
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styled */ 1861);
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/useThemeProps */ 9130);
/* harmony import */ var _dialogTitleClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogTitleClasses */ 4472);
/* harmony import */ var _Dialog_DialogContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Dialog/DialogContext */ 4182);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ 5893);


const _excluded = ["className", "id"];











const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_5__.default)(slots, _dialogTitleClasses__WEBPACK_IMPORTED_MODULE_6__.getDialogTitleUtilityClass, classes);
};

const DialogTitleRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_7__.default)(_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
  name: 'MuiDialogTitle',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  padding: '16px 24px',
  flex: '0 0 auto'
});
const DialogTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogTitle(inProps, ref) {
  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__.default)({
    props: inProps,
    name: 'MuiDialogTitle'
  });

  const {
    className,
    id: idProp
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, _excluded);

  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const {
    titleId: id = idProp
  } = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_Dialog_DialogContext__WEBPACK_IMPORTED_MODULE_10__.default);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DialogTitleRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    component: "h2",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    variant: "h6",
    id: id
  }, other));
});
 true ? DialogTitle.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * @ignore
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogTitle);

/***/ }),

/***/ 4472:
/*!**********************************************************************!*\
  !*** ./node_modules/@mui/material/DialogTitle/dialogTitleClasses.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDialogTitleUtilityClass": () => (/* binding */ getDialogTitleUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ 8979);
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ 6087);

function getDialogTitleUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__.default)('MuiDialogTitle', slot);
}
const dialogTitleClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__.default)('MuiDialogTitle', ['root']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dialogTitleClasses);

/***/ }),

/***/ 3838:
/*!*****************************************************************!*\
  !*** ./node_modules/@mui/material/Dialog/Dialog.js + 1 modules ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dialog_Dialog)
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
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useId.js
var useId = __webpack_require__(7579);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(8216);
// EXTERNAL MODULE: ./node_modules/@mui/material/Modal/Modal.js + 4 modules
var Modal = __webpack_require__(5638);
// EXTERNAL MODULE: ./node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(6628);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/createTransitions.js
var createTransitions = __webpack_require__(6067);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(6501);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(9130);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 7 modules
var styled = __webpack_require__(1861);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(8979);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(6087);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Dialog/dialogClasses.js

function getDialogUtilityClass(slot) {
  return (0,generateUtilityClass.default)('MuiDialog', slot);
}
const dialogClasses = (0,generateUtilityClasses.default)('MuiDialog', ['root', 'scrollPaper', 'scrollBody', 'container', 'paper', 'paperScrollPaper', 'paperScrollBody', 'paperWidthFalse', 'paperWidthXs', 'paperWidthSm', 'paperWidthMd', 'paperWidthLg', 'paperWidthXl', 'paperFullWidth', 'paperFullScreen']);
/* harmony default export */ const Dialog_dialogClasses = (dialogClasses);
// EXTERNAL MODULE: ./node_modules/@mui/material/Dialog/DialogContext.js
var DialogContext = __webpack_require__(4182);
// EXTERNAL MODULE: ./node_modules/@mui/material/Backdrop/Backdrop.js + 2 modules
var Backdrop = __webpack_require__(4603);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Dialog/Dialog.js


const _excluded = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"];
















const DialogBackdrop = (0,styled.default)(Backdrop.default, {
  name: 'MuiDialog',
  slot: 'Backdrop',
  overrides: (props, styles) => styles.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
});

const useUtilityClasses = ownerState => {
  const {
    classes,
    scroll,
    maxWidth,
    fullWidth,
    fullScreen
  } = ownerState;
  const slots = {
    root: ['root'],
    container: ['container', `scroll${(0,capitalize.default)(scroll)}`],
    paper: ['paper', `paperScroll${(0,capitalize.default)(scroll)}`, `paperWidth${(0,capitalize.default)(String(maxWidth))}`, fullWidth && 'paperFullWidth', fullScreen && 'paperFullScreen']
  };
  return (0,composeClasses.default)(slots, getDialogUtilityClass, classes);
};

const DialogRoot = (0,styled.default)(Modal.default, {
  name: 'MuiDialog',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  '@media print': {
    // Use !important to override the Modal inline-style.
    position: 'absolute !important'
  }
});
const DialogContainer = (0,styled.default)('div', {
  name: 'MuiDialog',
  slot: 'Container',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.container, styles[`scroll${(0,capitalize.default)(ownerState.scroll)}`]];
  }
})(({
  ownerState
}) => (0,esm_extends.default)({
  height: '100%',
  '@media print': {
    height: 'auto'
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, ownerState.scroll === 'paper' && {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}, ownerState.scroll === 'body' && {
  overflowY: 'auto',
  overflowX: 'hidden',
  textAlign: 'center',
  '&:after': {
    content: '""',
    display: 'inline-block',
    verticalAlign: 'middle',
    height: '100%',
    width: '0'
  }
}));
const DialogPaper = (0,styled.default)(Paper.default, {
  name: 'MuiDialog',
  slot: 'Paper',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.paper, styles[`scrollPaper${(0,capitalize.default)(ownerState.scroll)}`], styles[`paperWidth${(0,capitalize.default)(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles.paperFullWidth, ownerState.fullScreen && styles.paperFullScreen];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends.default)({
  margin: 32,
  position: 'relative',
  overflowY: 'auto',
  // Fix IE11 issue, to remove at some point.
  '@media print': {
    overflowY: 'visible',
    boxShadow: 'none'
  }
}, ownerState.scroll === 'paper' && {
  display: 'flex',
  flexDirection: 'column',
  maxHeight: 'calc(100% - 64px)'
}, ownerState.scroll === 'body' && {
  display: 'inline-block',
  verticalAlign: 'middle',
  textAlign: 'left' // 'initial' doesn't work on IE11

}, !ownerState.maxWidth && {
  maxWidth: 'calc(100% - 64px)'
}, ownerState.maxWidth === 'xs' && {
  maxWidth: theme.breakpoints.unit === 'px' ? Math.max(theme.breakpoints.values.xs, 444) : `${theme.breakpoints.values.xs}${theme.breakpoints.unit}`,
  [`&.${Dialog_dialogClasses.paperScrollBody}`]: {
    [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: 'calc(100% - 64px)'
    }
  }
}, ownerState.maxWidth !== 'xs' && {
  maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`,
  [`&.${Dialog_dialogClasses.paperScrollBody}`]: {
    [theme.breakpoints.down(theme.breakpoints.values[ownerState.maxWidth] + 32 * 2)]: {
      maxWidth: 'calc(100% - 64px)'
    }
  }
}, ownerState.fullWidth && {
  width: 'calc(100% - 64px)'
}, ownerState.fullScreen && {
  margin: 0,
  width: '100%',
  maxWidth: '100%',
  height: '100%',
  maxHeight: 'none',
  borderRadius: 0,
  [`&.${Dialog_dialogClasses.paperScrollBody}`]: {
    margin: 0,
    maxWidth: '100%'
  }
}));
const defaultTransitionDuration = {
  enter: createTransitions.duration.enteringScreen,
  exit: createTransitions.duration.leavingScreen
};
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */

const Dialog = /*#__PURE__*/react.forwardRef(function Dialog(inProps, ref) {
  const props = (0,useThemeProps.default)({
    props: inProps,
    name: 'MuiDialog'
  });

  const {
    'aria-describedby': ariaDescribedby,
    'aria-labelledby': ariaLabelledbyProp,
    BackdropComponent,
    BackdropProps,
    children,
    className,
    disableEscapeKeyDown = false,
    fullScreen = false,
    fullWidth = false,
    maxWidth = 'sm',
    onBackdropClick,
    onClose,
    open,
    PaperComponent = Paper.default,
    PaperProps = {},
    scroll = 'paper',
    TransitionComponent = Fade.default,
    transitionDuration = defaultTransitionDuration,
    TransitionProps
  } = props,
        other = (0,objectWithoutPropertiesLoose.default)(props, _excluded);

  const ownerState = (0,esm_extends.default)({}, props, {
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    scroll
  });

  const classes = useUtilityClasses(ownerState);
  const backdropClick = react.useRef();

  const handleMouseDown = event => {
    // We don't want to close the dialog when clicking the dialog content.
    // Make sure the event starts and ends on the same DOM element.
    backdropClick.current = event.target === event.currentTarget;
  };

  const handleBackdropClick = event => {
    // Ignore the events not coming from the "backdrop".
    if (!backdropClick.current) {
      return;
    }

    backdropClick.current = null;

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };

  const ariaLabelledby = (0,useId.default)(ariaLabelledbyProp);
  const dialogContextValue = react.useMemo(() => {
    return {
      titleId: ariaLabelledby
    };
  }, [ariaLabelledby]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DialogRoot, (0,esm_extends.default)({
    className: (0,clsx_m.default)(classes.root, className),
    BackdropProps: (0,esm_extends.default)({
      transitionDuration,
      as: BackdropComponent
    }, BackdropProps),
    closeAfterTransition: true,
    BackdropComponent: DialogBackdrop,
    disableEscapeKeyDown: disableEscapeKeyDown,
    onClose: onClose,
    open: open,
    ref: ref,
    onClick: handleBackdropClick,
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionComponent, (0,esm_extends.default)({
      appear: true,
      in: open,
      timeout: transitionDuration,
      role: "presentation"
    }, TransitionProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(DialogContainer, {
        className: (0,clsx_m.default)(classes.container),
        onMouseDown: handleMouseDown,
        ownerState: ownerState,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(DialogPaper, (0,esm_extends.default)({
          as: PaperComponent,
          elevation: 24,
          role: "dialog",
          "aria-describedby": ariaDescribedby,
          "aria-labelledby": ariaLabelledby
        }, PaperProps, {
          className: (0,clsx_m.default)(classes.paper, PaperProps.className),
          ownerState: ownerState,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(DialogContext.default.Provider, {
            value: dialogContextValue,
            children: children
          })
        }))
      })
    }))
  }));
});
 true ? Dialog.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  'aria-describedby': (prop_types_default()).string,

  /**
   * The id(s) of the element(s) that label the dialog.
   */
  'aria-labelledby': (prop_types_default()).string,

  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: (prop_types_default()).elementType,

  /**
   * @ignore
   */
  BackdropProps: (prop_types_default()).object,

  /**
   * Dialog children, usually the included sub-components.
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
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: (prop_types_default()).bool,

  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: (prop_types_default()).bool,

  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: (prop_types_default()).bool,

  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: prop_types_default().oneOfType([prop_types_default().oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]), (prop_types_default()).string]),

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: (prop_types_default()).func,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: (prop_types_default()).func,

  /**
   * If `true`, the component is shown.
   */
  open: (prop_types_default()).bool.isRequired,

  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: (prop_types_default()).elementType,

  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   * @default {}
   */
  PaperProps: (prop_types_default()).object,

  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: prop_types_default().oneOf(['body', 'paper']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object, (prop_types_default()).bool])), (prop_types_default()).func, (prop_types_default()).object]),

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: (prop_types_default()).elementType,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default { enter: duration.enteringScreen, exit: duration.leavingScreen }
   */
  transitionDuration: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().shape({
    appear: (prop_types_default()).number,
    enter: (prop_types_default()).number,
    exit: (prop_types_default()).number
  })]),

  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: (prop_types_default()).object
} : 0;
/* harmony default export */ const Dialog_Dialog = (Dialog);

/***/ }),

/***/ 4182:
/*!************************************************************!*\
  !*** ./node_modules/@mui/material/Dialog/DialogContext.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);

const DialogContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});

if (true) {
  DialogContext.displayName = 'DialogContext';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogContext);

/***/ }),

/***/ 6628:
/*!*************************************************!*\
  !*** ./node_modules/@mui/material/Fade/Fade.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 7462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ 3366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ 5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ 4121);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/utils */ 2138);
/* harmony import */ var _styles_createTransitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/createTransitions */ 6067);
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/useTheme */ 2734);
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../transitions/utils */ 577);
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useForkRef */ 1705);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 5893);


const _excluded = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];









const styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
const defaultTimeout = {
  enter: _styles_createTransitions__WEBPACK_IMPORTED_MODULE_4__.duration.enteringScreen,
  exit: _styles_createTransitions__WEBPACK_IMPORTED_MODULE_4__.duration.leavingScreen
};
/**
 * The Fade transition is used by the [Modal](/components/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

const Fade = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Fade(props, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = react_transition_group__WEBPACK_IMPORTED_MODULE_5__.default
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, _excluded);

  const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__.default)();
  const enableStrictModeCompat = true;
  const nodeRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const foreignRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__.default)(children.ref, ref);
  const handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__.default)(nodeRef, foreignRef);

  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };

  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_8__.reflow)(node); // So the animation always start from the start.

    const transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_8__.getTransitionProps)({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_8__.getTransitionProps)({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);

  const handleAddEndListener = next => {
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    appear: appear,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout
  }, other, {
    children: (state, childProps) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
          opacity: 0,
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
 true ? Fade.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),

  /**
   * A single child content element.
   */
  children: _mui_utils__WEBPACK_IMPORTED_MODULE_10__.default.isRequired,

  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string)
  }), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string)]),

  /**
   * If `true`, the component will transition in.
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool),

  /**
   * @ignore
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * @ignore
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * @ignore
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * @ignore
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * @ignore
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * @ignore
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: duration.enteringScreen,
   *   exit: duration.leavingScreen,
   * }
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_9___default().number), prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number)
  })])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fade);

/***/ }),

/***/ 6931:
/*!*****************************************************************!*\
  !*** ./node_modules/@mui/material/Hidden/Hidden.js + 5 modules ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Hidden_Hidden)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/exactProp.js
var exactProp = __webpack_require__(9342);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/getDisplayName.js
var getDisplayName = __webpack_require__(2530);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js + 1 modules
var getThemeProps = __webpack_require__(9425);
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(8679);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(2734);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(8974);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/useThemeWithoutDefault.js
var useThemeWithoutDefault = __webpack_require__(4168);
;// CONCATENATED MODULE: ./node_modules/@mui/material/useMediaQuery/useMediaQuery.js



/**
 * @deprecated Not used internally. Use `MediaQueryListEvent` from lib.dom.d.ts instead.
 */

function useMediaQuery(queryInput, options = {}) {
  const theme = (0,useThemeWithoutDefault.default)(); // Wait for jsdom to support the match media feature.
  // All the browsers MUI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.

  const supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
  const {
    defaultMatches = false,
    matchMedia = supportMatchMedia ? window.matchMedia : null,
    noSsr = false,
    ssrMatchMedia = null
  } = (0,getThemeProps.default)({
    name: 'MuiUseMediaQuery',
    props: options,
    theme
  });

  if (true) {
    if (typeof queryInput === 'function' && theme === null) {
      console.error(['MUI: The `query` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
    }
  }

  let query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, '');
  const [match, setMatch] = react.useState(() => {
    if (noSsr && supportMatchMedia) {
      return matchMedia(query).matches;
    }

    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    } // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.


    return defaultMatches;
  });
  (0,useEnhancedEffect.default)(() => {
    let active = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    const queryList = matchMedia(query);

    const updateMatch = () => {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/mui-org/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches);
      }
    };

    updateMatch();
    queryList.addListener(updateMatch);
    return () => {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia, supportMatchMedia]);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react.useDebugValue({
      query,
      match
    });
  }

  return match;
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Hidden/withWidth.js


const _excluded = ["initialWidth", "width"];









const breakpointKeys = ['xs', 'sm', 'md', 'lg', 'xl']; // By default, returns true if screen width is the same or greater than the given breakpoint.

const isWidthUp = (breakpoint, width, inclusive = true) => {
  if (inclusive) {
    return breakpointKeys.indexOf(breakpoint) <= breakpointKeys.indexOf(width);
  }

  return breakpointKeys.indexOf(breakpoint) < breakpointKeys.indexOf(width);
}; // By default, returns true if screen width is the same or less than the given breakpoint.

const isWidthDown = (breakpoint, width, inclusive = false) => {
  if (inclusive) {
    return breakpointKeys.indexOf(width) <= breakpointKeys.indexOf(breakpoint);
  }

  return breakpointKeys.indexOf(width) < breakpointKeys.indexOf(breakpoint);
};

const withWidth = (options = {}) => Component => {
  const {
    withTheme: withThemeOption = false,
    noSSR = false,
    initialWidth: initialWidthOption
  } = options;

  function WithWidth(props) {
    const contextTheme = (0,useTheme.default)();
    const theme = props.theme || contextTheme;

    const _getThemeProps = (0,getThemeProps.default)({
      theme,
      name: 'MuiWithWidth',
      props
    }),
          {
      initialWidth,
      width
    } = _getThemeProps,
          other = (0,objectWithoutPropertiesLoose.default)(_getThemeProps, _excluded);

    const [mountedState, setMountedState] = react.useState(false);
    (0,useEnhancedEffect.default)(() => {
      setMountedState(true);
    }, []);
    /**
     * innerWidth |xs      sm      md      lg      xl
     *            |-------|-------|-------|-------|------>
     * width      |  xs   |  sm   |  md   |  lg   |  xl
     */

    const keys = theme.breakpoints.keys.slice().reverse();
    const widthComputed = keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null);

    const more = (0,esm_extends.default)({
      width: width || (mountedState || noSSR ? widthComputed : undefined) || initialWidth || initialWidthOption
    }, withThemeOption ? {
      theme
    } : {}, other); // When rendering the component on the server,
    // we have no idea about the client browser screen width.
    // In order to prevent blinks and help the reconciliation of the React tree
    // we are not rendering the child component.
    //
    // An alternative is to use the `initialWidth` property.


    if (more.width === undefined) {
      return null;
    }

    return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, (0,esm_extends.default)({}, more));
  }

   true ? WithWidth.propTypes = {
    /**
     * As `window.innerWidth` is unavailable on the server,
     * we default to rendering an empty component during the first mount.
     * You might want to use a heuristic to approximate
     * the screen width of the client browser screen width.
     *
     * For instance, you could be using the user-agent or the client-hints.
     * https://caniuse.com/#search=client%20hint
     */
    initialWidth: prop_types_default().oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

    /**
     * @ignore
     */
    theme: (prop_types_default()).object,

    /**
     * Bypass the width calculation logic.
     */
    width: prop_types_default().oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  } : 0;

  if (true) {
    WithWidth.displayName = `WithWidth(${(0,getDisplayName.default)(Component)})`;
  }

  hoist_non_react_statics_cjs_default()(WithWidth, Component);
  return WithWidth;
};

/* harmony default export */ const Hidden_withWidth = (withWidth);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Hidden/HiddenJs.js




/**
 * @ignore - internal component.
 */

function HiddenJs(props) {
  const {
    children,
    only,
    width
  } = props;
  const theme = (0,useTheme.default)();
  let visible = true; // `only` check is faster to get out sooner if used.

  if (only) {
    if (Array.isArray(only)) {
      for (let i = 0; i < only.length; i += 1) {
        const breakpoint = only[i];

        if (width === breakpoint) {
          visible = false;
          break;
        }
      }
    } else if (only && width === only) {
      visible = false;
    }
  } // Allow `only` to be combined with other props. If already hidden, no need to check others.


  if (visible) {
    // determine visibility based on the smallest size up
    for (let i = 0; i < theme.breakpoints.keys.length; i += 1) {
      const breakpoint = theme.breakpoints.keys[i];
      const breakpointUp = props[`${breakpoint}Up`];
      const breakpointDown = props[`${breakpoint}Down`];

      if (breakpointUp && isWidthUp(breakpoint, width) || breakpointDown && isWidthDown(breakpoint, width)) {
        visible = false;
        break;
      }
    }
  }

  if (!visible) {
    return null;
  }

  return children;
}

HiddenJs.propTypes = {
  /**
   * The content of the component.
   */
  children: (prop_types_default()).node,

  /**
   * @ignore
   */
  className: (prop_types_default()).string,

  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for
   * server-side rendering.
   */
  implementation: prop_types_default().oneOf(['js', 'css']),

  /**
   * You can use this prop when choosing the `js` implementation with server-side rendering.
   *
   * As `window.innerWidth` is unavailable on the server,
   * we default to rendering an empty component during the first mount.
   * You might want to use a heuristic to approximate
   * the screen width of the client browser screen width.
   *
   * For instance, you could be using the user-agent or the client-hints.
   * https://caniuse.com/#search=client%20hint
   */
  initialWidth: prop_types_default().oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /**
   * If `true`, screens this size and down are hidden.
   */
  lgDown: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and up are hidden.
   */
  lgUp: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and down are hidden.
   */
  mdDown: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and up are hidden.
   */
  mdUp: (prop_types_default()).bool,

  /**
   * Hide the given breakpoint(s).
   */
  only: prop_types_default().oneOfType([prop_types_default().oneOf(['xs', 'sm', 'md', 'lg', 'xl']), prop_types_default().arrayOf(prop_types_default().oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),

  /**
   * If `true`, screens this size and down are hidden.
   */
  smDown: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and up are hidden.
   */
  smUp: (prop_types_default()).bool,

  /**
   * @ignore
   * width prop provided by withWidth decorator.
   */
  width: (prop_types_default()).string.isRequired,

  /**
   * If `true`, screens this size and down are hidden.
   */
  xlDown: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and up are hidden.
   */
  xlUp: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and down are hidden.
   */
  xsDown: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and up are hidden.
   */
  xsUp: (prop_types_default()).bool
};

if (true) {
  HiddenJs.propTypes = (0,exactProp.default)(HiddenJs.propTypes);
}

/* harmony default export */ const Hidden_HiddenJs = (Hidden_withWidth()(HiddenJs));
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(7192);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(8216);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 7 modules
var styled = __webpack_require__(1861);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(8979);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(6087);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Hidden/hiddenCssClasses.js

function getHiddenCssUtilityClass(slot) {
  return (0,generateUtilityClass.default)('PrivateHiddenCss', slot);
}
const hiddenCssClasses = (0,generateUtilityClasses.default)('PrivateHiddenCss', ['root', 'xlDown', 'xlUp', 'onlyXl', 'lgDown', 'lgUp', 'onlyLg', 'mdDown', 'mdUp', 'onlyMd', 'smDown', 'smUp', 'onlySm', 'xsDown', 'xsUp', 'onlyXs']);
/* harmony default export */ const Hidden_hiddenCssClasses = (hiddenCssClasses);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Hidden/HiddenCss.js


const HiddenCss_excluded = ["children", "className", "only"];










const useUtilityClasses = ownerState => {
  const {
    classes,
    breakpoints
  } = ownerState;
  const slots = {
    root: ['root', ...breakpoints.map(({
      breakpoint,
      dir
    }) => {
      return dir === 'only' ? `${dir}${(0,capitalize.default)(breakpoint)}` : `${breakpoint}${(0,capitalize.default)(dir)}`;
    })]
  };
  return (0,composeClasses.default)(slots, getHiddenCssUtilityClass, classes);
};

const HiddenCssRoot = (0,styled.default)('div', {
  name: 'PrivateHiddenCss',
  slot: 'Root'
})(({
  theme,
  ownerState
}) => {
  const hidden = {
    display: 'none'
  };
  return (0,esm_extends.default)({}, ownerState.breakpoints.map(({
    breakpoint,
    dir
  }) => {
    if (dir === 'only') {
      return {
        [theme.breakpoints.only(breakpoint)]: hidden
      };
    }

    return dir === 'up' ? {
      [theme.breakpoints.up(breakpoint)]: hidden
    } : {
      [theme.breakpoints.down(breakpoint)]: hidden
    };
  }).reduce((r, o) => {
    Object.keys(o).forEach(k => {
      r[k] = o[k];
    });
    return r;
  }, {}));
});
/**
 * @ignore - internal component.
 */

function HiddenCss(props) {
  const {
    children,
    className,
    only
  } = props,
        other = (0,objectWithoutPropertiesLoose.default)(props, HiddenCss_excluded);

  const theme = (0,useTheme.default)();

  if (true) {
    const unknownProps = Object.keys(other).filter(propName => {
      const isUndeclaredBreakpoint = !theme.breakpoints.keys.some(breakpoint => {
        return `${breakpoint}Up` === propName || `${breakpoint}Down` === propName;
      });
      return !['classes', 'theme', 'isRtl', 'sx'].includes(propName) && isUndeclaredBreakpoint;
    });

    if (unknownProps.length > 0) {
      console.error(`MUI: Unsupported props received by \`<Hidden implementation="css" />\`: ${unknownProps.join(', ')}. Did you forget to wrap this component in a ThemeProvider declaring these breakpoints?`);
    }
  }

  const breakpoints = [];

  for (let i = 0; i < theme.breakpoints.keys.length; i += 1) {
    const breakpoint = theme.breakpoints.keys[i];
    const breakpointUp = other[`${breakpoint}Up`];
    const breakpointDown = other[`${breakpoint}Down`];

    if (breakpointUp) {
      breakpoints.push({
        breakpoint,
        dir: 'up'
      });
    }

    if (breakpointDown) {
      breakpoints.push({
        breakpoint,
        dir: 'down'
      });
    }
  }

  if (only) {
    const onlyBreakpoints = Array.isArray(only) ? only : [only];
    onlyBreakpoints.forEach(breakpoint => {
      breakpoints.push({
        breakpoint,
        dir: 'only'
      });
    });
  }

  const ownerState = (0,esm_extends.default)({}, props, {
    breakpoints
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(HiddenCssRoot, {
    className: (0,clsx_m.default)(classes.root, className),
    ownerState: ownerState,
    children: children
  });
}

 true ? HiddenCss.propTypes = {
  /**
   * The content of the component.
   */
  children: (prop_types_default()).node,

  /**
   * @ignore
   */
  className: (prop_types_default()).string,

  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for
   * server-side rendering.
   */
  implementation: prop_types_default().oneOf(['js', 'css']),

  /**
   * If `true`, screens this size and down are hidden.
   */
  lgDown: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and up are hidden.
   */
  lgUp: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and down are hidden.
   */
  mdDown: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and up are hidden.
   */
  mdUp: (prop_types_default()).bool,

  /**
   * Hide the given breakpoint(s).
   */
  only: prop_types_default().oneOfType([prop_types_default().oneOf(['xs', 'sm', 'md', 'lg', 'xl']), prop_types_default().arrayOf(prop_types_default().oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),

  /**
   * If `true`, screens this size and down are hidden.
   */
  smDown: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and up are hidden.
   */
  smUp: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and down are hidden.
   */
  xlDown: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and up are hidden.
   */
  xlUp: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and down are hidden.
   */
  xsDown: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and up are hidden.
   */
  xsUp: (prop_types_default()).bool
} : 0;
/* harmony default export */ const Hidden_HiddenCss = (HiddenCss);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Hidden/Hidden.js


const Hidden_excluded = ["implementation", "lgDown", "lgUp", "mdDown", "mdUp", "smDown", "smUp", "xlDown", "xlUp", "xsDown", "xsUp"];




/**
 * Responsively hides children based on the selected implementation.
 */



function Hidden(props) {
  const {
    implementation = 'js',
    lgDown = false,
    lgUp = false,
    mdDown = false,
    mdUp = false,
    smDown = false,
    smUp = false,
    xlDown = false,
    xlUp = false,
    xsDown = false,
    xsUp = false
  } = props,
        other = (0,objectWithoutPropertiesLoose.default)(props, Hidden_excluded);

  if (implementation === 'js') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Hidden_HiddenJs, (0,esm_extends.default)({
      lgDown: lgDown,
      lgUp: lgUp,
      mdDown: mdDown,
      mdUp: mdUp,
      smDown: smDown,
      smUp: smUp,
      xlDown: xlDown,
      xlUp: xlUp,
      xsDown: xsDown,
      xsUp: xsUp
    }, other));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Hidden_HiddenCss, (0,esm_extends.default)({
    lgDown: lgDown,
    lgUp: lgUp,
    mdDown: mdDown,
    mdUp: mdUp,
    smDown: smDown,
    smUp: smUp,
    xlDown: xlDown,
    xlUp: xlUp,
    xsDown: xsDown,
    xsUp: xsUp
  }, other));
}

 true ? Hidden.propTypes
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
   * Specify which implementation to use.  'js' is the default, 'css' works better for
   * server-side rendering.
   * @default 'js'
   */
  implementation: prop_types_default().oneOf(['css', 'js']),

  /**
   * You can use this prop when choosing the `js` implementation with server-side rendering.
   *
   * As `window.innerWidth` is unavailable on the server,
   * we default to rendering an empty component during the first mount.
   * You might want to use a heuristic to approximate
   * the screen width of the client browser screen width.
   *
   * For instance, you could be using the user-agent or the client-hints.
   * https://caniuse.com/#search=client%20hint
   */
  initialWidth: prop_types_default().oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /**
   * If `true`, screens this size and down are hidden.
   * @default false
   */
  lgDown: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and up are hidden.
   * @default false
   */
  lgUp: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and down are hidden.
   * @default false
   */
  mdDown: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and up are hidden.
   * @default false
   */
  mdUp: (prop_types_default()).bool,

  /**
   * Hide the given breakpoint(s).
   */
  only: prop_types_default().oneOfType([prop_types_default().oneOf(['xs', 'sm', 'md', 'lg', 'xl']), prop_types_default().arrayOf(prop_types_default().oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired)]),

  /**
   * If `true`, screens this size and down are hidden.
   * @default false
   */
  smDown: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and up are hidden.
   * @default false
   */
  smUp: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and down are hidden.
   * @default false
   */
  xlDown: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and up are hidden.
   * @default false
   */
  xlUp: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and down are hidden.
   * @default false
   */
  xsDown: (prop_types_default()).bool,

  /**
   * If `true`, screens this size and up are hidden.
   * @default false
   */
  xsUp: (prop_types_default()).bool
} : 0;
/* harmony default export */ const Hidden_Hidden = (Hidden);

/***/ }),

/***/ 5638:
/*!***************************************************************!*\
  !*** ./node_modules/@mui/material/Modal/Modal.js + 4 modules ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Modal_Modal)
});

// UNUSED EXPORTS: modalClasses

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@mui/base/utils/isHostComponent.js
var isHostComponent = __webpack_require__(8442);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/elementAcceptingRef.js
var elementAcceptingRef = __webpack_require__(2138);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/HTMLElementType.js
var HTMLElementType = __webpack_require__(338);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(6087);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(8979);
;// CONCATENATED MODULE: ./node_modules/@mui/base/ModalUnstyled/modalUnstyledClasses.js


function getModalUtilityClass(slot) {
  return (0,generateUtilityClass.default)('MuiModal', slot);
}
const modalUnstyledClasses = (0,generateUtilityClasses.default)('MuiModal', ['root', 'hidden']);
/* harmony default export */ const ModalUnstyled_modalUnstyledClasses = (modalUnstyledClasses);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useForkRef.js
var useForkRef = __webpack_require__(67);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/ownerDocument.js
var ownerDocument = __webpack_require__(7094);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useEventCallback.js
var useEventCallback = __webpack_require__(3633);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/createChainedFunction.js
var createChainedFunction = __webpack_require__(9064);
// EXTERNAL MODULE: ./node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(7192);
// EXTERNAL MODULE: ./node_modules/@mui/base/Portal/Portal.js
var Portal = __webpack_require__(8385);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/ownerWindow.js
var ownerWindow = __webpack_require__(8290);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/getScrollbarSize.js
var getScrollbarSize = __webpack_require__(5806);
;// CONCATENATED MODULE: ./node_modules/@mui/base/ModalUnstyled/ModalManager.js


// Is a vertical scrollbar displayed?
function isOverflowing(container) {
  const doc = (0,ownerDocument.default)(container);

  if (doc.body === container) {
    return (0,ownerWindow.default)(container).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

function ariaHidden(element, show) {
  if (show) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
}

function getPaddingRight(element) {
  return parseInt((0,ownerWindow.default)(element).getComputedStyle(element).paddingRight, 10) || 0;
}

function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude = [], show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  const blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
  [].forEach.call(container.children, element => {
    if (blacklist.indexOf(element) === -1 && blacklistTagNames.indexOf(element.tagName) === -1) {
      ariaHidden(element, show);
    }
  });
}

function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;

  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      const scrollbarSize = (0,getScrollbarSize.default)((0,ownerDocument.default)(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: 'padding-right',
        el: container
      }); // Use computed style, here to get the real padding to add our scrollbar width.

      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`; // .mui-fixed is a global helper.

      const fixedElements = (0,ownerDocument.default)(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedElements, element => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: 'padding-right',
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    } // Improve Gatsby support
    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


    const parent = container.parentElement;
    const containerWindow = (0,ownerWindow.default)(container);
    const scrollContainer = (parent == null ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.

    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: 'overflow',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: 'overflow-x',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: 'overflow-y',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }

  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };

  return restore;
}

function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, element => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}

/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }

  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);

    if (modalIndex !== -1) {
      return modalIndex;
    }

    modalIndex = this.modals.length;
    this.modals.push(modal); // If the modal we are adding is already in the DOM.

    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }

    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, item => item.container === container);

    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }

    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }

  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];

    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }

  remove(modal) {
    const modalIndex = this.modals.indexOf(modal);

    if (modalIndex === -1) {
      return modalIndex;
    }

    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }

      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, true);
      }

      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null

      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }

    return modalIndex;
  }

  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }

}
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/exactProp.js
var exactProp = __webpack_require__(9342);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@mui/base/Unstable_TrapFocus/Unstable_TrapFocus.js
/* eslint-disable @typescript-eslint/naming-convention, consistent-return, jsx-a11y/no-noninteractive-tabindex */


 // Inspired by https://github.com/focus-trap/tabbable



const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');

function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.


  if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }

  return node.tabIndex;
}

function isNonTabbableRadio(node) {
  if (node.tagName !== 'INPUT' || node.type !== 'radio') {
    return false;
  }

  if (!node.name) {
    return false;
  }

  const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);

  let roving = getRadio(`[name="${node.name}"]:checked`);

  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }

  return roving !== node;
}

function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
    return false;
  }

  return true;
}

function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);

    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }

    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
}

function defaultIsEnabled() {
  return true;
}
/**
 * Utility component that locks focus inside the component.
 */


function Unstable_TrapFocus(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = react.useRef();
  const sentinelStart = react.useRef(null);
  const sentinelEnd = react.useRef(null);
  const nodeToRestore = react.useRef(null);
  const reactFocusEventTarget = react.useRef(null); // This variable is useful when disableAutoFocus is true.
  // It waits for the active element to move into the component to activate.

  const activated = react.useRef(false);
  const rootRef = react.useRef(null);
  const handleRef = (0,useForkRef.default)(children.ref, rootRef);
  const lastKeydown = react.useRef(null);
  react.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  react.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    const doc = (0,ownerDocument.default)(rootRef.current);

    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (true) {
          console.error(['MUI: The modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n'));
        }

        rootRef.current.setAttribute('tabIndex', -1);
      }

      if (activated.current) {
        rootRef.current.focus();
      }
    }

    return () => {
      // restoreLastFocus()
      if (!disableRestoreFocus) {
        // In IE11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE11 have a focus method.
        // Once IE11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }

        nodeToRestore.current = null;
      }
    }; // Missing `disableRestoreFocus` which is fine.
    // We don't support changing that prop on an open TrapFocus
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  react.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    const doc = (0,ownerDocument.default)(rootRef.current);

    const contain = nativeEvent => {
      const {
        current: rootElement
      } = rootRef; // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.

      if (rootElement === null) {
        return;
      }

      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (!rootElement.contains(doc.activeElement)) {
        // if the focus event is not coming from inside the children's react tree, reset the refs
        if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
          reactFocusEventTarget.current = null;
        } else if (reactFocusEventTarget.current !== null) {
          return;
        }

        if (!activated.current) {
          return;
        }

        let tabbable = [];

        if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
          tabbable = getTabbable(rootRef.current);
        }

        if (tabbable.length > 0) {
          var _lastKeydown$current, _lastKeydown$current2;

          const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === 'Tab');
          const focusNext = tabbable[0];
          const focusPrevious = tabbable[tabbable.length - 1];

          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        } else {
          rootElement.focus();
        }
      }
    };

    const loopFocus = nativeEvent => {
      lastKeydown.current = nativeEvent;

      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
        return;
      } // Make sure the next tab starts from the right place.
      // doc.activeElement referes to the origin.


      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;
        sentinelEnd.current.focus();
      }
    };

    doc.addEventListener('focusin', contain);
    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    // Instead, we can look if the active element was restored on the BODY element.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

    const interval = setInterval(() => {
      if (doc.activeElement.tagName === 'BODY') {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener('focusin', contain);
      doc.removeEventListener('keydown', loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);

  const onFocus = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }

    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;

    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };

  const handleFocusSentinel = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }

    activated.current = true;
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      tabIndex: 0,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-test": "sentinelStart"
    }), /*#__PURE__*/react.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      tabIndex: 0,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-test": "sentinelEnd"
    })]
  });
}

 true ? Unstable_TrapFocus.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: elementAcceptingRef.default,

  /**
   * If `true`, the trap focus will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any trap focus children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: (prop_types_default()).bool,

  /**
   * If `true`, the trap focus will not prevent focus from leaving the trap focus while open.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: (prop_types_default()).bool,

  /**
   * If `true`, the trap focus will not restore focus to previously focused element once
   * trap focus is hidden.
   * @default false
   */
  disableRestoreFocus: (prop_types_default()).bool,

  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: (prop_types_default()).func,

  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple trap focus mounted at the same time.
   * @default function defaultIsEnabled() {
   *   return true;
   * }
   */
  isEnabled: (prop_types_default()).func,

  /**
   * If `true`, focus is locked.
   */
  open: (prop_types_default()).bool.isRequired
} : 0;

if (true) {
  // eslint-disable-next-line
  Unstable_TrapFocus['propTypes' + ''] = (0,exactProp.default)(Unstable_TrapFocus.propTypes);
}

/* harmony default export */ const Unstable_TrapFocus_Unstable_TrapFocus = (Unstable_TrapFocus);
;// CONCATENATED MODULE: ./node_modules/@mui/base/ModalUnstyled/ModalUnstyled.js


const _excluded = ["BackdropComponent", "BackdropProps", "children", "classes", "className", "closeAfterTransition", "component", "components", "componentsProps", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "theme", "onTransitionEnter", "onTransitionExited"];













const useUtilityClasses = ownerState => {
  const {
    open,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ['root', !open && exited && 'hidden']
  };
  return (0,composeClasses.default)(slots, getModalUtilityClass, classes);
};

function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
} // A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.


const defaultManager = new ModalManager();
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

const ModalUnstyled = /*#__PURE__*/react.forwardRef(function ModalUnstyled(props, ref) {
  const {
    BackdropComponent,
    BackdropProps,
    children,
    classes: classesProp,
    className,
    closeAfterTransition = false,
    component = 'div',
    components = {},
    componentsProps = {},
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    // private
    // eslint-disable-next-line react/prop-types
    manager = defaultManager,
    onBackdropClick,
    onClose,
    onKeyDown,
    open,

    /* eslint-disable react/prop-types */
    theme,
    onTransitionEnter,
    onTransitionExited
  } = props,
        other = (0,objectWithoutPropertiesLoose.default)(props, _excluded);

  const [exited, setExited] = react.useState(true);
  const modal = react.useRef({});
  const mountNodeRef = react.useRef(null);
  const modalRef = react.useRef(null);
  const handleRef = (0,useForkRef.default)(modalRef, ref);
  const hasTransition = getHasTransition(props);

  const getDoc = () => (0,ownerDocument.default)(mountNodeRef.current);

  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };

  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    }); // Fix a bug on Chrome where the scroll isn't initially 0.

    modalRef.current.scrollTop = 0;
  };

  const handleOpen = (0,useEventCallback.default)(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer); // The element was already mounted.

    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = react.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = (0,useEventCallback.default)(node => {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (open && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, true);
    }
  });
  const handleClose = react.useCallback(() => {
    manager.remove(getModal());
  }, [manager]);
  react.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  react.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

  const ownerState = (0,esm_extends.default)({}, props, {
    classes: classesProp,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    exited,
    hideBackdrop,
    keepMounted
  });

  const classes = useUtilityClasses(ownerState);

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  const handleEnter = () => {
    setExited(false);

    if (onTransitionEnter) {
      onTransitionEnter();
    }
  };

  const handleExited = () => {
    setExited(true);

    if (onTransitionExited) {
      onTransitionExited();
    }

    if (closeAfterTransition) {
      handleClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };

  const handleKeyDown = event => {
    if (onKeyDown) {
      onKeyDown(event);
    } // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.


    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }

    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();

      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };

  const childProps = {};

  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = '-1';
  } // It's a Transition like component


  if (hasTransition) {
    childProps.onEnter = (0,createChainedFunction.default)(handleEnter, children.props.onEnter);
    childProps.onExited = (0,createChainedFunction.default)(handleExited, children.props.onExited);
  }

  const Root = components.Root || component;
  const rootProps = componentsProps.root || {};
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Portal.default, {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Root, (0,esm_extends.default)({
      role: "presentation"
    }, rootProps, !(0,isHostComponent.default)(Root) && {
      as: component,
      ownerState: (0,esm_extends.default)({}, ownerState, rootProps.ownerState),
      theme
    }, other, {
      ref: handleRef,
      onKeyDown: handleKeyDown,
      className: (0,clsx_m.default)(classes.root, rootProps.className, className),
      children: [!hideBackdrop && BackdropComponent ? /*#__PURE__*/(0,jsx_runtime.jsx)(BackdropComponent, (0,esm_extends.default)({
        open: open,
        onClick: handleBackdropClick
      }, BackdropProps)) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(Unstable_TrapFocus_Unstable_TrapFocus, {
        disableEnforceFocus: disableEnforceFocus,
        disableAutoFocus: disableAutoFocus,
        disableRestoreFocus: disableRestoreFocus,
        isEnabled: isTopModal,
        open: open,
        children: /*#__PURE__*/react.cloneElement(children, childProps)
      })]
    }))
  });
});
 true ? ModalUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   */
  BackdropComponent: (prop_types_default()).elementType,

  /**
   * Props applied to the [`BackdropUnstyled`](/api/backdrop-unstyled/) element.
   */
  BackdropProps: (prop_types_default()).object,

  /**
   * A single child content element.
   */
  children: elementAcceptingRef.default.isRequired,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types_default()).object,

  /**
   * @ignore
   */
  className: (prop_types_default()).string,

  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: (prop_types_default()).bool,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types_default()).elementType,

  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: prop_types_default().shape({
    Root: (prop_types_default()).elementType
  }),

  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  componentsProps: (prop_types_default()).object,

  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types_default().oneOfType([HTMLElementType.default, (prop_types_default()).func]),

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: (prop_types_default()).bool,

  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: (prop_types_default()).bool,

  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: (prop_types_default()).bool,

  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: (prop_types_default()).bool,

  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   * @default false
   */
  disableRestoreFocus: (prop_types_default()).bool,

  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: (prop_types_default()).bool,

  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: (prop_types_default()).bool,

  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: (prop_types_default()).bool,

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: (prop_types_default()).func,

  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: (prop_types_default()).func,

  /**
   * @ignore
   */
  onKeyDown: (prop_types_default()).func,

  /**
   * If `true`, the component is shown.
   */
  open: (prop_types_default()).bool.isRequired
} : 0;
/* harmony default export */ const ModalUnstyled_ModalUnstyled = (ModalUnstyled);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 7 modules
var styled = __webpack_require__(1861);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(9130);
// EXTERNAL MODULE: ./node_modules/@mui/material/Backdrop/Backdrop.js + 2 modules
var Backdrop = __webpack_require__(4603);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Modal/Modal.js


const Modal_excluded = ["BackdropComponent", "closeAfterTransition", "children", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted"];









const modalClasses = ModalUnstyled_modalUnstyledClasses;

const extendUtilityClasses = ownerState => {
  return ownerState.classes;
};

const ModalRoot = (0,styled.default)('div', {
  name: 'MuiModal',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.open && ownerState.exited && styles.hidden];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends.default)({
  position: 'fixed',
  zIndex: theme.zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !ownerState.open && ownerState.exited && {
  visibility: 'hidden'
}));
const ModalBackdrop = (0,styled.default)(Backdrop.default, {
  name: 'MuiModal',
  slot: 'Backdrop',
  overridesResolver: (props, styles) => {
    return styles.backdrop;
  }
})({
  zIndex: -1
});
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

const Modal = /*#__PURE__*/react.forwardRef(function Modal(inProps, ref) {
  var _componentsProps$root;

  const props = (0,useThemeProps.default)({
    name: 'MuiModal',
    props: inProps
  });

  const {
    BackdropComponent = ModalBackdrop,
    closeAfterTransition = false,
    children,
    components = {},
    componentsProps = {},
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false
  } = props,
        other = (0,objectWithoutPropertiesLoose.default)(props, Modal_excluded);

  const [exited, setExited] = react.useState(true);
  const commonProps = {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  };

  const ownerState = (0,esm_extends.default)({}, props, commonProps, {
    exited
  });

  const classes = extendUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ModalUnstyled_ModalUnstyled, (0,esm_extends.default)({
    components: (0,esm_extends.default)({
      Root: ModalRoot
    }, components),
    componentsProps: {
      root: (0,esm_extends.default)({}, componentsProps.root, (!components.Root || !(0,isHostComponent.default)(components.Root)) && {
        ownerState: (0,esm_extends.default)({}, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.ownerState)
      })
    },
    BackdropComponent: BackdropComponent,
    onTransitionEnter: () => setExited(false),
    onTransitionExited: () => setExited(true),
    ref: ref
  }, other, {
    classes: classes
  }, commonProps, {
    children: children
  }));
});
 true ? Modal.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: (prop_types_default()).elementType,

  /**
   * Props applied to the [`Backdrop`](/api/backdrop/) element.
   */
  BackdropProps: (prop_types_default()).object,

  /**
   * A single child content element.
   */
  children: elementAcceptingRef.default.isRequired,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types_default()).object,

  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: (prop_types_default()).bool,

  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: prop_types_default().shape({
    Root: (prop_types_default()).elementType
  }),

  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  componentsProps: (prop_types_default()).object,

  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types_default().oneOfType([HTMLElementType.default, (prop_types_default()).func]),

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: (prop_types_default()).bool,

  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: (prop_types_default()).bool,

  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: (prop_types_default()).bool,

  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: (prop_types_default()).bool,

  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   * @default false
   */
  disableRestoreFocus: (prop_types_default()).bool,

  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: (prop_types_default()).bool,

  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: (prop_types_default()).bool,

  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: (prop_types_default()).bool,

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: (prop_types_default()).func,

  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: (prop_types_default()).func,

  /**
   * If `true`, the component is shown.
   */
  open: (prop_types_default()).bool.isRequired,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object, (prop_types_default()).bool])), (prop_types_default()).func, (prop_types_default()).object])
} : 0;
/* harmony default export */ const Modal_Modal = (Modal);

/***/ }),

/***/ 2658:
/*!*************************************************************************!*\
  !*** ./node_modules/@mui/material/Typography/Typography.js + 1 modules ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Typography_Typography)
});

// UNUSED EXPORTS: TypographyRoot

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
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(9707);
// EXTERNAL MODULE: ./node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(7192);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 7 modules
var styled = __webpack_require__(1861);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(9130);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(8216);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(8979);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(6087);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Typography/typographyClasses.js

function getTypographyUtilityClass(slot) {
  return (0,generateUtilityClass.default)('MuiTypography', slot);
}
const typographyClasses = (0,generateUtilityClasses.default)('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);
/* harmony default export */ const Typography_typographyClasses = (typographyClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/Typography/Typography.js


const _excluded = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];











const useUtilityClasses = ownerState => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, ownerState.align !== 'inherit' && `align${(0,capitalize.default)(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
  };
  return (0,composeClasses.default)(slots, getTypographyUtilityClass, classes);
};

const TypographyRoot = (0,styled.default)('span', {
  name: 'MuiTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${(0,capitalize.default)(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends.default)({
  margin: 0
}, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}, ownerState.gutterBottom && {
  marginBottom: '0.35em'
}, ownerState.paragraph && {
  marginBottom: 16
}));
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
}; // TODO v6: deprecate these color values in v5.x and remove the transformation in v6

const colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};

const transformDeprecatedColors = color => {
  return colorTransformations[color] || color;
};

const Typography = /*#__PURE__*/react.forwardRef(function Typography(inProps, ref) {
  const themeProps = (0,useThemeProps.default)({
    props: inProps,
    name: 'MuiTypography'
  });
  const color = transformDeprecatedColors(themeProps.color);
  const props = (0,extendSxProp.default)((0,esm_extends.default)({}, themeProps, {
    color
  }));

  const {
    align = 'inherit',
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = 'body1',
    variantMapping = defaultVariantMapping
  } = props,
        other = (0,objectWithoutPropertiesLoose.default)(props, _excluded);

  const ownerState = (0,esm_extends.default)({}, props, {
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });

  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TypographyRoot, (0,esm_extends.default)({
    as: Component,
    ref: ref,
    ownerState: ownerState,
    className: (0,clsx_m.default)(classes.root, className)
  }, other));
});
 true ? Typography.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: prop_types_default().oneOf(['center', 'inherit', 'justify', 'left', 'right']),

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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types_default()).elementType,

  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: (prop_types_default()).bool,

  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: (prop_types_default()).bool,

  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: (prop_types_default()).bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object, (prop_types_default()).bool])), (prop_types_default()).func, (prop_types_default()).object]),

  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: prop_types_default().oneOfType([prop_types_default().oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2']), (prop_types_default()).string]),

  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: (prop_types_default()).object
} : 0;
/* harmony default export */ const Typography_Typography = (Typography);

/***/ }),

/***/ 577:
/*!*********************************************************!*\
  !*** ./node_modules/@mui/material/transitions/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reflow": () => (/* binding */ reflow),
/* harmony export */   "getTransitionProps": () => (/* binding */ getTransitionProps)
/* harmony export */ });
const reflow = node => node.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;

  const {
    timeout,
    easing,
    style = {}
  } = props;
  return {
    duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === 'object' ? easing[options.mode] : easing,
    delay: style.transitionDelay
  };
}

/***/ }),

/***/ 9707:
/*!**********************************************************************!*\
  !*** ./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extendSxProp)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 7462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ 3366);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/utils */ 9766);
/* harmony import */ var _getThemeValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getThemeValue */ 4178);


const _excluded = ["sx"];



const splitProps = props => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  Object.keys(props).forEach(prop => {
    if (_getThemeValue__WEBPACK_IMPORTED_MODULE_2__.propToStyleFunction[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};

function extendSxProp(props) {
  const {
    sx: inSx
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, _excluded);

  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;

  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === 'function') {
    finalSx = (...args) => {
      const result = inSx(...args);

      if (!(0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__.isPlainObject)(result)) {
        return systemProps;
      }

      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, systemProps, result);
    };
  } else {
    finalSx = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, systemProps, inSx);
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, otherProps, {
    sx: finalSx
  });
}

/***/ }),

/***/ 338:
/*!********************************************************!*\
  !*** ./node_modules/@mui/utils/esm/HTMLElementType.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTMLElementType)
/* harmony export */ });
function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (false) {}

  const propValue = props[propName];
  const safePropName = propFullName || propName;

  if (propValue == null) {
    return null;
  }

  if (propValue && propValue.nodeType !== 1) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an HTMLElement.`);
  }

  return null;
}

/***/ }),

/***/ 2138:
/*!************************************************************!*\
  !*** ./node_modules/@mui/utils/esm/elementAcceptingRef.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ 5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chainPropTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chainPropTypes */ 5506);



function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}

function acceptingRef(props, propName, componentName, location, propFullName) {
  const element = props[propName];
  const safePropName = propFullName || propName;

  if (element == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === 'undefined') {
    return null;
  }

  let warningHint;
  const elementType = element.type;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */

  if (typeof elementType === 'function' && !isClassComponent(elementType)) {
    warningHint = 'Did you accidentally use a plain function component for an element instead?';
  }

  if (warningHint !== undefined) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element that can hold a ref. ${warningHint} ` + 'For more information see https://mui.com/r/caveat-with-refs-guide');
  }

  return null;
}

const elementAcceptingRef = (0,_chainPropTypes__WEBPACK_IMPORTED_MODULE_0__.default)((prop_types__WEBPACK_IMPORTED_MODULE_1___default().element), acceptingRef);
elementAcceptingRef.isRequired = (0,_chainPropTypes__WEBPACK_IMPORTED_MODULE_0__.default)((prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired), acceptingRef);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementAcceptingRef);

/***/ }),

/***/ 5806:
/*!*********************************************************!*\
  !*** ./node_modules/@mui/utils/esm/getScrollbarSize.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getScrollbarSize)
/* harmony export */ });
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
function getScrollbarSize(doc) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}

/***/ }),

/***/ 9318:
/*!********************************************************************!*\
  !*** ./src/components/reusableComponents/MediaCard.js + 1 modules ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

var update = injectStylesIntoStyleTag_default()(MediaCard.default, options);



/* harmony default export */ const reusableComponents_MediaCard = (MediaCard.default.locals || {});
;// CONCATENATED MODULE: ./src/components/reusableComponents/MediaCard.js


var _excluded = ["type", "alt", "src", "autoPlay", "height", "text", "lapse", "handleClick", "leftButton", "rightButton", "view", "device", "play", "displayBottomActions", "playIconSize", "desktopTrending"];


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
      leftButton = props.leftButton,
      rightButton = props.rightButton,
      view = props.view,
      device = props.device,
      play = props.play,
      displayBottomActions = props.displayBottomActions,
      playIconSize = props.playIconSize,
      desktopTrending = props.desktopTrending,
      restProps = (0,objectWithoutProperties.default)(props, _excluded);

  return /*#__PURE__*/react.createElement("div", (0,esm_extends.default)({}, restProps, {
    className: "media-card"
  }), /*#__PURE__*/react.createElement("div", {
    style: {
      position: "relative"
    }
  }, type === "video" ? /*#__PURE__*/react.createElement("video", {
    ref: ref && ref,
    autoPlay: autoPlay,
    disablePictureInPicture: true,
    controlsList: "nodownload" // height={height}
    ,
    className: desktopTrending ? "media-card__desktop__trending" : "media-card__video",
    onContextMenu: function onContextMenu(e) {
      return e.preventDefault();
    },
    onClick: handleClick,
    style: {
      height: height,
      objectFit: view !== "detail" ? "cover" : "contain",
      border: "none"
    }
  }, /*#__PURE__*/react.createElement("source", {
    src: src,
    type: "video/mp4"
  })) : /*#__PURE__*/react.createElement("img", {
    ref: ref && ref,
    crossOrigin: "anonymous",
    src: src,
    alt: src // height={height}
    ,
    loading: "lazy",
    className: desktopTrending ? "media-card__desktop__trending" : "media-card__image",
    onContextMenu: function onContextMenu(e) {
      return e.preventDefault();
    },
    onClick: handleClick,
    style: {
      height: height,
      objectFit: device !== "mobile" ? "cover" : "contain",
      border: "none"
    }
  }), !play && /*#__PURE__*/react.createElement(PlayArrow.default, {
    style: {
      color: "white",
      fontSize: playIconSize,
      opacity: 0.8,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      cursor: "pointer",
      borderRadius: 5
    },
    onClick: handleClick,
    size: "large"
  })), displayBottomActions && /*#__PURE__*/react.createElement("div", {
    className: device === "mobile" && view === "detail" ? "media-card__actions__mobile__detail" : "media-card__actions"
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
  }, leftButton && leftButton, rightButton && rightButton))));
});
/* harmony default export */ const components_reusableComponents_MediaCard = (MediaCard_MediaCard);

/***/ }),

/***/ 9155:
/*!**********************************************************************!*\
  !*** ./src/components/reusableComponents/Placeholder.js + 1 modules ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

var update = injectStylesIntoStyleTag_default()(Placeholder.default, options);



/* harmony default export */ const reusableComponents_Placeholder = (Placeholder.default.locals || {});
;// CONCATENATED MODULE: ./src/components/reusableComponents/Placeholder.js


var _excluded = ["height", "screen", "device", "loggedIn", "hideTextContainer"];



function Placeholder_Placeholder(props) {
  var height = props.height,
      screen = props.screen,
      device = props.device,
      loggedIn = props.loggedIn,
      hideTextContainer = props.hideTextContainer,
      restProps = (0,objectWithoutProperties.default)(props, _excluded);

  return /*#__PURE__*/react.createElement("div", (0,esm_extends.default)({
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

/***/ 7422:
/*!*****************************************!*\
  !*** ./src/pages/Video.js + 10 modules ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Video": () => (/* binding */ Video_Video),
  "default": () => (/* binding */ src_pages_Video)
});

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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./src/components/reusableComponents/Button.js + 1 modules
var Button = __webpack_require__(1725);
// EXTERNAL MODULE: ./node_modules/@mui/material/Hidden/Hidden.js + 5 modules
var Hidden = __webpack_require__(6931);
// EXTERNAL MODULE: ./node_modules/@mui/styles/withStyles/withStyles.js + 1 modules
var withStyles = __webpack_require__(1366);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Share.js
var Share = __webpack_require__(1359);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 2 modules
var react_router = __webpack_require__(1203);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Download.js
var Download = __webpack_require__(3441);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Twitter.js
var Twitter = __webpack_require__(5084);
// EXTERNAL MODULE: ./node_modules/json-bigint/index.js
var json_bigint = __webpack_require__(4400);
var json_bigint_default = /*#__PURE__*/__webpack_require__.n(json_bigint);
// EXTERNAL MODULE: ./node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(3838);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(7750);
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(7645);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(7192);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(917);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(1796);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(8216);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(2734);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js + 7 modules
var styled = __webpack_require__(1861);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(9130);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(8979);
// EXTERNAL MODULE: ./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(6087);
;// CONCATENATED MODULE: ./node_modules/@mui/material/LinearProgress/linearProgressClasses.js

function getLinearProgressUtilityClass(slot) {
  return (0,generateUtilityClass.default)('MuiLinearProgress', slot);
}
const linearProgressClasses = (0,generateUtilityClasses.default)('MuiLinearProgress', ['root', 'colorPrimary', 'colorSecondary', 'determinate', 'indeterminate', 'buffer', 'query', 'dashed', 'dashedColorPrimary', 'dashedColorSecondary', 'bar', 'barColorPrimary', 'barColorSecondary', 'bar1Indeterminate', 'bar1Determinate', 'bar1Buffer', 'bar2Indeterminate', 'bar2Buffer']);
/* harmony default export */ const LinearProgress_linearProgressClasses = (linearProgressClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@mui/material/LinearProgress/LinearProgress.js


const _excluded = ["className", "color", "value", "valueBuffer", "variant"];

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6;













const TRANSITION_DURATION = 4; // seconds

const indeterminate1Keyframe = (0,emotion_react_browser_esm.keyframes)(_t || (_t = _`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`));
const indeterminate2Keyframe = (0,emotion_react_browser_esm.keyframes)(_t2 || (_t2 = _`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`));
const bufferKeyframe = (0,emotion_react_browser_esm.keyframes)(_t3 || (_t3 = _`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`));

const useUtilityClasses = ownerState => {
  const {
    classes,
    variant,
    color
  } = ownerState;
  const slots = {
    root: ['root', `color${(0,capitalize.default)(color)}`, variant],
    dashed: ['dashed', `dashedColor${(0,capitalize.default)(color)}`],
    bar1: ['bar', `barColor${(0,capitalize.default)(color)}`, (variant === 'indeterminate' || variant === 'query') && 'bar1Indeterminate', variant === 'determinate' && 'bar1Determinate', variant === 'buffer' && 'bar1Buffer'],
    bar2: ['bar', variant !== 'buffer' && `barColor${(0,capitalize.default)(color)}`, variant === 'buffer' && `color${(0,capitalize.default)(color)}`, (variant === 'indeterminate' || variant === 'query') && 'bar2Indeterminate', variant === 'buffer' && 'bar2Buffer']
  };
  return (0,composeClasses.default)(slots, getLinearProgressUtilityClass, classes);
};

const getColorShade = (theme, color) => {
  if (color === 'inherit') {
    return 'currentColor';
  }

  return theme.palette.mode === 'light' ? (0,colorManipulator.lighten)(theme.palette[color].main, 0.62) : (0,colorManipulator.darken)(theme.palette[color].main, 0.5);
};

const LinearProgressRoot = (0,styled.default)('span', {
  name: 'MuiLinearProgress',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`color${(0,capitalize.default)(ownerState.color)}`], styles[ownerState.variant]];
  }
})(({
  ownerState,
  theme
}) => (0,esm_extends.default)({
  position: 'relative',
  overflow: 'hidden',
  display: 'block',
  height: 4,
  zIndex: 0,
  // Fix Safari's bug during composition of different paint.
  '@media print': {
    colorAdjust: 'exact'
  },
  backgroundColor: getColorShade(theme, ownerState.color)
}, ownerState.color === 'inherit' && ownerState.variant !== 'buffer' && {
  backgroundColor: 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'currentColor',
    opacity: 0.3
  }
}, ownerState.variant === 'buffer' && {
  backgroundColor: 'transparent'
}, ownerState.variant === 'query' && {
  transform: 'rotate(180deg)'
}));
const LinearProgressDashed = (0,styled.default)('span', {
  name: 'MuiLinearProgress',
  slot: 'Dashed',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.dashed, styles[`dashedColor${(0,capitalize.default)(ownerState.color)}`]];
  }
})(({
  ownerState,
  theme
}) => {
  const backgroundColor = getColorShade(theme, ownerState.color);
  return (0,esm_extends.default)({
    position: 'absolute',
    marginTop: 0,
    height: '100%',
    width: '100%'
  }, ownerState.color === 'inherit' && {
    opacity: 0.3
  }, {
    backgroundImage: `radial-gradient(${backgroundColor} 0%, ${backgroundColor} 16%, transparent 42%)`,
    backgroundSize: '10px 10px',
    backgroundPosition: '0 -23px'
  });
}, (0,emotion_react_browser_esm.css)(_t4 || (_t4 = _`
    animation: ${0} 3s infinite linear;
  `), bufferKeyframe));
const LinearProgressBar1 = (0,styled.default)('span', {
  name: 'MuiLinearProgress',
  slot: 'Bar1',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.bar, styles[`barColor${(0,capitalize.default)(ownerState.color)}`], (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && styles.bar1Indeterminate, ownerState.variant === 'determinate' && styles.bar1Determinate, ownerState.variant === 'buffer' && styles.bar1Buffer];
  }
})(({
  ownerState,
  theme
}) => (0,esm_extends.default)({
  width: '100%',
  position: 'absolute',
  left: 0,
  bottom: 0,
  top: 0,
  transition: 'transform 0.2s linear',
  transformOrigin: 'left',
  backgroundColor: ownerState.color === 'inherit' ? 'currentColor' : theme.palette[ownerState.color].main
}, ownerState.variant === 'determinate' && {
  transition: `transform .${TRANSITION_DURATION}s linear`
}, ownerState.variant === 'buffer' && {
  zIndex: 1,
  transition: `transform .${TRANSITION_DURATION}s linear`
}), ({
  ownerState
}) => (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && (0,emotion_react_browser_esm.css)(_t5 || (_t5 = _`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `), indeterminate1Keyframe));
const LinearProgressBar2 = (0,styled.default)('span', {
  name: 'MuiLinearProgress',
  slot: 'Bar2',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.bar, styles[`barColor${(0,capitalize.default)(ownerState.color)}`], (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && styles.bar2Indeterminate, ownerState.variant === 'buffer' && styles.bar2Buffer];
  }
})(({
  ownerState,
  theme
}) => (0,esm_extends.default)({
  width: '100%',
  position: 'absolute',
  left: 0,
  bottom: 0,
  top: 0,
  transition: 'transform 0.2s linear',
  transformOrigin: 'left'
}, ownerState.variant !== 'buffer' && {
  backgroundColor: ownerState.color === 'inherit' ? 'currentColor' : theme.palette[ownerState.color].main
}, ownerState.color === 'inherit' && {
  opacity: 0.3
}, ownerState.variant === 'buffer' && {
  backgroundColor: getColorShade(theme, ownerState.color),
  transition: `transform .${TRANSITION_DURATION}s linear`
}), ({
  ownerState
}) => (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && (0,emotion_react_browser_esm.css)(_t6 || (_t6 = _`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `), indeterminate2Keyframe));
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */

const LinearProgress = /*#__PURE__*/react.forwardRef(function LinearProgress(inProps, ref) {
  const props = (0,useThemeProps.default)({
    props: inProps,
    name: 'MuiLinearProgress'
  });

  const {
    className,
    color = 'primary',
    value,
    valueBuffer,
    variant = 'indeterminate'
  } = props,
        other = (0,objectWithoutPropertiesLoose.default)(props, _excluded);

  const ownerState = (0,esm_extends.default)({}, props, {
    color,
    variant
  });

  const classes = useUtilityClasses(ownerState);
  const theme = (0,useTheme.default)();
  const rootProps = {};
  const inlineStyles = {
    bar1: {},
    bar2: {}
  };

  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      rootProps['aria-valuenow'] = Math.round(value);
      rootProps['aria-valuemin'] = 0;
      rootProps['aria-valuemax'] = 100;
      let transform = value - 100;

      if (theme.direction === 'rtl') {
        transform = -transform;
      }

      inlineStyles.bar1.transform = `translateX(${transform}%)`;
    } else if (true) {
      console.error('MUI: You need to provide a value prop ' + 'when using the determinate or buffer variant of LinearProgress .');
    }
  }

  if (variant === 'buffer') {
    if (valueBuffer !== undefined) {
      let transform = (valueBuffer || 0) - 100;

      if (theme.direction === 'rtl') {
        transform = -transform;
      }

      inlineStyles.bar2.transform = `translateX(${transform}%)`;
    } else if (true) {
      console.error('MUI: You need to provide a valueBuffer prop ' + 'when using the buffer variant of LinearProgress.');
    }
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(LinearProgressRoot, (0,esm_extends.default)({
    className: (0,clsx_m.default)(classes.root, className),
    ownerState: ownerState,
    role: "progressbar"
  }, rootProps, {
    ref: ref
  }, other, {
    children: [variant === 'buffer' ? /*#__PURE__*/(0,jsx_runtime.jsx)(LinearProgressDashed, {
      className: classes.dashed,
      ownerState: ownerState
    }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(LinearProgressBar1, {
      className: classes.bar1,
      ownerState: ownerState,
      style: inlineStyles.bar1
    }), variant === 'determinate' ? null : /*#__PURE__*/(0,jsx_runtime.jsx)(LinearProgressBar2, {
      className: classes.bar2,
      ownerState: ownerState,
      style: inlineStyles.bar2
    })]
  }));
});
 true ? LinearProgress.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

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
  color: prop_types_default().oneOfType([prop_types_default().oneOf(['inherit', 'primary', 'secondary']), (prop_types_default()).string]),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object, (prop_types_default()).bool])), (prop_types_default()).func, (prop_types_default()).object]),

  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: (prop_types_default()).number,

  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: (prop_types_default()).number,

  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   * @default 'indeterminate'
   */
  variant: prop_types_default().oneOf(['buffer', 'determinate', 'indeterminate', 'query'])
} : 0;
/* harmony default export */ const LinearProgress_LinearProgress = (LinearProgress);
// EXTERNAL MODULE: ./node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar = __webpack_require__(4386);
// EXTERNAL MODULE: ./src/utils/calculateTimeLapse.js
var calculateTimeLapse = __webpack_require__(128);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/pages/Video.css
var Video = __webpack_require__(4040);
;// CONCATENATED MODULE: ./src/pages/Video.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(Video.default, options);



/* harmony default export */ const pages_Video = (Video.default.locals || {});
// EXTERNAL MODULE: ./src/components/reusableComponents/MediaCard.js + 1 modules
var MediaCard = __webpack_require__(9318);
// EXTERNAL MODULE: ./src/components/reusableComponents/Placeholder.js + 1 modules
var Placeholder = __webpack_require__(9155);
;// CONCATENATED MODULE: ./src/theme/index.js
var PRIMARY = "#000000";
var SECONDARY = "#0087FE";
var SUCCESS = "#24BF5F";
var WARNING = "#F79E0D";
var ERROR = "#F54F4E";
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/DesktopTrendingVideo.css
var DesktopTrendingVideo = __webpack_require__(867);
;// CONCATENATED MODULE: ./src/components/DesktopTrendingVideo.css

            

var DesktopTrendingVideo_options = {};

DesktopTrendingVideo_options.insert = "head";
DesktopTrendingVideo_options.singleton = false;

var DesktopTrendingVideo_update = injectStylesIntoStyleTag_default()(DesktopTrendingVideo.default, DesktopTrendingVideo_options);



/* harmony default export */ const components_DesktopTrendingVideo = (DesktopTrendingVideo.default.locals || {});
;// CONCATENATED MODULE: ./src/components/DesktopTrendingVideo.js




function DesktopTrendingVideo_DesktopTrendingVideo(props) {
  var height = props.height,
      url = props.url,
      handleClick = props.handleClick,
      lapse = props.lapse,
      text = props.text,
      type = props.type,
      play = props.play;
  return /*#__PURE__*/react.createElement("div", {
    className: "desktop__trending__video",
    onClick: function onClick() {
      return handleClick();
    }
  }, /*#__PURE__*/react.createElement(MediaCard.default, {
    desktopTrending: true,
    src: url,
    handleClick: handleClick,
    height: height,
    screen: "list",
    playIconSize: 40,
    style: {
      width: "30%"
    },
    type: type
  }), /*#__PURE__*/react.createElement("div", {
    className: "desktop__trending__video_right"
  }, /*#__PURE__*/react.createElement("div", {
    className: "desktop__trending__video_right__top"
  }, /*#__PURE__*/react.createElement("p", {
    className: "desktop__trending__video_text"
  }, text)), /*#__PURE__*/react.createElement("div", {
    className: "desktop__trending__video_right__bottom"
  }, /*#__PURE__*/react.createElement("p", {
    className: "desktop__trending__video_text"
  }, lapse))));
}

/* harmony default export */ const src_components_DesktopTrendingVideo = (DesktopTrendingVideo_DesktopTrendingVideo);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/Paper.css
var Paper = __webpack_require__(5197);
;// CONCATENATED MODULE: ./src/components/reusableComponents/Paper.css

            

var Paper_options = {};

Paper_options.insert = "head";
Paper_options.singleton = false;

var Paper_update = injectStylesIntoStyleTag_default()(Paper.default, Paper_options);



/* harmony default export */ const reusableComponents_Paper = (Paper.default.locals || {});
;// CONCATENATED MODULE: ./src/components/reusableComponents/Paper.js


var Paper_excluded = ["children"];



function Paper_Paper(props) {
  var children = props.children,
      restProps = (0,objectWithoutProperties.default)(props, Paper_excluded);

  return /*#__PURE__*/react.createElement("div", (0,esm_extends.default)({
    className: "paper"
  }, restProps), children);
}

/* harmony default export */ const components_reusableComponents_Paper = (Paper_Paper);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/TrendingVideosPlaceholder.css
var TrendingVideosPlaceholder = __webpack_require__(7439);
;// CONCATENATED MODULE: ./src/components/reusableComponents/TrendingVideosPlaceholder.css

            

var TrendingVideosPlaceholder_options = {};

TrendingVideosPlaceholder_options.insert = "head";
TrendingVideosPlaceholder_options.singleton = false;

var TrendingVideosPlaceholder_update = injectStylesIntoStyleTag_default()(TrendingVideosPlaceholder.default, TrendingVideosPlaceholder_options);



/* harmony default export */ const reusableComponents_TrendingVideosPlaceholder = (TrendingVideosPlaceholder.default.locals || {});
;// CONCATENATED MODULE: ./src/components/reusableComponents/TrendingVideosPlaceholder.js



function TrendingVideosPlaceholder_TrendingVideosPlaceholder() {
  return /*#__PURE__*/react.createElement("div", {
    className: "trending__placeholder"
  }, /*#__PURE__*/react.createElement("div", {
    className: "trending__placeholder__left"
  }), /*#__PURE__*/react.createElement("div", {
    className: "trending__placeholder__right"
  }, /*#__PURE__*/react.createElement("div", {
    className: "trending__placeholder__right__top"
  }, /*#__PURE__*/react.createElement("div", {
    className: "trending__placeholder__right__top__child"
  }), /*#__PURE__*/react.createElement("div", {
    className: "trending__placeholder__right__top__child"
  })), /*#__PURE__*/react.createElement("div", {
    className: "trending__placeholder__right__bottom"
  })));
}

/* harmony default export */ const components_reusableComponents_TrendingVideosPlaceholder = (TrendingVideosPlaceholder_TrendingVideosPlaceholder);
;// CONCATENATED MODULE: ./src/pages/Video.js









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


























var styles = function styles(theme) {
  var _root;

  return {
    root: (_root = {
      flex: 1,
      margin: "auto"
    }, (0,defineProperty.default)(_root, theme.breakpoints.up("sm"), {
      padding: 16,
      width: "90vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "91vh"
    }), (0,defineProperty.default)(_root, "width", "100vw"), (0,defineProperty.default)(_root, "height", "93vh"), _root),
    autoPlayTrending: false
  };
};

function LinearProgressWithLabel(props) {
  return /*#__PURE__*/react.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      width: "100%",
      marginRight: "16px"
    }
  }, /*#__PURE__*/react.createElement(LinearProgress_LinearProgress, (0,esm_extends.default)({
    variant: "determinate"
  }, props, {
    style: {
      height: "8px",
      borderRadius: "5px"
    }
  }))), /*#__PURE__*/react.createElement("div", {
    style: {
      minWidth: "35px"
    }
  }, /*#__PURE__*/react.createElement("p", {
    style: {
      color: SECONDARY,
      fontWeight: 600
    }
  }, "".concat(Math.round(props.value), "%"))));
}

var Video_Video = /*#__PURE__*/function (_React$PureComponent) {
  (0,inherits.default)(Video, _React$PureComponent);

  var _super = _createSuper(Video);

  function Video(props) {
    var _this;

    (0,classCallCheck.default)(this, Video);

    _this = _super.call(this, props);

    (0,defineProperty.default)((0,assertThisInitialized.default)(_this), "componentDidMount", function () {
      _this.loadVideo();
    });

    (0,defineProperty.default)((0,assertThisInitialized.default)(_this), "loadVideo", function () {
      // this.handleVideoPlayState();
      _this.setState({
        loading: true,
        play: false
      }, function () {
        var slug = _this.props.match.params.slug;
        var url = "/api/".concat(slug);
        var history = _this.props.history;
        axios_default().get(url, {
          transformResponse: function transformResponse(data) {
            return json_bigint_default().parse(data);
          }
        }).then(function (res) {
          if (res.status === 200) {
            _this.setState({
              video: res.data,
              loading: false
            }, function () {
              return _this.handleVideoPlayState();
            });
          } else {
            history.push({
              pathname: "/"
            });
          }
        })["catch"](function (err) {
          history.push({
            pathname: "/"
          });

          _this.setState({
            error: err.message,
            loading: false
          });
        });
      });
    });

    (0,defineProperty.default)((0,assertThisInitialized.default)(_this), "downloadVideo", function (video) {
      var videoURL = video.url;
      var slug = video.slug;
      axios_default()({
        url: videoURL,
        method: "GET",
        responseType: "blob",
        onDownloadProgress: function onDownloadProgress(progressEvent) {
          var downloadProgress = Math.round(progressEvent.loaded * 100 / progressEvent.total);

          _this.setState({
            progressDialogOpen: true,
            downloadProgress: downloadProgress
          });

          if (downloadProgress === 100) {
            _this.handleProgressDialogClose();
          }
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data], {
          type: "video/mp4"
        }));
        var link = document.createElement("a");
        link.href = url;
        link.download = "".concat(slug, ".mp4");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      });
    });

    (0,defineProperty.default)((0,assertThisInitialized.default)(_this), "handleSpeedDialOpen", function () {
      _this.setState({
        speedDialOpen: true
      });
    });

    (0,defineProperty.default)((0,assertThisInitialized.default)(_this), "handleSpeedDialClose", function () {
      _this.setState({
        speedDialOpen: false
      });
    });

    (0,defineProperty.default)((0,assertThisInitialized.default)(_this), "handleVideoPlayState", function () {
      var _this$vidRef$current;

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

    (0,defineProperty.default)((0,assertThisInitialized.default)(_this), "handleShare", function (video) {
      if (navigator.share) {
        navigator.share({
          url: video.slug
        }).then(function () {
          // this.setState({ snackBarOpen: true, shareSuccessful: true });
          console.log("Thanks for sharing!");
        })["catch"](function (err) {
          // this.setState({ snackBarOpen: true, shareSuccessful: false });
          console.log("Couldn't share url because of ".concat(err.message));
        });
      } else {
        // this.setState({ snackBarOpen: true, shareSupported: false });
        console.log("Web share not supported!");
      }
    });

    (0,defineProperty.default)((0,assertThisInitialized.default)(_this), "handleProgressDialogClose", function () {
      _this.setState({
        progressDialogOpen: false,
        downloadProgress: 0
      });
    });

    (0,defineProperty.default)((0,assertThisInitialized.default)(_this), "handleTrendingVideoClick", function (slug) {
      var history = _this.props.history;
      history.push("/".concat(slug));

      _this.setState({
        autoPlayTrending: true
      });
    });

    _this.state = {
      error: false,
      loading: false,
      video: {},
      speedDialOpen: true,
      play: false,
      progressDialogOpen: false,
      downloadProgress: 0
    };
    _this.vidRef = /*#__PURE__*/react.createRef();
    _this.ref = /*#__PURE__*/react.createRef();
    return _this;
  }

  (0,createClass.default)(Video, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.match.params.slug !== this.props.match.params.slug) {
        this.loadVideo();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _video$text, _video$text2;

      var downloadVideo = this.downloadVideo,
          handleSpeedDialOpen = this.handleSpeedDialOpen,
          handleSpeedDialClose = this.handleSpeedDialClose,
          handleVideoPlayState = this.handleVideoPlayState,
          handleShare = this.handleShare,
          handleProgressDialogClose = this.handleProgressDialogClose,
          handleTrendingVideoClick = this.handleTrendingVideoClick;
      var _this$state = this.state,
          video = _this$state.video,
          loading = _this$state.loading,
          speedDialOpen = _this$state.speedDialOpen,
          play = _this$state.play,
          autoPlayTrending = _this$state.autoPlayTrending;
      var _this$props = this.props,
          classes = _this$props.classes,
          autoplayVideo = _this$props.autoplayVideo,
          history = _this$props.history,
          loggedIn = _this$props.loggedIn,
          trendingVideos = _this$props.trendingVideos,
          trendingVideosLoading = _this$props.trendingVideosLoading;
      var lapse = (0,calculateTimeLapse.calculateTimeSinceSave)(video);
      var indexOfHttps = video.text !== null && ((_video$text = video.text) === null || _video$text === void 0 ? void 0 : _video$text.indexOf("https"));
      var text = video.text !== null && ((_video$text2 = video.text) === null || _video$text2 === void 0 ? void 0 : _video$text2.slice(0, indexOfHttps).trim());
      var actions = [{
        icon: /*#__PURE__*/react.createElement(Download.default, {
          color: "primary",
          size: "small",
          onClick: function onClick() {
            return downloadVideo(video);
          }
        }),
        name: "Download"
      }, {
        icon: /*#__PURE__*/react.createElement(Button.default, {
          href: "https://twitter.com/i/status/".concat(video.parent_tweet_id),
          target: "_blank",
          rel: "noopener noreferrer",
          type: "icon"
        }, /*#__PURE__*/react.createElement(Twitter.default, {
          size: "small",
          color: "primary"
        })),
        name: "Tweet"
      }, {
        icon: /*#__PURE__*/react.createElement(Share.default, {
          size: "small",
          color: "primary",
          onClick: function onClick() {
            return handleShare(video);
          }
        }),
        name: "Share"
      }];
      var downloadProgress = /*#__PURE__*/react.createElement(Dialog.default, {
        onClose: handleProgressDialogClose,
        fullWidth: true,
        maxWidth: "sm",
        open: this.state.progressDialogOpen
      }, /*#__PURE__*/react.createElement(DialogTitle.default, {
        className: classes.title
      }, "Download Progress"), /*#__PURE__*/react.createElement(DialogContent.default, {
        style: {
          marginBottom: 8
        }
      }, /*#__PURE__*/react.createElement(LinearProgressWithLabel, {
        value: this.state.downloadProgress
      })));
      var otherTrendingVideos = trendingVideos === null || trendingVideos === void 0 ? void 0 : trendingVideos.filter(function (trendingVideo) {
        return trendingVideo.id !== video.id;
      });
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Toolbar.default, {
        ref: this.ref
      }), /*#__PURE__*/react.createElement("div", {
        className: classes.root
      }, /*#__PURE__*/react.createElement(Hidden.default, {
        smDown: true
      }, /*#__PURE__*/react.createElement("div", {
        className: "grid__container"
      }, /*#__PURE__*/react.createElement("div", {
        className: "main"
      }, /*#__PURE__*/react.createElement(react.Fragment, null, loading ? /*#__PURE__*/react.createElement(Placeholder.default, {
        style: {
          width: "100%"
        },
        height: "61vh",
        view: "detail",
        loggedIn: loggedIn
      }) : /*#__PURE__*/react.createElement(MediaCard.default, {
        view: "detail",
        device: "desktop",
        displayBottomActions: true,
        playIconSize: 60,
        style: {
          width: "100%"
        },
        type: "video",
        height: "60vh",
        src: video.url,
        handleClick: function handleClick() {
          handleVideoPlayState();
        },
        play: play,
        leftButton: /*#__PURE__*/react.createElement(Button.default, {
          startIcon: /*#__PURE__*/react.createElement(Twitter.default, {
            style: {
              fontSize: 18
            }
          }),
          target: "_blank",
          rel: "noopener noreferrer",
          href: "https://twitter.com/i/status/".concat(video.parent_tweet_id)
        }, "Tweet"),
        rightButton: /*#__PURE__*/react.createElement(Button.default, {
          startIcon: /*#__PURE__*/react.createElement(Download.default, {
            style: {
              fontSize: 18
            }
          }),
          onClick: function onClick() {
            return downloadVideo(video);
          },
          style: {
            marginLeft: 16
          }
        }, "Download"),
        autoPlay: autoplayVideo || autoPlayTrending // loggedIn={loggedIn}
        ,
        text: text,
        lapse: lapse,
        ref: this.vidRef
      }))), /*#__PURE__*/react.createElement("div", {
        className: "trending"
      }, /*#__PURE__*/react.createElement(components_reusableComponents_Paper, {
        style: {
          paddingLeft: 16,
          paddingTop: 16,
          paddingBottom: 4
        }
      }, /*#__PURE__*/react.createElement("div", {
        style: {
          marginBottom: 8
        }
      }, /*#__PURE__*/react.createElement("p", {
        className: "trending__videos__heading"
      }, "Trending this week")), /*#__PURE__*/react.createElement("div", {
        className: "trending__videos__container"
      }, trendingVideosLoading || loading ? /*#__PURE__*/react.createElement(react.Fragment, null, Array.from(new Array(5)).map(function (item, index) {
        return /*#__PURE__*/react.createElement(components_reusableComponents_TrendingVideosPlaceholder, {
          key: index
        });
      })) : /*#__PURE__*/react.createElement(react.Fragment, null, otherTrendingVideos.map(function (video) {
        var url = video.video_thumbnail_link_https !== null ? video.video_thumbnail_link_https : video.url;
        var indexOfHttps = video.text !== null && video.text.indexOf("https");
        var text = video.text !== null && video.text.slice(0, indexOfHttps).trim();
        var lapse = (0,calculateTimeLapse.calculateTimeSinceSave)(video);
        return /*#__PURE__*/react.createElement(src_components_DesktopTrendingVideo, {
          key: video.id,
          type: video.video_thumbnail_link_https ? "image" : "video",
          url: url,
          lapse: lapse,
          text: text,
          height: 80,
          handleClick: function handleClick() {
            return handleTrendingVideoClick(video.slug);
          },
          play: play
        });
      }))))))), /*#__PURE__*/react.createElement(Hidden.default, {
        smUp: true
      }, downloadProgress, /*#__PURE__*/react.createElement(react.Fragment, null, loading ? /*#__PURE__*/react.createElement(Placeholder.default, {
        style: {
          width: "100vw"
        },
        height: "42vh",
        view: "list",
        loggedIn: loggedIn
      }) : /*#__PURE__*/react.createElement(MediaCard.default, {
        displayBottomActions: true,
        playIconSize: 60,
        view: "detail",
        device: "mobile",
        src: video.url,
        play: play,
        handleClick: function handleClick() {
          return handleVideoPlayState();
        },
        autoPlay: autoplayVideo,
        height: "42vh",
        style: {
          width: "100vw"
        },
        ref: this.vidRef,
        type: "video",
        text: text,
        lapse: lapse,
        leftButton: /*#__PURE__*/react.createElement(Button.default, {
          type: "icon",
          target: "_blank",
          rel: "noopener noreferrer",
          href: "https://twitter.com/i/status/".concat(video.parent_tweet_id)
        }, /*#__PURE__*/react.createElement(Twitter.default, {
          style: {
            fontSize: 18
          }
        })),
        rightButton: /*#__PURE__*/react.createElement(Button.default, {
          type: "icon",
          onClick: function onClick() {
            return downloadVideo(video);
          },
          style: {
            marginLeft: 8
          }
        }, /*#__PURE__*/react.createElement(Download.default, {
          style: {
            fontSize: 18
          }
        }))
      }), /*#__PURE__*/react.createElement("div", {
        style: {
          padding: 16,
          paddingTop: 24,
          padingBottom: 0
        }
      }, /*#__PURE__*/react.createElement("p", {
        className: "trending__videos__heading",
        style: {
          paddingBottom: 0
        }
      }, "Trending this week")), /*#__PURE__*/react.createElement("div", {
        className: "trending__videos__mobile"
      }, trendingVideosLoading || loading ? Array.from(new Array(5)).map(function (item, idx) {
        return /*#__PURE__*/react.createElement("div", {
          className: "trending__video__mobile"
        }, /*#__PURE__*/react.createElement(Placeholder.default, {
          key: idx,
          style: {
            width: "35vw"
          },
          height: "20vh",
          view: "list",
          hideTextContainer: true
        }));
      }) : /*#__PURE__*/react.createElement(react.Fragment, null, otherTrendingVideos.map(function (video) {
        var url = video.video_thumbnail_link_https !== null ? video.video_thumbnail_link_https : video.url;
        var indexOfHttps = video.text !== null && video.text.indexOf("https");
        var text = video.text !== null && video.text.slice(0, indexOfHttps).trim();
        var lapse = (0,calculateTimeLapse.calculateTimeSinceSave)(video);
        return /*#__PURE__*/react.createElement("div", {
          className: "trending__video__mobile",
          key: video.id
        }, /*#__PURE__*/react.createElement(MediaCard.default, {
          displayBottomActions: true,
          playIconSize: 40,
          view: "list",
          src: url,
          play: true,
          handleClick: function handleClick() {
            return handleTrendingVideoClick(video.slug);
          },
          autoPlay: autoplayVideo,
          height: "20vh",
          style: {
            width: "35vw"
          },
          type: video.video_thumbnail_link_https ? "image" : "video",
          lapse: lapse
        }));
      })))))));
    }
  }]);

  return Video;
}(react.PureComponent);
/* harmony default export */ const src_pages_Video = ((0,withStyles.default)(styles)((0,react_router.withRouter)(Video_Video)));

/***/ }),

/***/ 128:
/*!*****************************************!*\
  !*** ./src/utils/calculateTimeLapse.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateTimeSinceSave": () => (/* binding */ calculateTimeSinceSave)
/* harmony export */ });
var calculateTimeSinceSave = function calculateTimeSinceSave(video) {
  var dateNow = Date.parse(new Date());
  var dateSaved = Date.parse(video.date_saved_utc);
  var timeLapse = dateNow - dateSaved;

  if (timeLapse > 0 && timeLapse < 60000) {
    var lapseInSeconds = Math.floor(timeLapse / 1000);
    var lapseInSecondsStr = "".concat(lapseInSeconds, " ").concat(lapseInSeconds === 1 ? "second" : "seconds", " ago");
    return lapseInSecondsStr;
  } else if (timeLapse >= 60000 && timeLapse < 3600000) {
    var lapseInMinutes = Math.floor(timeLapse / 60000);
    var lapseInMinutesStr = "".concat(lapseInMinutes, " ").concat(lapseInMinutes === 1 ? "minute" : "minutes", " ago");
    return lapseInMinutesStr;
  } else if (timeLapse >= 3600000 && timeLapse < 86400000) {
    var lapseInHours = Math.floor(timeLapse / 3600000);
    var lapseInHoursStr = "".concat(lapseInHours, " ").concat(lapseInHours === 1 ? "hour" : "hours", " ago");
    return lapseInHoursStr;
  } else if (timeLapse >= 86400000 && timeLapse < 604800000) {
    var lapseInDays = Math.floor(timeLapse / 86400000);
    var lapseInDaysStr = "".concat(lapseInDays, " ").concat(lapseInDays === 1 ? "day" : "days", " ago");
    return lapseInDaysStr;
  } else if (timeLapse >= 604800000 && timeLapse < 2629746000) {
    var lapseInWeeks = Math.floor(timeLapse / 604800000);
    var lapseInWeeksStr = "".concat(lapseInWeeks, " ").concat(lapseInWeeks === 1 ? "week" : "weeks", " ago");
    return lapseInWeeksStr;
  } else if (timeLapse >= 2629746000 && timeLapse < 31556952000) {
    var lapseInMonths = Math.floor(timeLapse / 2629746000);
    var lapseInMonthsStr = "".concat(lapseInMonths, " ").concat(lapseInMonths === 1 ? "month" : "months", " ago");
    return lapseInMonthsStr;
  } else if (timeLapse >= 31556952000) {
    var lapseInYears = Math.floor(timeLapse / 31556952000);
    var lapseInYearsStr = "".concat(lapseInYears, " ").concat(lapseInYears === 1 ? "year" : "years", " ago");
    return lapseInYearsStr;
  }
};

/***/ }),

/***/ 4431:
/*!************************************************!*\
  !*** ./node_modules/bignumber.js/bignumber.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function (globalObject) {
  'use strict';

/*
 *      bignumber.js v9.0.1
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2020 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */


  var BigNumber,
    isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    mathceil = Math.ceil,
    mathfloor = Math.floor,

    bignumberError = '[BigNumber Error] ',
    tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

    BASE = 1e14,
    LOG_BASE = 14,
    MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
    // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
    POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
    SQRT_BASE = 1e7,

    // EDITABLE
    // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
    // the arguments to toExponential, toFixed, toFormat, and toPrecision.
    MAX = 1E9;                                   // 0 to MAX_INT32


  /*
   * Create and return a BigNumber constructor.
   */
  function clone(configObject) {
    var div, convertBase, parseNumeric,
      P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
      ONE = new BigNumber(1),


      //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


      // The default values below must be integers within the inclusive ranges stated.
      // The values can also be changed at run-time using BigNumber.set.

      // The maximum number of decimal places for operations involving division.
      DECIMAL_PLACES = 20,                     // 0 to MAX

      // The rounding mode used when rounding to the above decimal places, and when using
      // toExponential, toFixed, toFormat and toPrecision, and round (default value).
      // UP         0 Away from zero.
      // DOWN       1 Towards zero.
      // CEIL       2 Towards +Infinity.
      // FLOOR      3 Towards -Infinity.
      // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      ROUNDING_MODE = 4,                       // 0 to 8

      // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

      // The exponent value at and beneath which toString returns exponential notation.
      // Number type: -7
      TO_EXP_NEG = -7,                         // 0 to -MAX

      // The exponent value at and above which toString returns exponential notation.
      // Number type: 21
      TO_EXP_POS = 21,                         // 0 to MAX

      // RANGE : [MIN_EXP, MAX_EXP]

      // The minimum exponent value, beneath which underflow to zero occurs.
      // Number type: -324  (5e-324)
      MIN_EXP = -1e7,                          // -1 to -MAX

      // The maximum exponent value, above which overflow to Infinity occurs.
      // Number type:  308  (1.7976931348623157e+308)
      // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
      MAX_EXP = 1e7,                           // 1 to MAX

      // Whether to use cryptographically-secure random number generation, if available.
      CRYPTO = false,                          // true or false

      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP        0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN      1 The remainder has the same sign as the dividend.
      //             This modulo mode is commonly known as 'truncated division' and is
      //             equivalent to (a % n) in JavaScript.
      // FLOOR     3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
      // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
      //             The remainder is always positive.
      //
      // The truncated division, floored division, Euclidian division and IEEE 754 remainder
      // modes are commonly used for the modulus operation.
      // Although the other rounding modes can also be used, they may not give useful results.
      MODULO_MODE = 1,                         // 0 to 9

      // The maximum number of significant digits of the result of the exponentiatedBy operation.
      // If POW_PRECISION is 0, there will be unlimited significant digits.
      POW_PRECISION = 0,                    // 0 to MAX

      // The format specification used by the BigNumber.prototype.toFormat method.
      FORMAT = {
        prefix: '',
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ',',
        decimalSeparator: '.',
        fractionGroupSize: 0,
        fractionGroupSeparator: '\xA0',      // non-breaking space
        suffix: ''
      },

      // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
      // '-', '.', whitespace, or repeated character.
      // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
      ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';


    //------------------------------------------------------------------------------------------


    // CONSTRUCTOR


    /*
     * The BigNumber constructor and exported function.
     * Create and return a new instance of a BigNumber object.
     *
     * v {number|string|BigNumber} A numeric value.
     * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
     */
    function BigNumber(v, b) {
      var alphabet, c, caseChanged, e, i, isNum, len, str,
        x = this;

      // Enable constructor call without `new`.
      if (!(x instanceof BigNumber)) return new BigNumber(v, b);

      if (b == null) {

        if (v && v._isBigNumber === true) {
          x.s = v.s;

          if (!v.c || v.e > MAX_EXP) {
            x.c = x.e = null;
          } else if (v.e < MIN_EXP) {
            x.c = [x.e = 0];
          } else {
            x.e = v.e;
            x.c = v.c.slice();
          }

          return;
        }

        if ((isNum = typeof v == 'number') && v * 0 == 0) {

          // Use `1 / n` to handle minus zero also.
          x.s = 1 / v < 0 ? (v = -v, -1) : 1;

          // Fast path for integers, where n < 2147483648 (2**31).
          if (v === ~~v) {
            for (e = 0, i = v; i >= 10; i /= 10, e++);

            if (e > MAX_EXP) {
              x.c = x.e = null;
            } else {
              x.e = e;
              x.c = [v];
            }

            return;
          }

          str = String(v);
        } else {

          if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

          x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
        }

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

        // Exponential form?
        if ((i = str.search(/e/i)) > 0) {

          // Determine exponent.
          if (e < 0) e = i;
          e += +str.slice(i + 1);
          str = str.substring(0, i);
        } else if (e < 0) {

          // Integer.
          e = str.length;
        }

      } else {

        // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
        intCheck(b, 2, ALPHABET.length, 'Base');

        // Allow exponential notation to be used with base 10 argument, while
        // also rounding to DECIMAL_PLACES as with other bases.
        if (b == 10) {
          x = new BigNumber(v);
          return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
        }

        str = String(v);

        if (isNum = typeof v == 'number') {

          // Avoid potential interpretation of Infinity and NaN as base 44+ values.
          if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

          x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

          // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
          if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
            throw Error
             (tooManyDigits + v);
          }
        } else {
          x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
        }

        alphabet = ALPHABET.slice(0, b);
        e = i = 0;

        // Check that str is a valid base b number.
        // Don't use RegExp, so alphabet can contain special characters.
        for (len = str.length; i < len; i++) {
          if (alphabet.indexOf(c = str.charAt(i)) < 0) {
            if (c == '.') {

              // If '.' is not the first character and it has not be found before.
              if (i > e) {
                e = len;
                continue;
              }
            } else if (!caseChanged) {

              // Allow e.g. hexadecimal 'FF' as well as 'ff'.
              if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
                  str == str.toLowerCase() && (str = str.toUpperCase())) {
                caseChanged = true;
                i = -1;
                e = 0;
                continue;
              }
            }

            return parseNumeric(x, String(v), isNum, b);
          }
        }

        // Prevent later check for length on converted number.
        isNum = false;
        str = convertBase(str, b, 10, x.s);

        // Decimal point?
        if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
        else e = str.length;
      }

      // Determine leading zeros.
      for (i = 0; str.charCodeAt(i) === 48; i++);

      // Determine trailing zeros.
      for (len = str.length; str.charCodeAt(--len) === 48;);

      if (str = str.slice(i, ++len)) {
        len -= i;

        // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
        if (isNum && BigNumber.DEBUG &&
          len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
            throw Error
             (tooManyDigits + (x.s * v));
        }

         // Overflow?
        if ((e = e - i - 1) > MAX_EXP) {

          // Infinity.
          x.c = x.e = null;

        // Underflow?
        } else if (e < MIN_EXP) {

          // Zero.
          x.c = [x.e = 0];
        } else {
          x.e = e;
          x.c = [];

          // Transform base

          // e is the base 10 exponent.
          // i is where to slice str to get the first element of the coefficient array.
          i = (e + 1) % LOG_BASE;
          if (e < 0) i += LOG_BASE;  // i < 1

          if (i < len) {
            if (i) x.c.push(+str.slice(0, i));

            for (len -= LOG_BASE; i < len;) {
              x.c.push(+str.slice(i, i += LOG_BASE));
            }

            i = LOG_BASE - (str = str.slice(i)).length;
          } else {
            i -= len;
          }

          for (; i--; str += '0');
          x.c.push(+str);
        }
      } else {

        // Zero.
        x.c = [x.e = 0];
      }
    }


    // CONSTRUCTOR PROPERTIES


    BigNumber.clone = clone;

    BigNumber.ROUND_UP = 0;
    BigNumber.ROUND_DOWN = 1;
    BigNumber.ROUND_CEIL = 2;
    BigNumber.ROUND_FLOOR = 3;
    BigNumber.ROUND_HALF_UP = 4;
    BigNumber.ROUND_HALF_DOWN = 5;
    BigNumber.ROUND_HALF_EVEN = 6;
    BigNumber.ROUND_HALF_CEIL = 7;
    BigNumber.ROUND_HALF_FLOOR = 8;
    BigNumber.EUCLID = 9;


    /*
     * Configure infrequently-changing library-wide settings.
     *
     * Accept an object with the following optional properties (if the value of a property is
     * a number, it must be an integer within the inclusive range stated):
     *
     *   DECIMAL_PLACES   {number}           0 to MAX
     *   ROUNDING_MODE    {number}           0 to 8
     *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
     *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
     *   CRYPTO           {boolean}          true or false
     *   MODULO_MODE      {number}           0 to 9
     *   POW_PRECISION       {number}           0 to MAX
     *   ALPHABET         {string}           A string of two or more unique characters which does
     *                                       not contain '.'.
     *   FORMAT           {object}           An object with some of the following properties:
     *     prefix                 {string}
     *     groupSize              {number}
     *     secondaryGroupSize     {number}
     *     groupSeparator         {string}
     *     decimalSeparator       {string}
     *     fractionGroupSize      {number}
     *     fractionGroupSeparator {string}
     *     suffix                 {string}
     *
     * (The values assigned to the above FORMAT object properties are not checked for validity.)
     *
     * E.g.
     * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
     *
     * Ignore properties/parameters set to null or undefined, except for ALPHABET.
     *
     * Return an object with the properties current values.
     */
    BigNumber.config = BigNumber.set = function (obj) {
      var p, v;

      if (obj != null) {

        if (typeof obj == 'object') {

          // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            DECIMAL_PLACES = v;
          }

          // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
          // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
            v = obj[p];
            intCheck(v, 0, 8, p);
            ROUNDING_MODE = v;
          }

          // EXPONENTIAL_AT {number|number[]}
          // Integer, -MAX to MAX inclusive or
          // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
          // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, 0, p);
              intCheck(v[1], 0, MAX, p);
              TO_EXP_NEG = v[0];
              TO_EXP_POS = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
            }
          }

          // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
          // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
          // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
          if (obj.hasOwnProperty(p = 'RANGE')) {
            v = obj[p];
            if (v && v.pop) {
              intCheck(v[0], -MAX, -1, p);
              intCheck(v[1], 1, MAX, p);
              MIN_EXP = v[0];
              MAX_EXP = v[1];
            } else {
              intCheck(v, -MAX, MAX, p);
              if (v) {
                MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
              } else {
                throw Error
                 (bignumberError + p + ' cannot be zero: ' + v);
              }
            }
          }

          // CRYPTO {boolean} true or false.
          // '[BigNumber Error] CRYPTO not true or false: {v}'
          // '[BigNumber Error] crypto unavailable'
          if (obj.hasOwnProperty(p = 'CRYPTO')) {
            v = obj[p];
            if (v === !!v) {
              if (v) {
                if (typeof crypto != 'undefined' && crypto &&
                 (crypto.getRandomValues || crypto.randomBytes)) {
                  CRYPTO = v;
                } else {
                  CRYPTO = !v;
                  throw Error
                   (bignumberError + 'crypto unavailable');
                }
              } else {
                CRYPTO = v;
              }
            } else {
              throw Error
               (bignumberError + p + ' not true or false: ' + v);
            }
          }

          // MODULO_MODE {number} Integer, 0 to 9 inclusive.
          // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
            v = obj[p];
            intCheck(v, 0, 9, p);
            MODULO_MODE = v;
          }

          // POW_PRECISION {number} Integer, 0 to MAX inclusive.
          // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
          if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
            v = obj[p];
            intCheck(v, 0, MAX, p);
            POW_PRECISION = v;
          }

          // FORMAT {object}
          // '[BigNumber Error] FORMAT not an object: {v}'
          if (obj.hasOwnProperty(p = 'FORMAT')) {
            v = obj[p];
            if (typeof v == 'object') FORMAT = v;
            else throw Error
             (bignumberError + p + ' not an object: ' + v);
          }

          // ALPHABET {string}
          // '[BigNumber Error] ALPHABET invalid: {v}'
          if (obj.hasOwnProperty(p = 'ALPHABET')) {
            v = obj[p];

            // Disallow if less than two characters,
            // or if it contains '+', '-', '.', whitespace, or a repeated character.
            if (typeof v == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
              ALPHABET = v;
            } else {
              throw Error
               (bignumberError + p + ' invalid: ' + v);
            }
          }

        } else {

          // '[BigNumber Error] Object expected: {v}'
          throw Error
           (bignumberError + 'Object expected: ' + obj);
        }
      }

      return {
        DECIMAL_PLACES: DECIMAL_PLACES,
        ROUNDING_MODE: ROUNDING_MODE,
        EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
        RANGE: [MIN_EXP, MAX_EXP],
        CRYPTO: CRYPTO,
        MODULO_MODE: MODULO_MODE,
        POW_PRECISION: POW_PRECISION,
        FORMAT: FORMAT,
        ALPHABET: ALPHABET
      };
    };


    /*
     * Return true if v is a BigNumber instance, otherwise return false.
     *
     * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
     *
     * v {any}
     *
     * '[BigNumber Error] Invalid BigNumber: {v}'
     */
    BigNumber.isBigNumber = function (v) {
      if (!v || v._isBigNumber !== true) return false;
      if (!BigNumber.DEBUG) return true;

      var i, n,
        c = v.c,
        e = v.e,
        s = v.s;

      out: if ({}.toString.call(c) == '[object Array]') {

        if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

          // If the first element is zero, the BigNumber value must be zero.
          if (c[0] === 0) {
            if (e === 0 && c.length === 1) return true;
            break out;
          }

          // Calculate number of digits that c[0] should have, based on the exponent.
          i = (e + 1) % LOG_BASE;
          if (i < 1) i += LOG_BASE;

          // Calculate number of digits of c[0].
          //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
          if (String(c[0]).length == i) {

            for (i = 0; i < c.length; i++) {
              n = c[i];
              if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
            }

            // Last element cannot be zero, unless it is the only element.
            if (n !== 0) return true;
          }
        }

      // Infinity/NaN
      } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
        return true;
      }

      throw Error
        (bignumberError + 'Invalid BigNumber: ' + v);
    };


    /*
     * Return a new BigNumber whose value is the maximum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.maximum = BigNumber.max = function () {
      return maxOrMin(arguments, P.lt);
    };


    /*
     * Return a new BigNumber whose value is the minimum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.minimum = BigNumber.min = function () {
      return maxOrMin(arguments, P.gt);
    };


    /*
     * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
     * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
     * zeros are produced).
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
     * '[BigNumber Error] crypto unavailable'
     */
    BigNumber.random = (function () {
      var pow2_53 = 0x20000000000000;

      // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
      // Check if Math.random() produces more than 32 bits of randomness.
      // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
      // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
      var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
       ? function () { return mathfloor(Math.random() * pow2_53); }
       : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
         (Math.random() * 0x800000 | 0); };

      return function (dp) {
        var a, b, e, k, v,
          i = 0,
          c = [],
          rand = new BigNumber(ONE);

        if (dp == null) dp = DECIMAL_PLACES;
        else intCheck(dp, 0, MAX);

        k = mathceil(dp / LOG_BASE);

        if (CRYPTO) {

          // Browsers supporting crypto.getRandomValues.
          if (crypto.getRandomValues) {

            a = crypto.getRandomValues(new Uint32Array(k *= 2));

            for (; i < k;) {

              // 53 bits:
              // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
              // 11111 11111111 11111111 11111111 11100000 00000000 00000000
              // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
              //                                     11111 11111111 11111111
              // 0x20000 is 2^21.
              v = a[i] * 0x20000 + (a[i + 1] >>> 11);

              // Rejection sampling:
              // 0 <= v < 9007199254740992
              // Probability that v >= 9e15, is
              // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
              if (v >= 9e15) {
                b = crypto.getRandomValues(new Uint32Array(2));
                a[i] = b[0];
                a[i + 1] = b[1];
              } else {

                // 0 <= v <= 8999999999999999
                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 2;
              }
            }
            i = k / 2;

          // Node.js supporting crypto.randomBytes.
          } else if (crypto.randomBytes) {

            // buffer
            a = crypto.randomBytes(k *= 7);

            for (; i < k;) {

              // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
              // 0x100000000 is 2^32, 0x1000000 is 2^24
              // 11111 11111111 11111111 11111111 11111111 11111111 11111111
              // 0 <= v < 9007199254740992
              v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
                 (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
                 (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

              if (v >= 9e15) {
                crypto.randomBytes(7).copy(a, i);
              } else {

                // 0 <= (v % 1e14) <= 99999999999999
                c.push(v % 1e14);
                i += 7;
              }
            }
            i = k / 7;
          } else {
            CRYPTO = false;
            throw Error
             (bignumberError + 'crypto unavailable');
          }
        }

        // Use Math.random.
        if (!CRYPTO) {

          for (; i < k;) {
            v = random53bitInt();
            if (v < 9e15) c[i++] = v % 1e14;
          }
        }

        k = c[--i];
        dp %= LOG_BASE;

        // Convert trailing digits to zeros according to dp.
        if (k && dp) {
          v = POWS_TEN[LOG_BASE - dp];
          c[i] = mathfloor(k / v) * v;
        }

        // Remove trailing elements which are zero.
        for (; c[i] === 0; c.pop(), i--);

        // Zero?
        if (i < 0) {
          c = [e = 0];
        } else {

          // Remove leading elements which are zero and adjust exponent accordingly.
          for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

          // Count the digits of the first element of c to determine leading zeros, and...
          for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

          // adjust the exponent accordingly.
          if (i < LOG_BASE) e -= LOG_BASE - i;
        }

        rand.e = e;
        rand.c = c;
        return rand;
      };
    })();


    /*
     * Return a BigNumber whose value is the sum of the arguments.
     *
     * arguments {number|string|BigNumber}
     */
    BigNumber.sum = function () {
      var i = 1,
        args = arguments,
        sum = new BigNumber(args[0]);
      for (; i < args.length;) sum = sum.plus(args[i++]);
      return sum;
    };


    // PRIVATE FUNCTIONS


    // Called by BigNumber and BigNumber.prototype.toString.
    convertBase = (function () {
      var decimal = '0123456789';

      /*
       * Convert string of baseIn to an array of numbers of baseOut.
       * Eg. toBaseOut('255', 10, 16) returns [15, 15].
       * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
       */
      function toBaseOut(str, baseIn, baseOut, alphabet) {
        var j,
          arr = [0],
          arrL,
          i = 0,
          len = str.length;

        for (; i < len;) {
          for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

          arr[0] += alphabet.indexOf(str.charAt(i++));

          for (j = 0; j < arr.length; j++) {

            if (arr[j] > baseOut - 1) {
              if (arr[j + 1] == null) arr[j + 1] = 0;
              arr[j + 1] += arr[j] / baseOut | 0;
              arr[j] %= baseOut;
            }
          }
        }

        return arr.reverse();
      }

      // Convert a numeric string of baseIn to a numeric string of baseOut.
      // If the caller is toString, we are converting from base 10 to baseOut.
      // If the caller is BigNumber, we are converting from baseIn to base 10.
      return function (str, baseIn, baseOut, sign, callerIsToString) {
        var alphabet, d, e, k, r, x, xc, y,
          i = str.indexOf('.'),
          dp = DECIMAL_PLACES,
          rm = ROUNDING_MODE;

        // Non-integer.
        if (i >= 0) {
          k = POW_PRECISION;

          // Unlimited precision.
          POW_PRECISION = 0;
          str = str.replace('.', '');
          y = new BigNumber(baseIn);
          x = y.pow(str.length - i);
          POW_PRECISION = k;

          // Convert str as if an integer, then restore the fraction part by dividing the
          // result by its base raised to a power.

          y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
           10, baseOut, decimal);
          y.e = y.c.length;
        }

        // Convert the number as integer.

        xc = toBaseOut(str, baseIn, baseOut, callerIsToString
         ? (alphabet = ALPHABET, decimal)
         : (alphabet = decimal, ALPHABET));

        // xc now represents str as an integer and converted to baseOut. e is the exponent.
        e = k = xc.length;

        // Remove trailing zeros.
        for (; xc[--k] == 0; xc.pop());

        // Zero?
        if (!xc[0]) return alphabet.charAt(0);

        // Does str represent an integer? If so, no need for the division.
        if (i < 0) {
          --e;
        } else {
          x.c = xc;
          x.e = e;

          // The sign is needed for correct rounding.
          x.s = sign;
          x = div(x, y, dp, rm, baseOut);
          xc = x.c;
          r = x.r;
          e = x.e;
        }

        // xc now represents str converted to baseOut.

        // THe index of the rounding digit.
        d = e + dp + 1;

        // The rounding digit: the digit to the right of the digit that may be rounded up.
        i = xc[d];

        // Look at the rounding digits and mode to determine whether to round up.

        k = baseOut / 2;
        r = r || d < 0 || xc[d + 1] != null;

        r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
              : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
               rm == (x.s < 0 ? 8 : 7));

        // If the index of the rounding digit is not greater than zero, or xc represents
        // zero, then the result of the base conversion is zero or, if rounding up, a value
        // such as 0.00001.
        if (d < 1 || !xc[0]) {

          // 1^-dp or 0
          str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
        } else {

          // Truncate xc to the required number of decimal places.
          xc.length = d;

          // Round up?
          if (r) {

            // Rounding up may mean the previous digit has to be rounded up and so on.
            for (--baseOut; ++xc[--d] > baseOut;) {
              xc[d] = 0;

              if (!d) {
                ++e;
                xc = [1].concat(xc);
              }
            }
          }

          // Determine trailing zeros.
          for (k = xc.length; !xc[--k];);

          // E.g. [4, 11, 15] becomes 4bf.
          for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

          // Add leading zeros, decimal point and trailing zeros as required.
          str = toFixedPoint(str, e, alphabet.charAt(0));
        }

        // The caller will add the sign.
        return str;
      };
    })();


    // Perform division in the specified base. Called by div and convertBase.
    div = (function () {

      // Assume non-zero x and k.
      function multiply(x, k, base) {
        var m, temp, xlo, xhi,
          carry = 0,
          i = x.length,
          klo = k % SQRT_BASE,
          khi = k / SQRT_BASE | 0;

        for (x = x.slice(); i--;) {
          xlo = x[i] % SQRT_BASE;
          xhi = x[i] / SQRT_BASE | 0;
          m = khi * xlo + xhi * klo;
          temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
          carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
          x[i] = temp % base;
        }

        if (carry) x = [carry].concat(x);

        return x;
      }

      function compare(a, b, aL, bL) {
        var i, cmp;

        if (aL != bL) {
          cmp = aL > bL ? 1 : -1;
        } else {

          for (i = cmp = 0; i < aL; i++) {

            if (a[i] != b[i]) {
              cmp = a[i] > b[i] ? 1 : -1;
              break;
            }
          }
        }

        return cmp;
      }

      function subtract(a, b, aL, base) {
        var i = 0;

        // Subtract b from a.
        for (; aL--;) {
          a[aL] -= i;
          i = a[aL] < b[aL] ? 1 : 0;
          a[aL] = i * base + a[aL] - b[aL];
        }

        // Remove leading zeros.
        for (; !a[0] && a.length > 1; a.splice(0, 1));
      }

      // x: dividend, y: divisor.
      return function (x, y, dp, rm, base) {
        var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
          yL, yz,
          s = x.s == y.s ? 1 : -1,
          xc = x.c,
          yc = y.c;

        // Either NaN, Infinity or 0?
        if (!xc || !xc[0] || !yc || !yc[0]) {

          return new BigNumber(

           // Return NaN if either NaN, or both Infinity or 0.
           !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            xc && xc[0] == 0 || !yc ? s * 0 : s / 0
         );
        }

        q = new BigNumber(s);
        qc = q.c = [];
        e = x.e - y.e;
        s = dp + e + 1;

        if (!base) {
          base = BASE;
          e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
          s = s / LOG_BASE | 0;
        }

        // Result exponent may be one less then the current value of e.
        // The coefficients of the BigNumbers from convertBase may have trailing zeros.
        for (i = 0; yc[i] == (xc[i] || 0); i++);

        if (yc[i] > (xc[i] || 0)) e--;

        if (s < 0) {
          qc.push(1);
          more = true;
        } else {
          xL = xc.length;
          yL = yc.length;
          i = 0;
          s += 2;

          // Normalise xc and yc so highest order digit of yc is >= base / 2.

          n = mathfloor(base / (yc[0] + 1));

          // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
          // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
          if (n > 1) {
            yc = multiply(yc, n, base);
            xc = multiply(xc, n, base);
            yL = yc.length;
            xL = xc.length;
          }

          xi = yL;
          rem = xc.slice(0, yL);
          remL = rem.length;

          // Add zeros to make remainder as long as divisor.
          for (; remL < yL; rem[remL++] = 0);
          yz = yc.slice();
          yz = [0].concat(yz);
          yc0 = yc[0];
          if (yc[1] >= base / 2) yc0++;
          // Not necessary, but to prevent trial digit n > base, when using base 3.
          // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

          do {
            n = 0;

            // Compare divisor and remainder.
            cmp = compare(yc, rem, yL, remL);

            // If divisor < remainder.
            if (cmp < 0) {

              // Calculate trial digit, n.

              rem0 = rem[0];
              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

              // n is how many times the divisor goes into the current remainder.
              n = mathfloor(rem0 / yc0);

              //  Algorithm:
              //  product = divisor multiplied by trial digit (n).
              //  Compare product and remainder.
              //  If product is greater than remainder:
              //    Subtract divisor from product, decrement trial digit.
              //  Subtract product from remainder.
              //  If product was less than remainder at the last compare:
              //    Compare new remainder and divisor.
              //    If remainder is greater than divisor:
              //      Subtract divisor from remainder, increment trial digit.

              if (n > 1) {

                // n may be > base only when base is 3.
                if (n >= base) n = base - 1;

                // product = divisor * trial digit.
                prod = multiply(yc, n, base);
                prodL = prod.length;
                remL = rem.length;

                // Compare product and remainder.
                // If product > remainder then trial digit n too high.
                // n is 1 too high about 5% of the time, and is not known to have
                // ever been more than 1 too high.
                while (compare(prod, rem, prodL, remL) == 1) {
                  n--;

                  // Subtract divisor from product.
                  subtract(prod, yL < prodL ? yz : yc, prodL, base);
                  prodL = prod.length;
                  cmp = 1;
                }
              } else {

                // n is 0 or 1, cmp is -1.
                // If n is 0, there is no need to compare yc and rem again below,
                // so change cmp to 1 to avoid it.
                // If n is 1, leave cmp as -1, so yc and rem are compared again.
                if (n == 0) {

                  // divisor < remainder, so n must be at least 1.
                  cmp = n = 1;
                }

                // product = divisor
                prod = yc.slice();
                prodL = prod.length;
              }

              if (prodL < remL) prod = [0].concat(prod);

              // Subtract product from remainder.
              subtract(rem, prod, remL, base);
              remL = rem.length;

               // If product was < remainder.
              if (cmp == -1) {

                // Compare divisor and new remainder.
                // If divisor < new remainder, subtract divisor from remainder.
                // Trial digit n too low.
                // n is 1 too low about 5% of the time, and very rarely 2 too low.
                while (compare(yc, rem, yL, remL) < 1) {
                  n++;

                  // Subtract divisor from remainder.
                  subtract(rem, yL < remL ? yz : yc, remL, base);
                  remL = rem.length;
                }
              }
            } else if (cmp === 0) {
              n++;
              rem = [0];
            } // else cmp === 1 and n will be 0

            // Add the next digit, n, to the result array.
            qc[i++] = n;

            // Update the remainder.
            if (rem[0]) {
              rem[remL++] = xc[xi] || 0;
            } else {
              rem = [xc[xi]];
              remL = 1;
            }
          } while ((xi++ < xL || rem[0] != null) && s--);

          more = rem[0] != null;

          // Leading zero?
          if (!qc[0]) qc.splice(0, 1);
        }

        if (base == BASE) {

          // To calculate q.e, first get the number of digits of qc[0].
          for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

          round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

        // Caller is convertBase.
        } else {
          q.e = e;
          q.r = +more;
        }

        return q;
      };
    })();


    /*
     * Return a string representing the value of BigNumber n in fixed-point or exponential
     * notation rounded to the specified decimal places or significant digits.
     *
     * n: a BigNumber.
     * i: the index of the last digit required (i.e. the digit that may be rounded up).
     * rm: the rounding mode.
     * id: 1 (toExponential) or 2 (toPrecision).
     */
    function format(n, i, rm, id) {
      var c0, e, ne, len, str;

      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      if (!n.c) return n.toString();

      c0 = n.c[0];
      ne = n.e;

      if (i == null) {
        str = coeffToString(n.c);
        str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
         ? toExponential(str, ne)
         : toFixedPoint(str, ne, '0');
      } else {
        n = round(new BigNumber(n), i, rm);

        // n.e may have changed if the value was rounded up.
        e = n.e;

        str = coeffToString(n.c);
        len = str.length;

        // toPrecision returns exponential notation if the number of significant digits
        // specified is less than the number of digits necessary to represent the integer
        // part of the value in fixed-point notation.

        // Exponential notation.
        if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

          // Append zeros?
          for (; len < i; str += '0', len++);
          str = toExponential(str, e);

        // Fixed-point notation.
        } else {
          i -= ne;
          str = toFixedPoint(str, e, '0');

          // Append zeros?
          if (e + 1 > len) {
            if (--i > 0) for (str += '.'; i--; str += '0');
          } else {
            i += e - len;
            if (i > 0) {
              if (e + 1 == len) str += '.';
              for (; i--; str += '0');
            }
          }
        }
      }

      return n.s < 0 && c0 ? '-' + str : str;
    }


    // Handle BigNumber.max and BigNumber.min.
    function maxOrMin(args, method) {
      var n,
        i = 1,
        m = new BigNumber(args[0]);

      for (; i < args.length; i++) {
        n = new BigNumber(args[i]);

        // If any number is NaN, return NaN.
        if (!n.s) {
          m = n;
          break;
        } else if (method.call(m, n)) {
          m = n;
        }
      }

      return m;
    }


    /*
     * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
     * Called by minus, plus and times.
     */
    function normalise(n, c, e) {
      var i = 1,
        j = c.length;

       // Remove trailing zeros.
      for (; !c[--j]; c.pop());

      // Calculate the base 10 exponent. First get the number of digits of c[0].
      for (j = c[0]; j >= 10; j /= 10, i++);

      // Overflow?
      if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

        // Infinity.
        n.c = n.e = null;

      // Underflow?
      } else if (e < MIN_EXP) {

        // Zero.
        n.c = [n.e = 0];
      } else {
        n.e = e;
        n.c = c;
      }

      return n;
    }


    // Handle values that fail the validity test in BigNumber.
    parseNumeric = (function () {
      var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
        dotAfter = /^([^.]+)\.$/,
        dotBefore = /^\.([^.]+)$/,
        isInfinityOrNaN = /^-?(Infinity|NaN)$/,
        whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

      return function (x, str, isNum, b) {
        var base,
          s = isNum ? str : str.replace(whitespaceOrPlus, '');

        // No exception on ±Infinity or NaN.
        if (isInfinityOrNaN.test(s)) {
          x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
        } else {
          if (!isNum) {

            // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
            s = s.replace(basePrefix, function (m, p1, p2) {
              base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
              return !b || b == base ? p1 : m;
            });

            if (b) {
              base = b;

              // E.g. '1.' to '1', '.1' to '0.1'
              s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
            }

            if (str != s) return new BigNumber(s, base);
          }

          // '[BigNumber Error] Not a number: {n}'
          // '[BigNumber Error] Not a base {b} number: {n}'
          if (BigNumber.DEBUG) {
            throw Error
              (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
          }

          // NaN
          x.s = null;
        }

        x.c = x.e = null;
      }
    })();


    /*
     * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
     * If r is truthy, it is known that there are more digits after the rounding digit.
     */
    function round(x, sd, rm, r) {
      var d, i, j, k, n, ni, rd,
        xc = x.c,
        pows10 = POWS_TEN;

      // if x is not Infinity or NaN...
      if (xc) {

        // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
        // n is a base 1e14 number, the value of the element of array x.c containing rd.
        // ni is the index of n within x.c.
        // d is the number of digits of n.
        // i is the index of rd within n including leading zeros.
        // j is the actual index of rd within n (if < 0, rd is a leading zero).
        out: {

          // Get the number of digits of the first element of xc.
          for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
          i = sd - d;

          // If the rounding digit is in the first element of xc...
          if (i < 0) {
            i += LOG_BASE;
            j = sd;
            n = xc[ni = 0];

            // Get the rounding digit at index j of n.
            rd = n / pows10[d - j - 1] % 10 | 0;
          } else {
            ni = mathceil((i + 1) / LOG_BASE);

            if (ni >= xc.length) {

              if (r) {

                // Needed by sqrt.
                for (; xc.length <= ni; xc.push(0));
                n = rd = 0;
                d = 1;
                i %= LOG_BASE;
                j = i - LOG_BASE + 1;
              } else {
                break out;
              }
            } else {
              n = k = xc[ni];

              // Get the number of digits of n.
              for (d = 1; k >= 10; k /= 10, d++);

              // Get the index of rd within n.
              i %= LOG_BASE;

              // Get the index of rd within n, adjusted for leading zeros.
              // The number of leading zeros of n is given by LOG_BASE - d.
              j = i - LOG_BASE + d;

              // Get the rounding digit at index j of n.
              rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
            }
          }

          r = r || sd < 0 ||

          // Are there any non-zero digits after the rounding digit?
          // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
          // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
           xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

          r = rm < 4
           ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
           : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

            // Check whether the digit to the left of the rounding digit is odd.
            ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
             rm == (x.s < 0 ? 8 : 7));

          if (sd < 1 || !xc[0]) {
            xc.length = 0;

            if (r) {

              // Convert sd to decimal places.
              sd -= x.e + 1;

              // 1, 0.1, 0.01, 0.001, 0.0001 etc.
              xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
              x.e = -sd || 0;
            } else {

              // Zero.
              xc[0] = x.e = 0;
            }

            return x;
          }

          // Remove excess digits.
          if (i == 0) {
            xc.length = ni;
            k = 1;
            ni--;
          } else {
            xc.length = ni + 1;
            k = pows10[LOG_BASE - i];

            // E.g. 56700 becomes 56000 if 7 is the rounding digit.
            // j > 0 means i > number of leading zeros of n.
            xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
          }

          // Round up?
          if (r) {

            for (; ;) {

              // If the digit to be rounded up is in the first element of xc...
              if (ni == 0) {

                // i will be the length of xc[0] before k is added.
                for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                j = xc[0] += k;
                for (k = 1; j >= 10; j /= 10, k++);

                // if i != k the length has increased.
                if (i != k) {
                  x.e++;
                  if (xc[0] == BASE) xc[0] = 1;
                }

                break;
              } else {
                xc[ni] += k;
                if (xc[ni] != BASE) break;
                xc[ni--] = 0;
                k = 1;
              }
            }
          }

          // Remove trailing zeros.
          for (i = xc.length; xc[--i] === 0; xc.pop());
        }

        // Overflow? Infinity.
        if (x.e > MAX_EXP) {
          x.c = x.e = null;

        // Underflow? Zero.
        } else if (x.e < MIN_EXP) {
          x.c = [x.e = 0];
        }
      }

      return x;
    }


    function valueOf(n) {
      var str,
        e = n.e;

      if (e === null) return n.toString();

      str = coeffToString(n.c);

      str = e <= TO_EXP_NEG || e >= TO_EXP_POS
        ? toExponential(str, e)
        : toFixedPoint(str, e, '0');

      return n.s < 0 ? '-' + str : str;
    }


    // PROTOTYPE/INSTANCE METHODS


    /*
     * Return a new BigNumber whose value is the absolute value of this BigNumber.
     */
    P.absoluteValue = P.abs = function () {
      var x = new BigNumber(this);
      if (x.s < 0) x.s = 1;
      return x;
    };


    /*
     * Return
     *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
     *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
     *   0 if they have the same value,
     *   or null if the value of either is NaN.
     */
    P.comparedTo = function (y, b) {
      return compare(this, new BigNumber(y, b));
    };


    /*
     * If dp is undefined or null or true or false, return the number of decimal places of the
     * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     *
     * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.decimalPlaces = P.dp = function (dp, rm) {
      var c, n, v,
        x = this;

      if (dp != null) {
        intCheck(dp, 0, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), dp + x.e + 1, rm);
      }

      if (!(c = x.c)) return null;
      n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

      // Subtract the number of trailing zeros of the last number.
      if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
      if (n < 0) n = 0;

      return n;
    };


    /*
     *  n / 0 = I
     *  n / N = N
     *  n / I = 0
     *  0 / n = 0
     *  0 / 0 = N
     *  0 / N = N
     *  0 / I = 0
     *  N / n = N
     *  N / 0 = N
     *  N / N = N
     *  N / I = N
     *  I / n = I
     *  I / 0 = I
     *  I / N = N
     *  I / I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
     * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.dividedBy = P.div = function (y, b) {
      return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
    };


    /*
     * Return a new BigNumber whose value is the integer part of dividing the value of this
     * BigNumber by the value of BigNumber(y, b).
     */
    P.dividedToIntegerBy = P.idiv = function (y, b) {
      return div(this, new BigNumber(y, b), 0, 1);
    };


    /*
     * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
     *
     * If m is present, return the result modulo m.
     * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
     * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
     *
     * The modular power operation works efficiently when x, n, and m are integers, otherwise it
     * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
     *
     * n {number|string|BigNumber} The exponent. An integer.
     * [m] {number|string|BigNumber} The modulus.
     *
     * '[BigNumber Error] Exponent not an integer: {n}'
     */
    P.exponentiatedBy = P.pow = function (n, m) {
      var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
        x = this;

      n = new BigNumber(n);

      // Allow NaN and ±Infinity, but not other non-integers.
      if (n.c && !n.isInteger()) {
        throw Error
          (bignumberError + 'Exponent not an integer: ' + valueOf(n));
      }

      if (m != null) m = new BigNumber(m);

      // Exponent of MAX_SAFE_INTEGER is 15.
      nIsBig = n.e > 14;

      // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
      if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

        // The sign of the result of pow when x is negative depends on the evenness of n.
        // If +n overflows to ±Infinity, the evenness of n would be not be known.
        y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
        return m ? y.mod(m) : y;
      }

      nIsNeg = n.s < 0;

      if (m) {

        // x % m returns NaN if abs(m) is zero, or m is NaN.
        if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

        isModExp = !nIsNeg && x.isInteger() && m.isInteger();

        if (isModExp) x = x.mod(m);

      // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
      // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
      } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
        // [1, 240000000]
        ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
        // [80000000000000]  [99999750000000]
        : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

        // If x is negative and n is odd, k = -0, else k = 0.
        k = x.s < 0 && isOdd(n) ? -0 : 0;

        // If x >= 1, k = ±Infinity.
        if (x.e > -1) k = 1 / k;

        // If n is negative return ±0, else return ±Infinity.
        return new BigNumber(nIsNeg ? 1 / k : k);

      } else if (POW_PRECISION) {

        // Truncating each coefficient array to a length of k after each multiplication
        // equates to truncating significant digits to POW_PRECISION + [28, 41],
        // i.e. there will be a minimum of 28 guard digits retained.
        k = mathceil(POW_PRECISION / LOG_BASE + 2);
      }

      if (nIsBig) {
        half = new BigNumber(0.5);
        if (nIsNeg) n.s = 1;
        nIsOdd = isOdd(n);
      } else {
        i = Math.abs(+valueOf(n));
        nIsOdd = i % 2;
      }

      y = new BigNumber(ONE);

      // Performs 54 loop iterations for n of 9007199254740991.
      for (; ;) {

        if (nIsOdd) {
          y = y.times(x);
          if (!y.c) break;

          if (k) {
            if (y.c.length > k) y.c.length = k;
          } else if (isModExp) {
            y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
          }
        }

        if (i) {
          i = mathfloor(i / 2);
          if (i === 0) break;
          nIsOdd = i % 2;
        } else {
          n = n.times(half);
          round(n, n.e + 1, 1);

          if (n.e > 14) {
            nIsOdd = isOdd(n);
          } else {
            i = +valueOf(n);
            if (i === 0) break;
            nIsOdd = i % 2;
          }
        }

        x = x.times(x);

        if (k) {
          if (x.c && x.c.length > k) x.c.length = k;
        } else if (isModExp) {
          x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
        }
      }

      if (isModExp) return y;
      if (nIsNeg) y = ONE.div(y);

      return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
     * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
     */
    P.integerValue = function (rm) {
      var n = new BigNumber(this);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);
      return round(n, n.e + 1, rm);
    };


    /*
     * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isEqualTo = P.eq = function (y, b) {
      return compare(this, new BigNumber(y, b)) === 0;
    };


    /*
     * Return true if the value of this BigNumber is a finite number, otherwise return false.
     */
    P.isFinite = function () {
      return !!this.c;
    };


    /*
     * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isGreaterThan = P.gt = function (y, b) {
      return compare(this, new BigNumber(y, b)) > 0;
    };


    /*
     * Return true if the value of this BigNumber is greater than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

    };


    /*
     * Return true if the value of this BigNumber is an integer, otherwise return false.
     */
    P.isInteger = function () {
      return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
    };


    /*
     * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
     * otherwise return false.
     */
    P.isLessThan = P.lt = function (y, b) {
      return compare(this, new BigNumber(y, b)) < 0;
    };


    /*
     * Return true if the value of this BigNumber is less than or equal to the value of
     * BigNumber(y, b), otherwise return false.
     */
    P.isLessThanOrEqualTo = P.lte = function (y, b) {
      return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
    };


    /*
     * Return true if the value of this BigNumber is NaN, otherwise return false.
     */
    P.isNaN = function () {
      return !this.s;
    };


    /*
     * Return true if the value of this BigNumber is negative, otherwise return false.
     */
    P.isNegative = function () {
      return this.s < 0;
    };


    /*
     * Return true if the value of this BigNumber is positive, otherwise return false.
     */
    P.isPositive = function () {
      return this.s > 0;
    };


    /*
     * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
     */
    P.isZero = function () {
      return !!this.c && this.c[0] == 0;
    };


    /*
     *  n - 0 = n
     *  n - N = N
     *  n - I = -I
     *  0 - n = -n
     *  0 - 0 = 0
     *  0 - N = N
     *  0 - I = -I
     *  N - n = N
     *  N - 0 = N
     *  N - N = N
     *  N - I = N
     *  I - n = I
     *  I - 0 = I
     *  I - N = N
     *  I - I = N
     *
     * Return a new BigNumber whose value is the value of this BigNumber minus the value of
     * BigNumber(y, b).
     */
    P.minus = function (y, b) {
      var i, j, t, xLTy,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
      if (a != b) {
        y.s = -b;
        return x.plus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Either Infinity?
        if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

        // Either zero?
        if (!xc[0] || !yc[0]) {

          // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
          return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

           // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
           ROUNDING_MODE == 3 ? -0 : 0);
        }
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Determine which is the bigger number.
      if (a = xe - ye) {

        if (xLTy = a < 0) {
          a = -a;
          t = xc;
        } else {
          ye = xe;
          t = yc;
        }

        t.reverse();

        // Prepend zeros to equalise exponents.
        for (b = a; b--; t.push(0));
        t.reverse();
      } else {

        // Exponents equal. Check digit by digit.
        j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

        for (a = b = 0; b < j; b++) {

          if (xc[b] != yc[b]) {
            xLTy = xc[b] < yc[b];
            break;
          }
        }
      }

      // x < y? Point xc to the array of the bigger number.
      if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

      b = (j = yc.length) - (i = xc.length);

      // Append zeros to xc if shorter.
      // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
      if (b > 0) for (; b--; xc[i++] = 0);
      b = BASE - 1;

      // Subtract yc from xc.
      for (; j > a;) {

        if (xc[--j] < yc[j]) {
          for (i = j; i && !xc[--i]; xc[i] = b);
          --xc[i];
          xc[j] += BASE;
        }

        xc[j] -= yc[j];
      }

      // Remove leading zeros and adjust exponent accordingly.
      for (; xc[0] == 0; xc.splice(0, 1), --ye);

      // Zero?
      if (!xc[0]) {

        // Following IEEE 754 (2008) 6.3,
        // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
        y.s = ROUNDING_MODE == 3 ? -1 : 1;
        y.c = [y.e = 0];
        return y;
      }

      // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
      // for finite x and y.
      return normalise(y, xc, ye);
    };


    /*
     *   n % 0 =  N
     *   n % N =  N
     *   n % I =  n
     *   0 % n =  0
     *  -0 % n = -0
     *   0 % 0 =  N
     *   0 % N =  N
     *   0 % I =  0
     *   N % n =  N
     *   N % 0 =  N
     *   N % N =  N
     *   N % I =  N
     *   I % n =  N
     *   I % 0 =  N
     *   I % N =  N
     *   I % I =  N
     *
     * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
     * BigNumber(y, b). The result depends on the value of MODULO_MODE.
     */
    P.modulo = P.mod = function (y, b) {
      var q, s,
        x = this;

      y = new BigNumber(y, b);

      // Return NaN if x is Infinity or NaN, or y is NaN or zero.
      if (!x.c || !y.s || y.c && !y.c[0]) {
        return new BigNumber(NaN);

      // Return x if y is Infinity or x is zero.
      } else if (!y.c || x.c && !x.c[0]) {
        return new BigNumber(x);
      }

      if (MODULO_MODE == 9) {

        // Euclidian division: q = sign(y) * floor(x / abs(y))
        // r = x - qy    where  0 <= r < abs(y)
        s = y.s;
        y.s = 1;
        q = div(x, y, 0, 3);
        y.s = s;
        q.s *= s;
      } else {
        q = div(x, y, 0, MODULO_MODE);
      }

      y = x.minus(q.times(y));

      // To match JavaScript %, ensure sign of zero is sign of dividend.
      if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

      return y;
    };


    /*
     *  n * 0 = 0
     *  n * N = N
     *  n * I = I
     *  0 * n = 0
     *  0 * 0 = 0
     *  0 * N = N
     *  0 * I = N
     *  N * n = N
     *  N * 0 = N
     *  N * N = N
     *  N * I = N
     *  I * n = I
     *  I * 0 = N
     *  I * N = N
     *  I * I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
     * of BigNumber(y, b).
     */
    P.multipliedBy = P.times = function (y, b) {
      var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
        base, sqrtBase,
        x = this,
        xc = x.c,
        yc = (y = new BigNumber(y, b)).c;

      // Either NaN, ±Infinity or ±0?
      if (!xc || !yc || !xc[0] || !yc[0]) {

        // Return NaN if either is NaN, or one is 0 and the other is Infinity.
        if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
          y.c = y.e = y.s = null;
        } else {
          y.s *= x.s;

          // Return ±Infinity if either is ±Infinity.
          if (!xc || !yc) {
            y.c = y.e = null;

          // Return ±0 if either is ±0.
          } else {
            y.c = [0];
            y.e = 0;
          }
        }

        return y;
      }

      e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
      y.s *= x.s;
      xcL = xc.length;
      ycL = yc.length;

      // Ensure xc points to longer array and xcL to its length.
      if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

      // Initialise the result array with zeros.
      for (i = xcL + ycL, zc = []; i--; zc.push(0));

      base = BASE;
      sqrtBase = SQRT_BASE;

      for (i = ycL; --i >= 0;) {
        c = 0;
        ylo = yc[i] % sqrtBase;
        yhi = yc[i] / sqrtBase | 0;

        for (k = xcL, j = i + k; j > i;) {
          xlo = xc[--k] % sqrtBase;
          xhi = xc[k] / sqrtBase | 0;
          m = yhi * xlo + xhi * ylo;
          xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
          c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
          zc[j--] = xlo % base;
        }

        zc[j] = c;
      }

      if (c) {
        ++e;
      } else {
        zc.splice(0, 1);
      }

      return normalise(y, zc, e);
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber negated,
     * i.e. multiplied by -1.
     */
    P.negated = function () {
      var x = new BigNumber(this);
      x.s = -x.s || null;
      return x;
    };


    /*
     *  n + 0 = n
     *  n + N = N
     *  n + I = I
     *  0 + n = n
     *  0 + 0 = 0
     *  0 + N = N
     *  0 + I = I
     *  N + n = N
     *  N + 0 = N
     *  N + N = N
     *  N + I = N
     *  I + n = I
     *  I + 0 = I
     *  I + N = N
     *  I + I = I
     *
     * Return a new BigNumber whose value is the value of this BigNumber plus the value of
     * BigNumber(y, b).
     */
    P.plus = function (y, b) {
      var t,
        x = this,
        a = x.s;

      y = new BigNumber(y, b);
      b = y.s;

      // Either NaN?
      if (!a || !b) return new BigNumber(NaN);

      // Signs differ?
       if (a != b) {
        y.s = -b;
        return x.minus(y);
      }

      var xe = x.e / LOG_BASE,
        ye = y.e / LOG_BASE,
        xc = x.c,
        yc = y.c;

      if (!xe || !ye) {

        // Return ±Infinity if either ±Infinity.
        if (!xc || !yc) return new BigNumber(a / 0);

        // Either zero?
        // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
        if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
      }

      xe = bitFloor(xe);
      ye = bitFloor(ye);
      xc = xc.slice();

      // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
      if (a = xe - ye) {
        if (a > 0) {
          ye = xe;
          t = yc;
        } else {
          a = -a;
          t = xc;
        }

        t.reverse();
        for (; a--; t.push(0));
        t.reverse();
      }

      a = xc.length;
      b = yc.length;

      // Point xc to the longer array, and b to the shorter length.
      if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

      // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
      for (a = 0; b;) {
        a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
        xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
      }

      if (a) {
        xc = [a].concat(xc);
        ++ye;
      }

      // No need to check for zero, as +x + +y != 0 && -x + -y != 0
      // ye = MAX_EXP + 1 possible
      return normalise(y, xc, ye);
    };


    /*
     * If sd is undefined or null or true or false, return the number of significant digits of
     * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
     * If sd is true include integer-part trailing zeros in the count.
     *
     * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
     * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
     * ROUNDING_MODE if rm is omitted.
     *
     * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
     *                     boolean: whether to count integer-part trailing zeros: true or false.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.precision = P.sd = function (sd, rm) {
      var c, n, v,
        x = this;

      if (sd != null && sd !== !!sd) {
        intCheck(sd, 1, MAX);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);

        return round(new BigNumber(x), sd, rm);
      }

      if (!(c = x.c)) return null;
      v = c.length - 1;
      n = v * LOG_BASE + 1;

      if (v = c[v]) {

        // Subtract the number of trailing zeros of the last element.
        for (; v % 10 == 0; v /= 10, n--);

        // Add the number of digits of the first element.
        for (v = c[0]; v >= 10; v /= 10, n++);
      }

      if (sd && x.e + 1 > n) n = x.e + 1;

      return n;
    };


    /*
     * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
     * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
     *
     * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
     */
    P.shiftedBy = function (k) {
      intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
      return this.times('1e' + k);
    };


    /*
     *  sqrt(-n) =  N
     *  sqrt(N) =  N
     *  sqrt(-I) =  N
     *  sqrt(I) =  I
     *  sqrt(0) =  0
     *  sqrt(-0) = -0
     *
     * Return a new BigNumber whose value is the square root of the value of this BigNumber,
     * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
     */
    P.squareRoot = P.sqrt = function () {
      var m, n, r, rep, t,
        x = this,
        c = x.c,
        s = x.s,
        e = x.e,
        dp = DECIMAL_PLACES + 4,
        half = new BigNumber('0.5');

      // Negative/NaN/Infinity/zero?
      if (s !== 1 || !c || !c[0]) {
        return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
      }

      // Initial estimate.
      s = Math.sqrt(+valueOf(x));

      // Math.sqrt underflow/overflow?
      // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
      if (s == 0 || s == 1 / 0) {
        n = coeffToString(c);
        if ((n.length + e) % 2 == 0) n += '0';
        s = Math.sqrt(+n);
        e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

        if (s == 1 / 0) {
          n = '5e' + e;
        } else {
          n = s.toExponential();
          n = n.slice(0, n.indexOf('e') + 1) + e;
        }

        r = new BigNumber(n);
      } else {
        r = new BigNumber(s + '');
      }

      // Check for zero.
      // r could be zero if MIN_EXP is changed after the this value was created.
      // This would cause a division by zero (x/t) and hence Infinity below, which would cause
      // coeffToString to throw.
      if (r.c[0]) {
        e = r.e;
        s = e + dp;
        if (s < 3) s = 0;

        // Newton-Raphson iteration.
        for (; ;) {
          t = r;
          r = half.times(t.plus(div(x, t, dp, 1)));

          if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

            // The exponent of r may here be one less than the final result exponent,
            // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
            // are indexed correctly.
            if (r.e < e) --s;
            n = n.slice(s - 3, s + 1);

            // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
            // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
            // iteration.
            if (n == '9999' || !rep && n == '4999') {

              // On the first iteration only, check to see if rounding up gives the
              // exact result as the nines may infinitely repeat.
              if (!rep) {
                round(t, t.e + DECIMAL_PLACES + 2, 0);

                if (t.times(t).eq(x)) {
                  r = t;
                  break;
                }
              }

              dp += 4;
              s += 4;
              rep = 1;
            } else {

              // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
              // result. If not, then there are further digits and m will be truthy.
              if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

                // Truncate to the first rounding digit.
                round(r, r.e + DECIMAL_PLACES + 2, 1);
                m = !r.times(r).eq(x);
              }

              break;
            }
          }
        }
      }

      return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
    };


    /*
     * Return a string representing the value of this BigNumber in exponential notation and
     * rounded using ROUNDING_MODE to dp fixed decimal places.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toExponential = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp++;
      }
      return format(this, dp, rm, 1);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounding
     * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
     *
     * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
     * but e.g. (-0.00001).toFixed(0) is '-0'.
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     */
    P.toFixed = function (dp, rm) {
      if (dp != null) {
        intCheck(dp, 0, MAX);
        dp = dp + this.e + 1;
      }
      return format(this, dp, rm);
    };


    /*
     * Return a string representing the value of this BigNumber in fixed-point notation rounded
     * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
     * of the format or FORMAT object (see BigNumber.set).
     *
     * The formatting object may contain some or all of the properties shown below.
     *
     * FORMAT = {
     *   prefix: '',
     *   groupSize: 3,
     *   secondaryGroupSize: 0,
     *   groupSeparator: ',',
     *   decimalSeparator: '.',
     *   fractionGroupSize: 0,
     *   fractionGroupSeparator: '\xA0',      // non-breaking space
     *   suffix: ''
     * };
     *
     * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     * [format] {object} Formatting options. See FORMAT pbject above.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
     * '[BigNumber Error] Argument not an object: {format}'
     */
    P.toFormat = function (dp, rm, format) {
      var str,
        x = this;

      if (format == null) {
        if (dp != null && rm && typeof rm == 'object') {
          format = rm;
          rm = null;
        } else if (dp && typeof dp == 'object') {
          format = dp;
          dp = rm = null;
        } else {
          format = FORMAT;
        }
      } else if (typeof format != 'object') {
        throw Error
          (bignumberError + 'Argument not an object: ' + format);
      }

      str = x.toFixed(dp, rm);

      if (x.c) {
        var i,
          arr = str.split('.'),
          g1 = +format.groupSize,
          g2 = +format.secondaryGroupSize,
          groupSeparator = format.groupSeparator || '',
          intPart = arr[0],
          fractionPart = arr[1],
          isNeg = x.s < 0,
          intDigits = isNeg ? intPart.slice(1) : intPart,
          len = intDigits.length;

        if (g2) i = g1, g1 = g2, g2 = i, len -= i;

        if (g1 > 0 && len > 0) {
          i = len % g1 || g1;
          intPart = intDigits.substr(0, i);
          for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
          if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
          if (isNeg) intPart = '-' + intPart;
        }

        str = fractionPart
         ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
          ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
           '$&' + (format.fractionGroupSeparator || ''))
          : fractionPart)
         : intPart;
      }

      return (format.prefix || '') + str + (format.suffix || '');
    };


    /*
     * Return an array of two BigNumbers representing the value of this BigNumber as a simple
     * fraction with an integer numerator and an integer denominator.
     * The denominator will be a positive non-zero value less than or equal to the specified
     * maximum denominator. If a maximum denominator is not specified, the denominator will be
     * the lowest value necessary to represent the number exactly.
     *
     * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
     *
     * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
     */
    P.toFraction = function (md) {
      var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
        x = this,
        xc = x.c;

      if (md != null) {
        n = new BigNumber(md);

        // Throw if md is less than one or is not an integer, unless it is Infinity.
        if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
          throw Error
            (bignumberError + 'Argument ' +
              (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
        }
      }

      if (!xc) return new BigNumber(x);

      d = new BigNumber(ONE);
      n1 = d0 = new BigNumber(ONE);
      d1 = n0 = new BigNumber(ONE);
      s = coeffToString(xc);

      // Determine initial denominator.
      // d is a power of 10 and the minimum max denominator that specifies the value exactly.
      e = d.e = s.length - x.e - 1;
      d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
      md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

      exp = MAX_EXP;
      MAX_EXP = 1 / 0;
      n = new BigNumber(s);

      // n0 = d1 = 0
      n0.c[0] = 0;

      for (; ;)  {
        q = div(n, d, 0, 1);
        d2 = d0.plus(q.times(d1));
        if (d2.comparedTo(md) == 1) break;
        d0 = d1;
        d1 = d2;
        n1 = n0.plus(q.times(d2 = n1));
        n0 = d2;
        d = n.minus(q.times(d2 = d));
        n = d2;
      }

      d2 = div(md.minus(d0), d1, 0, 1);
      n0 = n0.plus(d2.times(n1));
      d0 = d0.plus(d2.times(d1));
      n0.s = n1.s = x.s;
      e = e * 2;

      // Determine which fraction is closer to x, n0/d0 or n1/d1
      r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
          div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

      MAX_EXP = exp;

      return r;
    };


    /*
     * Return the value of this BigNumber converted to a number primitive.
     */
    P.toNumber = function () {
      return +valueOf(this);
    };


    /*
     * Return a string representing the value of this BigNumber rounded to sd significant digits
     * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
     * necessary to represent the integer part of the value in fixed-point notation, then use
     * exponential notation.
     *
     * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
     * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
     *
     * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
     */
    P.toPrecision = function (sd, rm) {
      if (sd != null) intCheck(sd, 1, MAX);
      return format(this, sd, rm, 2);
    };


    /*
     * Return a string representing the value of this BigNumber in base b, or base 10 if b is
     * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
     * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
     * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
     * TO_EXP_NEG, return exponential notation.
     *
     * [b] {number} Integer, 2 to ALPHABET.length inclusive.
     *
     * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
     */
    P.toString = function (b) {
      var str,
        n = this,
        s = n.s,
        e = n.e;

      // Infinity or NaN?
      if (e === null) {
        if (s) {
          str = 'Infinity';
          if (s < 0) str = '-' + str;
        } else {
          str = 'NaN';
        }
      } else {
        if (b == null) {
          str = e <= TO_EXP_NEG || e >= TO_EXP_POS
           ? toExponential(coeffToString(n.c), e)
           : toFixedPoint(coeffToString(n.c), e, '0');
        } else if (b === 10) {
          n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
          str = toFixedPoint(coeffToString(n.c), n.e, '0');
        } else {
          intCheck(b, 2, ALPHABET.length, 'Base');
          str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
        }

        if (s < 0 && n.c[0]) str = '-' + str;
      }

      return str;
    };


    /*
     * Return as toString, but do not accept a base argument, and include the minus sign for
     * negative zero.
     */
    P.valueOf = P.toJSON = function () {
      return valueOf(this);
    };


    P._isBigNumber = true;

    if (configObject != null) BigNumber.set(configObject);

    return BigNumber;
  }


  // PRIVATE HELPER FUNCTIONS

  // These functions don't need access to variables,
  // e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


  function bitFloor(n) {
    var i = n | 0;
    return n > 0 || n === i ? i : i - 1;
  }


  // Return a coefficient array as a string of base 10 digits.
  function coeffToString(a) {
    var s, z,
      i = 1,
      j = a.length,
      r = a[0] + '';

    for (; i < j;) {
      s = a[i++] + '';
      z = LOG_BASE - s.length;
      for (; z--; s = '0' + s);
      r += s;
    }

    // Determine trailing zeros.
    for (j = r.length; r.charCodeAt(--j) === 48;);

    return r.slice(0, j + 1 || 1);
  }


  // Compare the value of BigNumbers x and y.
  function compare(x, y) {
    var a, b,
      xc = x.c,
      yc = y.c,
      i = x.s,
      j = y.s,
      k = x.e,
      l = y.e;

    // Either NaN?
    if (!i || !j) return null;

    a = xc && !xc[0];
    b = yc && !yc[0];

    // Either zero?
    if (a || b) return a ? b ? 0 : -j : i;

    // Signs differ?
    if (i != j) return i;

    a = i < 0;
    b = k == l;

    // Either Infinity?
    if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

    // Compare exponents.
    if (!b) return k > l ^ a ? 1 : -1;

    j = (k = xc.length) < (l = yc.length) ? k : l;

    // Compare digit by digit.
    for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

    // Compare lengths.
    return k == l ? 0 : k > l ^ a ? 1 : -1;
  }


  /*
   * Check that n is a primitive number, an integer, and in range, otherwise throw.
   */
  function intCheck(n, min, max, name) {
    if (n < min || n > max || n !== mathfloor(n)) {
      throw Error
       (bignumberError + (name || 'Argument') + (typeof n == 'number'
         ? n < min || n > max ? ' out of range: ' : ' not an integer: '
         : ' not a primitive number: ') + String(n));
    }
  }


  // Assumes finite n.
  function isOdd(n) {
    var k = n.c.length - 1;
    return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
  }


  function toExponential(str, e) {
    return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
     (e < 0 ? 'e' : 'e+') + e;
  }


  function toFixedPoint(str, e, z) {
    var len, zs;

    // Negative exponent?
    if (e < 0) {

      // Prepend zeros.
      for (zs = z + '.'; ++e; zs += z);
      str = zs + str;

    // Positive exponent
    } else {
      len = str.length;

      // Append zeros.
      if (++e > len) {
        for (zs = z, e -= len; --e; zs += z);
        str += zs;
      } else if (e < len) {
        str = str.slice(0, e) + '.' + str.slice(e);
      }
    }

    return str;
  }


  // EXPORT


  BigNumber = clone();
  BigNumber['default'] = BigNumber.BigNumber = BigNumber;

  // AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return BigNumber; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Node.js and other environments that support module.exports.
  } else {}
})(this);


/***/ }),

/***/ 867:
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/DesktopTrendingVideo.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".desktop__trending__video {\r\n  display: flex;\r\n  margin-bottom: 16px;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  transition: 0.5s ease-in-out;\r\n  height: 80px;\r\n}\r\n\r\n.desktop__trending__video_right {\r\n  padding: 0 16px;\r\n  width: 70%;\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.desktop__trending__video_right__top {\r\n  margin-bottom: 8px;\r\n  max-height: 29px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  white-space: initial;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n}\r\n\r\n.desktop__trending__video_text {\r\n  font-size: 11px;\r\n  font-family: inherit;\r\n  color: #423f3e;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/DesktopTrendingVideo.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,4BAA4B;EAC5B,YAAY;AACd;;AAEA;EACE,eAAe;EACf,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;EACvB,oBAAoB;EACpB,oBAAoB;EACpB,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,cAAc;AAChB","sourcesContent":[".desktop__trending__video {\r\n  display: flex;\r\n  margin-bottom: 16px;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  transition: 0.5s ease-in-out;\r\n  height: 80px;\r\n}\r\n\r\n.desktop__trending__video_right {\r\n  padding: 0 16px;\r\n  width: 70%;\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.desktop__trending__video_right__top {\r\n  margin-bottom: 8px;\r\n  max-height: 29px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  white-space: initial;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n}\r\n\r\n.desktop__trending__video_text {\r\n  font-size: 11px;\r\n  font-family: inherit;\r\n  color: #423f3e;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7907:
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/MediaCard.css ***!
  \***********************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".media-card {\r\n  border: 5px;\r\n}\r\n.media-card__video,\r\n.media-card__image {\r\n  width: 100%;\r\n  cursor: pointer;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\r\n.media-card__video{\r\n  background:#fff;\r\n}\r\n\r\n.media-card__desktop__trending {\r\n  width: 100%;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n}\r\n\r\nmedia-card__action-area {\r\n}\r\n\r\n.media-card__actions {\r\n  padding: 8px 4px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  background: #ffffff;\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n}\r\n\r\n.media-card__actions__mobile__detail {\r\n  padding: 8px 4px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  background: #ffffff;\r\n}\r\n\r\n.media-card__actions__text-container {\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n}\r\n\r\n.media-card__actions__text {\r\n  font-size: 11px;\r\n  font-family: inherit;\r\n  color: #423f3e;\r\n}\r\n\r\n.media-card__actions__text::first-letter {\r\n  text-transform: uppercase;\r\n}\r\n\r\n.media-card__actions__bottom {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 8px;\r\n}\r\n\r\n.media-card__actions__buttons {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: 8px;\r\n}\r\n\r\n@media screen and (min-width: 411px) {\r\n  .media-card__actions__text-container {\r\n    height: 29px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    white-space: initial;\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/reusableComponents/MediaCard.css"],"names":[],"mappings":"AAAA;EACE,WAAW;AACb;AACA;;EAEE,WAAW;EACX,eAAe;EACf,2BAA2B;EAC3B,4BAA4B;AAC9B;AACA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB;;AAEA;AACA;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,mBAAmB;EACnB,8BAA8B;EAC9B,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE;IACE,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,oBAAoB;IACpB,oBAAoB;IACpB,qBAAqB;IACrB,4BAA4B;EAC9B;AACF","sourcesContent":[".media-card {\r\n  border: 5px;\r\n}\r\n.media-card__video,\r\n.media-card__image {\r\n  width: 100%;\r\n  cursor: pointer;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\r\n.media-card__video{\r\n  background:#fff;\r\n}\r\n\r\n.media-card__desktop__trending {\r\n  width: 100%;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n}\r\n\r\nmedia-card__action-area {\r\n}\r\n\r\n.media-card__actions {\r\n  padding: 8px 4px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  background: #ffffff;\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n}\r\n\r\n.media-card__actions__mobile__detail {\r\n  padding: 8px 4px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  background: #ffffff;\r\n}\r\n\r\n.media-card__actions__text-container {\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n}\r\n\r\n.media-card__actions__text {\r\n  font-size: 11px;\r\n  font-family: inherit;\r\n  color: #423f3e;\r\n}\r\n\r\n.media-card__actions__text::first-letter {\r\n  text-transform: uppercase;\r\n}\r\n\r\n.media-card__actions__bottom {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 8px;\r\n}\r\n\r\n.media-card__actions__buttons {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: 8px;\r\n}\r\n\r\n@media screen and (min-width: 411px) {\r\n  .media-card__actions__text-container {\r\n    height: 29px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    white-space: initial;\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5197:
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/Paper.css ***!
  \*******************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".paper {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/reusableComponents/Paper.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,kBAAkB;AACpB","sourcesContent":[".paper {\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5262:
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/Placeholder.css ***!
  \*************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".placeholder {\r\n  background-color: #ffffff;\r\n  border-radius: 5px;\r\n}\r\n\r\n.placeholder__media {\r\n  background-color: #e0e0e0;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\r\n.placeholder__actions {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  padding: 8px 4px;\r\n}\r\n.placeholder__text {\r\n  height: 29px;\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n  margin-bottom: 8px;\r\n}\r\n.placeholder__text-item {\r\n  background-color: #e0e0e0;\r\n  height: 10px;\r\n  width: 100%;\r\n  margin-top: 4px;\r\n}\r\n.placeholder__actions__bottom {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 8px;\r\n  align-items: center;\r\n}\r\n\r\n.placeholder__time {\r\n  height: 10px;\r\n  width: 80px;\r\n  margin-right: auto;\r\n  background-color: #e0e0e0;\r\n  margin-left: 8px;\r\n}\r\n.placeholder__actions {\r\n  max-height: 90px;\r\n}\r\n\r\n.placeholder__buttons {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.placeholder__button {\r\n  margin-right: 8px;\r\n  border-radius: 999px;\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: #e0e0e0;\r\n}\r\n.placeholder__button-rect {\r\n  height: 30px;\r\n  width: 100px;\r\n  margin-right: 8px;\r\n\r\n  background-color: #e0e0e0;\r\n  border-radius: 5px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/reusableComponents/Placeholder.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,2BAA2B;EAC3B,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;AACA;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;;EAEjB,yBAAyB;EACzB,kBAAkB;AACpB","sourcesContent":[".placeholder {\r\n  background-color: #ffffff;\r\n  border-radius: 5px;\r\n}\r\n\r\n.placeholder__media {\r\n  background-color: #e0e0e0;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\r\n.placeholder__actions {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  padding: 8px 4px;\r\n}\r\n.placeholder__text {\r\n  height: 29px;\r\n  padding-left: 8px;\r\n  padding-right: 8px;\r\n  margin-bottom: 8px;\r\n}\r\n.placeholder__text-item {\r\n  background-color: #e0e0e0;\r\n  height: 10px;\r\n  width: 100%;\r\n  margin-top: 4px;\r\n}\r\n.placeholder__actions__bottom {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 8px;\r\n  align-items: center;\r\n}\r\n\r\n.placeholder__time {\r\n  height: 10px;\r\n  width: 80px;\r\n  margin-right: auto;\r\n  background-color: #e0e0e0;\r\n  margin-left: 8px;\r\n}\r\n.placeholder__actions {\r\n  max-height: 90px;\r\n}\r\n\r\n.placeholder__buttons {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.placeholder__button {\r\n  margin-right: 8px;\r\n  border-radius: 999px;\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: #e0e0e0;\r\n}\r\n.placeholder__button-rect {\r\n  height: 30px;\r\n  width: 100px;\r\n  margin-right: 8px;\r\n\r\n  background-color: #e0e0e0;\r\n  border-radius: 5px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7439:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/reusableComponents/TrendingVideosPlaceholder.css ***!
  \***************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".trending__placeholder {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 80px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.trending__placeholder__left {\r\n  width: 30%;\r\n  background-color: #e0e0e0;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.trending__placeholder__right {\r\n  height: 100%;\r\n  width: 70%;\r\n  padding: 0 16px;\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.trending__placeholder__right__top {\r\n  width: 100%;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.trending__placeholder__right__top__child {\r\n  background-color: #e0e0e0;\r\n  height: 12px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.trending__placeholder__right__bottom {\r\n  background-color: #e0e0e0;\r\n  height: 12px;\r\n  width: 30%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/reusableComponents/TrendingVideosPlaceholder.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,UAAU;AACZ","sourcesContent":[".trending__placeholder {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 80px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.trending__placeholder__left {\r\n  width: 30%;\r\n  background-color: #e0e0e0;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.trending__placeholder__right {\r\n  height: 100%;\r\n  width: 70%;\r\n  padding: 0 16px;\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.trending__placeholder__right__top {\r\n  width: 100%;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.trending__placeholder__right__top__child {\r\n  background-color: #e0e0e0;\r\n  height: 12px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.trending__placeholder__right__bottom {\r\n  background-color: #e0e0e0;\r\n  height: 12px;\r\n  width: 30%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4040:
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/Video.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".grid__container {\r\n  display: grid;\r\n  grid-template-areas: \"main trending\";\r\n  width: 100%;\r\n  grid-template-columns: 70% 30%;\r\n}\r\n\r\n.main {\r\n  grid-area: main;\r\n  padding-right: 32px;\r\n}\r\n\r\n.trending {\r\n  grid-area: trending;\r\n}\r\n\r\n.video__buttons {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.trending__videos__container {\r\n  height: 66vh;\r\n  overflow-y: auto;\r\n}\r\n.trending__videos__container::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n.trending__videos__container::-webkit-scrollbar-track {\r\n  background-color: #e0e0e0;\r\n}\r\n\r\n.trending__videos__container::-webkit-scrollbar-thumb {\r\n  background-color: #c1c1c1;\r\n}\r\n\r\n.trending__videos__heading {\r\n  font-size: 14px;\r\n  color: #000;\r\n  letter-spacing: 0.5px;\r\n  font-family: \"Sora\";\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.mobile__video__actions {\r\n  border-top: 1px solid #e0e0e0;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  width: 100%;\r\n  height: 5vh;\r\n}\r\n\r\n.trending__videos__mobile {\r\n  overflow-x: auto;\r\n  display: flex;\r\n  -ms-overflow-style: none; /* IE and Edge */\r\n  scrollbar-width: none;\r\n  scroll-behavior: smooth;\r\n  scroll-snap-type: both mandatory;\r\n}\r\n\r\n.trending__videos__mobile::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.trending__video__mobile {\r\n  padding: 0 4px;\r\n  scroll-snap-align: start;\r\n}\r\n\r\n.trending__video__mobile:first-child {\r\n  padding-left: 16px;\r\n}\r\n\r\n.trending__video__mobile:last-child {\r\n  padding-right: 16px;\r\n}\r\n\r\n@media screen and (min-width: 411px) {\r\n  .video__desktop {\r\n    display: block;\r\n  }\r\n\r\n  .video__mobile {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 411px) {\r\n  .video__desktop {\r\n    display: none;\r\n  }\r\n\r\n  .video__mobile {\r\n    display: block;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/pages/Video.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,oCAAoC;EACpC,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,UAAU;AACZ;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,WAAW;EACX,qBAAqB;EACrB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;EAChC,WAAW;EACX,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,wBAAwB,EAAE,gBAAgB;EAC1C,qBAAqB;EACrB,uBAAuB;EACvB,gCAAgC;AAClC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,cAAc;EAChB;AACF","sourcesContent":[".grid__container {\r\n  display: grid;\r\n  grid-template-areas: \"main trending\";\r\n  width: 100%;\r\n  grid-template-columns: 70% 30%;\r\n}\r\n\r\n.main {\r\n  grid-area: main;\r\n  padding-right: 32px;\r\n}\r\n\r\n.trending {\r\n  grid-area: trending;\r\n}\r\n\r\n.video__buttons {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.trending__videos__container {\r\n  height: 66vh;\r\n  overflow-y: auto;\r\n}\r\n.trending__videos__container::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n.trending__videos__container::-webkit-scrollbar-track {\r\n  background-color: #e0e0e0;\r\n}\r\n\r\n.trending__videos__container::-webkit-scrollbar-thumb {\r\n  background-color: #c1c1c1;\r\n}\r\n\r\n.trending__videos__heading {\r\n  font-size: 14px;\r\n  color: #000;\r\n  letter-spacing: 0.5px;\r\n  font-family: \"Sora\";\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.mobile__video__actions {\r\n  border-top: 1px solid #e0e0e0;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  width: 100%;\r\n  height: 5vh;\r\n}\r\n\r\n.trending__videos__mobile {\r\n  overflow-x: auto;\r\n  display: flex;\r\n  -ms-overflow-style: none; /* IE and Edge */\r\n  scrollbar-width: none;\r\n  scroll-behavior: smooth;\r\n  scroll-snap-type: both mandatory;\r\n}\r\n\r\n.trending__videos__mobile::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.trending__video__mobile {\r\n  padding: 0 4px;\r\n  scroll-snap-align: start;\r\n}\r\n\r\n.trending__video__mobile:first-child {\r\n  padding-left: 16px;\r\n}\r\n\r\n.trending__video__mobile:last-child {\r\n  padding-right: 16px;\r\n}\r\n\r\n@media screen and (min-width: 411px) {\r\n  .video__desktop {\r\n    display: block;\r\n  }\r\n\r\n  .video__mobile {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 411px) {\r\n  .video__desktop {\r\n    display: none;\r\n  }\r\n\r\n  .video__mobile {\r\n    display: block;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4400:
/*!*******************************************!*\
  !*** ./node_modules/json-bigint/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var json_stringify = __webpack_require__(/*! ./lib/stringify.js */ 4123).stringify;
var json_parse     = __webpack_require__(/*! ./lib/parse.js */ 6813);

module.exports = function(options) {
    return  {
        parse: json_parse(options),
        stringify: json_stringify
    }
};
//create the default method members with no options applied for backwards compatibility
module.exports.parse = json_parse();
module.exports.stringify = json_stringify;


/***/ }),

/***/ 6813:
/*!***********************************************!*\
  !*** ./node_modules/json-bigint/lib/parse.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var BigNumber = null;

// regexpxs extracted from
// (c) BSD-3-Clause
// https://github.com/fastify/secure-json-parse/graphs/contributors and https://github.com/hapijs/bourne/graphs/contributors

const suspectProtoRx = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/;
const suspectConstructorRx = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;

/*
    json_parse.js
    2012-06-20

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    This file creates a json_parse function.
    During create you can (optionally) specify some behavioural switches

        require('json-bigint')(options)

            The optional options parameter holds switches that drive certain
            aspects of the parsing process:
            * options.strict = true will warn about duplicate-key usage in the json.
              The default (strict = false) will silently ignore those and overwrite
              values for keys that are in duplicate use.

    The resulting function follows this signature:
        json_parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = json_parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

    This is a reference implementation. You are free to copy, modify, or
    redistribute.

    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.
*/

/*members "", "\"", "\/", "\\", at, b, call, charAt, f, fromCharCode,
    hasOwnProperty, message, n, name, prototype, push, r, t, text
*/

var json_parse = function (options) {
  'use strict';

  // This is a function that can parse a JSON text, producing a JavaScript
  // data structure. It is a simple, recursive descent parser. It does not use
  // eval or regular expressions, so it can be used as a model for implementing
  // a JSON parser in other languages.

  // We are defining the function inside of another function to avoid creating
  // global variables.

  // Default options one can override by passing options to the parse()
  var _options = {
    strict: false, // not being strict means do not generate syntax errors for "duplicate key"
    storeAsString: false, // toggles whether the values should be stored as BigNumber (default) or a string
    alwaysParseAsBig: false, // toggles whether all numbers should be Big
    useNativeBigInt: false, // toggles whether to use native BigInt instead of bignumber.js
    protoAction: 'error',
    constructorAction: 'error',
  };

  // If there are options, then use them to override the default _options
  if (options !== undefined && options !== null) {
    if (options.strict === true) {
      _options.strict = true;
    }
    if (options.storeAsString === true) {
      _options.storeAsString = true;
    }
    _options.alwaysParseAsBig =
      options.alwaysParseAsBig === true ? options.alwaysParseAsBig : false;
    _options.useNativeBigInt =
      options.useNativeBigInt === true ? options.useNativeBigInt : false;

    if (typeof options.constructorAction !== 'undefined') {
      if (
        options.constructorAction === 'error' ||
        options.constructorAction === 'ignore' ||
        options.constructorAction === 'preserve'
      ) {
        _options.constructorAction = options.constructorAction;
      } else {
        throw new Error(
          `Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${options.constructorAction}`
        );
      }
    }

    if (typeof options.protoAction !== 'undefined') {
      if (
        options.protoAction === 'error' ||
        options.protoAction === 'ignore' ||
        options.protoAction === 'preserve'
      ) {
        _options.protoAction = options.protoAction;
      } else {
        throw new Error(
          `Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${options.protoAction}`
        );
      }
    }
  }

  var at, // The index of the current character
    ch, // The current character
    escapee = {
      '"': '"',
      '\\': '\\',
      '/': '/',
      b: '\b',
      f: '\f',
      n: '\n',
      r: '\r',
      t: '\t',
    },
    text,
    error = function (m) {
      // Call error when something is wrong.

      throw {
        name: 'SyntaxError',
        message: m,
        at: at,
        text: text,
      };
    },
    next = function (c) {
      // If a c parameter is provided, verify that it matches the current character.

      if (c && c !== ch) {
        error("Expected '" + c + "' instead of '" + ch + "'");
      }

      // Get the next character. When there are no more characters,
      // return the empty string.

      ch = text.charAt(at);
      at += 1;
      return ch;
    },
    number = function () {
      // Parse a number value.

      var number,
        string = '';

      if (ch === '-') {
        string = '-';
        next('-');
      }
      while (ch >= '0' && ch <= '9') {
        string += ch;
        next();
      }
      if (ch === '.') {
        string += '.';
        while (next() && ch >= '0' && ch <= '9') {
          string += ch;
        }
      }
      if (ch === 'e' || ch === 'E') {
        string += ch;
        next();
        if (ch === '-' || ch === '+') {
          string += ch;
          next();
        }
        while (ch >= '0' && ch <= '9') {
          string += ch;
          next();
        }
      }
      number = +string;
      if (!isFinite(number)) {
        error('Bad number');
      } else {
        if (BigNumber == null) BigNumber = __webpack_require__(/*! bignumber.js */ 4431);
        //if (number > 9007199254740992 || number < -9007199254740992)
        // Bignumber has stricter check: everything with length > 15 digits disallowed
        if (string.length > 15)
          return _options.storeAsString
            ? string
            : _options.useNativeBigInt
            ? BigInt(string)
            : new BigNumber(string);
        else
          return !_options.alwaysParseAsBig
            ? number
            : _options.useNativeBigInt
            ? BigInt(number)
            : new BigNumber(number);
      }
    },
    string = function () {
      // Parse a string value.

      var hex,
        i,
        string = '',
        uffff;

      // When parsing for string values, we must look for " and \ characters.

      if (ch === '"') {
        var startAt = at;
        while (next()) {
          if (ch === '"') {
            if (at - 1 > startAt) string += text.substring(startAt, at - 1);
            next();
            return string;
          }
          if (ch === '\\') {
            if (at - 1 > startAt) string += text.substring(startAt, at - 1);
            next();
            if (ch === 'u') {
              uffff = 0;
              for (i = 0; i < 4; i += 1) {
                hex = parseInt(next(), 16);
                if (!isFinite(hex)) {
                  break;
                }
                uffff = uffff * 16 + hex;
              }
              string += String.fromCharCode(uffff);
            } else if (typeof escapee[ch] === 'string') {
              string += escapee[ch];
            } else {
              break;
            }
            startAt = at;
          }
        }
      }
      error('Bad string');
    },
    white = function () {
      // Skip whitespace.

      while (ch && ch <= ' ') {
        next();
      }
    },
    word = function () {
      // true, false, or null.

      switch (ch) {
        case 't':
          next('t');
          next('r');
          next('u');
          next('e');
          return true;
        case 'f':
          next('f');
          next('a');
          next('l');
          next('s');
          next('e');
          return false;
        case 'n':
          next('n');
          next('u');
          next('l');
          next('l');
          return null;
      }
      error("Unexpected '" + ch + "'");
    },
    value, // Place holder for the value function.
    array = function () {
      // Parse an array value.

      var array = [];

      if (ch === '[') {
        next('[');
        white();
        if (ch === ']') {
          next(']');
          return array; // empty array
        }
        while (ch) {
          array.push(value());
          white();
          if (ch === ']') {
            next(']');
            return array;
          }
          next(',');
          white();
        }
      }
      error('Bad array');
    },
    object = function () {
      // Parse an object value.

      var key,
        object = Object.create(null);

      if (ch === '{') {
        next('{');
        white();
        if (ch === '}') {
          next('}');
          return object; // empty object
        }
        while (ch) {
          key = string();
          white();
          next(':');
          if (
            _options.strict === true &&
            Object.hasOwnProperty.call(object, key)
          ) {
            error('Duplicate key "' + key + '"');
          }

          if (suspectProtoRx.test(key) === true) {
            if (_options.protoAction === 'error') {
              error('Object contains forbidden prototype property');
            } else if (_options.protoAction === 'ignore') {
              value();
            } else {
              object[key] = value();
            }
          } else if (suspectConstructorRx.test(key) === true) {
            if (_options.constructorAction === 'error') {
              error('Object contains forbidden constructor property');
            } else if (_options.constructorAction === 'ignore') {
              value();
            } else {
              object[key] = value();
            }
          } else {
            object[key] = value();
          }

          white();
          if (ch === '}') {
            next('}');
            return object;
          }
          next(',');
          white();
        }
      }
      error('Bad object');
    };

  value = function () {
    // Parse a JSON value. It could be an object, an array, a string, a number,
    // or a word.

    white();
    switch (ch) {
      case '{':
        return object();
      case '[':
        return array();
      case '"':
        return string();
      case '-':
        return number();
      default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
  };

  // Return the json_parse function. It will have access to all of the above
  // functions and variables.

  return function (source, reviver) {
    var result;

    text = source + '';
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
      error('Syntax error');
    }

    // If there is a reviver function, we recursively walk the new structure,
    // passing each name/value pair to the reviver function for possible
    // transformation, starting with a temporary root object that holds the result
    // in an empty key. If there is not a reviver function, we simply return the
    // result.

    return typeof reviver === 'function'
      ? (function walk(holder, key) {
          var k,
            v,
            value = holder[key];
          if (value && typeof value === 'object') {
            Object.keys(value).forEach(function (k) {
              v = walk(value, k);
              if (v !== undefined) {
                value[k] = v;
              } else {
                delete value[k];
              }
            });
          }
          return reviver.call(holder, key, value);
        })({ '': result }, '')
      : result;
  };
};

module.exports = json_parse;


/***/ }),

/***/ 4123:
/*!***************************************************!*\
  !*** ./node_modules/json-bigint/lib/stringify.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var BigNumber = __webpack_require__(/*! bignumber.js */ 4431);

/*
    json2.js
    2013-05-26

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON = module.exports;

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key],
            isBigNumber = value != null && (value instanceof BigNumber || BigNumber.isBigNumber(value));

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            if (isBigNumber) {
                return value;
            } else {
                return quote(value);
            }

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':
        case 'bigint':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                Object.keys(value).forEach(function(k) {
                    var v = str(k, value);
                    if (v) {
                        partial.push(quote(k) + (gap ? ': ' : ':') + v);
                    }
                });
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }
}());


/***/ }),

/***/ 4121:
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js + 2 modules ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ esm_Transition)
});

// UNUSED EXPORTS: ENTERED, ENTERING, EXITED, EXITING, UNMOUNTED

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(4578);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/config.js
/* harmony default export */ const config = ({
  disabled: false
});
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/utils/PropTypes.js

var timeoutsShape =  true ? prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().shape({
  enter: (prop_types_default()).number,
  exit: (prop_types_default()).number,
  appear: (prop_types_default()).number
}).isRequired]) : 0;
var classNamesShape =  true ? prop_types_default().oneOfType([(prop_types_default()).string, prop_types_default().shape({
  enter: (prop_types_default()).string,
  exit: (prop_types_default()).string,
  active: (prop_types_default()).string
}), prop_types_default().shape({
  enter: (prop_types_default()).string,
  enterDone: (prop_types_default()).string,
  enterActive: (prop_types_default()).string,
  exit: (prop_types_default()).string,
  exitDone: (prop_types_default()).string,
  exitActive: (prop_types_default()).string
})]) : 0;
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__(8863);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/Transition.js








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose.default)(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = (0,objectWithoutPropertiesLoose.default)(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(TransitionGroupContext.default.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
    );
  };

  return Transition;
}(react.Component);

Transition.contextType = TransitionGroupContext.default;
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types_default().shape({
    current: typeof Element === 'undefined' ? (prop_types_default()).any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return prop_types_default().instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types_default().oneOfType([(prop_types_default()).func.isRequired, (prop_types_default()).element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: (prop_types_default()).bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: (prop_types_default()).bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: (prop_types_default()).bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: (prop_types_default()).bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: (prop_types_default()).bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: (prop_types_default()).bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: (prop_types_default()).func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: (prop_types_default()).func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types_default()).func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: (prop_types_default()).func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: (prop_types_default()).func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: (prop_types_default()).func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: (prop_types_default()).func
} : 0; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ const esm_Transition = (Transition);

/***/ }),

/***/ 8863:
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.createContext(null));

/***/ })

}]);
//# sourceMappingURL=src_pages_Video_js-b7e1f20055c8832c7b53.js.map