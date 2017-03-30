webpackJsonp([0],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Input__ = __webpack_require__(298);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__Input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Image__ = __webpack_require__(297);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__Image__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button__ = __webpack_require__(292);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__Button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PageTitle__ = __webpack_require__(299);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ScrollView__ = __webpack_require__(301);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__ScrollView__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Card__ = __webpack_require__(293);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__Card__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CardSection__ = __webpack_require__(294);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__CardSection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ErrorMsg__ = __webpack_require__(295);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__ErrorMsg__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Spinner__ = __webpack_require__(302);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__Spinner__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Header__ = __webpack_require__(296);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Product__ = __webpack_require__(300);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_10__Product__["a"]; });














/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOADER_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOADER_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOGIN_START; });
/* unused harmony export LOGIN_PROCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SAVE_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RESET_SCENE; });
var LOADER_START = 'LOADER_START';
var LOADER_END = 'LOADER_END';
var LOGIN_START = 'LOGIN_START';
var LOGIN_PROCESS = 'LOGIN_PROCESS';
var LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILED = 'LOGIN_FAILED';
var SAVE_FIELD = 'SAVE_FIELD';
var RESET_SCENE = 'RESET_SCENE';

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_app_app_web__ = __webpack_require__(287);
/* global document:false */





__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_app_app_web__["a" /* default */]),
  document.getElementById('react-root')
)

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_web__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routers_web__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logic_Firebase_init__ = __webpack_require__(303);
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/app/app.web.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var client = new __WEBPACK_IMPORTED_MODULE_2_react_apollo__["ApolloClient"]({
  networkInterface: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["createNetworkInterface"])({
    uri: 'http://localhost:3001/graphql'
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
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__logic_Firebase_init__["a" /* firebaseInit */])();

      /* if the auth state changes */
      __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().onAuthStateChanged(function (user) {
        if (user) {
          _this2.setState({ logged: true });
        } else {
          _this2.setState({ logged: false });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_apollo__["ApolloProvider"],
        { store: __WEBPACK_IMPORTED_MODULE_4__store_web__["a" /* default */], client: client, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_router_redux__["a" /* ConnectedRouter */],
          { history: __WEBPACK_IMPORTED_MODULE_4__store_web__["b" /* history */], __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { style: { flex: 1 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__routers_web__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return UniversalApp;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = UniversalApp;

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducer__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scenes_Login_reducer__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scenes_Register_reducer__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scenes_About_reducer__ = __webpack_require__(307);





var reducers = {
    app: __WEBPACK_IMPORTED_MODULE_0__reducer__["a" /* default */],
    login: __WEBPACK_IMPORTED_MODULE_1__scenes_Login_reducer__["a" /* default */],
    about: __WEBPACK_IMPORTED_MODULE_3__scenes_About_reducer__["a" /* default */],
    register: __WEBPACK_IMPORTED_MODULE_2__scenes_Register_reducer__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = reducers;

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initialState_json__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initialState_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__initialState_json__);


/* harmony default export */ __webpack_exports__["a"] = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__initialState_json___default.a;
  return state;
};

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scenes_Login_index_web__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scenes_ProductList_index_web__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scenes_About_index_web__ = __webpack_require__(306);
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/app/routers/web.js',
    _this = this;







var RouterComponent = function RouterComponent() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["a" /* BrowserRouter */],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                },
                __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_2__scenes_Login_index_web__["a" /* default */], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                },
                __self: _this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { path: '/productlist', component: __WEBPACK_IMPORTED_MODULE_3__scenes_ProductList_index_web__["a" /* default */], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                },
                __self: _this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { path: '/about', component: __WEBPACK_IMPORTED_MODULE_4__scenes_About_index_web__["a" /* default */], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                },
                __self: _this
            })
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = RouterComponent;

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_redux__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_history__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_persist__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_localforage__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_localforage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_localforage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_thunk__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return history; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global window:false */








var initialState = {};
var history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_history__["createBrowserHistory"])();
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || __WEBPACK_IMPORTED_MODULE_2_redux__["compose"];

var theReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["combineReducers"])(_extends({}, __WEBPACK_IMPORTED_MODULE_6__reducers__["a" /* default */], {
    routing: __WEBPACK_IMPORTED_MODULE_0_react_router_redux__["b" /* routerReducer */]
}));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
var enhancer = composeEnhancers(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_5_redux_thunk___default.a, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_router_redux__["c" /* routerMiddleware */])(history)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux_persist__["a" /* autoRehydrate */])());

