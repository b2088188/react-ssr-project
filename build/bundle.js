/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ \"@babel/runtime-corejs3/core-js-stable/instance/map\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ \"@babel/runtime-corejs3/core-js-stable/promise\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\napp.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_7___default()('http://react-ssr-api.herokuapp.com', {\n  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {\n    opts.headers['x-forwarded-host'] = '127.0.0.1:3000';\n    return opts;\n  }\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default().static('public')); // Accept all route request, and delegate to React Router\n\napp.get('*', function (req, res) {\n  var _context;\n\n  var store = (0,_helpers_createStore__WEBPACK_IMPORTED_MODULE_4__.default)(req);\n\n  var promises = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = (0,react_router_config__WEBPACK_IMPORTED_MODULE_5__.matchRoutes)(_client_Routes__WEBPACK_IMPORTED_MODULE_6__.default, req.path)).call(_context, function (_ref) {\n    var route = _ref.route;\n    // If the component has loadData function, call it and return the promise\n    return route.loadData ? route.loadData(store) : null;\n  }); // Once the promise resolved, this means our data loading has finished.\n\n\n  _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1___default().all(promises).then(function () {\n    // Send back content to browser, and the bundle file for React application\n    res.send((0,_helpers_renderer__WEBPACK_IMPORTED_MODULE_3__.default)(req, store));\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://react-ssr/./src/app.js?");

/***/ }),

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ \"./src/client/components/Header.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"./src/client/actions/index.js\");\n\n\n\n // The route contains collection of components that we need to render\n\nvar App = function App(_ref) {\n  var route = _ref.route;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, null), (0,react_router_config__WEBPACK_IMPORTED_MODULE_1__.renderRoutes)(route.routes));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: App,\n  loadData: function loadData(_ref2) {\n    var dispatch = _ref2.dispatch;\n    return dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.fetchCurrentUser)());\n  }\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/App.js?");

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/Home */ \"./src/client/pages/Home.js\");\n/* harmony import */ var _pages_UsersList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/UsersList */ \"./src/client/pages/UsersList.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./App */ \"./src/client/App.js\");\n\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default())) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default())) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }\n\n\n\n\nvar Routes = [_objectSpread(_objectSpread({}, _App__WEBPACK_IMPORTED_MODULE_11__.default), {}, {\n  routes: [_objectSpread(_objectSpread({}, _pages_Home__WEBPACK_IMPORTED_MODULE_9__.default), {}, {\n    path: '/',\n    exact: true\n  }), _objectSpread(_objectSpread({}, _pages_UsersList__WEBPACK_IMPORTED_MODULE_10__.default), {}, {\n    path: '/users'\n  })]\n})];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);\n\n//# sourceURL=webpack://react-ssr/./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FETCH_USERS\": () => (/* binding */ FETCH_USERS),\n/* harmony export */   \"fetchUsers\": () => (/* binding */ fetchUsers),\n/* harmony export */   \"FETCH_CURRENT_USER\": () => (/* binding */ FETCH_CURRENT_USER),\n/* harmony export */   \"fetchCurrentUser\": () => (/* binding */ fetchCurrentUser)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ \"@babel/runtime-corejs3/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"@babel/runtime-corejs3/regenerator\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar FETCH_USERS = 'FETCH_USERS';\nvar fetchUsers = function fetchUsers() {\n  return /*#__PURE__*/function () {\n    var _ref = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch, getState, api) {\n      var res;\n      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return api.get('/users');\n\n            case 2:\n              res = _context.sent;\n              dispatch({\n                type: FETCH_USERS,\n                payload: res\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';\nvar fetchCurrentUser = function fetchCurrentUser() {\n  return /*#__PURE__*/function () {\n    var _ref2 = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(dispatch, getState, api) {\n      var res;\n      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return api.get('/current_user');\n\n            case 2:\n              res = _context2.sent;\n              dispatch({\n                type: FETCH_CURRENT_USER,\n                payload: res\n              });\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x4, _x5, _x6) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack://react-ssr/./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Header = function Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"\"\n  }, \"React SSR\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://react-ssr/./src/client/components/Header.js?");

/***/ }),

/***/ "./src/client/pages/Home.js":
/*!**********************************!*\
  !*** ./src/client/pages/Home.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Home = function Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"I'm the Home component\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return console.log('hello');\n    }\n  }, \"Click Me\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: Home\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/Home.js?");

/***/ }),

/***/ "./src/client/pages/UsersList.js":
/*!***************************************!*\
  !*** ./src/client/pages/UsersList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ \"@babel/runtime-corejs3/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"@babel/runtime-corejs3/regenerator\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ \"@babel/runtime-corejs3/core-js-stable/instance/map\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n\n\n\n\n\n\nvar UsersList = function UsersList() {\n  var users = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.users;\n  });\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_5__.fetchUsers)());\n  }, [dispatch]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"div\", null, \"Here's a big list of users:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"ul\", null, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(users).call(users, function (user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"li\", {\n      key: user.id\n    }, user.name);\n  })));\n};\n\nfunction loadData(_x) {\n  return _loadData.apply(this, arguments);\n}\n\nfunction _loadData() {\n  _loadData = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(store) {\n    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", store.dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_5__.fetchUsers)()));\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _loadData.apply(this, arguments);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: UsersList,\n  loadData: loadData\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/pages/UsersList.js?");

/***/ }),

