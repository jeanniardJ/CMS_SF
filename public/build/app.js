(self["webpackChunkjja_dev"] = self["webpackChunkjja_dev"] || []).push([["app"],{

/***/ "./assets/controllers/app sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!********************************************************************************************************************!*\
  !*** ./assets/controllers/app/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \********************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/hello_controller.js"
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
webpackContext.id = "./assets/controllers/app sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/react/controllers/app sync recursive \\.(j%7Ct)sx?$":
/*!**********************************************************!*\
  !*** ./assets/react/controllers/app/ sync \.(j%7Ct)sx?$ ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./Nav.jsx": "./assets/react/controllers/app/Nav.jsx"
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
webpackContext.id = "./assets/react/controllers/app sync recursive \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/hello_controller.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/hello_controller.js ***!
  \**********************************************************************************************************************/
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
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
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
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");





/**
 * Welcome to your app's main JavaScript file!
 */

// any CSS you import will output into a single css file (app.css in this case)
// assets/app.js
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // import jQuery

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");

//import './styles/app.scss' // import the main css file

__webpack_require__.e(/*! import() */ "assets__layouts_modals_js").then(__webpack_require__.bind(__webpack_require__, /*! ./_layouts/modals */ "./assets/_layouts/modals.js"));
__webpack_require__.e(/*! import() */ "assets__layouts_toasts_js").then(__webpack_require__.bind(__webpack_require__, /*! ./_layouts/toasts */ "./assets/_layouts/toasts.js"));
function random() {
  return Math.random();
}

/* Génère 50 bulles aléatoires */
for (var i = 0; i < 10; i++) {
  var bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.classList.add("bubble" + (i % 5 + 1));
  bubble.style.top = random() * 100 + "%";
  bubble.style.left = random() * 100 + "%";
  bubble.style.transform = "scale(calc(0.5 + 5 * " + random() + "))";
  document.body.appendChild(bubble);
}

// Vérifiez si le navigateur supporte les services workers
if ("serviceWorker" in navigator) {
  // Enregistrez le service worker
  navigator.serviceWorker.register("/build/service-worker.js").then(function (registration) {
    console.debug("Service Worker enregistré avec succès");
  }).catch(function (err) {
    console.debug("L'enregistrement du Service Worker a échoué : ", err);
  });
}

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: function() { return /* binding */ app; }
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");



// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers/app sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_1__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers/app sync recursive \\.(j%7Ct)sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/react/controllers/app/Nav.jsx":
/*!**********************************************!*\
  !*** ./assets/react/controllers/app/Nav.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
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
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
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

//TODO: rendre le composant de navigation adaptatif pour plusieurs clients
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isScrolled = _useState2[0],
    setIsScrolled = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    show = _useState4[0],
    setShow = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    var onScroll = function onScroll() {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Ajoute l'écouteur d'événement lors du montage du composant
    window.addEventListener("scroll", onScroll);
    var navbar = document.querySelector(".navbar-toggler");
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName === "aria-expanded") {
          var isExpanded = navbar.getAttribute("aria-expanded") === "true";
          setShow(isExpanded);
        }
      });
    });
    observer.observe(navbar, {
      attributes: true
    });

    // Nettoie l'écouteur lors du démontage du composant
    return function () {
      window.removeEventListener("scroll", onScroll), observer.disconnect();
    };
  }, []);

  // Ajoute 'bg-dark' de Bootstrap si isScrolled est true ou si le menu est affiché
  var menuClassName = "navbar navbar-expand-lg fixed-top ".concat(isScrolled || show ? " bg-dark" : "");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("nav", {
    className: "".concat(menuClassName)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    id: "jjadev_logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
    className: "navbar-brand d-flex align-items-center",
    href: props.link_home,
    title: "JJA DEV - Cr\xE9ation de sites web et applications mobiles dans le Jura"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
    src: props.logo,
    srcSet: props.logo,
    width: 40,
    height: 40,
    alt: "Logo de l'entreprise",
    title: "JJA DEV - Cr\xE9ation de sites web et applications mobiles"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
    className: "ms-3"
  }, "JJA DEV"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarNav",
    "aria-controls": "navbarNav",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "collapse navbar-collapse justify-content-end",
    id: "navbarNav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("ul", {
    className: "navbar-nav mr-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
    className: "nav-link",
    "aria-current": "page",
    href: props.link_home,
    title: "Retour \xE0 l\\'accueil"
  }, "Accueil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
    className: "nav-link",
    href: props.link_home + "#services",
    title: "Aller \xE0 la section \"Services\""
  }, "Services")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
    className: "nav-link",
    href: props.link_home + "#contact",
    title: "Aller \xE0 la section \"Contact\""
  }, "Contact"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("ul", {
    className: "navbar-nav ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
    className: "nav-link",
    href: "https://www.facebook.com/jjadevweb",
    "aria-label": "Lien vers la page facebook de l'entreprise",
    title: "Aller sur la page facebook de l'entreprise"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("i", {
    className: "bi bi-facebook"
  })))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js","vendors-node_modules_popperjs_core_lib_index_js-node_modules_symfony_stimulus-bridge_dist_ind-221e81","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-vendor_sy-4f8c26"], function() { return __webpack_exec__("./assets/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxFQUFDLG9DQUFvQztJQUN6QyxjQUFXLDRDQUE0QztJQUN2REUsS0FBSyxFQUFDO0VBQTRDLGdCQUVsRHJDLDJEQUFBO0lBQUdpQyxTQUFTLEVBQUM7RUFBZ0IsQ0FBSSxDQUNsQyxDQUNILENBQ0osQ0FDSCxDQUNKLENBQ0osQ0FBQztBQUVkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamphLWRldi8gXFwuW2p0XXN4Iiwid2VicGFjazovL2pqYS1kZXYvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvYXBwLyBzeW5jIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly9qamEtZGV2Ly4vYXNzZXRzL2NvbnRyb2xsZXJzL2FwcC9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovL2pqYS1kZXYvLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovL2pqYS1kZXYvLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovL2pqYS1kZXYvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvYXBwL05hdi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9hcHAvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycy9hcHAgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vTmF2LmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FwcC9OYXYuanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FwcCBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihqJTdDdClzeD8kXCI7IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuLy8gYXNzZXRzL2FwcC5qc1xyXG5jb25zdCAkID0gcmVxdWlyZShcImpxdWVyeVwiKTsgLy8gaW1wb3J0IGpRdWVyeVxyXG5cclxucmVxdWlyZShcImJvb3RzdHJhcFwiKTtcclxuXHJcbi8vaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2NzcycgLy8gaW1wb3J0IHRoZSBtYWluIGNzcyBmaWxlXHJcbmltcG9ydCBcIi4vYm9vdHN0cmFwLmpzXCI7XHJcblxyXG5pbXBvcnQoXCIuL19sYXlvdXRzL21vZGFsc1wiKTtcclxuaW1wb3J0KFwiLi9fbGF5b3V0cy90b2FzdHNcIik7XHJcblxyXG5mdW5jdGlvbiByYW5kb20oKSB7XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKTtcclxufVxyXG5cclxuLyogR8OpbsOocmUgNTAgYnVsbGVzIGFsw6lhdG9pcmVzICovXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgbGV0IGJ1YmJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBidWJibGUuY2xhc3NMaXN0LmFkZChcImJ1YmJsZVwiKTtcclxuICAgIGJ1YmJsZS5jbGFzc0xpc3QuYWRkKFwiYnViYmxlXCIgKyAoKGkgJSA1KSArIDEpKTtcclxuICAgIGJ1YmJsZS5zdHlsZS50b3AgPSByYW5kb20oKSAqIDEwMCArIFwiJVwiO1xyXG4gICAgYnViYmxlLnN0eWxlLmxlZnQgPSByYW5kb20oKSAqIDEwMCArIFwiJVwiO1xyXG4gICAgYnViYmxlLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoY2FsYygwLjUgKyA1ICogXCIgKyByYW5kb20oKSArIFwiKSlcIjtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnViYmxlKTtcclxufVxyXG5cclxuLy8gVsOpcmlmaWV6IHNpIGxlIG5hdmlnYXRldXIgc3VwcG9ydGUgbGVzIHNlcnZpY2VzIHdvcmtlcnNcclxuaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xyXG4gICAgLy8gRW5yZWdpc3RyZXogbGUgc2VydmljZSB3b3JrZXJcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXHJcbiAgICAgICAgLnJlZ2lzdGVyKFwiL2J1aWxkL3NlcnZpY2Utd29ya2VyLmpzXCIpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiU2VydmljZSBXb3JrZXIgZW5yZWdpc3Ryw6kgYXZlYyBzdWNjw6hzXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIkwnZW5yZWdpc3RyZW1lbnQgZHUgU2VydmljZSBXb3JrZXIgYSDDqWNob3XDqSA6IFwiLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tIFwiQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gXCJAc3ltZm9ueS91eC1yZWFjdFwiO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoXCJAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzL2FwcFwiLCB0cnVlLCAvXFwuW2p0XXN4PyQvKVxyXG4pO1xyXG5cclxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dChcIi4vcmVhY3QvY29udHJvbGxlcnMvYXBwXCIsIHRydWUsIC9cXC4oanx0KXN4PyQvKSk7XHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy9UT0RPOiByZW5kcmUgbGUgY29tcG9zYW50IGRlIG5hdmlnYXRpb24gYWRhcHRhdGlmIHBvdXIgcGx1c2lldXJzIGNsaWVudHNcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICBjb25zdCBbaXNTY3JvbGxlZCwgc2V0SXNTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gNSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTY3JvbGxlZCh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldElzU2Nyb2xsZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQWpvdXRlIGwnw6ljb3V0ZXVyIGQnw6l2w6luZW1lbnQgbG9ycyBkdSBtb250YWdlIGR1IGNvbXBvc2FudFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItdG9nZ2xlclwiKTtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gXCJhcmlhLWV4cGFuZGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0V4cGFuZGVkID0gbmF2YmFyLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikgPT09IFwidHJ1ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3coaXNFeHBhbmRlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKG5hdmJhciwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICAvLyBOZXR0b2llIGwnw6ljb3V0ZXVyIGxvcnMgZHUgZMOpbW9udGFnZSBkdSBjb21wb3NhbnRcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCksIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIEFqb3V0ZSAnYmctZGFyaycgZGUgQm9vdHN0cmFwIHNpIGlzU2Nyb2xsZWQgZXN0IHRydWUgb3Ugc2kgbGUgbWVudSBlc3QgYWZmaWNow6lcclxuICAgIGNvbnN0IG1lbnVDbGFzc05hbWUgPSBgbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgZml4ZWQtdG9wICR7aXNTY3JvbGxlZCB8fCBzaG93ID8gXCIgYmctZGFya1wiIDogXCJcIn1gO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Ake21lbnVDbGFzc05hbWV9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiamphZGV2X2xvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb3BzLmxpbmtfaG9tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJKSkEgREVWIC0gQ3LDqWF0aW9uIGRlIHNpdGVzIHdlYiBldCBhcHBsaWNhdGlvbnMgbW9iaWxlcyBkYW5zIGxlIEp1cmFcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5sb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjU2V0PXtwcm9wcy5sb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ28gZGUgbCdlbnRyZXByaXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSkpBIERFViAtIENyw6lhdGlvbiBkZSBzaXRlcyB3ZWIgZXQgYXBwbGljYXRpb25zIG1vYmlsZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtcy0zXCI+SkpBIERFVjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjbmF2YmFyTmF2XCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2XCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UganVzdGlmeS1jb250ZW50LWVuZFwiIGlkPVwibmF2YmFyTmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY3VycmVudD1cInBhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb3BzLmxpbmtfaG9tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJldG91ciDDoCBsXFwnYWNjdWVpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjdWVpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb3BzLmxpbmtfaG9tZSArIFwiI3NlcnZpY2VzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9J0FsbGVyIMOgIGxhIHNlY3Rpb24gXCJTZXJ2aWNlc1wiJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvcHMubGlua19ob21lICsgXCIjY29udGFjdFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdBbGxlciDDoCBsYSBzZWN0aW9uIFwiQ29udGFjdFwiJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2pqYWRldndlYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxpZW4gdmVycyBsYSBwYWdlIGZhY2Vib29rIGRlIGwnZW50cmVwcmlzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBbGxlciBzdXIgbGEgcGFnZSBmYWNlYm9vayBkZSBsJ2VudHJlcHJpc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWZhY2Vib29rXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0IiwiJCIsInJlcXVpcmUiLCJyYW5kb20iLCJNYXRoIiwiaSIsImJ1YmJsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInRoZW4iLCJyZWdpc3RyYXRpb24iLCJjb25zb2xlIiwiZGVidWciLCJjYXRjaCIsImVyciIsInN0YXJ0U3RpbXVsdXNBcHAiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCJhcHAiLCJjb250ZXh0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaXNTY3JvbGxlZCIsInNldElzU2Nyb2xsZWQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInNob3ciLCJzZXRTaG93Iiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hdmJhciIsInF1ZXJ5U2VsZWN0b3IiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJmb3JFYWNoIiwibXV0YXRpb24iLCJhdHRyaWJ1dGVOYW1lIiwiaXNFeHBhbmRlZCIsImdldEF0dHJpYnV0ZSIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc2Nvbm5lY3QiLCJtZW51Q2xhc3NOYW1lIiwiY29uY2F0IiwiY2xhc3NOYW1lIiwiaWQiLCJocmVmIiwibGlua19ob21lIiwidGl0bGUiLCJzcmMiLCJsb2dvIiwic3JjU2V0Iiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==