var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__["createStore"])(theReducer, initialState, enhancer);

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux_persist__["b" /* persistStore */])(store, { storage: __WEBPACK_IMPORTED_MODULE_4_localforage___default.a });

if (false) {
    module.hot.accept('./reducers', function () {
        store.replaceReducer(require('./reducers').default);
    });
}

/* harmony default export */ __webpack_exports__["a"] = store;


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/Button.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        display: flex;\n        flex: 1;\n        align-self: stretch;\n        background-color: #fff;\n        border: 1px solid #007788;\n        border-radius: 4px;\n        margin-left: 5px;\n        margin-right: 5px;\n    '], ['\n        display: flex;\n        flex: 1;\n        align-self: stretch;\n        background-color: #fff;\n        border: 1px solid #007788;\n        border-radius: 4px;\n        margin-left: 5px;\n        margin-right: 5px;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        flex: 1;\n        color: #007788;\n        font-size: 16px;\n        font-weight: 600;\n        padding-top: 10px;\n        padding-bottom: 10px;\n    '], ['\n        flex: 1;\n        color: #007788;\n        font-size: 16px;\n        font-weight: 600;\n        padding-top: 10px;\n        padding-bottom: 10px;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var _TouchableOpacity$Tex = {
    TouchableOpacity: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].button(_templateObject),
    Text: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].span(_templateObject2)
},
    TouchableOpacity = _TouchableOpacity$Tex.TouchableOpacity,
    Text = _TouchableOpacity$Tex.Text;


var Button = function Button(_ref) {
    var onPress = _ref.onPress,
        children = _ref.children;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        TouchableOpacity,
        { onClick: onPress, __source: {
                fileName: _jsxFileName,
                lineNumber: 27
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Text,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                },
                __self: _this
            },
            children
        )
    );
};



/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/Card.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        border: 1px solid #ddd;\n        border-radius: 2px;\n        border-bottom-width: 0;\n        box-shadow: 0, 2px 9px #000;\n        margin-left: 5px;\n        margin-right: 5px;\n        margin-top: 10px;\n    '], ['\n        border: 1px solid #ddd;\n        border-radius: 2px;\n        border-bottom-width: 0;\n        box-shadow: 0, 2px 9px #000;\n        margin-left: 5px;\n        margin-right: 5px;\n        margin-top: 10px;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var _View = {
    View: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject)
},
    View = _View.View;


var Card = function Card(_ref) {
    var children = _ref.children;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        View,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 17
            },
            __self: _this
        },
        children
    );
};



/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardSection; });
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/CardSection.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        display: flex;\n        border-bottom: 1px solid #ddd;\n        padding: 5px;\n        background-color: #fff;\n        justify-content: flex-start;\n        flex-direction: row;\n        position: relative;\n    '], ['\n        display: flex;\n        border-bottom: 1px solid #ddd;\n        padding: 5px;\n        background-color: #fff;\n        justify-content: flex-start;\n        flex-direction: row;\n        position: relative;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var _View = {
    View: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject)
},
    View = _View.View;


var CardSection = function CardSection(_ref) {
    var children = _ref.children;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        View,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 17
            },
            __self: _this
        },
        children
    );
};



/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMsg; });
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/ErrorMsg.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        width: 100%;\n    '], ['\n        width: 100%;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        font-size: 20px;\n        align-self: center;\n        color: red;\n    '], ['\n        font-size: 20px;\n        align-self: center;\n        color: red;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var _View$Text = {
    View: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject),
    Text: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject2)
},
    View = _View$Text.View,
    Text = _View$Text.Text;


