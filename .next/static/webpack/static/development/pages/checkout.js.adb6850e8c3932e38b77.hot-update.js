webpackHotUpdate("static/development/pages/checkout.js",{

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: formatMoney */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
function formatMoney(amount) {
  var options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  var formatter = new Intl.NumberFormat('pt-BR', options);
  return formatter.format(amount);
}



/***/ })

})
//# sourceMappingURL=checkout.js.adb6850e8c3932e38b77.hot-update.js.map