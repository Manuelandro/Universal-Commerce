webpackJsonp([0],{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Input__ = __webpack_require__(311);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__Input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Image__ = __webpack_require__(310);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__Image__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button__ = __webpack_require__(305);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PageTitle__ = __webpack_require__(312);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Card__ = __webpack_require__(306);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__Card__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CardSection__ = __webpack_require__(307);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__CardSection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ErrorMsg__ = __webpack_require__(308);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__ErrorMsg__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Spinner__ = __webpack_require__(314);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__Spinner__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Header__ = __webpack_require__(309);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Product__ = __webpack_require__(313);
/* unused harmony namespace reexport */













/***/ }),

/***/ 193:
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

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_app_app_web__ = __webpack_require__(301);
/* global document:false */





__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_app_app_web__["a" /* default */]),
  document.getElementById('react-root')
)

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_web__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routers_web__ = __webpack_require__(303);
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
        { store: __WEBPACK_IMPORTED_MODULE_3__store_web__["a" /* default */], client: client, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { flex: 1 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__routers_web__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
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

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scenes_Login_reducer__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scenes_Register_reducer__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scenes_About_reducer__ = __webpack_require__(318);




var reducers = {
    login: __WEBPACK_IMPORTED_MODULE_0__scenes_Login_reducer__["a" /* default */],
    about: __WEBPACK_IMPORTED_MODULE_2__scenes_About_reducer__["a" /* default */],
    register: __WEBPACK_IMPORTED_MODULE_1__scenes_Register_reducer__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = reducers;

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scenes_Login_index_web__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scenes_ProductList_index_web__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scenes_About_index_web__ = __webpack_require__(317);
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

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_thunk__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers__ = __webpack_require__(302);
/* unused harmony export history */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global window:false */







var initialState = {};
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || __WEBPACK_IMPORTED_MODULE_3_redux__["compose"];

var theReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["combineReducers"])(_extends({}, __WEBPACK_IMPORTED_MODULE_5__reducers__["a" /* default */], {
    routing: __WEBPACK_IMPORTED_MODULE_1_react_router_redux__["routerReducer"]
}));

var enhancer = composeEnhancers(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_4_redux_thunk___default.a, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__["routerMiddleware"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_history__["createBrowserHistory"])())));

var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["createStore"])(theReducer, initialState, enhancer);

// https://github.com/reactjs/react-router-redux/issues/442
var history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router_redux__["syncHistoryWithStore"])(__WEBPACK_IMPORTED_MODULE_0_react_router__["a" /* browserHistory */], store);

if (false) {
    module.hot.accept('./reducers', function () {
        store.replaceReducer(require('./reducers').default);
    });
}

/* harmony default export */ __webpack_exports__["a"] = store;


/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/Button.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        flex: 1;\n        align-self: stretch;\n        background-color: #fff;\n        border-radius: 4px;\n        border-width: 1px;\n        border-color: #007788;\n        margin-left: 5px;\n        margin-right: 5px;\n    '], ['\n        flex: 1;\n        align-self: stretch;\n        background-color: #fff;\n        border-radius: 4px;\n        border-width: 1px;\n        border-color: #007788;\n        margin-left: 5px;\n        margin-right: 5px;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        align-self: center;\n        color: #007788;\n        font-size: 16px;\n        font-weight: 600;\n        padding-top: 10px;\n        padding-bottom: 10px;\n    '], ['\n        align-self: center;\n        color: #007788;\n        font-size: 16px;\n        font-weight: 600;\n        padding-top: 10px;\n        padding-bottom: 10px;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var _button$Text = {
    button: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].button(_templateObject),
    Text: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].span(_templateObject2)
},
    button = _button$Text.button,
    Text = _button$Text.Text;


var Button = function Button(_ref) {
    var onPress = _ref.onPress,
        children = _ref.children;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
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

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/Card.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        border-width: 1px;\n        border-radius: 2px;\n        border-color: #ddd;\n        border-bottom-width: 0;\n        box-shadow: 0, 2px 9px #000;\n        margin-left: 5px;\n        margin-right: 5px;\n        margin-top: 10px;\n    '], ['\n        border-width: 1px;\n        border-radius: 2px;\n        border-color: #ddd;\n        border-bottom-width: 0;\n        box-shadow: 0, 2px 9px #000;\n        margin-left: 5px;\n        margin-right: 5px;\n        margin-top: 10px;\n    ']);

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
                lineNumber: 18
            },
            __self: _this
        },
        children
    );
};



