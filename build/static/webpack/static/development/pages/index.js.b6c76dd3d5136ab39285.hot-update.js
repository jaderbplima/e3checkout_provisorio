webpackHotUpdate("static/development/pages/index.js",{

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

/***/ }),

/***/ "./components/checkout/User.js":
/*!*************************************!*\
  !*** ./components/checkout/User.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _actions_checkout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../actions/checkout */ "./actions/checkout.js");
/* harmony import */ var react_credit_cards_es_styles_compiled_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-credit-cards/es/styles-compiled.css */ "./node_modules/react-credit-cards/es/styles-compiled.css");
/* harmony import */ var react_credit_cards_es_styles_compiled_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_credit_cards_es_styles_compiled_css__WEBPACK_IMPORTED_MODULE_15__);


















function sleep(ms) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_9___default.a(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

var User =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(User, _Component);

  function User() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, User);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(User).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleClickOnEdit", function (e) {
      e.preventDefault();
      console.log('handleClickOnEdit');
      var showEditUser = _this.props.showEditUser;
      showEditUser();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleClickOnButton",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var finishEditUser;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                console.log('handleClickOnButton');
                finishEditUser = _this.props.finishEditUser;
                finishEditUser();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(User, [{
    key: "render",
    value: function render() {
      var disabled = this.props.userSegment.view == 'disabled' ? true : false;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, ['enabled', 'disabled'].includes(this.props.userSegment.view) && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"].Group, null, this.props.userSegment.loading && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Dimmer"], {
        active: true,
        inverted: true
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Loader"], {
        size: "small"
      }, "Loading")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], {
        disabled: disabled,
        onClick: this.handleClickOnEdit,
        style: {
          cursor: "pointer"
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Header"], {
        as: "h4"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        name: "user"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Header"].Content, null, "1. Dados Pessoais ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        name: "check",
        color: "green"
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: {
          fontSize: '12px'
        }
      }, "Solicitamos apenas as informa\xE7\xF5es essenciais para a realiza\xE7\xE3o da compra. "), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "+ alterar informa\xE7\xF5es")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], {
        disabled: disabled
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Header"], {
        size: "small",
        style: {
          margin: 0
        }
      }, "Jader Bruno Pereira Lima"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: {
          margin: 0
        }
      }, "jaderpereiralima@gmail.com"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: {
          margin: 0
        }
      }, "CPF 39137790862"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: {
          margin: 0
        }
      }, "16 98114-7732"))), this.props.userSegment.view === 'edit' && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"].Group, null, this.props.userSegment.loading && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Dimmer"], {
        active: true,
        inverted: true
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Loader"], {
        size: "small"
      }, "Loading")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Header"], {
        as: "h4"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        name: "user"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Header"].Content, null, "1. Dados Pessoais ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        name: "check",
        color: "green"
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: {
          fontSize: '12px'
        }
      }, "Solicitamos apenas as informa\xE7\xF5es essenciais para a realiza\xE7\xE3o da compra. ")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", null, "Nome Completo"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        icon: true,
        value: "Jader Bruno Pereira Lima"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        name: "check",
        color: "green"
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", null, "E-mail"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        icon: true,
        value: "jaderpereiralima@gmail.com"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        name: "check",
        color: "green"
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", null, "CPF"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        icon: true,
        value: "39137790862"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        name: "check",
        color: "green"
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", null, "Telefone ou Celular"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        icon: true,
        value: "16 98114-7732"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        name: "check",
        color: "green"
      })))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        fluid: true,
        color: "blue",
        onClick: this.handleClickOnButton,
        loading: this.props.userSegment.buttonLoading
      }, "Continuar", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        name: "arrow right"
      })))));
    }
  }]);

  return User;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

function mapStateToProps(store) {
  var checkoutState = store.checkoutState;
  var userSegment = checkoutState.userSegment;
  return {
    userSegment: userSegment
  };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_13__["bindActionCreators"])({
    showUserEdit: showUserEdit,
    finishUserEdit: finishUserEdit
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(User));

/***/ })

})
//# sourceMappingURL=index.js.b6c76dd3d5136ab39285.hot-update.js.map