var ErrorMsg = function ErrorMsg(_ref) {
    var children = _ref.children;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        View,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 16
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Text,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                },
                __self: _this
            },
            children
        )
    );
};



/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(34);
/* unused harmony export Header */
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/Header.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        display: flex;\n        height: 60px;\n        padding-top: 15px;\n        justify-content: center;\n        align-items: center;\n        background-color: #fcfcfc;\n        box-shadow: 0 2px 8px #000;\n        position: relative;\n    '], ['\n        display: flex;\n        height: 60px;\n        padding-top: 15px;\n        justify-content: center;\n        align-items: center;\n        background-color: #fcfcfc;\n        box-shadow: 0 2px 8px #000;\n        position: relative;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        font-size: 20px;\n    '], ['\n        font-size: 20px;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var _View$Text = {
    View: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject),
    Text: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].p(_templateObject2)
},
    View = _View$Text.View,
    Text = _View$Text.Text;


var Header = function Header(_ref) {
    var headerText = _ref.headerText;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        View,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 22
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Text,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                },
                __self: _this
            },
            headerText
        )
    );
};



/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/Image.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        display: block;\n    '], ['\n        display: block;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var _Img = {
    Img: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].img(_templateObject)
},
    Img = _Img.Img;


var Image = function Image(_ref) {
    var source = _ref.source;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Img, { src: source.uri, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        },
        __self: _this
    });
};



/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/Input.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        display: flex;\n        flex: 1;\n        flex-direction: row;\n        align-items: center;\n        border-width: 1px;\n        border-color: #ccc;\n        margin-left: 5px;\n        margin-right: 5px;\n    '], ['\n        display: flex;\n        flex: 1;\n        flex-direction: row;\n        align-items: center;\n        border-width: 1px;\n        border-color: #ccc;\n        margin-left: 5px;\n        margin-right: 5px;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        height: 40px;\n        flex: 3;\n        padding-left: 5px;\n        padding-right: 5px;\n        font-size: 18px;\n        line-height: 40px;\n    '], ['\n        height: 40px;\n        flex: 3;\n        padding-left: 5px;\n        padding-right: 5px;\n        font-size: 18px;\n        line-height: 40px;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n        font-size: 18px;\n        padding-left: 5px;\n        flex: 1;\n        text-transform: ', ';\n    '], ['\n        font-size: 18px;\n        padding-left: 5px;\n        flex: 1;\n        text-transform: ', ';\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var _View$Text$TextInput = {
    View: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject),
    Text: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].label(_templateObject2),
    TextInput: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].input(_templateObject3, function (props) {
        return props.autoCapitalize ? 'capitalize' : 'none';
    })
},
    View = _View$Text$TextInput.View,
    Text = _View$Text$TextInput.Text,
    TextInput = _View$Text$TextInput.TextInput;


var Input = function Input(_ref) {
    var label = _ref.label,
        value = _ref.value,
        onChange = _ref.onChange,
        placeholder = _ref.placeholder,
        secureTextEntry = _ref.secureTextEntry,
        autoCapitalize = _ref.autoCapitalize;

    var type = !secureTextEntry ? 'text' : 'password';
    var handleChange = function handleChange(e) {
        return onChange(e.target.value);
    };

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        View,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 38
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Text,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                },
                __self: _this
            },
            label
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TextInput, {
            type: type,
            placeholder: placeholder,
            autoCapitalize: autoCapitalize,
            value: value,
            onChange: handleChange,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 40
            },
            __self: _this
        })
    );
};



/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(34);
/* unused harmony export PageTitle */
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/PageTitle.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        display: flex;\n        flex: 1;\n        flex-direction: row;\n        align-self: stretch;\n        justify-content: center;\n        margin-top: 20px;\n        margin-bottom: 5px;\n    '], ['\n        display: flex;\n        flex: 1;\n        flex-direction: row;\n        align-self: stretch;\n        justify-content: center;\n        margin-top: 20px;\n        margin-bottom: 5px;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        align-self: center;\n        font-size: 18px;\n        font-weight: 600;\n        color: #000;\n    '], ['\n        align-self: center;\n        font-size: 18px;\n        font-weight: 600;\n        color: #000;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var _View$Text = {
    View: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject),
    Text: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].p(_templateObject2)
},
    View = _View$Text.View,
    Text = _View$Text.Text;


