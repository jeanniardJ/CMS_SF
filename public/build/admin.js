(self["webpackChunkjja_dev"] = self["webpackChunkjja_dev"] || []).push([["admin"],{

/***/ "./assets/controllers/admin sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!**********************************************************************************************************************!*\
  !*** ./assets/controllers/admin/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \**********************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./userCount_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/admin/userCount_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers/admin sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/react/controllers/admin sync recursive \\.(j%7Ct)sx?$":
/*!************************************************************!*\
  !*** ./assets/react/controllers/admin/ sync \.(j%7Ct)sx?$ ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./Admin.jsx": "./assets/react/controllers/admin/Admin.jsx",
	"./DarkModeSwitch.jsx": "./assets/react/controllers/admin/DarkModeSwitch.jsx",
	"./Nav.jsx": "./assets/react/controllers/admin/Nav.jsx",
	"./NavTabs.jsx": "./assets/react/controllers/admin/NavTabs.jsx",
	"./User.jsx": "./assets/react/controllers/admin/User.jsx",
	"./calendar.jsx": "./assets/react/controllers/admin/calendar.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/react/controllers/admin sync recursive \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/admin/userCount_controller.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/admin/userCount_controller.js ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _default; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");













function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.outputTarget.textContent = this.countValue;
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);
_defineProperty(_default, "values", {
  count: Number
});
_defineProperty(_default, "targets", ['output']);


/***/ }),

/***/ "./assets/admin.js":
/*!*************************!*\
  !*** ./assets/admin.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ "./node_modules/bootstrap-icons/font/bootstrap-icons.css");
/* harmony import */ var _bootstrap_admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bootstrap-admin */ "./assets/bootstrap-admin.js");





/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// assets/app.js

// any CSS you import will output into a single css file (app.css in this case)

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! bootstrap/js/index.umd */ "./node_modules/bootstrap/js/index.umd.js");
__webpack_require__(/*! bootstrap-table/src/bootstrap-table */ "./node_modules/bootstrap-table/src/bootstrap-table.js");
__webpack_require__(/*! bootstrap-table/src/extensions/mobile/bootstrap-table-mobile */ "./node_modules/bootstrap-table/src/extensions/mobile/bootstrap-table-mobile.js");
__webpack_require__(/*! bootstrap-table/src/extensions/addrbar/bootstrap-table-addrbar */ "./node_modules/bootstrap-table/src/extensions/addrbar/bootstrap-table-addrbar.js");
__webpack_require__(/*! bootstrap-table/src/extensions/auto-refresh/bootstrap-table-auto-refresh */ "./node_modules/bootstrap-table/src/extensions/auto-refresh/bootstrap-table-auto-refresh.js");
__webpack_require__(/*! bootstrap-table/src/locale/bootstrap-table-fr-FR */ "./node_modules/bootstrap-table/src/locale/bootstrap-table-fr-FR.js");
__webpack_require__(/*! tinymce */ "./node_modules/tinymce/tinymce.js");

__webpack_require__.e(/*! import() */ "assets_styles_admin_admin_scss").then(__webpack_require__.bind(__webpack_require__, /*! ./styles/admin/admin.scss */ "./assets/styles/admin/admin.scss"));
Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js"), __webpack_require__.e("assets__layouts_modals_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./_layouts/modals */ "./assets/_layouts/modals.js"));
Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js"), __webpack_require__.e("assets__layouts_toasts_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./_layouts/toasts */ "./assets/_layouts/toasts.js"));
__webpack_require__.e(/*! import() */ "assets__layouts_validationForm_js").then(__webpack_require__.t.bind(__webpack_require__, /*! ./_layouts/validationForm */ "./assets/_layouts/validationForm.js", 23));
//import('./devis.js')

/***/ }),

/***/ "./assets/bootstrap-admin.js":
/*!***********************************!*\
  !*** ./assets/bootstrap-admin.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   admin: function() { return /* binding */ admin; }
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");



// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var admin = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers/admin sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_1__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers/admin sync recursive \\.(j%7Ct)sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/react/controllers/admin/Admin.jsx":
/*!**************************************************!*\
  !*** ./assets/react/controllers/admin/Admin.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Admin; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Admin() {
  return;
}

/***/ }),

