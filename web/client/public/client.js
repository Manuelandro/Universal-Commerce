webpackJsonp([0],{

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_app_app_web__ = __webpack_require__(243);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/* global document:false */





__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_app_app_web__["a" /* default */]),
  document.getElementById('react-root')
)

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scenes_ProductList_ProductList_web__ = __webpack_require__(250);
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/app/app.web.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var client = new __WEBPACK_IMPORTED_MODULE_1_react_apollo__["ApolloClient"]({
  networkInterface: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["createNetworkInterface"])({
    uri: 'http://localhost:3000/graphql'
  })
});

var UniversalApp = function (_Component) {
  _inherits(UniversalApp, _Component);

  function UniversalApp() {
    _classCallCheck(this, UniversalApp);

    var _this = _possibleConstructorReturn(this, (UniversalApp.__proto__ || Object.getPrototypeOf(UniversalApp)).call(this));

    _this.state = { logged: null };
    return _this;
  }

  _createClass(UniversalApp, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_apollo__["ApolloProvider"],
        { store: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */], client: client, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { flex: 1 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__scenes_ProductList_ProductList_web__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          })
        )
      );
    }
  }]);

  return UniversalApp;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = UniversalApp;

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scenes_Login_LoginReducer__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scenes_Register_RegisterReducer__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scenes_About_AboutReducer__ = __webpack_require__(246);





var reducers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    login: __WEBPACK_IMPORTED_MODULE_1__scenes_Login_LoginReducer__["a" /* default */],
    about: __WEBPACK_IMPORTED_MODULE_3__scenes_About_AboutReducer__["a" /* default */],
    register: __WEBPACK_IMPORTED_MODULE_2__scenes_Register_RegisterReducer__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = reducers;

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(244);




var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || __WEBPACK_IMPORTED_MODULE_0_redux__["compose"];
var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], composeEnhancers(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a)));

/* harmony default export */ __webpack_exports__["a"] = store;

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AboutList_json__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AboutList_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__AboutList_json__);



/* harmony default export */ __webpack_exports__["a"] = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__AboutList_json___default.a;
    var _ref = arguments[1];
    var type = _ref.type,
        payload = _ref.payload;

    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SELECT_SECTION */]:
            return __WEBPACK_IMPORTED_MODULE_1__AboutList_json___default.a.map(function (val) {
                var newObj = val;
                newObj.selected = payload === val.id;
                return newObj;
            });
        default:
            return state;
    }
};

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SELECT_SECTION; });
var SELECT_SECTION = 'SELECT_SECTION';

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoginState_json__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoginState_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__LoginState_json__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["a"] = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__LoginState_json___default.a;
    var _ref = arguments[1];
    var type = _ref.type,
        payload = _ref.payload;

    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* LOADER_START */]:
            return _extends({}, state, { loading: true });
        case __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* LOADER_END */]:
            return _extends({}, state, { loading: false });
        case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* LOGIN_START */]:
            return _extends({}, state);
        case __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* LOGIN_SUCCESS */]:
            return _extends({}, state, { email: '', password: '', loading: false, error: '', user: payload });
        case __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* LOGIN_FAILED */]:
            return _extends({}, state, { loading: false, error: payload.message, password: '' });
        case __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* SAVE_FIELD */]:
            return _extends({}, state, _defineProperty({}, payload.prop, payload.value));
        default:
            return state;
    }
};

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOADER_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOADER_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN_START; });
/* unused harmony export LOGIN_PROCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOGIN_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SAVE_FIELD; });
var LOADER_START = 'LOADER_START';
var LOADER_END = 'LOADER_END';
var LOGIN_START = 'LOGIN_START';
var LOGIN_PROCESS = 'LOGIN_PROCESS';
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILED = 'LOGIN_FAILED';
var SAVE_FIELD = 'SAVE_FIELD';

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/scenes/ProductList/ProductList.web.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    query Query {\n        products {\n            name\n        }\n    }'], ['\n    query Query {\n        products {\n            name\n        }\n    }']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ProductlistQuery = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["gql"])(_templateObject);

var ProductList = function (_Component) {
    _inherits(ProductList, _Component);

    function ProductList() {
        _classCallCheck(this, ProductList);

        var _this = _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).call(this));

        _this.state = { albums: [] };
        return _this;
    }

    _createClass(ProductList, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    },
                    __self: this
                },
                'ddd'
            );
        }
    }]);

    return ProductList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(ProductlistQuery)(ProductList);

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RegisterState_json__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RegisterState_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__RegisterState_json__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["a"] = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__RegisterState_json___default.a;
    var _ref = arguments[1];
    var type = _ref.type,
        payload = _ref.payload;

    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* LOADER_START */]:
            return _extends({}, state, { loading: true });
        case __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* LOADER_END */]:
            return _extends({}, state, { loading: false });
        case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* SAVE_FIELD */]:
            return _extends({}, state, _defineProperty({}, payload.prop, payload.value));
        case __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* REGISTER_START */]:
            return _extends({}, state);
        case __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* REGISTER_PROCESS */]:
            return _extends({}, state);
        case __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* REGISTER_SUCCESS */]:
            return _extends({}, state);
        case __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* REGISTER_FAILED */]:
            return _extends({}, state);
        default:
            return _extends({}, state);
    }
};

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOADER_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOADER_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REGISTER_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REGISTER_PROCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REGISTER_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SAVE_FIELD; });
var LOADER_START = 'LOADER_START';
var LOADER_END = 'LOADER_END';
var REGISTER_START = 'LOGIN_START';
var REGISTER_PROCESS = 'LOGIN_PROCESS';
var REGISTER_SUCCESS = 'LOGIN_SUCCESS';
var REGISTER_FAILED = 'LOGIN_FAILED';
var SAVE_FIELD = 'SAVE_FIELD';

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = [
	{
		"id": 0,
		"selected": false,
		"title": "Who we are",
		"description": "A modern JavaScript utility library delivering modularity, performance, & extras. Lodash is released under the MIT license & supports modern environments."
	},
	{
		"id": 1,
		"selected": false,
		"title": "What we do",
		"description": "Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met."
	},
	{
		"id": 2,
		"selected": false,
		"title": "Contact us",
		"description": "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
	},
	{
		"id": 3,
		"selected": false,
		"title": "Contact you",
		"description": "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
	},
	{
		"id": 4,
		"selected": false,
		"title": "Contact them",
		"description": "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
	}
];

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = {
	"email": "",
	"password": "",
	"error": "",
	"loading": false,
	"user": null
};

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = {
	"firstname": "",
	"lastname": "",
	"email": "",
	"password": "",
	"error": "",
	"loading": false,
	"user": null
};

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(228);
module.exports = __webpack_require__(227);


/***/ })

},[563]);
//# sourceMappingURL=client.js.map