/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardSection; });
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/CardSection.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        border-bottom-width: 1px;\n        border-color: #ddd;\n        padding: 5px,\n        background-color: #fff;\n        justify-content: flex-start;\n        flex-direction: row;\n        position: relative;\n    '], ['\n        border-bottom-width: 1px;\n        border-color: #ddd;\n        padding: 5px,\n        background-color: #fff;\n        justify-content: flex-start;\n        flex-direction: row;\n        position: relative;\n    ']);

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

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(39);
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

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(39);
/* unused harmony export Header */
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/Header.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        height: 60px;\n        padding-top: 15px;\n        justify-content: center;\n        align-items: center;\n        background-color: #fcfcfc;\n        box-shadow: 0 2px 8px #000;\n        position: relative;\n    '], ['\n        height: 60px;\n        padding-top: 15px;\n        justify-content: center;\n        align-items: center;\n        background-color: #fcfcfc;\n        box-shadow: 0 2px 8px #000;\n        position: relative;\n    ']),
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
                lineNumber: 21
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Text,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                },
                __self: _this
            },
            headerText
        )
    );
};



/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(39);
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

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/Input.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        flex: 1;\n        flex-direction: row;\n        align-items: center;\n        border-width: 1px;\n        border-color: #ccc;\n        margin-left: 5px;\n        margin-right: 5px;\n    '], ['\n        flex: 1;\n        flex-direction: row;\n        align-items: center;\n        border-width: 1px;\n        border-color: #ccc;\n        margin-left: 5px;\n        margin-right: 5px;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        height: 40px;\n        flex: 3;\n        padding-left: 5px;\n        padding-right: 5px;\n        font-size: 18px;\n        line-height: 23px;\n    '], ['\n        height: 40px;\n        flex: 3;\n        padding-left: 5px;\n        padding-right: 5px;\n        font-size: 18px;\n        line-height: 23px;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n        font-size: 18px;\n        padding-left: 5px;\n        flex: 1;\n    '], ['\n        font-size: 18px;\n        padding-left: 5px;\n        flex: 1;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var _View$Text$TextInput = {
    View: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject),
    Text: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].label(_templateObject2),
    TextInput: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].input(_templateObject3)
},
    View = _View$Text$TextInput.View,
    Text = _View$Text$TextInput.Text,
    TextInput = _View$Text$TextInput.TextInput;


var Input = function Input(_ref) {
    var label = _ref.label,
        value = _ref.value,
        onChangeText = _ref.onChangeText,
        placeholder = _ref.placeholder,
        secureTextEntry = _ref.secureTextEntry,
        autoCapitalize = _ref.autoCapitalize;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        View,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 32
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Text,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                },
                __self: _this
            },
            label
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TextInput, {
            placeholder: placeholder,
            autoCorrect: false,
            autoCapitalize: autoCapitalize,
            secureTextEntry: secureTextEntry,
            value: value,
            onChange: onChangeText,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 34
            },
            __self: _this
        })
    );
};



/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(39);
/* unused harmony export PageTitle */
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/PageTitle.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        flex: 1;\n        flex-direction: row;\n        align-self: stretch;\n        justify-content: center;\n        margin-top: 20px;\n        margin-bottom: 5px;\n    '], ['\n        flex: 1;\n        flex-direction: row;\n        align-self: stretch;\n        justify-content: center;\n        margin-top: 20px;\n        margin-bottom: 5px;\n    ']),
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
            children
        )
    );
};



/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(192);
/* unused harmony export Product */
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/components/web/Product.js',
    _this = this;

