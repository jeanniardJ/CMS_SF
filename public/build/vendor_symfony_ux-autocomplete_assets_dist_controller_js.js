"use strict";
(self["webpackChunkjja_dev"] = self["webpackChunkjja_dev"] || []).push([["vendor_symfony_ux-autocomplete_assets_dist_controller_js"],{

/***/ "./vendor/symfony/ux-autocomplete/assets/dist/controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-autocomplete/assets/dist/controller.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ default_1; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! tom-select */ "./node_modules/tom-select/dist/js/tom-select.complete.js");
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(tom_select__WEBPACK_IMPORTED_MODULE_31__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }






























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



/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
var _default_1_instances, _default_1_getCommonConfig, _default_1_createAutocomplete, _default_1_createAutocompleteWithHtmlContents, _default_1_createAutocompleteWithRemoteData, _default_1_stripTags, _default_1_mergeObjects, _default_1_createTomSelect;
var default_1 = /*#__PURE__*/function (_Controller) {
  function default_1() {
    var _this;
    _classCallCheck(this, default_1);
    _this = _callSuper(this, default_1, arguments);
    _default_1_instances.add(_this);
    _this.isObserving = false;
    _this.hasLoadedChoicesPreviously = false;
    _this.originalOptions = [];
    return _this;
  }
  _inherits(default_1, _Controller);
  return _createClass(default_1, [{
    key: "initialize",
    value: function initialize() {
      var _this2 = this;
      if (!this.mutationObserver) {
        this.mutationObserver = new MutationObserver(function (mutations) {
          _this2.onMutations(mutations);
        });
      }
    }
  }, {
    key: "connect",
    value: function connect() {
      if (this.selectElement) {
        this.originalOptions = this.createOptionsDataStructure(this.selectElement);
      }
      this.initializeTomSelect();
    }
  }, {
    key: "initializeTomSelect",
    value: function initializeTomSelect() {
      if (this.selectElement) {
        this.selectElement.setAttribute('data-skip-morph', '');
      }
      if (this.urlValue) {
        this.tomSelect = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createAutocompleteWithRemoteData).call(this, this.urlValue, this.hasMinCharactersValue ? this.minCharactersValue : null);
        return;
      }
      if (this.optionsAsHtmlValue) {
        this.tomSelect = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createAutocompleteWithHtmlContents).call(this);
        return;
      }
      this.tomSelect = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createAutocomplete).call(this);
      this.startMutationObserver();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.stopMutationObserver();
      var currentSelectedValues = [];
      if (this.selectElement) {
        if (this.selectElement.multiple) {
          currentSelectedValues = Array.from(this.selectElement.options).filter(function (option) {
            return option.selected;
          }).map(function (option) {
            return option.value;
          });
        } else {
          currentSelectedValues = [this.selectElement.value];
        }
      }
      this.tomSelect.destroy();
      if (this.selectElement) {
        if (this.selectElement.multiple) {
          Array.from(this.selectElement.options).forEach(function (option) {
            option.selected = currentSelectedValues.includes(option.value);
          });
        } else {
          this.selectElement.value = currentSelectedValues[0];
        }
      }
    }
  }, {
    key: "getMaxOptions",
    value: function getMaxOptions() {
      return this.selectElement ? this.selectElement.options.length : 50;
    }
  }, {
    key: "selectElement",
    get: function get() {
      if (!(this.element instanceof HTMLSelectElement)) {
        return null;
      }
      return this.element;
    }
  }, {
    key: "formElement",
    get: function get() {
      if (!(this.element instanceof HTMLInputElement) && !(this.element instanceof HTMLSelectElement)) {
        throw new Error('Autocomplete Stimulus controller can only be used on an <input> or <select>.');
      }
      return this.element;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'autocomplete'
      });
    }
  }, {
    key: "preload",
    get: function get() {
      if (!this.hasPreloadValue) {
        return 'focus';
      }
      if (this.preloadValue == 'false') {
        return false;
      }
      if (this.preloadValue == 'true') {
        return true;
      }
      return this.preloadValue;
    }
  }, {
    key: "resetTomSelect",
    value: function resetTomSelect() {
      if (this.tomSelect) {
        this.dispatchEvent('before-reset', {
          tomSelect: this.tomSelect
        });
        this.stopMutationObserver();
        var currentHtml = this.element.innerHTML;
        var currentValue = this.tomSelect.getValue();
        this.tomSelect.destroy();
        this.element.innerHTML = currentHtml;
        this.initializeTomSelect();
        this.tomSelect.setValue(currentValue);
        this.startMutationObserver();
      }
    }
  }, {
    key: "changeTomSelectDisabledState",
    value: function changeTomSelectDisabledState(isDisabled) {
      this.stopMutationObserver();
      if (isDisabled) {
        this.tomSelect.disable();
      } else {
        this.tomSelect.enable();
      }
      this.startMutationObserver();
    }
  }, {
    key: "startMutationObserver",
    value: function startMutationObserver() {
      if (!this.isObserving && this.mutationObserver) {
        this.mutationObserver.observe(this.element, {
          childList: true,
          subtree: true,
          attributes: true,
          characterData: true,
          attributeOldValue: true
        });
        this.isObserving = true;
      }
    }
  }, {
    key: "stopMutationObserver",
    value: function stopMutationObserver() {
      if (this.isObserving && this.mutationObserver) {
        this.mutationObserver.disconnect();
        this.isObserving = false;
      }
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var _this3 = this;
      var changeDisabledState = false;
      var requireReset = false;
      mutations.forEach(function (mutation) {
        switch (mutation.type) {
          case 'attributes':
            if (mutation.target === _this3.element && mutation.attributeName === 'disabled') {
              changeDisabledState = true;
              break;
            }
            if (mutation.target === _this3.element && mutation.attributeName === 'multiple') {
              var isNowMultiple = _this3.element.hasAttribute('multiple');
              var wasMultiple = mutation.oldValue === 'multiple';
              if (isNowMultiple !== wasMultiple) {
                requireReset = true;
              }
              break;
            }
            break;
        }
      });
      var newOptions = this.selectElement ? this.createOptionsDataStructure(this.selectElement) : [];
      var areOptionsEquivalent = this.areOptionsEquivalent(newOptions);
      if (!areOptionsEquivalent || requireReset) {
        this.originalOptions = newOptions;
        this.resetTomSelect();
      }
      if (changeDisabledState) {
        this.changeTomSelectDisabledState(this.formElement.disabled);
      }
    }
  }, {
    key: "createOptionsDataStructure",
    value: function createOptionsDataStructure(selectElement) {
      return Array.from(selectElement.options).map(function (option) {
        var optgroup = option.closest('optgroup');
        return {
          value: option.value,
          text: option.text,
          group: optgroup ? optgroup.label : null
        };
      });
    }
  }, {
    key: "areOptionsEquivalent",
    value: function areOptionsEquivalent(newOptions) {
      var filteredOriginalOptions = this.originalOptions.filter(function (option) {
        return option.value !== '';
      });
      var filteredNewOptions = newOptions.filter(function (option) {
        return option.value !== '';
      });
      var originalPlaceholderOption = this.originalOptions.find(function (option) {
        return option.value === '';
      });
      var newPlaceholderOption = newOptions.find(function (option) {
        return option.value === '';
      });
      if (originalPlaceholderOption && newPlaceholderOption && originalPlaceholderOption.text !== newPlaceholderOption.text) {
        return false;
      }
      if (filteredOriginalOptions.length !== filteredNewOptions.length) {
        return false;
      }
      var normalizeOption = function normalizeOption(option) {
        return "".concat(option.value, "-").concat(option.text, "-").concat(option.group);
      };
      var originalOptionsSet = new Set(filteredOriginalOptions.map(normalizeOption));
      var newOptionsSet = new Set(filteredNewOptions.map(normalizeOption));
      return originalOptionsSet.size === newOptionsSet.size && _toConsumableArray(originalOptionsSet).every(function (option) {
        return newOptionsSet.has(option);
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_30__.Controller);
_default_1_instances = new WeakSet(), _default_1_getCommonConfig = function _default_1_getCommonConfig() {
  var _this4 = this;
  var plugins = {};
  var isMultiple = !this.selectElement || this.selectElement.multiple;
  if (!this.formElement.disabled && !isMultiple) {
    plugins.clear_button = {
      title: ''
    };
  }
  if (isMultiple) {
    plugins.remove_button = {
      title: ''
    };
  }
  if (this.urlValue) {
    plugins.virtual_scroll = {};
  }
  var render = {
    no_results: function no_results() {
      return "<div class=\"no-results\">".concat(_this4.noResultsFoundTextValue, "</div>");
    }
  };
  var config = {
    render: render,
    plugins: plugins,
    onItemAdd: function onItemAdd() {
      _this4.tomSelect.setTextboxValue('');
    },
    closeAfterSelect: true
  };
  if (!this.selectElement && !this.urlValue) {
    config.shouldLoad = function () {
      return false;
    };
  }
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, config, this.tomSelectOptionsValue);
}, _default_1_createAutocomplete = function _default_1_createAutocomplete() {
  var config = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_getCommonConfig).call(this), {
    maxOptions: this.getMaxOptions()
  });
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createTomSelect).call(this, config);
}, _default_1_createAutocompleteWithHtmlContents = function _default_1_createAutocompleteWithHtmlContents() {
  var _this5 = this;
  var config = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_getCommonConfig).call(this), {
    maxOptions: this.getMaxOptions(),
    score: function score(search) {
      var scoringFunction = _this5.tomSelect.getScoreFunction(search);
      return function (item) {
        return scoringFunction(Object.assign(Object.assign({}, item), {
          text: __classPrivateFieldGet(_this5, _default_1_instances, "m", _default_1_stripTags).call(_this5, item.text)
        }));
      };
    },
    render: {
      item: function item(_item) {
        return "<div>".concat(_item.text, "</div>");
      },
      option: function option(item) {
        return "<div>".concat(item.text, "</div>");
      }
    }
  });
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createTomSelect).call(this, config);
}, _default_1_createAutocompleteWithRemoteData = function _default_1_createAutocompleteWithRemoteData(autocompleteEndpointUrl, minCharacterLength) {
  var _this7 = this;
  var config = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_getCommonConfig).call(this), {
    firstUrl: function firstUrl(query) {
      var separator = autocompleteEndpointUrl.includes('?') ? '&' : '?';
      return "".concat(autocompleteEndpointUrl).concat(separator, "query=").concat(encodeURIComponent(query));
    },
    load: function load(query, callback) {
      var _this6 = this;
      var url = this.getUrl(query);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        _this6.setNextUrl(query, json.next_page);
        callback(json.results.options || json.results, json.results.optgroups || []);
      }).catch(function () {
        return callback([], []);
      });
    },
    shouldLoad: function shouldLoad(query) {
      if (null !== minCharacterLength) {
        return query.length >= minCharacterLength;
      }
      if (_this7.hasLoadedChoicesPreviously) {
        return true;
      }
      if (query.length > 0) {
        _this7.hasLoadedChoicesPreviously = true;
      }
      return query.length >= 3;
    },
    optgroupField: 'group_by',
    score: function score(search) {
      return function (item) {
        return 1;
      };
    },
    render: {
      option: function option(item) {
        return "<div>".concat(item.text, "</div>");
      },
      item: function item(_item2) {
        return "<div>".concat(_item2.text, "</div>");
      },
      loading_more: function loading_more() {
        return "<div class=\"loading-more-results\">".concat(_this7.loadingMoreTextValue, "</div>");
      },
      no_more_results: function no_more_results() {
        return "<div class=\"no-more-results\">".concat(_this7.noMoreResultsTextValue, "</div>");
      },
      no_results: function no_results() {
        return "<div class=\"no-results\">".concat(_this7.noResultsFoundTextValue, "</div>");
      }
    },
    preload: this.preload
  });
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createTomSelect).call(this, config);
}, _default_1_stripTags = function _default_1_stripTags(string) {
  return string.replace(/(<([^>]+)>)/gi, '');
}, _default_1_mergeObjects = function _default_1_mergeObjects(object1, object2) {
  return Object.assign(Object.assign({}, object1), object2);
}, _default_1_createTomSelect = function _default_1_createTomSelect(options) {
  var preConnectPayload = {
    options: options
  };
  this.dispatchEvent('pre-connect', preConnectPayload);
  var tomSelect = new (tom_select__WEBPACK_IMPORTED_MODULE_31___default())(this.formElement, options);
  var connectPayload = {
    tomSelect: tomSelect,
    options: options
  };
  this.dispatchEvent('connect', connectPayload);
  return tomSelect;
};
default_1.values = {
  url: String,
  optionsAsHtml: Boolean,
  loadingMoreText: String,
  noResultsFoundText: String,
  noMoreResultsText: String,
  minCharacters: Number,
  tomSelectOptions: Object,
  preload: String
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yX3N5bWZvbnlfdXgtYXV0b2NvbXBsZXRlX2Fzc2V0c19kaXN0X2NvbnRyb2xsZXJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDYjs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTRSxzQkFBc0JBLENBQUNDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLENBQUMsRUFBRTtFQUN0RCxJQUFJRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUNDLENBQUMsRUFBRSxNQUFNLElBQUlDLFNBQVMsQ0FBQywrQ0FBK0MsQ0FBQztFQUM1RixJQUFJLE9BQU9ILEtBQUssS0FBSyxVQUFVLEdBQUdELFFBQVEsS0FBS0MsS0FBSyxJQUFJLENBQUNFLENBQUMsR0FBRyxDQUFDRixLQUFLLENBQUNJLEdBQUcsQ0FBQ0wsUUFBUSxDQUFDLEVBQUUsTUFBTSxJQUFJSSxTQUFTLENBQUMsMEVBQTBFLENBQUM7RUFDbEwsT0FBT0YsSUFBSSxLQUFLLEdBQUcsR0FBR0MsQ0FBQyxHQUFHRCxJQUFJLEtBQUssR0FBRyxHQUFHQyxDQUFDLENBQUNHLElBQUksQ0FBQ04sUUFBUSxDQUFDLEdBQUdHLENBQUMsR0FBR0EsQ0FBQyxDQUFDSSxLQUFLLEdBQUdOLEtBQUssQ0FBQ08sR0FBRyxDQUFDUixRQUFRLENBQUM7QUFDakc7QUFFQSxJQUFJUyxvQkFBb0IsRUFBRUMsMEJBQTBCLEVBQUVDLDZCQUE2QixFQUFFQyw2Q0FBNkMsRUFBRUMsMkNBQTJDLEVBQUVDLG9CQUFvQixFQUFFQyx1QkFBdUIsRUFBRUMsMEJBQTBCO0FBQUMsSUFDclBDLFNB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RUFBRUgsTUFBTTtFQUN2Qkksa0JBQWtCLEVBQUVKLE1BQU07RUFDMUJLLGlCQUFpQixFQUFFTCxNQUFNO0VBQ3pCTSxhQUFhLEVBQUVDLE1BQU07RUFDckJDLGdCQUFnQixFQUFFNUMsTUFBTTtFQUN4QjRCLE9BQU8sRUFBRVE7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamphLWRldi8uL3ZlbmRvci9zeW1mb255L3V4LWF1dG9jb21wbGV0ZS9hc3NldHMvZGlzdC9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0IFRvbVNlbGVjdCBmcm9tICd0b20tc2VsZWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5mdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XG5cbnZhciBfZGVmYXVsdF8xX2luc3RhbmNlcywgX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcsIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlLCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhIdG1sQ29udGVudHMsIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aFJlbW90ZURhdGEsIF9kZWZhdWx0XzFfc3RyaXBUYWdzLCBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cywgX2RlZmF1bHRfMV9jcmVhdGVUb21TZWxlY3Q7XG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX2RlZmF1bHRfMV9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICB0aGlzLmlzT2JzZXJ2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzTG9hZGVkQ2hvaWNlc1ByZXZpb3VzbHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbE9wdGlvbnMgPSBbXTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTXV0YXRpb25zKG11dGF0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsT3B0aW9ucyA9IHRoaXMuY3JlYXRlT3B0aW9uc0RhdGFTdHJ1Y3R1cmUodGhpcy5zZWxlY3RFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpemVUb21TZWxlY3QoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZVRvbVNlbGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1za2lwLW1vcnBoJywgJycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnVybFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhSZW1vdGVEYXRhKS5jYWxsKHRoaXMsIHRoaXMudXJsVmFsdWUsIHRoaXMuaGFzTWluQ2hhcmFjdGVyc1ZhbHVlID8gdGhpcy5taW5DaGFyYWN0ZXJzVmFsdWUgOiBudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zQXNIdG1sVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudG9tU2VsZWN0ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aEh0bWxDb250ZW50cykuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvbVNlbGVjdCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZSkuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGFydE11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5zdG9wTXV0YXRpb25PYnNlcnZlcigpO1xuICAgICAgICBsZXQgY3VycmVudFNlbGVjdGVkVmFsdWVzID0gW107XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEVsZW1lbnQubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2VsZWN0ZWRWYWx1ZXMgPSBBcnJheS5mcm9tKHRoaXMuc2VsZWN0RWxlbWVudC5vcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFNlbGVjdGVkVmFsdWVzID0gW3RoaXMuc2VsZWN0RWxlbWVudC52YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b21TZWxlY3QuZGVzdHJveSgpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RFbGVtZW50Lm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLnNlbGVjdEVsZW1lbnQub3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGN1cnJlbnRTZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RFbGVtZW50LnZhbHVlID0gY3VycmVudFNlbGVjdGVkVmFsdWVzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldE1heE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEVsZW1lbnQgPyB0aGlzLnNlbGVjdEVsZW1lbnQub3B0aW9ucy5sZW5ndGggOiA1MDtcbiAgICB9XG4gICAgZ2V0IHNlbGVjdEVsZW1lbnQoKSB7XG4gICAgICAgIGlmICghKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGZvcm1FbGVtZW50KCkge1xuICAgICAgICBpZiAoISh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSAmJiAhKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdXRvY29tcGxldGUgU3RpbXVsdXMgY29udHJvbGxlciBjYW4gb25seSBiZSB1c2VkIG9uIGFuIDxpbnB1dD4gb3IgPHNlbGVjdD4uJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ2F1dG9jb21wbGV0ZScgfSk7XG4gICAgfVxuICAgIGdldCBwcmVsb2FkKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzUHJlbG9hZFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2ZvY3VzJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmVsb2FkVmFsdWUgPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByZWxvYWRWYWx1ZSA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZWxvYWRWYWx1ZTtcbiAgICB9XG4gICAgcmVzZXRUb21TZWxlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnRvbVNlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdiZWZvcmUtcmVzZXQnLCB7IHRvbVNlbGVjdDogdGhpcy50b21TZWxlY3QgfSk7XG4gICAgICAgICAgICB0aGlzLnN0b3BNdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SHRtbCA9IHRoaXMuZWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLnRvbVNlbGVjdC5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgdGhpcy50b21TZWxlY3QuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGN1cnJlbnRIdG1sO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplVG9tU2VsZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdC5zZXRWYWx1ZShjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5zdGFydE11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VUb21TZWxlY3REaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zdG9wTXV0YXRpb25PYnNlcnZlcigpO1xuICAgICAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy50b21TZWxlY3QuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b21TZWxlY3QuZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGFydE11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgICB9XG4gICAgc3RhcnRNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPYnNlcnZpbmcgJiYgdGhpcy5tdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNPYnNlcnZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0b3BNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgICAgICBpZiAodGhpcy5pc09ic2VydmluZyAmJiB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmlzT2JzZXJ2aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25NdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gICAgICAgIGxldCBjaGFuZ2VEaXNhYmxlZFN0YXRlID0gZmFsc2U7XG4gICAgICAgIGxldCByZXF1aXJlUmVzZXQgPSBmYWxzZTtcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKG11dGF0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnRhcmdldCA9PT0gdGhpcy5lbGVtZW50ICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZURpc2FibGVkU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnRhcmdldCA9PT0gdGhpcy5lbGVtZW50ICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzTm93TXVsdGlwbGUgPSB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2FzTXVsdGlwbGUgPSBtdXRhdGlvbi5vbGRWYWx1ZSA9PT0gJ211bHRpcGxlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05vd011bHRpcGxlICE9PSB3YXNNdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVSZXNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSB0aGlzLnNlbGVjdEVsZW1lbnQgPyB0aGlzLmNyZWF0ZU9wdGlvbnNEYXRhU3RydWN0dXJlKHRoaXMuc2VsZWN0RWxlbWVudCkgOiBbXTtcbiAgICAgICAgY29uc3QgYXJlT3B0aW9uc0VxdWl2YWxlbnQgPSB0aGlzLmFyZU9wdGlvbnNFcXVpdmFsZW50KG5ld09wdGlvbnMpO1xuICAgICAgICBpZiAoIWFyZU9wdGlvbnNFcXVpdmFsZW50IHx8IHJlcXVpcmVSZXNldCkge1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbE9wdGlvbnMgPSBuZXdPcHRpb25zO1xuICAgICAgICAgICAgdGhpcy5yZXNldFRvbVNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VEaXNhYmxlZFN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRvbVNlbGVjdERpc2FibGVkU3RhdGUodGhpcy5mb3JtRWxlbWVudC5kaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlT3B0aW9uc0RhdGFTdHJ1Y3R1cmUoc2VsZWN0RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShzZWxlY3RFbGVtZW50Lm9wdGlvbnMpLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRncm91cCA9IG9wdGlvbi5jbG9zZXN0KCdvcHRncm91cCcpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgIHRleHQ6IG9wdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgIGdyb3VwOiBvcHRncm91cCA/IG9wdGdyb3VwLmxhYmVsIDogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhcmVPcHRpb25zRXF1aXZhbGVudChuZXdPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkT3JpZ2luYWxPcHRpb25zID0gdGhpcy5vcmlnaW5hbE9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSAhPT0gJycpO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZE5ld09wdGlvbnMgPSBuZXdPcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgIT09ICcnKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxQbGFjZWhvbGRlck9wdGlvbiA9IHRoaXMub3JpZ2luYWxPcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSAnJyk7XG4gICAgICAgIGNvbnN0IG5ld1BsYWNlaG9sZGVyT3B0aW9uID0gbmV3T3B0aW9ucy5maW5kKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSA9PT0gJycpO1xuICAgICAgICBpZiAob3JpZ2luYWxQbGFjZWhvbGRlck9wdGlvbiAmJlxuICAgICAgICAgICAgbmV3UGxhY2Vob2xkZXJPcHRpb24gJiZcbiAgICAgICAgICAgIG9yaWdpbmFsUGxhY2Vob2xkZXJPcHRpb24udGV4dCAhPT0gbmV3UGxhY2Vob2xkZXJPcHRpb24udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWx0ZXJlZE9yaWdpbmFsT3B0aW9ucy5sZW5ndGggIT09IGZpbHRlcmVkTmV3T3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBub3JtYWxpemVPcHRpb24gPSAob3B0aW9uKSA9PiBgJHtvcHRpb24udmFsdWV9LSR7b3B0aW9uLnRleHR9LSR7b3B0aW9uLmdyb3VwfWA7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsT3B0aW9uc1NldCA9IG5ldyBTZXQoZmlsdGVyZWRPcmlnaW5hbE9wdGlvbnMubWFwKG5vcm1hbGl6ZU9wdGlvbikpO1xuICAgICAgICBjb25zdCBuZXdPcHRpb25zU2V0ID0gbmV3IFNldChmaWx0ZXJlZE5ld09wdGlvbnMubWFwKG5vcm1hbGl6ZU9wdGlvbikpO1xuICAgICAgICByZXR1cm4gKG9yaWdpbmFsT3B0aW9uc1NldC5zaXplID09PSBuZXdPcHRpb25zU2V0LnNpemUgJiZcbiAgICAgICAgICAgIFsuLi5vcmlnaW5hbE9wdGlvbnNTZXRdLmV2ZXJ5KChvcHRpb24pID0+IG5ld09wdGlvbnNTZXQuaGFzKG9wdGlvbikpKTtcbiAgICB9XG59XG5fZGVmYXVsdF8xX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9kZWZhdWx0XzFfZ2V0Q29tbW9uQ29uZmlnID0gZnVuY3Rpb24gX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcoKSB7XG4gICAgY29uc3QgcGx1Z2lucyA9IHt9O1xuICAgIGNvbnN0IGlzTXVsdGlwbGUgPSAhdGhpcy5zZWxlY3RFbGVtZW50IHx8IHRoaXMuc2VsZWN0RWxlbWVudC5tdWx0aXBsZTtcbiAgICBpZiAoIXRoaXMuZm9ybUVsZW1lbnQuZGlzYWJsZWQgJiYgIWlzTXVsdGlwbGUpIHtcbiAgICAgICAgcGx1Z2lucy5jbGVhcl9idXR0b24gPSB7IHRpdGxlOiAnJyB9O1xuICAgIH1cbiAgICBpZiAoaXNNdWx0aXBsZSkge1xuICAgICAgICBwbHVnaW5zLnJlbW92ZV9idXR0b24gPSB7IHRpdGxlOiAnJyB9O1xuICAgIH1cbiAgICBpZiAodGhpcy51cmxWYWx1ZSkge1xuICAgICAgICBwbHVnaW5zLnZpcnR1YWxfc2Nyb2xsID0ge307XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlciA9IHtcbiAgICAgICAgbm9fcmVzdWx0czogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibm8tcmVzdWx0c1wiPiR7dGhpcy5ub1Jlc3VsdHNGb3VuZFRleHRWYWx1ZX08L2Rpdj5gO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICByZW5kZXIsXG4gICAgICAgIHBsdWdpbnMsXG4gICAgICAgIG9uSXRlbUFkZDogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b21TZWxlY3Quc2V0VGV4dGJveFZhbHVlKCcnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VBZnRlclNlbGVjdDogdHJ1ZSxcbiAgICB9O1xuICAgIGlmICghdGhpcy5zZWxlY3RFbGVtZW50ICYmICF0aGlzLnVybFZhbHVlKSB7XG4gICAgICAgIGNvbmZpZy5zaG91bGRMb2FkID0gKCkgPT4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMpLmNhbGwodGhpcywgY29uZmlnLCB0aGlzLnRvbVNlbGVjdE9wdGlvbnNWYWx1ZSk7XG59LCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZSA9IGZ1bmN0aW9uIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cykuY2FsbCh0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcpLmNhbGwodGhpcyksIHtcbiAgICAgICAgbWF4T3B0aW9uczogdGhpcy5nZXRNYXhPcHRpb25zKCksXG4gICAgfSk7XG4gICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2NyZWF0ZVRvbVNlbGVjdCkuY2FsbCh0aGlzLCBjb25maWcpO1xufSwgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoSHRtbENvbnRlbnRzID0gZnVuY3Rpb24gX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoSHRtbENvbnRlbnRzKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cykuY2FsbCh0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcpLmNhbGwodGhpcyksIHtcbiAgICAgICAgbWF4T3B0aW9uczogdGhpcy5nZXRNYXhPcHRpb25zKCksXG4gICAgICAgIHNjb3JlOiAoc2VhcmNoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY29yaW5nRnVuY3Rpb24gPSB0aGlzLnRvbVNlbGVjdC5nZXRTY29yZUZ1bmN0aW9uKHNlYXJjaCk7XG4gICAgICAgICAgICByZXR1cm4gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcmluZ0Z1bmN0aW9uKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaXRlbSksIHsgdGV4dDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfc3RyaXBUYWdzKS5jYWxsKHRoaXMsIGl0ZW0udGV4dCkgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICBpdGVtOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj4ke2l0ZW0udGV4dH08L2Rpdj5gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbjogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+JHtpdGVtLnRleHR9PC9kaXY+YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2NyZWF0ZVRvbVNlbGVjdCkuY2FsbCh0aGlzLCBjb25maWcpO1xufSwgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoUmVtb3RlRGF0YSA9IGZ1bmN0aW9uIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aFJlbW90ZURhdGEoYXV0b2NvbXBsZXRlRW5kcG9pbnRVcmwsIG1pbkNoYXJhY3Rlckxlbmd0aCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cykuY2FsbCh0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcpLmNhbGwodGhpcyksIHtcbiAgICAgICAgZmlyc3RVcmw6IChxdWVyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gYXV0b2NvbXBsZXRlRW5kcG9pbnRVcmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/JztcbiAgICAgICAgICAgIHJldHVybiBgJHthdXRvY29tcGxldGVFbmRwb2ludFVybH0ke3NlcGFyYXRvcn1xdWVyeT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YDtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZDogZnVuY3Rpb24gKHF1ZXJ5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocXVlcnkpO1xuICAgICAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXROZXh0VXJsKHF1ZXJ5LCBqc29uLm5leHRfcGFnZSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soanNvbi5yZXN1bHRzLm9wdGlvbnMgfHwganNvbi5yZXN1bHRzLCBqc29uLnJlc3VsdHMub3B0Z3JvdXBzIHx8IFtdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNhbGxiYWNrKFtdLCBbXSkpO1xuICAgICAgICB9LFxuICAgICAgICBzaG91bGRMb2FkOiAocXVlcnkpID0+IHtcbiAgICAgICAgICAgIGlmIChudWxsICE9PSBtaW5DaGFyYWN0ZXJMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnkubGVuZ3RoID49IG1pbkNoYXJhY3Rlckxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0xvYWRlZENob2ljZXNQcmV2aW91c2x5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzTG9hZGVkQ2hvaWNlc1ByZXZpb3VzbHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5Lmxlbmd0aCA+PSAzO1xuICAgICAgICB9LFxuICAgICAgICBvcHRncm91cEZpZWxkOiAnZ3JvdXBfYnknLFxuICAgICAgICBzY29yZTogZnVuY3Rpb24gKHNlYXJjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgIG9wdGlvbjogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+JHtpdGVtLnRleHR9PC9kaXY+YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpdGVtOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj4ke2l0ZW0udGV4dH08L2Rpdj5gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRpbmdfbW9yZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImxvYWRpbmctbW9yZS1yZXN1bHRzXCI+JHt0aGlzLmxvYWRpbmdNb3JlVGV4dFZhbHVlfTwvZGl2PmA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9fbW9yZV9yZXN1bHRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibm8tbW9yZS1yZXN1bHRzXCI+JHt0aGlzLm5vTW9yZVJlc3VsdHNUZXh0VmFsdWV9PC9kaXY+YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub19yZXN1bHRzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibm8tcmVzdWx0c1wiPiR7dGhpcy5ub1Jlc3VsdHNGb3VuZFRleHRWYWx1ZX08L2Rpdj5gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJlbG9hZDogdGhpcy5wcmVsb2FkLFxuICAgIH0pO1xuICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9jcmVhdGVUb21TZWxlY3QpLmNhbGwodGhpcywgY29uZmlnKTtcbn0sIF9kZWZhdWx0XzFfc3RyaXBUYWdzID0gZnVuY3Rpb24gX2RlZmF1bHRfMV9zdHJpcFRhZ3Moc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpO1xufSwgX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMgPSBmdW5jdGlvbiBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cyhvYmplY3QxLCBvYmplY3QyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb2JqZWN0MSksIG9iamVjdDIpO1xufSwgX2RlZmF1bHRfMV9jcmVhdGVUb21TZWxlY3QgPSBmdW5jdGlvbiBfZGVmYXVsdF8xX2NyZWF0ZVRvbVNlbGVjdChvcHRpb25zKSB7XG4gICAgY29uc3QgcHJlQ29ubmVjdFBheWxvYWQgPSB7IG9wdGlvbnMgfTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3ByZS1jb25uZWN0JywgcHJlQ29ubmVjdFBheWxvYWQpO1xuICAgIGNvbnN0IHRvbVNlbGVjdCA9IG5ldyBUb21TZWxlY3QodGhpcy5mb3JtRWxlbWVudCwgb3B0aW9ucyk7XG4gICAgY29uc3QgY29ubmVjdFBheWxvYWQgPSB7IHRvbVNlbGVjdCwgb3B0aW9ucyB9O1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcsIGNvbm5lY3RQYXlsb2FkKTtcbiAgICByZXR1cm4gdG9tU2VsZWN0O1xufTtcbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgdXJsOiBTdHJpbmcsXG4gICAgb3B0aW9uc0FzSHRtbDogQm9vbGVhbixcbiAgICBsb2FkaW5nTW9yZVRleHQ6IFN0cmluZyxcbiAgICBub1Jlc3VsdHNGb3VuZFRleHQ6IFN0cmluZyxcbiAgICBub01vcmVSZXN1bHRzVGV4dDogU3RyaW5nLFxuICAgIG1pbkNoYXJhY3RlcnM6IE51bWJlcixcbiAgICB0b21TZWxlY3RPcHRpb25zOiBPYmplY3QsXG4gICAgcHJlbG9hZDogU3RyaW5nLFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiVG9tU2VsZWN0IiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsInJlY2VpdmVyIiwic3RhdGUiLCJraW5kIiwiZiIsIlR5cGVFcnJvciIsImhhcyIsImNhbGwiLCJ2YWx1ZSIsImdldCIsIl9kZWZhdWx0XzFfaW5zdGFuY2VzIiwiX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWciLCJfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZSIsIl9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aEh0bWxDb250ZW50cyIsIl9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aFJlbW90ZURhdGEiLCJfZGVmYXVsdF8xX3N0cmlwVGFncyIsIl9kZWZhdWx0XzFfbWVyZ2VPYmplY3RzIiwiX2RlZmF1bHRfMV9jcmVhdGVUb21TZWxlY3QiLCJkZWZhdWx0XzEiLCJfQ29udHJvbGxlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsImFkZCIsImlzT2JzZXJ2aW5nIiwiaGFzTG9hZGVkQ2hvaWNlc1ByZXZpb3VzbHkiLCJvcmlnaW5hbE9wdGlvbnMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJpbml0aWFsaXplIiwiX3RoaXMyIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvbk11dGF0aW9ucyIsImNvbm5lY3QiLCJzZWxlY3RFbGVtZW50IiwiY3JlYXRlT3B0aW9uc0RhdGFTdHJ1Y3R1cmUiLCJpbml0aWFsaXplVG9tU2VsZWN0Iiwic2V0QXR0cmlidXRlIiwidXJsVmFsdWUiLCJ0b21TZWxlY3QiLCJoYXNNaW5DaGFyYWN0ZXJzVmFsdWUiLCJtaW5DaGFyYWN0ZXJzVmFsdWUiLCJvcHRpb25zQXNIdG1sVmFsdWUiLCJzdGFydE11dGF0aW9uT2JzZXJ2ZXIiLCJkaXNjb25uZWN0Iiwic3RvcE11dGF0aW9uT2JzZXJ2ZXIiLCJjdXJyZW50U2VsZWN0ZWRWYWx1ZXMiLCJtdWx0aXBsZSIsIkFycmF5IiwiZnJvbSIsIm9wdGlvbnMiLCJmaWx0ZXIiLCJvcHRpb24iLCJzZWxlY3RlZCIsIm1hcCIsImRlc3Ryb3kiLCJmb3JFYWNoIiwiaW5jbHVkZXMiLCJnZXRNYXhPcHRpb25zIiwibGVuZ3RoIiwiZWxlbWVudCIsIkhUTUxTZWxlY3RFbGVtZW50IiwiSFRNTElucHV0RWxlbWVudCIsIkVycm9yIiwiZGlzcGF0Y2hFdmVudCIsIm5hbWUiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJoYXNQcmVsb2FkVmFsdWUiLCJwcmVsb2FkVmFsdWUiLCJyZXNldFRvbVNlbGVjdCIsImN1cnJlbnRIdG1sIiwiaW5uZXJIVE1MIiwiY3VycmVudFZhbHVlIiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsImNoYW5nZVRvbVNlbGVjdERpc2FibGVkU3RhdGUiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZSIsImVuYWJsZSIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYXR0cmlidXRlcyIsImNoYXJhY3RlckRhdGEiLCJhdHRyaWJ1dGVPbGRWYWx1ZSIsIl90aGlzMyIsImNoYW5nZURpc2FibGVkU3RhdGUiLCJyZXF1aXJlUmVzZXQiLCJtdXRhdGlvbiIsInR5cGUiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVOYW1lIiwiaXNOb3dNdWx0aXBsZSIsImhhc0F0dHJpYnV0ZSIsIndhc011bHRpcGxlIiwib2xkVmFsdWUiLCJuZXdPcHRpb25zIiwiYXJlT3B0aW9uc0VxdWl2YWxlbnQiLCJmb3JtRWxlbWVudCIsImRpc2FibGVkIiwib3B0Z3JvdXAiLCJjbG9zZXN0IiwidGV4dCIsImdyb3VwIiwibGFiZWwiLCJmaWx0ZXJlZE9yaWdpbmFsT3B0aW9ucyIsImZpbHRlcmVkTmV3T3B0aW9ucyIsIm9yaWdpbmFsUGxhY2Vob2xkZXJPcHRpb24iLCJmaW5kIiwibmV3UGxhY2Vob2xkZXJPcHRpb24iLCJub3JtYWxpemVPcHRpb24iLCJjb25jYXQiLCJvcmlnaW5hbE9wdGlvbnNTZXQiLCJTZXQiLCJuZXdPcHRpb25zU2V0Iiwic2l6ZSIsIl90b0NvbnN1bWFibGVBcnJheSIsImV2ZXJ5IiwiV2Vha1NldCIsIl90aGlzNCIsInBsdWdpbnMiLCJpc011bHRpcGxlIiwiY2xlYXJfYnV0dG9uIiwidGl0bGUiLCJyZW1vdmVfYnV0dG9uIiwidmlydHVhbF9zY3JvbGwiLCJyZW5kZXIiLCJub19yZXN1bHRzIiwibm9SZXN1bHRzRm91bmRUZXh0VmFsdWUiLCJjb25maWciLCJvbkl0ZW1BZGQiLCJzZXRUZXh0Ym94VmFsdWUiLCJjbG9zZUFmdGVyU2VsZWN0Iiwic2hvdWxkTG9hZCIsInRvbVNlbGVjdE9wdGlvbnNWYWx1ZSIsIm1heE9wdGlvbnMiLCJfdGhpczUiLCJzY29yZSIsInNlYXJjaCIsInNjb3JpbmdGdW5jdGlvbiIsImdldFNjb3JlRnVuY3Rpb24iLCJpdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwiYXV0b2NvbXBsZXRlRW5kcG9pbnRVcmwiLCJtaW5DaGFyYWN0ZXJMZW5ndGgiLCJfdGhpczciLCJmaXJzdFVybCIsInF1ZXJ5Iiwic2VwYXJhdG9yIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9hZCIsImNhbGxiYWNrIiwiX3RoaXM2IiwidXJsIiwiZ2V0VXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0TmV4dFVybCIsIm5leHRfcGFnZSIsInJlc3VsdHMiLCJvcHRncm91cHMiLCJjYXRjaCIsIm9wdGdyb3VwRmllbGQiLCJsb2FkaW5nX21vcmUiLCJsb2FkaW5nTW9yZVRleHRWYWx1ZSIsIm5vX21vcmVfcmVzdWx0cyIsIm5vTW9yZVJlc3VsdHNUZXh0VmFsdWUiLCJwcmVsb2FkIiwic3RyaW5nIiwicmVwbGFjZSIsIm9iamVjdDEiLCJvYmplY3QyIiwicHJlQ29ubmVjdFBheWxvYWQiLCJjb25uZWN0UGF5bG9hZCIsInZhbHVlcyIsIlN0cmluZyIsIm9wdGlvbnNBc0h0bWwiLCJCb29sZWFuIiwibG9hZGluZ01vcmVUZXh0Iiwibm9SZXN1bHRzRm91bmRUZXh0Iiwibm9Nb3JlUmVzdWx0c1RleHQiLCJtaW5DaGFyYWN0ZXJzIiwiTnVtYmVyIiwidG9tU2VsZWN0T3B0aW9ucyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9