var PageTitle = function PageTitle(_ref) {
    var children = _ref.children;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        View,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 23
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Text,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                },
                __self: _this
            },
            children
        )
    );
};



/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/Product.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        flex-direction: column;\n        justify-content: space-around;\n    '], ['\n        flex-direction: column;\n        justify-content: space-around;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        font-size: 18px;\n    '], ['\n        font-size: 18px;\n    ']),
    _templateObject3 = _taggedTemplateLiteral([''], ['']),
    _templateObject4 = _taggedTemplateLiteral(['\n        width: null;\n        height: 300px;\n        flex: 1;\n    '], ['\n        width: null;\n        height: 300px;\n        flex: 1;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var _ViewHead$Name$Brand$ = {
    ViewHead: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject),
    Name: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].p(_templateObject2),
    Brand: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].p(_templateObject3),
    Cover: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__index__["e" /* Image */])(_templateObject4)
},
    ViewHead = _ViewHead$Name$Brand$.ViewHead,
    Name = _ViewHead$Name$Brand$.Name,
    Brand = _ViewHead$Name$Brand$.Brand,
    Cover = _ViewHead$Name$Brand$.Cover;


var Product = function Product(_ref) {
    var _ref$product = _ref.product,
        name = _ref$product.name,
        brand = _ref$product.brand,
        small_image = _ref$product.small_image;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__index__["f" /* Card */],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 28
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__index__["g" /* CardSection */],
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                },
                __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ViewHead,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    },
                    __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    Name,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                        },
                        __self: _this
                    },
                    name
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    Brand,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                        },
                        __self: _this
                    },
                    brand
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__index__["g" /* CardSection */],
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                },
                __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Cover, { source: { uri: small_image }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                },
                __self: _this
            })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__index__["g" /* CardSection */],
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                },
                __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__index__["h" /* Button */],
                { onPress: function onPress() {
                        return console.log('jejej');
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    },
                    __self: _this
                },
                'Buy Now!'
            )
        )
    );
};



/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollView; });
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/ScrollView.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        background-color: #fff;\n    '], ['\n        background-color: #fff;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var _WrapperScrollView = {
    WrapperScrollView: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject)
},
    WrapperScrollView = _WrapperScrollView.WrapperScrollView;


var ScrollView = function ScrollView(_ref) {
    var children = _ref.children;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        WrapperScrollView,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            },
            __self: _this
        },
        children
    );
};



/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinner; });
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/Spinner.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        flex: 1;\n        justify-content: center;\n        align-items: center;\n    '], ['\n        flex: 1;\n        justify-content: center;\n        align-items: center;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var _View = {
    View: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject)
},
    View = _View.View;


var Spinner = function Spinner(_ref) {
    var size = _ref.size;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        View,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 13
            },
            __self: _this
        },
        size
    );
};



/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseInit; });


var firebaseInit = function firebaseInit() {
    __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.initializeApp({
        apiKey: 'AIzaSyBCB4z-dDeXMNiT8tp0qDHfXa-tUfnKUs0',
        authDomain: 'test-28248.firebaseapp.com',
        databaseURL: 'https://test-28248.firebaseio.com',
        storageBucket: 'test-28248.appspot.com',
        messagingSenderId: '804539823082'
    });
};



/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLogin; });
/* unused harmony export getUser */


var getLogin = function getLogin(email, password) {
    return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
};

var getUser = function getUser() {
    return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth();
};

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SELECT_SECTION; });
var SELECT_SECTION = 'SELECT_SECTION';

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(248);
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/scenes/About/index.web.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var About = function (_Component) {
    _inherits(About, _Component);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    },
                    __self: this
                },
                'about'
            );
        }
    }]);

    return About;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
    return { about: state.about };
};

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* connect */])(mapStateToProps)(About);

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_json__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mock_json__);