/***/ "./src/client/reducers/authReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/authReducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ \"@babel/runtime-corejs3/core-js-stable/object/keys\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ \"@babel/runtime-corejs3/core-js-stable/instance/filter\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors */ \"@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-properties */ \"@babel/runtime-corejs3/core-js-stable/object/define-properties\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"@babel/runtime-corejs3/core-js-stable/object/define-property\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ \"@babel/runtime-corejs3/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(object); if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default())) { var symbols = _babel_runtime_corejs3_core_js_stable_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(object); if (enumerableOnly) symbols = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(symbols).call(symbols, function (sym) { return _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context = ownKeys(Object(source), true)).call(_context, function (key) { _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(target, key, source[key]); }); } else if ((_babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default())) { _babel_runtime_corejs3_core_js_stable_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default()(target, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_5___default()(source)); } else { var _context2; _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _babel_runtime_corejs3_core_js_stable_object_define_property__WEBPACK_IMPORTED_MODULE_7___default()(target, key, _babel_runtime_corejs3_core_js_stable_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }\n\n\n\nfunction authReducer() {\n  var _action$payload$user;\n\n  var currentState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_9__.FETCH_CURRENT_USER:\n      return _objectSpread(_objectSpread({}, currentState), {}, {\n        user: (_action$payload$user = action.payload.user) !== null && _action$payload$user !== void 0 ? _action$payload$user : null\n      });\n\n    default:\n      return currentState;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authReducer);\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/authReducer.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usersReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersReducer */ \"./src/client/reducers/usersReducer.js\");\n/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authReducer */ \"./src/client/reducers/authReducer.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  users: _usersReducer__WEBPACK_IMPORTED_MODULE_1__.default,\n  auth: _authReducer__WEBPACK_IMPORTED_MODULE_2__.default\n}));\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/usersReducer.js":
/*!*********************************************!*\
  !*** ./src/client/reducers/usersReducer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__.FETCH_USERS:\n      return action.payload.data;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack://react-ssr/./src/client/reducers/usersReducer.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req) {\n  var _req$get;\n\n  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_3___default().create({\n    baseURL: 'http://react-ssr-api.herokuapp.com',\n    headers: {\n      cookie: (_req$get = req.get('cookie')) !== null && _req$get !== void 0 ? _req$get : ''\n    }\n  });\n  var store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.default, {}, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default().withExtraArgument(axiosInstance)));\n  return store;\n});\n\n//# sourceURL=webpack://react-ssr/./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"@babel/runtime-corejs3/core-js-stable/instance/concat\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/Routes */ \"./src/client/Routes.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nfunction renderer(req, store) {\n  var _context;\n\n  var template = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {\n    location: req.path,\n    context: {}\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, (0,react_router_config__WEBPACK_IMPORTED_MODULE_5__.renderRoutes)(_client_Routes__WEBPACK_IMPORTED_MODULE_4__.default)))));\n  return _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context = \"<html>\\n\\t<head></head>\\n\\t<body>\\n\\t\\t<div id = 'root'>\".concat(template, \"</div>\\n\\t\\t<script>\\n\\t\\twindow.INITIAL_STATE = \")).call(_context, serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default()(store.getState()), \"\\n\\t\\t</script>\\n\\t\\t<script src = 'bundle.js'>\\n\\t\\t</script>\\n\\t</body>\\n\\t</html>\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderer);\n\n//# sourceURL=webpack://react-ssr/./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n_app__WEBPACK_IMPORTED_MODULE_0__.default.listen(3000, function () {\n  console.log('Listening on port 3000');\n});\n\n//# sourceURL=webpack://react-ssr/./src/server.js?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/concat":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/concat" ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/concat");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/filter":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/filter" ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/filter");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/for-each":
/*!**************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/for-each" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/map":
/*!*********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/map" ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/instance/map");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-properties":
/*!*********************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/define-properties" ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/define-property":
/*!*******************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/define-property" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/define-property");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor":
/*!*******************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor" ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors":
/*!********************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors" ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols":
/*!****************************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols" ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/object/keys":
/*!********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/object/keys" ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/object/keys");;

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/promise":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/promise" ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/core-js-stable/promise");;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/asyncToGenerator":
/*!******************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/asyncToGenerator" ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/helpers/asyncToGenerator");;

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/defineProperty":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/defineProperty" ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/helpers/defineProperty");;

/***/ }),

/***/ "@babel/runtime-corejs3/regenerator":
/*!*****************************************************!*\
  !*** external "@babel/runtime-corejs3/regenerator" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime-corejs3/regenerator");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-http-proxy");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");;

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-router-config");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");;

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("serialize-javascript");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.js");
/******/ 	
/******/ })()
;