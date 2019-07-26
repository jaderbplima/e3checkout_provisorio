webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./actions/checkout.js":
/*!*****************************!*\
  !*** ./actions/checkout.js ***!
  \*****************************/
/*! exports provided: actionTypes, incSubTotal, showEditUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incSubTotal", function() { return incSubTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEditUser", function() { return showEditUser; });
var actionTypes = {
  INC_SUBTOTAL: 'INC_SUBTOTAL',
  LOADING: 'LOADING',
  SHOW_USER_EDIT: 'SHOW_USER_EDIT',
  FINISH_USER_EDIT: 'FINISH_USER_EDIT',
  TOGGLE_USER_LOADING: 'TOGGLE_USER_LOADING',
  TOGGLE_USER_BUTTON_LOADING: 'TOGGLE_USER_BUTTON_LOADING'
};
var incSubTotal = function incSubTotal() {
  return function (dispatch) {
    dispatch({
      type: actionTypes.LOADING
    });
    setTimeout(function () {
      dispatch({
        type: actionTypes.INC_SUBTOTAL
      });
    }, 1000);
  };
};
var showEditUser = function showEditUser() {
  return function (dispatch) {
    console.log('showEditUser');
    dispatch({
      type: actionTypes.TOGGLE_USER_LOADING
    });
    setTimeout(function () {
      dispatch({
        type: actionTypes.TOGGLE_USER_LOADING
      });
      dispatch({
        type: actionTypes.SHOW_USER_EDIT
      });
    }, 2000);
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.3fb06c65b2bdc78d364b.hot-update.js.map