/* harmony default export */ __webpack_exports__["a"] = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__mock_json___default.a;
    var _ref = arguments[1];
    var type = _ref.type,
        payload = _ref.payload;

    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SELECT_SECTION */]:
            return __WEBPACK_IMPORTED_MODULE_1__mock_json___default.a.map(function (val) {
                var newObj = val;
                newObj.selected = payload === val.id;
                return newObj;
            });
        default:
            return state;
    }
};

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logic_Firebase_user_getters__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return saveField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginStart; });
/* unused harmony export loginProcess */
/* unused harmony export loginSuccess */
/* unused harmony export loginFailed */
/* unused harmony export loaderStart */
/* unused harmony export resetScene */



var saveField = function saveField(payload) {
    return function (dispatch) {
        return dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SAVE_FIELD */], payload: payload });
    };
};

var loginStart = function loginStart(payload) {
    return function (dispatch) {
        dispatch(loaderStart());
        dispatch(loginProcess(payload));
    };
};

var loginProcess = function loginProcess(_ref) {
    var email = _ref.email,
        password = _ref.password;
    return function (dispatch) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__logic_Firebase_user_getters__["a" /* getLogin */])(email, password).then(function (user) {
            return dispatch(loginSuccess(user));
        }).catch(function (error) {
            return dispatch(loginFailed(error));
        });
    };
};

var loginSuccess = function loginSuccess(payload) {
    return function (dispatch) {
        dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* LOGIN_SUCCESS */], payload: payload });
    };
};

var loginFailed = function loginFailed(payload) {
    return { type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* LOGIN_FAILED */], payload: payload };
};

var loaderStart = function loaderStart() {
    return { type: __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* LOADER_START */] };
};

var resetScene = function resetScene() {
    return function (dispatch) {
        return dispatch({ type: __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* RESET_SCENE */] });
    };
};

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_web__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__(308);
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/scenes/Login/index.web.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login() {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    _createClass(Login, [{
        key: 'renderButton',
        value: function renderButton() {
            var _props = this.props,
                login = _props.login,
                loginStart = _props.loginStart;


            if (login.loading) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_web__["a" /* Spinner */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    },
                    __self: this
                });
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3__components_web__["h" /* Button */],
                { onPress: function onPress() {
                        return loginStart(login);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    },
                    __self: this
                },
                'Login!'
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                login = _props2.login,
                saveField = _props2.saveField;


            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3__components_web__["d" /* ScrollView */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3__components_web__["f" /* Card */],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 28
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__components_web__["g" /* CardSection */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 29
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_web__["i" /* Input */], {
                            label: 'Email',
                            placeholder: 'example@email.com',
                            value: login.email,
                            onChange: function onChange(value) {
                                return saveField({ prop: 'email', value: value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 30
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__components_web__["g" /* CardSection */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_web__["i" /* Input */], {
                            label: 'Password',
                            placeholder: 'password',
                            secureTextEntry: true,
                            value: login.password,
                            onChange: function onChange(value) {
                                return saveField({ prop: 'password', value: value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__components_web__["g" /* CardSection */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 47
                            },
                            __self: this
                        },
                        this.renderButton()
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_3__components_web__["b" /* ErrorMsg */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 51
                            },
                            __self: this
                        },
                        login.error
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 53
                            },
                            __self: this
                        },
                        'Non hai un account? Registrati'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Link */],
                        { to: '/productlist', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 56
                            },
                            __self: this
                        },
                        'Product List'
                    )
                )
            );
        }
    }]);

    return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var saveField = __WEBPACK_IMPORTED_MODULE_4__actions__["a" /* saveField */],
    loginStart = __WEBPACK_IMPORTED_MODULE_4__actions__["b" /* loginStart */];

var mapStateToProps = function mapStateToProps(_ref) {
    var login = _ref.login;
    return { login: login };
};
var mapDispatchToProps = { saveField: saveField, loginStart: loginStart };

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* connect */])(mapStateToProps, mapDispatchToProps)(Login);

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initialState_json__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initialState_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__initialState_json__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["a"] = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__initialState_json___default.a;
    var _ref = arguments[1];
    var type = _ref.type,
        payload = _ref.payload;

    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* LOADER_START */]:
            return _extends({}, state, { loading: true });
        case __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* LOADER_END */]:
            return _extends({}, state, { loading: false });
        case __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* LOGIN_START */]:
            return _extends({}, state);
        case __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* LOGIN_SUCCESS */]:
            return _extends({}, state, { email: '', password: '', loading: false, error: '', user: payload, changeScene: true });
        case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* LOGIN_FAILED */]:
            return _extends({}, state, { loading: false, error: payload.message, password: '', changeScene: false });
        case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SAVE_FIELD */]:
            return _extends({}, state, _defineProperty({}, payload.prop, payload.value));
        case __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* RESET_SCENE */]:
            return _extends({}, state, { changeScene: false });
        default:
            return state;
    }
};

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_web___ = __webpack_require__(116);
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/scenes/ProductList/index.web.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    query Query {\n        products {\n            name\n            small_image\n            brand\n        }\n    }'], ['\n    query Query {\n        products {\n            name\n            small_image\n            brand\n        }\n    }']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var ProductlistQuery = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["gql"])(_templateObject);

