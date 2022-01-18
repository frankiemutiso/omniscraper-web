"use strict";
(self["webpackChunkomniscraper_frontend"] = self["webpackChunkomniscraper_frontend"] || []).push([["src_components_Tags_js"],{

/***/ 720:
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

/***/ 776:
/*!***************************************************!*\
  !*** ./node_modules/@mui/material/Slide/Slide.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export setTranslateValue */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ 7462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ 3366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ 5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ 4121);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/utils */ 2138);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/utils */ 5506);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/utils */ 338);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/debounce */ 7144);
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/useForkRef */ 1705);
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useTheme */ 2734);
/* harmony import */ var _styles_createTransitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/createTransitions */ 6067);
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../transitions/utils */ 577);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ 5340);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ 5893);


const _excluded = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];









 // Translate the node so it can't be seen on the screen.
// Later, we're going to translate the node back to its original location with `none`.



function getTranslateValue(direction, node, resolvedContainer) {
  const rect = node.getBoundingClientRect();
  const containerRect = resolvedContainer && resolvedContainer.getBoundingClientRect();
  const containerWindow = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.default)(node);
  let transform;

  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    const computedStyle = containerWindow.getComputedStyle(node);
    transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
  }

  let offsetX = 0;
  let offsetY = 0;

  if (transform && transform !== 'none' && typeof transform === 'string') {
    const transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === 'left') {
    if (containerRect) {
      return `translateX(${containerRect.right + offsetX - rect.left}px)`;
    }

    return `translateX(${containerWindow.innerWidth + offsetX - rect.left}px)`;
  }

  if (direction === 'right') {
    if (containerRect) {
      return `translateX(-${rect.right - containerRect.left - offsetX}px)`;
    }

    return `translateX(-${rect.left + rect.width - offsetX}px)`;
  }

  if (direction === 'up') {
    if (containerRect) {
      return `translateY(${containerRect.bottom + offsetY - rect.top}px)`;
    }

    return `translateY(${containerWindow.innerHeight + offsetY - rect.top}px)`;
  } // direction === 'down'


  if (containerRect) {
    return `translateY(-${rect.top - containerRect.top + rect.height - offsetY}px)`;
  }

  return `translateY(-${rect.top + rect.height - offsetY}px)`;
}

function resolveContainer(containerPropProp) {
  return typeof containerPropProp === 'function' ? containerPropProp() : containerPropProp;
}

function setTranslateValue(direction, node, containerProp) {
  const resolvedContainer = resolveContainer(containerProp);
  const transform = getTranslateValue(direction, node, resolvedContainer);

  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}
const defaultEasing = {
  enter: _styles_createTransitions__WEBPACK_IMPORTED_MODULE_6__.easing.easeOut,
  exit: _styles_createTransitions__WEBPACK_IMPORTED_MODULE_6__.easing.sharp
};
const defaultTimeout = {
  enter: _styles_createTransitions__WEBPACK_IMPORTED_MODULE_6__.duration.enteringScreen,
  exit: _styles_createTransitions__WEBPACK_IMPORTED_MODULE_6__.duration.leavingScreen
};
/**
 * The Slide transition is used by the [Drawer](/components/drawers/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

const Slide = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Slide(props, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    container: containerProp,
    direction = 'down',
    easing: easingProp = defaultEasing,
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
    TransitionComponent = react_transition_group__WEBPACK_IMPORTED_MODULE_7__.default
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, _excluded);

  const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_8__.default)();
  const childrenRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const handleRefIntermediary = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__.default)(children.ref, childrenRef);
  const handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__.default)(handleRefIntermediary, ref);

  const normalizedTransitionCallback = callback => isAppearing => {
    if (callback) {
      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (isAppearing === undefined) {
        callback(childrenRef.current);
      } else {
        callback(childrenRef.current, isAppearing);
      }
    }
  };

  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    setTranslateValue(direction, node, containerProp);
    (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_10__.reflow)(node);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
    const transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_10__.getTransitionProps)({
      timeout,
      style,
      easing: easingProp
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, transitionProps));
    node.style.transition = theme.transitions.create('transform', (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, transitionProps));
    node.style.webkitTransform = 'none';
    node.style.transform = 'none';

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_10__.getTransitionProps)({
      timeout,
      style,
      easing: easingProp
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', transitionProps);
    node.style.transition = theme.transitions.create('transform', transitionProps);
    setTranslateValue(direction, node, containerProp);

    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(node => {
    // No need for transitions when the component is hidden
    node.style.webkitTransition = '';
    node.style.transition = '';

    if (onExited) {
      onExited(node);
    }
  });

  const handleAddEndListener = next => {
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(childrenRef.current, next);
    }
  };

  const updatePosition = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(() => {
    if (childrenRef.current) {
      setTranslateValue(direction, childrenRef.current, containerProp);
    }
  }, [direction, containerProp]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    // Skip configuration where the position is screen size invariant.
    if (inProp || direction === 'down' || direction === 'right') {
      return undefined;
    }

    const handleResize = (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_11__.default)(() => {
      if (childrenRef.current) {
        setTranslateValue(direction, childrenRef.current, containerProp);
      }
    });
    const containerWindow = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.default)(childrenRef.current);
    containerWindow.addEventListener('resize', handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener('resize', handleResize);
    };
  }, [direction, inProp, containerProp]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    if (!inProp) {
      // We need to update the position of the drawer when the direction change and
      // when it's hidden.
      updatePosition();
    }
  }, [inProp, updatePosition]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    nodeRef: childrenRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    appear: appear,
    in: inProp,
    timeout: timeout
  }, other, {
    children: (state, childProps) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        ref: handleRef,
        style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, style, children.props.style)
      }, childProps));
    }
  }));
});
 true ? Slide.propTypes
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
  addEndListener: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * A single child content element.
   */
  children: _mui_utils__WEBPACK_IMPORTED_MODULE_12__.default.isRequired,

  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: (0,_mui_utils__WEBPACK_IMPORTED_MODULE_13__.default)(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([_mui_utils__WEBPACK_IMPORTED_MODULE_14__.default, (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]), props => {
    if (props.open) {
      const resolvedContainer = resolveContainer(props.container);

      if (resolvedContainer && resolvedContainer.nodeType === 1) {
        const box = resolvedContainer.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(['MUI: The `container` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      } else if (!resolvedContainer || typeof resolvedContainer.getBoundingClientRect !== 'function' || resolvedContainer.contextElement != null && resolvedContainer.contextElement.nodeType !== 1) {
        return new Error(['MUI: The `container` prop provided to the component is invalid.', 'It should be an HTML element instance.'].join('\n'));
      }
    }

    return null;
  }),

  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['down', 'left', 'right', 'up']),

  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: easing.easeOut,
   *   exit: easing.sharp,
   * }
   */
  easing: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),

  /**
   * If `true`, the component will transition in.
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * @ignore
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   */
  style: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: duration.enteringScreen,
   *   exit: duration.leavingScreen,
   * }
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    appear: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    enter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
    exit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
  })])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide);

