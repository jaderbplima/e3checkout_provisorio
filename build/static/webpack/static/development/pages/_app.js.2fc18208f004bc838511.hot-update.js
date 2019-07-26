webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/checkout.js":
/*!******************************!*\
  !*** ./reducers/checkout.js ***!
  \******************************/
/*! exports provided: checkoutReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkoutReducer", function() { return checkoutReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/checkout */ "./actions/checkout.js");


var initialState = {
  subTotal: 20,
  loading: false,
  userSegment: {
    mobile: 'visible',
    view: 'enabled',
    loading: false,
    buttonLoading: false
  },
  shipmentSegment: {
    mobile: 'visible',
    view: 'disabled',
    loading: 'false',
    buttonLoading: 'false'
  },
  paymentSegment: {
    mobile: 'visible',
    view: 'disabled',
    loading: 'false',
    buttonLoading: 'false'
  }
};
var checkoutReducer = function checkoutReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_checkout__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].INC_SUBTOTAL:
      console.log('INC_SUBTOTAL');
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        subTotal: state.subTotal + 1,
        loading: false
      });

    case _actions_checkout__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].LOADING:
      console.log('LOADING');
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: true
      });

    case _actions_checkout__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].SHOW_USER_EDIT:
      console.log('SHOW_USER_EDIT');
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        userSegment: {
          view: 'edit'
        }
      });

    case _actions_checkout__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].FINISH_USER_EDIT:
      console.log('SHOW_USER_EDIT');
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        userSegment: {
          view: 'edit'
        }
      });

    case _actions_checkout__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].TOGGLE_USER_LOADING:
      console.log('TOGGLE_USER_LOADING');
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        userSegment: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.userSegment, {
          loading: !state.userSegment.loading
        })
      });

    case _actions_checkout__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].TOGGLE_USER_BUTTON_LOADING:
      console.log('TOGGLE_USER_BUTTON_LOADING');
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        userSegment: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.userSegment, {
          buttonLoading: !state.userSegment.buttonLoading
        })
      });

    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.2fc18208f004bc838511.hot-update.js.map