/***/ "./assets/react/controllers/admin/DarkModeSwitch.jsx":
/*!***********************************************************!*\
  !*** ./assets/react/controllers/admin/DarkModeSwitch.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);













function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var DarkModeSwitch = function DarkModeSwitch() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(function () {
      var localTheme = localStorage.getItem('dark-mode');
      return localTheme ? JSON.parse(localTheme) : false;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    isDarkMode = _useState2[0],
    setIsDarkMode = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }, [isDarkMode]);
  var toggleDarkMode = function toggleDarkMode() {
    setIsDarkMode(function (prevMode) {
      return !prevMode;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "form-check form-switch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    role: "switch",
    id: "darkModeSwitch",
    checked: isDarkMode,
    onChange: toggleDarkMode
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (DarkModeSwitch);

/***/ }),

/***/ "./assets/react/controllers/admin/Nav.jsx":
/*!************************************************!*\
  !*** ./assets/react/controllers/admin/Nav.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function Nav(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("aside", {
    className: "d-flex flex-column flex-shrink-0 p-3 shadow-lg h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    href: props.admin.path,
    className: "col-10 mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("i", {
    className: "".concat(props.admin.icon, " fs-4 me-2")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "fs-4"
  }, props.admin.trans.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    type: "button",
    className: "d-inline d-sm-none btn-close btn-close-white",
    "data-bs-dismiss": "offcanvas",
    "aria-label": "Close",
    "data-bs-target": "#menuOffcan"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("hr", {
    className: "text-bg-dark"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("ul", {
    className: "nav nav-pills flex-column mb-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    href: props.admin.path,
    className: "nav-link text-white ".concat(props.menuActive === 'home' ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("i", {
    className: "".concat(props.dashboard.icon, " pe-1")
  }), props.admin.trans.home)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", {
    className: "nav-item dropdown text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    className: "nav-link dropdown-toggle text-white ".concat(props.menuActive === 'modules' ? 'active' : ''),
    "data-bs-toggle": "dropdown",
    role: "button",
    "aria-expanded": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("i", {
    className: props.module.icon
  }), " ", props.module.trans.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(NavModules, {
    modules: props.modules,
    subMenuActive: props.subMenuActive
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    href: props.user.path,
    className: "nav-link text-white ".concat(props.menuActive === 'user' ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("i", {
    className: "bi bi-people pe-1"
  }), props.user.trans.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    href: props.contact.path,
    className: "nav-link text-white ".concat(props.menuActive === 'contact' ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("i", {
    className: "bi bi-envelope-at"
  }), " Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("hr", {
    className: "text-bg-dark"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", {
    className: "nav-item dropdown text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    className: "nav-link dropdown-toggle text-white ".concat(props.menuActive === 'config' ? 'active' : ''),
    "data-bs-toggle": "dropdown",
    role: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("i", {
    className: props.setting.icon
  }), " ", props.setting.trans.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(NavParameters, {
    settings: props.settings,
    subMenuActive: props.subMenuActive
  }))));
}
function NavModules(_ref) {
  var modules = _ref.modules,
    subMenuActive = _ref.subMenuActive;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("ul", {
    className: "dropdown-menu pb-1 list-unstyled w-100 dropdown-menu-dark"
  }, Object.values(modules).map(function (module) {
    if (module.isGranted === false) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", {
      className: "dropdown-item mt-1 mb-1 ".concat(subMenuActive === module.name ? 'active' : ''),
      key: module.path
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
      href: module.path,
      className: "d-inline-flex text-white text-decoration-none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("i", {
      className: "".concat(module.icon, " me-2")
    }), module.trans.title));
  }));
}
function NavParameters(_ref2) {
  var settings = _ref2.settings,
    subMenuActive = _ref2.subMenuActive;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("ul", {
    className: "dropdown-menu pb-1 list-unstyled w-100 dropdown-menu-dark"
  }, Object.values(settings).map(function (setting) {
    if (setting.isGranted === false) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", {
      className: "dropdown-item mt-1 mb-1 ".concat(subMenuActive === setting.name ? 'active' : ''),
      key: setting.path
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
      href: setting.path,
      className: "d-inline-flex text-white text-decoration-none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("i", {
      className: "".concat(setting.icon, " me-2")
    }), setting.trans.title));
  }));
}

/***/ }),

