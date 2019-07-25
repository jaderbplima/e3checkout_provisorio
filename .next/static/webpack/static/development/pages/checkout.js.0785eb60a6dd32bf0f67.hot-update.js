webpackHotUpdate("static/development/pages/checkout.js",{

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_credit_cards__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-credit-cards */ "./node_modules/react-credit-cards/es/index.js");
/* harmony import */ var react_credit_cards_es_styles_compiled_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-credit-cards/es/styles-compiled.css */ "./node_modules/react-credit-cards/es/styles-compiled.css");
/* harmony import */ var react_credit_cards_es_styles_compiled_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_credit_cards_es_styles_compiled_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _checkout_User__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./checkout/User */ "./components/checkout/User.js");











var _jsxFileName = "/Users/jaderlima/nextjs-demo-store/components/Checkout.js";







function sleep(ms) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_10___default.a(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

var Checkout =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Checkout, _Component);

  function Checkout() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Checkout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Checkout).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleClickOnEditAddress",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                _this.setState({
                  address: {
                    segmentLoading: true,
                    status: 'ok'
                  }
                });

                _context.next = 4;
                return sleep(2000);

              case 4:
                _this.setState({
                  address: {
                    segmentLoading: false,
                    status: 'editing'
                  }
                });

              case 5:
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleClickOnEditAddress2",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();

                _this.setState({
                  address: {
                    buttonLoading: true,
                    status: 'editing'
                  }
                });

                _context2.next = 4;
                return sleep(2000);

              case 4:
                _this.setState({
                  address: {
                    status: 'ok',
                    buttonLoading: false
                  }
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleClick", function (e) {
      e.preventDefault();

      _this.setState({
        loading: !_this.state.loading
      });
    });

    _this.handleChangeOnCardForm = _this.handleChangeOnCardForm.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.state = {
      user: {
        segmentLoading: false,
        buttonLoading: false,
        status: 'ok'
      },
      address: {
        segmentLoading: false,
        buttonLoading: false,
        status: 'editing'
      },
      card: {
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focused: 'number'
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Checkout, [{
    key: "handleChangeOnCardForm",
    value: function handleChangeOnCardForm(e) {
      e.preventDefault();

      var newState = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state);

      newState.card[e.target.name] = e.target.value;
      newState.card.focused = e.target.name;
      this.setState(newState);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Responsive"], {
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"],
        maxWidth: 991,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        columns: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        onClick: this.handleClickOnEditUser,
        style: {
          cursor: "pointer"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "1. Dados Pessoais ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "check",
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        onClick: this.handleClickOnEditUser,
        style: {
          cursor: "pointer"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "2. Entrega ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "check",
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        onClick: this.handleClickOnEditUser,
        style: {
          cursor: "pointer"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "1. Pagamento ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "check",
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        columns: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_checkout_User__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Responsive"], {
        as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"],
        minWidth: 992,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        columns: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_checkout_User__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), this.state.address.status === 'ok' && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, this.state.address.segmentLoading && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Dimmer"], {
        active: true,
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Loader"], {
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Loading")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        onClick: this.handleClickOnEditAddress,
        style: {
          cursor: "pointer"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        as: "h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "truck",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "2. Entrega ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "check",
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          fontSize: '12px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Cadastre ou selecione um endere\xE7o"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "+ alterar entrega")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        size: "small",
        style: {
          margin: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Endere\xE7o para entrega:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          margin: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Alameda Graja\xFA, 500 - Alphaville Industrial"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          margin: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Barueri-SP | CEP 06454050"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          margin: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "AC: Jader Bruno Pereira Lima"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        size: "small",
        style: {
          margin: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Forma de entrega selecionada:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          margin: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Jadlog Package (Transportadora)"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          margin: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "R$ 29,00"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          margin: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Prazo: at\xE9 12 dias \xFAteis"))), this.state.address.status === 'editing' && react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        as: "h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "truck",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "2. Entrega ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "check",
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          fontSize: '12px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Cadastre ou selecione um endere\xE7o"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "+ novo endere\xE7o")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Endere\xE7o de entrega:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Radio"], {
        name: "radioGroup",
        value: "this",
        checked: this.state.value === 'this',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          margin: 0,
          fontSize: '11px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Alameda Graja\xFA, 500 - Alphaville Industrial"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          margin: 0,
          fontSize: '11px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Barueri-SP | CEP 06454050"))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Radio"], {
        name: "radioGroup",
        value: "this",
        checked: this.state.value === 'this',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          margin: 0,
          fontSize: '11px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "Rua Rio Branco, 546 - Jardim Paulista"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          margin: 0,
          fontSize: '11px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "Ibitinga-SP | CEP 14940412")))))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "Forma de envio:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Radio"], {
        name: "radioGroup",
        value: "this",
        checked: this.state.value === 'this',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          margin: 0,
          fontSize: '12px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "Correios PAC")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          margin: 0,
          fontSize: '11px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "At\xE9 12 dias \xFAteis")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        color: "green",
        basic: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "R$ 18,40"))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Radio"], {
        name: "radioGroup",
        value: "this",
        checked: this.state.value === 'this',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          margin: 0,
          fontSize: '12px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Jadlog Transportadora")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          margin: 0,
          fontSize: '11px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "At\xE9 8 dias \xFAteis")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        color: "green",
        basic: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, "R$ 24,90"))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Radio"], {
        name: "radioGroup",
        value: "this",
        checked: this.state.value === 'this',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          margin: 0,
          fontSize: '12px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "Correios Sedex")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          margin: 0,
          fontSize: '11px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "At\xE9 7 dias \xFAteis")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        color: "green",
        basic: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, "R$ 44,00")))))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        fluid: true,
        color: "blue",
        onClick: this.handleClickOnEditAddress2,
        loading: this.state.address.buttonLoading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "Continuar", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "arrow right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        as: "h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "credit card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "3. Pagamento")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          fontSize: '12px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, "Escolha abaixo uma forma de pagamento"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Accordion"], {
        styled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Accordion"].Title, {
        active: true,
        index: 0,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Radio"], {
        name: "radioGroup",
        value: "this",
        checked: this.state.value === 'this',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "credit card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, "Cart\xE3o de cr\xE9dito")))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Accordion"].Content, {
        active: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Responsive"], {
        minWidth: 1200,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_credit_cards__WEBPACK_IMPORTED_MODULE_13__["default"], {
        number: this.state.card.number,
        name: this.state.card.name,
        expiry: this.state.card.expiry,
        cvc: this.state.card.cvc,
        focused: this.state.card.focused,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
        size: "tiny",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        width: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, "N\xFAmero do cart\xE3o"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        icon: true,
        placeholder: "",
        name: "number",
        value: this.state.card.number,
        onChange: this.handleChangeOnCardForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "check",
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        width: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, "Validade"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        icon: true,
        placeholder: "MM/AA",
        name: "expiry",
        value: this.state.card.expiry,
        onChange: this.handleChangeOnCardForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "check",
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
        widths: "equal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        width: 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, "Nome impresso no cart\xE3o"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        icon: true,
        name: "name",
        value: this.state.card.name,
        onChange: this.handleChangeOnCardForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "check",
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        width: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, "CVC"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        icon: true,
        name: "cvc",
        value: this.state.card.cvc,
        onChange: this.handleChangeOnCardForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "check",
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
        widths: "equal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, "CPF do titular"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        icon: true,
        value: "391.377.908-62",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "check",
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
        widths: "equal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, "Parcelas"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        icon: true,
        value: "16 98114-7732",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "check",
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        fluid: true,
        color: "green",
        onClick: this.handleClickOnEditAddress2,
        loading: this.state.address.buttonLoading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "lock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }), "Comprar agora")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Accordion"].Title, {
        active: true,
        index: 0,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Radio"], {
        name: "radioGroup",
        value: "this",
        checked: this.state.value === 'this',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "barcode",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "Boleto")))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Accordion"].Content, {
        active: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, "Somente quando recebermos a confirma\xE7\xE3o, em at\xE9 48h ap\xF3s o pagamento, seguiremos com o envio das suas compras. O prazo de entrega passa a ser contado somente ap\xF3s a confirma\xE7\xE3o do pagamento."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        size: "small",
        style: {
          margin: 0
        },
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, "Valor do boleto: R$ 169,00"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        fluid: true,
        color: "green",
        onClick: this.handleClickOnEditAddress2,
        loading: this.state.address.buttonLoading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "lock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }), "Comprar agora")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Accordion"].Title, {
        active: true,
        index: 0,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Radio"], {
        name: "radioGroup",
        value: "this",
        checked: this.state.value === 'this',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "money",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, "Dep\xF3sito banc\xE1rio")))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Accordion"].Content, {
        active: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      }, "Selecione o banco abaixo:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Radio"], {
        name: "radioGroup",
        value: "this",
        checked: this.state.value === 'this',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, "Bradesco"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        color: "red",
        basic: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        },
        __self: this
      }, "Logo"))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Radio"], {
        name: "radioGroup",
        value: "this",
        checked: this.state.value === 'this',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }, "Banco do Brasil"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        color: "yellow",
        basic: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }, "Logo"))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Radio"], {
        name: "radioGroup",
        value: "this",
        checked: this.state.value === 'this',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      }, "Santander"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Label"], {
        color: "red",
        basic: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      }, "Logo")))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        size: "small",
        style: {
          margin: 0
        },
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }, "Valor do dep\xF3sito: R$ 169,00"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        fluid: true,
        color: "green",
        onClick: this.handleClickOnEditAddress2,
        loading: this.state.address.buttonLoading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "lock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        __self: this
      }), "Comprar agora")))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        as: "h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, "Cupom de desconto")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        style: {
          fontSize: '12px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        },
        __self: this
      }, "Aplique o seu cupom de desconto:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
        widths: "equal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Input"], {
        icon: true,
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "check",
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        fluid: true,
        color: "black",
        onClick: this.handleClickOnEditAddress2,
        loading: this.state.address.buttonLoading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }), "Adicionar cupom"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        as: "h4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 514
        },
        __self: this
      }, "Resumo do pedido")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"], {
        basic: "very",
        celled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        as: "h5",
        image: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, "Subtotal"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
        textAlign: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528
        },
        __self: this
      }, "R$ 169,00")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        as: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533
        },
        __self: this
      }, "Descontos", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"].Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535
        },
        __self: this
      }, "(Cupom aplicado)")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
        textAlign: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539
        },
        __self: this
      }, " - R$ 17,00")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 541
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 542
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        as: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        },
        __self: this
      }, "Descontos", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"].Subheader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        __self: this
      }, "(Boleto)")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
        textAlign: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        __self: this
      }, " - R$ 6,60")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        as: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555
        },
        __self: this
      }, "Frete"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
        textAlign: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        __self: this
      }, " + R$ 24,90")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        as: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        },
        __self: this
      }, "Total"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Table"].Cell, {
        textAlign: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 570
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        as: "h3",
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Header"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        },
        __self: this
      }, "R$ 158,40")))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      }, "Items do pedido:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Item"].Group, {
        divided: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Item"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Item"].Image, {
        size: "tiny",
        src: "/images/wireframe/image.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Item"].Content, {
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586
        },
        __self: this
      }, "Kit de Almofadas Alure"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587
        },
        __self: this
      }, "1 unidade - R$ 79,90"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Item"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Item"].Image, {
        size: "tiny",
        src: "/images/wireframe/image.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 592
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Item"].Content, {
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 593
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594
        },
        __self: this
      }, "Cobre Leito Camafeu"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595
        },
        __self: this
      }, "1 unidade - R$ 51,00"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Item"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Item"].Image, {
        size: "tiny",
        src: "/images/wireframe/image.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Item"].Content, {
        verticalAlign: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 601
        },
        __self: this
      }, "Cortina Florence"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        },
        __self: this
      }, "1 unidade - R$ 20,99")))))))))));
    }
  }]);

  return Checkout;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Checkout);

/***/ })

})
//# sourceMappingURL=checkout.js.0785eb60a6dd32bf0f67.hot-update.js.map