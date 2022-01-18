"use strict";
(self["webpackChunkomniscraper_frontend"] = self["webpackChunkomniscraper_frontend"] || []).push([["src_components_Tags_js"],{

/***/ 490:
/*!********************************************!*\
  !*** ./src/components/Tags.js + 3 modules ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Tags)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(461);
// EXTERNAL MODULE: ./node_modules/@mui/material/Menu/Menu.js + 7 modules
var Menu = __webpack_require__(4125);
// EXTERNAL MODULE: ./node_modules/@mui/material/MenuItem/MenuItem.js + 4 modules
var MenuItem = __webpack_require__(4347);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
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
// EXTERNAL MODULE: ./node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar = __webpack_require__(4386);
// EXTERNAL MODULE: ./node_modules/@mui/styles/makeStyles/makeStyles.js + 20 modules
var makeStyles = __webpack_require__(4290);
// EXTERNAL MODULE: ./node_modules/@mui/material/useScrollTrigger/useScrollTrigger.js
var useScrollTrigger = __webpack_require__(298);
// EXTERNAL MODULE: ./node_modules/@mui/material/Slide/Slide.js
var Slide = __webpack_require__(4776);
;// CONCATENATED MODULE: ./src/components/HideOnScroll.js



var HideOnScroll = function HideOnScroll(_ref) {
  var children = _ref.children,
      window = _ref.window;
  var trigger = (0,useScrollTrigger.default)({
    target: window ? window() : undefined
  });
  return /*#__PURE__*/react.createElement(Slide.default, {
    appear: false,
    direction: "down",
    "in": !trigger,
    timeout: 500
  }, children);
};
;// CONCATENATED MODULE: ./src/components/Tags.js









var styles = (0,makeStyles.default)({
  tags: {
    overflowX: "auto",
    display: "flex",
    "&::-webkit-scrollbar": {
      width: 0
    }
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
      handleScrollPosition = props.handleScrollPosition,
      window = props.window;
  var classes = styles();
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
  var trigger = (0,useScrollTrigger.default)({
    target: window ? window() : undefined
  });
  return (
    /*#__PURE__*/
    // <Slide appear={false} direction="up" in={trigger}>
    react.createElement(AppBar_AppBar, {
      style: {
        background: "#fff",
        position: "fixed",
        top: trigger ? 0 : 64,
        opacity: 0.9,
        transition: "500ms ease-out"
      }
    }, /*#__PURE__*/react.createElement(Toolbar.default, null, /*#__PURE__*/react.createElement("div", {
      className: classes.tags
    }, loggedIn && tagEditor, videoTags.map(function (tag) {
      return /*#__PURE__*/react.createElement(Chip.default, {
        onContextMenu: function onContextMenu(e) {
          return handleRightClick(e, tag);
        },
        component: react_router_dom.Link,
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
    })))) // </Slide>

  );
}

/* harmony default export */ const components_Tags = (Tags);

/***/ })

}]);
//# sourceMappingURL=src_components_Tags_js-1bf0ba41416907e2a15b.js.map