/***/ "./assets/react/controllers/admin/NavTabs.jsx":
/*!****************************************************!*\
  !*** ./assets/react/controllers/admin/NavTabs.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavTabs; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }





function NavTabLi(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
    className: 'nav-link ' + (props.isActive ? 'active' : ''),
    href: props.route
  }, props.name));
}
function NavTabs(props) {
  var navTabs = props.navTabs;
  var navTabActive = props.navTabActive;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("ul", {
    className: "nav nav-tabs mb-3"
  }, Object.values(navTabs).map(function (tab, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(NavTabLi, _extends({
      key: key,
      isActive: tab.id === navTabActive
    }, tab));
  }));
}

/***/ }),

/***/ "./assets/react/controllers/admin/User.jsx":
/*!*************************************************!*\
  !*** ./assets/react/controllers/admin/User.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
  return props.users;
}

/***/ }),

/***/ "./assets/react/controllers/admin/calendar.jsx":
/*!*****************************************************!*\
  !*** ./assets/react/controllers/admin/calendar.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Calendar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/react */ "./node_modules/@fullcalendar/react/dist/index.js");
/* harmony import */ var _fullcalendar_bootstrap5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/bootstrap5 */ "./node_modules/@fullcalendar/bootstrap5/index.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/index.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/index.js");