var _templateObject = _taggedTemplateLiteral(['\n        flex-direction: column;\n        justify-content: space-around;\n    '], ['\n        flex-direction: column;\n        justify-content: space-around;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        font-size: 18px;\n    '], ['\n        font-size: 18px;\n    ']),
    _templateObject3 = _taggedTemplateLiteral([''], ['']),
    _templateObject4 = _taggedTemplateLiteral(['\n        justify-content: center;\n        align-items: center;\n        margin-right: 10px;\n        marginleft: 10px;\n    '], ['\n        justify-content: center;\n        align-items: center;\n        margin-right: 10px;\n        marginleft: 10px;\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n        height: 50px;\n        width: 50px;\n    '], ['\n        height: 50px;\n        width: 50px;\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n        width: null;\n        height: 300px;\n        flex: 1;\n    '], ['\n        width: null;\n        height: 300px;\n        flex: 1;\n    ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var _ViewHead$Album$Artis = {
    ViewHead: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject),
    Album: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].p(_templateObject2),
    Artist: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].p(_templateObject3),
    ViewThumb: __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject4),
    Thumb: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__index__["g" /* Image */])(_templateObject5),
    Cover: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__index__["g" /* Image */])(_templateObject6)
},
    ViewHead = _ViewHead$Album$Artis.ViewHead,
    Album = _ViewHead$Album$Artis.Album,
    Artist = _ViewHead$Album$Artis.Artist,
    ViewThumb = _ViewHead$Album$Artis.ViewThumb,
    Thumb = _ViewHead$Album$Artis.Thumb,
    Cover = _ViewHead$Album$Artis.Cover;


var Product = function Product(_ref) {
    var _ref$album = _ref.album,
        title = _ref$album.title,
        artist = _ref$album.artist,
        thumbnail_image = _ref$album.thumbnail_image,
        image = _ref$album.image;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__index__["c" /* Card */],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 40
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__index__["d" /* CardSection */],
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                },
                __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ViewThumb,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    },
                    __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Thumb, { source: { uri: thumbnail_image }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    },
                    __self: _this
                })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                ViewHead,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                    },
                    __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    Album,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 46
                        },
                        __self: _this
                    },
                    title
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    Artist,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 47
                        },
                        __self: _this
                    },
                    artist
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__index__["d" /* CardSection */],
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                },
                __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Cover, { source: { uri: image }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                },
                __self: _this
            })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__index__["d" /* CardSection */],
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                },
                __self: _this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__index__["b" /* Button */],
                { onPress: function onPress() {
                        return console.log('jejej');
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    },
                    __self: _this
                },
                'Buy Now!'
            )
        )
    );
};



/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(39);
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

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(523);
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

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SELECT_SECTION; });
var SELECT_SECTION = 'SELECT_SECTION';

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(255);
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

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_json__ = __webpack_require__(697);
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

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logic_Firebase_user_getters__ = __webpack_require__(315);
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

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_web__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(319);
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
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_web__["a" /* Spinner */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    },
                    __self: this
                });
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_web__["b" /* Button */],
                { onPress: function onPress() {
                        return loginStart(login);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
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
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_2__components_web__["c" /* Card */],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 27
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2__components_web__["d" /* CardSection */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 28
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_web__["e" /* Input */], {
                            label: 'Email',
                            placeholder: 'example@email.com',
                            value: login.email,
                            onChange: function onChange(value) {
                                return saveField({ prop: 'email', value: value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 29
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2__components_web__["d" /* CardSection */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 36
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_web__["e" /* Input */], {
                            label: 'Password',
                            placeholder: 'password',
                            secureTextEntry: true,
                            value: login.password,
                            onChange: function onChange(value) {
                                return saveField({ prop: 'password', value: value });
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37
                            },
                            __self: this
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2__components_web__["d" /* CardSection */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 46
                            },
                            __self: this
                        },
                        this.renderButton()
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2__components_web__["f" /* ErrorMsg */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 50
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
                                lineNumber: 52
                            },
                            __self: this
                        },
                        'Non hai un account? Registrati'
                    )
                )
            );
        }
    }]);

    return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var saveField = __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* saveField */],
    loginStart = __WEBPACK_IMPORTED_MODULE_3__actions__["b" /* loginStart */];

var mapStateToProps = function mapStateToProps(_ref) {
    var login = _ref.login;
    return { login: login };
};
var mapDispatchToProps = { saveField: saveField, loginStart: loginStart };

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* connect */])(mapStateToProps, mapDispatchToProps)(Login);

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initialState_json__ = __webpack_require__(698);
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

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
var _jsxFileName = '/Applications/MAMP/htdocs/UniversalApp/src/scenes/ProductList/index.web.js';

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

/***/ 323:
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

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__initialState_json__ = __webpack_require__(699);
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

/***/ 697:
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

/***/ 698:
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

/***/ 699:
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

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(286);
module.exports = __webpack_require__(285);


/***/ })

},[700]);
//# sourceMappingURL=client.js.map