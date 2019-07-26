webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./actions/checkout.js":
/*!*****************************!*\
  !*** ./actions/checkout.js ***!
  \*****************************/
/*! exports provided: actionTypes, incSubTotal, showUserEdit, finishUserEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incSubTotal", function() { return incSubTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showUserEdit", function() { return showUserEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishUserEdit", function() { return finishUserEdit; });
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
var showUserEdit = function showUserEdit() {
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
var finishUserEdit = function finishUserEdit() {
  return function (dispatch) {
    console.log('finishUserEdit');
    dispatch({
      type: actionTypes.TOGGLE_USER_BUTTON_LOADING
    });
    setTimeout(function () {
      dispatch({
        type: actionTypes.TOGGLE_USER_BUTTON_LOADING
      });
      dispatch({
        type: actionTypes.FINISH_USER_EDIT
      });
    }, 2000);
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.b6c76dd3d5136ab39285.hot-update.js.map