function Calendar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    plugins: [_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_bootstrap5__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__["default"]],
    initialView: "timeGridWeek",
    locale: 'fr',
    titleFormat: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },
    slotLabelFormat: {
      hour: '2-digit',
      minute: '2-digit',
      omitZeroMinute: false,
      hour12: false
    },
    events: props.path,
    weekends: false,
    themeSystem: "bootstrap5",
    slotMinTime: '09:00:00',
    slotMaxTime: '18:00:00',
    height: "650px"
  });
}
function eventDidMount(info) {
  return new (bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1___default().Tooltip)(info.el, {
    title: info.event.title + '<br>' + info.event.extendedProps.content,
    placement: 'top',
    trigger: 'hover',
    html: true
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_popperjs_core_lib_index_js-node_modules_symfony_stimulus-bridge_dist_ind-221e81","vendors-node_modules_react-dom_index_js","vendors-node_modules_bootstrap_dist_js_bootstrap_bundle_min_js-node_modules_bootstrap_js_inde-b2221b","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-vendor_sy-4f8c26"], function() { return __webpack_exec__("./assets/admin.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxLQUFLO01BQ3JCQyxNQUFNLEVBQUU7SUFDWixDQUFFO0lBQ0ZDLE1BQU0sRUFBRXpELEtBQUssQ0FBQ0UsSUFBSztJQUNuQndELFFBQVEsRUFBRSxLQUFNO0lBQ2hCQyxXQUFXLEVBQUMsWUFBWTtJQUN4QkMsV0FBVyxFQUFFLFVBQVc7SUFDeEJDLFdBQVcsRUFBRSxVQUFXO0lBQ3hCQyxNQUFNLEVBQUM7RUFBTyxDQUNqQixDQUFDO0FBRVY7QUFFQSxTQUFTQyxhQUFhQSxDQUFDQyxJQUFJLEVBQUU7RUFDekIsT0FBTyxJQUFJMUIsMEZBQWlCLENBQUMwQixJQUFJLENBQUNFLEVBQUUsRUFBRTtJQUNsQzVELEtBQUssRUFBRTBELElBQUksQ0FBQ0csS0FBSyxDQUFDN0QsS0FBSyxHQUFHLE1BQU0sR0FBRzBELElBQUksQ0FBQ0csS0FBSyxDQUFDQyxhQUFhLENBQUNDLE9BQU87SUFDbkVDLFNBQVMsRUFBRSxLQUFLO0lBQ2hCQyxPQUFPLEVBQUUsT0FBTztJQUNoQkMsSUFBSSxFQUFFO0VBQ1YsQ0FBQyxDQUFDO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qamEtZGV2LyBcXC5banRdc3g/NDRiYiIsIndlYnBhY2s6Ly9qamEtZGV2Ly4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FkbWluLyBzeW5jIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly9qamEtZGV2Ly4vYXNzZXRzL2NvbnRyb2xsZXJzL2FkbWluL3VzZXJDb3VudF9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2pqYS1kZXYvLi9hc3NldHMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vamphLWRldi8uL2Fzc2V0cy9ib290c3RyYXAtYWRtaW4uanMiLCJ3ZWJwYWNrOi8vamphLWRldi8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hZG1pbi9BZG1pbi5qc3giLCJ3ZWJwYWNrOi8vamphLWRldi8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hZG1pbi9EYXJrTW9kZVN3aXRjaC5qc3giLCJ3ZWJwYWNrOi8vamphLWRldi8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hZG1pbi9OYXYuanN4Iiwid2VicGFjazovL2pqYS1kZXYvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvYWRtaW4vTmF2VGFicy5qc3giLCJ3ZWJwYWNrOi8vamphLWRldi8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hZG1pbi9Vc2VyLmpzeCIsIndlYnBhY2s6Ly9qamEtZGV2Ly4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FkbWluL2NhbGVuZGFyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vdXNlckNvdW50X2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9hZG1pbi91c2VyQ291bnRfY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycy9hZG1pbiBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9BZG1pbi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hZG1pbi9BZG1pbi5qc3hcIixcblx0XCIuL0RhcmtNb2RlU3dpdGNoLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FkbWluL0RhcmtNb2RlU3dpdGNoLmpzeFwiLFxuXHRcIi4vTmF2LmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FkbWluL05hdi5qc3hcIixcblx0XCIuL05hdlRhYnMuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvYWRtaW4vTmF2VGFicy5qc3hcIixcblx0XCIuL1VzZXIuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvYWRtaW4vVXNlci5qc3hcIixcblx0XCIuL2NhbGVuZGFyLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FkbWluL2NhbGVuZGFyLmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hZG1pbiBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihqJTdDdClzeD8kXCI7IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgdmFsdWVzID0geyBjb3VudDogTnVtYmVyIH1cclxuICAgIHN0YXRpYyB0YXJnZXRzID0gWydvdXRwdXQnXVxyXG5cclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5vdXRwdXRUYXJnZXQudGV4dENvbnRlbnQgPSB0aGlzLmNvdW50VmFsdWVcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcbi8vIGFzc2V0cy9hcHAuanNcclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0IFwiYm9vdHN0cmFwLWljb25zL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1wiO1xyXG5cclxuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcblxyXG5yZXF1aXJlKFwiYm9vdHN0cmFwL2pzL2luZGV4LnVtZFwiKTtcclxuXHJcbnJlcXVpcmUoXCJib290c3RyYXAtdGFibGUvc3JjL2Jvb3RzdHJhcC10YWJsZVwiKTtcclxucmVxdWlyZShcImJvb3RzdHJhcC10YWJsZS9zcmMvZXh0ZW5zaW9ucy9tb2JpbGUvYm9vdHN0cmFwLXRhYmxlLW1vYmlsZVwiKTtcclxucmVxdWlyZShcImJvb3RzdHJhcC10YWJsZS9zcmMvZXh0ZW5zaW9ucy9hZGRyYmFyL2Jvb3RzdHJhcC10YWJsZS1hZGRyYmFyXCIpO1xyXG5yZXF1aXJlKFwiYm9vdHN0cmFwLXRhYmxlL3NyYy9leHRlbnNpb25zL2F1dG8tcmVmcmVzaC9ib290c3RyYXAtdGFibGUtYXV0by1yZWZyZXNoXCIpO1xyXG5yZXF1aXJlKFwiYm9vdHN0cmFwLXRhYmxlL3NyYy9sb2NhbGUvYm9vdHN0cmFwLXRhYmxlLWZyLUZSXCIpO1xyXG5cclxucmVxdWlyZShcInRpbnltY2VcIik7XHJcblxyXG5pbXBvcnQgXCIuL2Jvb3RzdHJhcC1hZG1pblwiO1xyXG5cclxuaW1wb3J0KFwiLi9zdHlsZXMvYWRtaW4vYWRtaW4uc2Nzc1wiKTtcclxuXHJcbmltcG9ydChcIi4vX2xheW91dHMvbW9kYWxzXCIpO1xyXG5pbXBvcnQoXCIuL19sYXlvdXRzL3RvYXN0c1wiKTtcclxuaW1wb3J0KFwiLi9fbGF5b3V0cy92YWxpZGF0aW9uRm9ybVwiKTtcclxuLy9pbXBvcnQoJy4vZGV2aXMuanMnKVxyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJ1xyXG5pbXBvcnQgeyByZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMgfSBmcm9tICdAc3ltZm9ueS91eC1yZWFjdCdcclxuXHJcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XHJcbmV4cG9ydCBjb25zdCBhZG1pbiA9IHN0YXJ0U3RpbXVsdXNBcHAoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoXHJcbiAgICAgICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMvYWRtaW4nLFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgL1xcLltqdF1zeD8kL1xyXG4gICAgKVxyXG4pXHJcblxyXG5yZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4vcmVhY3QvY29udHJvbGxlcnMvYWRtaW4nLCB0cnVlLCAvXFwuKGp8dClzeD8kLylcclxuKVxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluKCkge1xyXG4gICAgcmV0dXJuXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRGFya01vZGVTd2l0Y2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaXNEYXJrTW9kZSwgc2V0SXNEYXJrTW9kZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrLW1vZGUnKTtcclxuICAgICAgICByZXR1cm4gbG9jYWxUaGVtZSA/IEpTT04ucGFyc2UobG9jYWxUaGVtZSkgOiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmstbW9kZScsIEpTT04uc3RyaW5naWZ5KGlzRGFya01vZGUpKTtcclxuICAgICAgICBpZiAoaXNEYXJrTW9kZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRoZW1lJywgJ2RhcmsnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRoZW1lJywgJ2xpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzRGFya01vZGVdKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc0RhcmtNb2RlKHByZXZNb2RlID0+ICFwcmV2TW9kZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cInN3aXRjaFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImRhcmtNb2RlU3dpdGNoXCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzRGFya01vZGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dG9nZ2xlRGFya01vZGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFya01vZGVTd2l0Y2g7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtc2hyaW5rLTAgcC0zIHNoYWRvdy1sZyBoLTEwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb3BzLmFkbWluLnBhdGh9IGNsYXNzTmFtZT1cImNvbC0xMCBtYi0zIG1iLW1kLTAgbWUtbWQtYXV0byB0ZXh0LXdoaXRlIHRleHQtZGVjb3JhdGlvbi1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtwcm9wcy5hZG1pbi5pY29ufSBmcy00IG1lLTJgfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnMtNFwiPntwcm9wcy5hZG1pbi50cmFucy50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1pbmxpbmUgZC1zbS1ub25lIGJ0bi1jbG9zZSBidG4tY2xvc2Utd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtZGlzbWlzcz1cIm9mZmNhbnZhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNtZW51T2ZmY2FuXCJcclxuICAgICAgICAgICAgICAgID48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LWJnLWRhcmtcIiAvPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi1waWxscyBmbGV4LWNvbHVtbiBtYi1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9wcy5hZG1pbi5wYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayB0ZXh0LXdoaXRlICR7cHJvcHMubWVudUFjdGl2ZSA9PT0gJ2hvbWUnID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtwcm9wcy5kYXNoYm9hcmQuaWNvbn0gcGUtMWB9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmFkbWluLnRyYW5zLmhvbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BuYXYtaXRlbSBkcm9wZG93biB0ZXh0LXdoaXRlYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlIHRleHQtd2hpdGUgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm1lbnVBY3RpdmUgPT09ICdtb2R1bGVzJyA/ICdhY3RpdmUnIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17cHJvcHMubW9kdWxlLmljb259PjwvaT4ge3Byb3BzLm1vZHVsZS50cmFucy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdk1vZHVsZXMgbW9kdWxlcz17cHJvcHMubW9kdWxlc30gc3ViTWVudUFjdGl2ZT17cHJvcHMuc3ViTWVudUFjdGl2ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9wcy51c2VyLnBhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rIHRleHQtd2hpdGUgJHtwcm9wcy5tZW51QWN0aXZlID09PSAndXNlcicgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS1wZW9wbGUgcGUtMVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnVzZXIudHJhbnMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb3BzLmNvbnRhY3QucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgdGV4dC13aGl0ZSAke3Byb3BzLm1lbnVBY3RpdmUgPT09ICdjb250YWN0JyA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWVudmVsb3BlLWF0XCI+PC9pPiBDb250YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LWJnLWRhcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YG5hdi1pdGVtIGRyb3Bkb3duIHRleHQtd2hpdGVgfT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayBkcm9wZG93bi10b2dnbGUgdGV4dC13aGl0ZSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubWVudUFjdGl2ZSA9PT0gJ2NvbmZpZycgPyAnYWN0aXZlJyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3Byb3BzLnNldHRpbmcuaWNvbn0+PC9pPiB7cHJvcHMuc2V0dGluZy50cmFucy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZQYXJhbWV0ZXJzIHNldHRpbmdzPXtwcm9wcy5zZXR0aW5nc30gc3ViTWVudUFjdGl2ZT17cHJvcHMuc3ViTWVudUFjdGl2ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gTmF2TW9kdWxlcyh7IG1vZHVsZXMsIHN1Yk1lbnVBY3RpdmUgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBwYi0xIGxpc3QtdW5zdHlsZWQgdy0xMDAgZHJvcGRvd24tbWVudS1kYXJrXCI+XHJcbiAgICAgICAgICAgIHtPYmplY3QudmFsdWVzKG1vZHVsZXMpLm1hcCgobW9kdWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kdWxlLmlzR3JhbnRlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLWl0ZW0gbXQtMSBtYi0xICR7c3ViTWVudUFjdGl2ZSA9PT0gbW9kdWxlLm5hbWUgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bW9kdWxlLnBhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXttb2R1bGUucGF0aH0gY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCB0ZXh0LXdoaXRlIHRleHQtZGVjb3JhdGlvbi1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Ake21vZHVsZS5pY29ufSBtZS0yYH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21vZHVsZS50cmFucy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5hdlBhcmFtZXRlcnMoeyBzZXR0aW5ncywgc3ViTWVudUFjdGl2ZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IHBiLTEgbGlzdC11bnN0eWxlZCB3LTEwMCBkcm9wZG93bi1tZW51LWRhcmtcIj5cclxuICAgICAgICAgICAge09iamVjdC52YWx1ZXMoc2V0dGluZ3MpLm1hcCgoc2V0dGluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmcuaXNHcmFudGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd24taXRlbSBtdC0xIG1iLTEgJHtzdWJNZW51QWN0aXZlID09PSBzZXR0aW5nLm5hbWUgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c2V0dGluZy5wYXRofVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17c2V0dGluZy5wYXRofSBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4IHRleHQtd2hpdGUgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7c2V0dGluZy5pY29ufSBtZS0yYH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NldHRpbmcudHJhbnMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIE5hdlRhYkxpKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9eyduYXYtbGluayAnICsgKHByb3BzLmlzQWN0aXZlID8gJ2FjdGl2ZScgOiAnJyl9IGhyZWY9e3Byb3BzLnJvdXRlfT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2VGFicyhwcm9wcykge1xyXG4gICAgbGV0IG5hdlRhYnMgPSBwcm9wcy5uYXZUYWJzXHJcbiAgICBsZXQgbmF2VGFiQWN0aXZlID0gcHJvcHMubmF2VGFiQWN0aXZlXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBtYi0zXCI+XHJcbiAgICAgICAgICAgIHtPYmplY3QudmFsdWVzKG5hdlRhYnMpLm1hcCgodGFiLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgIDxOYXZUYWJMaSBrZXk9e2tleX0gaXNBY3RpdmU9e3RhYi5pZCA9PT0gbmF2VGFiQWN0aXZlfSB7Li4udGFifSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHJldHVybiBwcm9wcy51c2VycztcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBGdWxsQ2FsZW5kYXIgZnJvbSAnQGZ1bGxjYWxlbmRhci9yZWFjdCdcclxuaW1wb3J0IGJvb3RzdHJhcDVQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9ib290c3RyYXA1J1xyXG5pbXBvcnQgdGltZUdyaWRQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci90aW1lZ3JpZCdcclxuaW1wb3J0IGJvb3RzdHJhcCBmcm9tICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qcydcclxuaW1wb3J0IGludGVyYWN0aW9uUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvaW50ZXJhY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxlbmRhcihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnVsbENhbGVuZGFyXHJcbiAgICAgICAgICAgIHBsdWdpbnM9e1t0aW1lR3JpZFBsdWdpbiwgYm9vdHN0cmFwNVBsdWdpbiwgaW50ZXJhY3Rpb25QbHVnaW5dfVxyXG4gICAgICAgICAgICBpbml0aWFsVmlldz1cInRpbWVHcmlkV2Vla1wiXHJcbiAgICAgICAgICAgIGxvY2FsZT17J2ZyJ31cclxuICAgICAgICAgICAgdGl0bGVGb3JtYXQ9e3tcclxuICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaGVhZGVyVG9vbGJhcj17e1xyXG4gICAgICAgICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXI6ICd0aXRsZScsXHJcbiAgICAgICAgICAgICAgICByaWdodDogJ3RpbWVHcmlkV2Vlayx0aW1lR3JpZERheScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHNsb3RMYWJlbEZvcm1hdD17e1xyXG4gICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICBvbWl0WmVyb01pbnV0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBob3VyMTI6IGZhbHNlLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBldmVudHM9e3Byb3BzLnBhdGh9XHJcbiAgICAgICAgICAgIHdlZWtlbmRzPXtmYWxzZX1cclxuICAgICAgICAgICAgdGhlbWVTeXN0ZW09XCJib290c3RyYXA1XCJcclxuICAgICAgICAgICAgc2xvdE1pblRpbWU9eycwOTowMDowMCd9XHJcbiAgICAgICAgICAgIHNsb3RNYXhUaW1lPXsnMTg6MDA6MDAnfVxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI2NTBweFwiXHJcbiAgICAgICAgLz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gZXZlbnREaWRNb3VudChpbmZvKSB7XHJcbiAgICByZXR1cm4gbmV3IGJvb3RzdHJhcC5Ub29sdGlwKGluZm8uZWwsIHtcclxuICAgICAgICB0aXRsZTogaW5mby5ldmVudC50aXRsZSArICc8YnI+JyArIGluZm8uZXZlbnQuZXh0ZW5kZWRQcm9wcy5jb250ZW50LFxyXG4gICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXHJcbiAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcclxuICAgICAgICBodG1sOiB0cnVlLFxyXG4gICAgfSlcclxufVxyXG4iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0Iiwib3V0cHV0VGFyZ2V0IiwidGV4dENvbnRlbnQiLCJjb3VudFZhbHVlIiwiX2RlZmluZVByb3BlcnR5IiwiY291bnQiLCJOdW1iZXIiLCJkZWZhdWx0IiwiJCIsInJlcXVpcmUiLCJzdGFydFN0aW11bHVzQXBwIiwicmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIiwiYWRtaW4iLCJjb250ZXh0IiwiUmVhY3QiLCJBZG1pbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGFya01vZGVTd2l0Y2giLCJfdXNlU3RhdGUiLCJsb2NhbFRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzRGFya01vZGUiLCJzZXRJc0RhcmtNb2RlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidG9nZ2xlRGFya01vZGUiLCJwcmV2TW9kZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicm9sZSIsImlkIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiTmF2IiwicHJvcHMiLCJocmVmIiwicGF0aCIsImNvbmNhdCIsImljb24iLCJ0cmFucyIsInRpdGxlIiwibWVudUFjdGl2ZSIsImRhc2hib2FyZCIsImhvbWUiLCJtb2R1bGUiLCJOYXZNb2R1bGVzIiwibW9kdWxlcyIsInN1Yk1lbnVBY3RpdmUiLCJ1c2VyIiwiY29udGFjdCIsInNldHRpbmciLCJOYXZQYXJhbWV0ZXJzIiwic2V0dGluZ3MiLCJfcmVmIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiaXNHcmFudGVkIiwibmFtZSIsIl9yZWYyIiwiTmF2VGFiTGkiLCJpc0FjdGl2ZSIsInJvdXRlIiwiTmF2VGFicyIsIm5hdlRhYnMiLCJuYXZUYWJBY3RpdmUiLCJ0YWIiLCJfZXh0ZW5kcyIsInVzZXJzIiwiRnVsbENhbGVuZGFyIiwiYm9vdHN0cmFwNVBsdWdpbiIsInRpbWVHcmlkUGx1Z2luIiwiYm9vdHN0cmFwIiwiaW50ZXJhY3Rpb25QbHVnaW4iLCJDYWxlbmRhciIsInBsdWdpbnMiLCJpbml0aWFsVmlldyIsImxvY2FsZSIsInRpdGxlRm9ybWF0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaGVhZGVyVG9vbGJhciIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsInNsb3RMYWJlbEZvcm1hdCIsImhvdXIiLCJtaW51dGUiLCJvbWl0WmVyb01pbnV0ZSIsImhvdXIxMiIsImV2ZW50cyIsIndlZWtlbmRzIiwidGhlbWVTeXN0ZW0iLCJzbG90TWluVGltZSIsInNsb3RNYXhUaW1lIiwiaGVpZ2h0IiwiZXZlbnREaWRNb3VudCIsImluZm8iLCJUb29sdGlwIiwiZWwiLCJldmVudCIsImV4dGVuZGVkUHJvcHMiLCJjb250ZW50IiwicGxhY2VtZW50IiwidHJpZ2dlciIsImh0bWwiXSwic291cmNlUm9vdCI6IiJ9