/***/ }),

/***/ 2:
/*!****************************************************!*\
  !*** ./src/components/HideOnScroll.js + 1 modules ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "HideOnScroll": () => (/* binding */ HideOnScroll)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
;// CONCATENATED MODULE: ./node_modules/@mui/material/useScrollTrigger/useScrollTrigger.js


const _excluded = ["getTrigger", "target"];


function defaultTrigger(store, options) {
  const {
    disableHysteresis = false,
    threshold = 100,
    target
  } = options;
  const previous = store.current;

  if (target) {
    // Get vertical scroll
    store.current = target.pageYOffset !== undefined ? target.pageYOffset : target.scrollTop;
  }

  if (!disableHysteresis && previous !== undefined) {
    if (store.current < previous) {
      return false;
    }
  }

  return store.current > threshold;
}

const defaultTarget = typeof window !== 'undefined' ? window : null;
function useScrollTrigger(options = {}) {
  const {
    getTrigger = defaultTrigger,
    target = defaultTarget
  } = options,
        other = (0,objectWithoutPropertiesLoose.default)(options, _excluded);

  const store = react.useRef();
  const [trigger, setTrigger] = react.useState(() => getTrigger(store, other));
  react.useEffect(() => {
    const handleScroll = () => {
      setTrigger(getTrigger(store, (0,esm_extends.default)({
        target
      }, other)));
    };

    handleScroll(); // Re-evaluate trigger when dependencies change

    target.addEventListener('scroll', handleScroll);
    return () => {
      target.removeEventListener('scroll', handleScroll);
    }; // See Option 3. https://github.com/facebook/react/issues/14476#issuecomment-471199055
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, getTrigger, JSON.stringify(other)]);
  return trigger;
}
// EXTERNAL MODULE: ./node_modules/@mui/material/Slide/Slide.js
var Slide = __webpack_require__(776);
;// CONCATENATED MODULE: ./src/components/HideOnScroll.js



var HideOnScroll = function HideOnScroll(_ref) {
  var children = _ref.children,
      window = _ref.window;
  var trigger = useScrollTrigger({
    target: window ? window() : undefined
  });
  return /*#__PURE__*/react.createElement(Slide.default, {
    appear: false,
    direction: "down",
    "in": !trigger
  }, children);
};

/***/ }),

/***/ 632:
/*!********************************!*\
  !*** ./src/components/Tags.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ 3727);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Chip */ 461);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './Tags.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ 4125);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ 4347);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/AppBar */ 720);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Toolbar */ 4386);
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/styles/makeStyles */ 4290);
/* harmony import */ var _HideOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HideOnScroll */ 2);









var styles = (0,_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_3__.default)({
  tags: {
    overflowX: "auto",
    display: "flex",
    marginTop: 20
  },
  "&::-webkit-scrollbar": {
    width: 0
  }
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
  var classes = styles();
  var tagEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.default, {
    disableScrollLock: true,
    keepMounted: true,
    open: mouseY !== null,
    onClose: handleClose,
    anchorReference: "anchorPosition",
    anchorPosition: mouseY !== null && mouseX !== null ? {
      top: mouseY,
      left: mouseX
    } : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__.default, {
    onClick: function onClick() {
      return handleEditTagDialogOpen();
    }
  }, "Edit"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6__.default, {
    position: "fixed",
    style: {
      background: "#fff",
      opacity: 0.9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.tags,
    style: {
      paddingTop: 8
    }
  }, loggedIn && tagEditor, videoTags.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_8__.default, {
      onContextMenu: function onContextMenu(e) {
        return handleRightClick(e, tag);
      },
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link,
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
        margin: 5,
        fontWeight: 500
      }
    });
  })))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tags);

/***/ })

}]);
//# sourceMappingURL=src_components_Tags_js-0f10babe57d6b299d3ba.js.map