var ProductList = function (_Component) {
    _inherits(ProductList, _Component);

    function ProductList() {
        _classCallCheck(this, ProductList);

        return _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).apply(this, arguments));
    }

    _createClass(ProductList, [{
        key: 'renderProducts',
        value: function renderProducts() {
            var _this2 = this;

            var data = this.props.data;


            if (data.loading) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_web___["a" /* Spinner */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    },
                    __self: this
                });
            }

            if (typeof data.error !== 'undefined') {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2__components_web___["b" /* ErrorMsg */],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        },
                        __self: this
                    },
                    'Somenthing went wrong'
                );
            }

            return data.products.map(function (val) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_web___["c" /* Product */], { product: val, key: val.name, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                    },
                    __self: _this2
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_web___["d" /* ScrollView */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    },
                    __self: this
                },
                this.renderProducts()
            );
        }
    }]);

    return ProductList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(ProductlistQuery)(ProductList);

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOADER_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOADER_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REGISTER_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REGISTER_PROCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REGISTER_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SAVE_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return RESET_SCENE; });
var LOADER_START = 'LOADER_START';
var LOADER_END = 'LOADER_END';
var REGISTER_START = 'LOGIN_START';
var REGISTER_PROCESS = 'LOGIN_PROCESS';
var REGISTER_SUCCESS = 'LOGIN_SUCCESS';
var REGISTER_FAILED = 'LOGIN_FAILED';
var SAVE_FIELD = 'SAVE_FIELD';
var RESET_SCENE = 'RESET_SCENE';

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initialState_json__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initialState_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__initialState_json__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["a"] = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__initialState_json___default.a;
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
            return _extends({}, state, { changeScene: true });
        case __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* REGISTER_FAILED */]:
            return _extends({}, state, { changeScene: false });
        case __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* RESET_SCENE */]:
            return _extends({}, state, { changeScene: false });
        default:
            return _extends({}, state);
    }
};

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = {
	"app_name": "Universal eCommerce",
	"app_version": "0.0.1"
};

/***/ }),

/***/ 678:
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

/***/ 679:
/***/ (function(module, exports) {

module.exports = {
	"email": "",
	"password": "",
	"error": "",
	"loading": false,
	"user": null,
	"changeScene": false
};

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = {
	"firstname": "",
	"lastname": "",
	"email": "",
	"password": "",
	"error": "",
	"loading": false,
	"user": null,
	"changeScene": false
};

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(272);
module.exports = __webpack_require__(271);


/***/ })

},[681]);
//# sourceMappingURL=client.js.map