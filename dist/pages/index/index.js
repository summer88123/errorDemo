(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/index/index.tsx":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/index/index.tsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.less */ "./src/pages/index/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var taro_listview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! taro-listview */ "./node_modules/taro-listview/dist/index.js");
/* harmony import */ var taro_listview__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(taro_listview__WEBPACK_IMPORTED_MODULE_12__);













var blankList = [{
  author: {},
  title: 'this is a example'
}, {
  author: {},
  title: 'this is a example'
}, {
  author: {},
  title: 'this is a example'
}, {
  author: {},
  title: 'this is a example'
}];
var pageIndex = 1;

var Index = /*#__PURE__*/function (_Component) {
  Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Index, _Component);

  var _super = Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Index);

  function Index() {
    var _this;

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      isLoaded: false,
      error: false,
      hasMore: true,
      isEmpty: false,
      list: blankList
    });

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "getData", /*#__PURE__*/Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var pIndex,
          _yield$Taro$request,
          data,
          _args = arguments;

      return _Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pIndex = _args.length > 0 && _args[0] !== undefined ? _args[0] : pageIndex;
              if (pIndex === 1) _this.setState({
                isLoaded: false
              });
              _context.next = 4;
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.request({
                url: 'https://cnodejs.org/api/v1/topics',
                data: {
                  limit: 10,
                  page: pIndex
                }
              });

            case 4:
              _yield$Taro$request = _context.sent;
              data = _yield$Taro$request.data.data;
              return _context.abrupt("return", {
                list: data,
                hasMore: true,
                isLoaded: pIndex === 1
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "pullDownRefresh", /*#__PURE__*/function () {
      var _ref2 = Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(rest) {
        var res;
        return _Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                pageIndex = 1;
                _context2.next = 3;
                return _this.getData(1);

              case 3:
                res = _context2.sent;

                _this.setState(res);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onScrollToLower", /*#__PURE__*/Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var list, _yield$_this$getData, newList, hasMore;

      return _Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              list = _this.state.list;
              _context3.next = 3;
              return _this.getData(++pageIndex);

            case 3:
              _yield$_this$getData = _context3.sent;
              newList = _yield$_this$getData.list;
              hasMore = _yield$_this$getData.hasMore;

              _this.setState({
                list: list.concat(newList),
                hasMore: hasMore
              });

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "refList", {});

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "insRef", function (node) {
      _this.refList = node;
    });

    return _this;
  }

  Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refList.fetchInit();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isLoaded = _this$state.isLoaded,
          error = _this$state.error,
          hasMore = _this$state.hasMore,
          isEmpty = _this$state.isEmpty,
          list = _this$state.list;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], null, "Demo\u5F00\u542FAutoHeight", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
        className: "skeleton lazy-view",
        style: {
          height: '500px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_listview__WEBPACK_IMPORTED_MODULE_12___default.a, {
        autoHeight: true,
        lazy: true,
        ref: function ref(node) {
          return _this2.insRef(node);
        },
        isLoaded: isLoaded,
        isError: error,
        hasMore: hasMore // style={{height: '100vh'}}
        ,
        isEmpty: isEmpty,
        onPullDownRefresh: this.pullDownRefresh,
        onScrollToLower: this.onScrollToLower,
        renderCustomizeLoading: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], null, "\u81EA\u5B9A\u4E49"),
        customizeLoading: true,
        lazyStorage: "listView"
      }, list.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
          className: "item skeleton-bg",
          key: "item_".concat(index)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(taro_listview__WEBPACK_IMPORTED_MODULE_12__["LazyBlock"], {
          current: index,
          className: "avatar",
          lazyStorage: "listView"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* Image */ "a"], {
          className: "avatar skeleton-radius",
          src: item.author.avatar_url
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
          className: "box"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
          className: "tab"
        }, item.tab, item.visit_count, "\u6B21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
          className: "time"
        }, item.create_at), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
          className: "content"
        }, item.content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
          className: "title skeleton-rect"
        }, item.title)));
      }))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/taro-listview/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/taro-listview/dist/index.js ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: LazyBlock, default */
/***/ (function(module, exports, __webpack_require__) {

if (true) {
  module.exports = __webpack_require__(/*! ./weapp/index */ "./node_modules/taro-listview/dist/weapp/index.ts");
  module.exports.default = module.exports;
} else {}

/***/ }),

/***/ "./node_modules/taro-listview/dist/weapp/components/list-view/block.scss":
/*!*******************************************************************************!*\
  !*** ./node_modules/taro-listview/dist/weapp/components/list-view/block.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-listview/dist/weapp/components/list-view/block.tsx":
/*!******************************************************************************!*\
  !*** ./node_modules/taro-listview/dist/weapp/components/list-view/block.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _block_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block.scss */ "./node_modules/taro-listview/dist/weapp/components/list-view/block.scss");
/* harmony import */ var _block_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_block_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/storage */ "./node_modules/taro-listview/dist/weapp/utils/storage.ts");
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tool */ "./node_modules/taro-listview/dist/weapp/components/list-view/tool.ts");












var LazyImage = /*#__PURE__*/function (_Component) {
  Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(LazyImage, _Component);

  var _super = Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(LazyImage);

  function LazyImage() {
    var _this;

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, LazyImage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "lazyItem", {});

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "state", {
      scrollCur: [0]
    });

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "isLoad", function (current) {
      return _this.state.scrollCur.includes(current);
    });

    return _this;
  }

  Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(LazyImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var lazyStorage = this.props.lazyStorage;
      this.lazyItem = _utils_storage__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].get("lazyBox_".concat(lazyStorage))[_utils_storage__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].get("lazyBox_".concat(lazyStorage)).length - 1];
      this.bindTextListener();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var key = this.lazyItem.key;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.eventCenter.off("lazyBlock".concat(key));
    } // 绑定函数

  }, {
    key: "bindTextListener",
    value: function bindTextListener() {
      var _this2 = this;

      var _this$lazyItem = this.lazyItem,
          key = _this$lazyItem.key,
          className = _this$lazyItem.className,
          viewHeight = _this$lazyItem.viewHeight;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.eventCenter.on("lazyBlock".concat(key), function (scrollCur) {
        _this2.setState({
          scrollCur: scrollCur
        });
      }); // @ts-ignore

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a[key] = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.eventCenter.trigger.bind(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.eventCenter, "lazyBlock".concat(key));
      setTimeout(function () {
        _tool__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].lazyScroll(key, className, viewHeight);
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var current = this.props.current;
      return /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "c"], {
        className: "lazy-image-".concat(this.lazyItem.key, " ").concat(this.props.className, " ")
      }, this.isLoad(current) ? /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "c"], {
        className: "blockLoad"
      }, this.props.children) : '');
    }
  }]);

  return LazyImage;
}(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(LazyImage, "options", {
  addGlobalClass: true
});

Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(LazyImage, "externalClasses", ['img-class']);

Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(LazyImage, "defaultProps", {
  lazyStorage: 'box'
});

/* harmony default export */ __webpack_exports__["a"] = (LazyImage);

/***/ }),

/***/ "./node_modules/taro-listview/dist/weapp/components/list-view/index.scss":
/*!*******************************************************************************!*\
  !*** ./node_modules/taro-listview/dist/weapp/components/list-view/index.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-listview/dist/weapp/components/list-view/index.tsx":
/*!******************************************************************************!*\
  !*** ./node_modules/taro-listview/dist/weapp/components/list-view/index.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document) {/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../skeleton */ "./node_modules/taro-listview/dist/weapp/components/skeleton/index.tsx");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../loading */ "./node_modules/taro-listview/dist/weapp/components/loading/index.tsx");
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tool */ "./node_modules/taro-listview/dist/weapp/components/list-view/tool.ts");
/* harmony import */ var _result_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../result-page */ "./node_modules/taro-listview/dist/weapp/components/result-page/index.tsx");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./init */ "./node_modules/taro-listview/dist/weapp/components/list-view/init.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/taro-listview/dist/weapp/utils/utils.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./index.scss */ "./node_modules/taro-listview/dist/weapp/components/list-view/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_17__);















 // eslint-disable-next-line no-unused-vars




var ListView = /*#__PURE__*/function (_Component) {
  Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ListView, _Component);

  var _super = Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(ListView);

  function ListView() {
    var _this;

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, ListView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "lazyClassName", function () {
      return typeof _this.props.lazy === "boolean" ? ".lazy-view" : _this.props.lazy;
    }());

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "lazyKey", function () {
      if (_this.props.lazy) {
        var lazyStorage = _this.props.lazyStorage;
        return _tool__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].lazyScrollInit(_this.lazyClassName, lazyStorage);
      }
    }());

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "lazyViewHeight", 0);

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "scrollView", {});

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "state", _init__WEBPACK_IMPORTED_MODULE_15__[/* initialState */ "b"]);

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "startY", 0);

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "needPullDown", true);

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "touchScrollTop", 0);

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "touchEvent", function (e) {
      var type = e.type,
          touches = e.touches;
      var _this$props = _this.props,
          onPullDownRefresh = _this$props.onPullDownRefresh,
          distanceToRefresh = _this$props.distanceToRefresh,
          damping = _this$props.damping;
      if (!onPullDownRefresh) return;

      switch (type) {
        case "touchstart":
          {
            _this.touchScrollTop = _this.state.scrollTop;
            _this.needPullDown = true, _this.startY = touches[0].clientY;
            break;
          }
        // 拖动方向不符合的不处理

        case "touchmove":
          {
            var clientY = touches[0].clientY;

            var _assertThisInitialize = Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this),
                touchScrollTop = _assertThisInitialize.touchScrollTop;

            var height = Math.floor((clientY - _this.startY) / 5);
            if (height < 0 || touchScrollTop > 5) return;
            e.preventDefault(); // 阻止默认的处理方式(阻止下拉滑动的效果)

            if (height > 0 && height < (damping || 0)) {
              var needPullDown = false;

              if (height < (distanceToRefresh || 0)) {
                needPullDown = true;
              }

              _this.updateDampText(needPullDown);

              _this.moveBox(height);
            }

            break;
          }

        case "touchend":
          {
            if (!_this.needPullDown) {
              _this.fetchInit();
            } else {
              _this.resetLoad(0);
            }

            break;
          }

        case "touchcancel":
          {
            _this.resetLoad(0);

            break;
          }

        default:
          {// console.log('foo');
          }
      }
    });

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "fetchInit", /*#__PURE__*/Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var onPullDownRefresh, reset;
      return _Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              onPullDownRefresh = _this.props.onPullDownRefresh;

              _this.resetLoad(1);

              if (!onPullDownRefresh) {
                _context.next = 7;
                break;
              }

              reset = function reset() {
                _this.setState({
                  isInit: true
                });

                _this.resetLoad(0, function () {
                  _this.setState({
                    isInit: false
                  });
                });
              };

              _context.next = 6;
              return onPullDownRefresh(function () {});

            case 6:
              reset();

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "resetLoad", function () {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var cb = arguments.length > 1 ? arguments[1] : undefined;
      // status: 0:回复初始值 1：加载中
      // console.log({ status })
      var distanceToRefresh = _this.props.distanceToRefresh;
      var state = {};

      switch (status) {
        case 0:
          state = {
            canScrollY: true,
            downLoading: false
          };

          _this.updateDampText(true);

          _this.moveBox(0);

          break;

        case 1:
          state = {
            canScrollY: false,
            downLoading: true
          };

          _this.updateDampText(false);

          _this.moveBox(distanceToRefresh);

          break;

        default:
      } // state = Object.assign({}, state,{ blockStyle });
      // this.moveBox(0);


      _this.setState(state); // todo 监听真正动画结束


      setTimeout(function () {
        if (cb) cb();
      }, 400);
    });

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "handleScrollToLower", function () {
      _tool__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].debounce(function () {
        // this.getMore();
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__[/* minGetMore */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this));
      })();
    });

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "onScroll", function (e) {
      var scrollTop = e.detail.scrollTop;
      if (_this.props.onScroll) _this.props.onScroll();

      _this.setState({
        scrollTop: scrollTop
      });

      if (_this.props.lazy) {
        _tool__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].lazyScroll(_this.lazyKey, _this.lazyClassName, _this.lazyViewHeight);
      }
    });

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "moveBox", function (y) {
      var transition = y ? "none" : "300ms linear"; // console.log({ y })

      if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.getEnv() === "WEB") {
        var target = document.getElementById("bodyView");
        target.style.transform = "translate3d(0,".concat(y, "px,0)");
        target.style.transition = transition;
      } else {
        _this.setState({
          canScrollY: !y,
          blockStyle: {
            transform: "translate3d(0,".concat(y, "px,0)"),
            transition: transition
          }
        });
      }
    });

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "updateDampText", function (act) {
      _this.needPullDown = act;
      var _this$state = _this.state,
          isInit = _this$state.isInit,
          downLoading = _this$state.downLoading;
      var showTip = !downLoading && !isInit; // 展示下拉区域文案

      if (!showTip) return "";
      var _this$props2 = _this.props,
          _this$props2$indicato = _this$props2.indicator,
          indicator = _this$props2$indicato === void 0 ? {} : _this$props2$indicato,
          tipFreedText = _this$props2.tipFreedText,
          tipText = _this$props2.tipText;
      var _ref2 = indicator,
          _ref2$activate = _ref2.activate,
          activate = _ref2$activate === void 0 ? "释放刷新" : _ref2$activate,
          _ref2$deactivate = _ref2.deactivate,
          deactivate = _ref2$deactivate === void 0 ? "下拉刷新" : _ref2$deactivate;
      var text = "";

      if (act) {
        text = activate || tipText;
      } else {
        text = deactivate || tipFreedText;
      }

      if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.getEnv() === "WEB") {
        var target = document.getElementById("tip-dampText");
        target.innerText = text;
      } else {
        _this.setState({
          dampText: text
        });
      }
    });

    return _this;
  }

  Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ListView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.moveBox(0);

      if (this.props.lazy) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_9___default.a.createSelectorQuery().in(this.$scope).select(".scrollView").boundingClientRect().exec(function (res) {
          var lazyStorage = _this2.props.lazyStorage;
          _tool__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].updateScrollHeight(_this2.lazyKey, res[0].height, lazyStorage);
          _this2.lazyViewHeight = res[0].height;
        });
      }

      if (this.props.needInit) this.fetchInit();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var lazyStorage = this.props.lazyStorage;
      _tool__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].lazyScrollRemove(lazyStorage);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          style = _this$props3.style,
          hasMore = _this$props3.hasMore,
          isEmpty = _this$props3.isEmpty,
          emptyText = _this$props3.emptyText,
          className = _this$props3.className,
          isError = _this$props3.isError,
          isLoaded = _this$props3.isLoaded,
          selector = _this$props3.selector,
          _this$props3$launch = _this$props3.launch,
          launch = _this$props3$launch === void 0 ? {} : _this$props3$launch,
          footerLoadingText = _this$props3.footerLoadingText,
          footerLoadedText = _this$props3.footerLoadedText,
          damping = _this$props3.damping,
          circleColor = _this$props3.circleColor,
          autoHeight = _this$props3.autoHeight;
      var _ref3 = launch,
          _ref3$launchError = _ref3.launchError,
          launchError = _ref3$launchError === void 0 ? false : _ref3$launchError,
          _ref3$launchEmpty = _ref3.launchEmpty,
          launchEmpty = _ref3$launchEmpty === void 0 ? false : _ref3$launchEmpty,
          _ref3$launchFooterLoa = _ref3.launchFooterLoaded,
          launchFooterLoaded = _ref3$launchFooterLoa === void 0 ? false : _ref3$launchFooterLoa,
          _ref3$launchFooterLoa2 = _ref3.launchFooterLoading,
          launchFooterLoading = _ref3$launchFooterLoa2 === void 0 ? false : _ref3$launchFooterLoa2;
      var _this$state2 = this.state,
          canScrollY = _this$state2.canScrollY,
          blockStyle = _this$state2.blockStyle,
          downLoading = _this$state2.downLoading,
          dampText = _this$state2.dampText;
      var showChildren = !(isEmpty || isError); // 展示children内容

      var showFooter = !downLoading && !isEmpty && !isError; // 空、错状态不展示底部

      var footerLoaded = showFooter && !launchFooterLoaded && !hasMore;
      var customFooterLoaded = showFooter && launchFooterLoaded && !hasMore; // 渲染renderLoadedText

      var footerLoading = showFooter && !launchFooterLoading && hasMore;
      var customFooterLoading = showFooter && launchFooterLoading && hasMore; // 渲染renderNoMore

      if (autoHeight) {
        return /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* ScrollView */ "b"], {
          ref: function ref(node) {
            _this3.scrollView = node;
          },
          className: "".concat(className, " ").concat(downLoading && "downLoadingStyle", " scrollView autoHeight"),
          style: Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, style),
          scrollY: canScrollY,
          lowerThreshold: 80,
          onScrollToLower: this.handleScrollToLower,
          scrollWithAnimation: true,
          onScroll: this.onScroll
        }, /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
          style: {
            minHeight: "100%",
            overflowY: "hidden"
          },
          onTouchMove: function onTouchMove(e) {
            return _this3.touchEvent(e);
          },
          onTouchEnd: function onTouchEnd(e) {
            return _this3.touchEvent(e);
          },
          onTouchStart: function onTouchStart(e) {
            return _this3.touchEvent(e);
          },
          onTouchCancel: function onTouchCancel(e) {
            return _this3.touchEvent(e);
          }
        }, /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"] // style={trStyle}
        , {
          className: "bodyView",
          id: "bodyView"
        }, /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
          style: blockStyle
        }, /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
          style: {
            height: "".concat(damping, "px"),
            marginTop: "-".concat(damping, "px")
          },
          className: "pullDownBlock"
        }, /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
          className: "tip"
        }, !downLoading && /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
          id: "tip-dampText"
        }, dampText), downLoading && (this.props.customizeLoading ? this.props.renderCustomizeLoading : /*#__PURE__*/React.createElement(_loading__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
          color: circleColor
        })))), showChildren && this.props.children, /*#__PURE__*/React.createElement(_result_page__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
          renderError: this.props.renderError,
          renderEmpty: this.props.renderEmpty,
          launchError: launchError,
          launchEmpty: launchEmpty,
          isError: isError || false,
          isEmpty: isEmpty || false,
          emptyText: emptyText || "",
          fetchInit: this.fetchInit
        }), footerLoading && /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
          className: "loading"
        }, footerLoadingText), customFooterLoading && this.props.renderFooterLoading, footerLoaded && /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
          className: "loaded"
        }, footerLoadedText), customFooterLoaded && this.props.renderFooterLoaded))));
      }

      return /*#__PURE__*/React.createElement(_skeleton__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
        isLoaded: isLoaded || isError,
        selector: selector
      }, /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* ScrollView */ "b"], {
        ref: function ref(node) {
          _this3.scrollView = node;
        },
        className: "".concat(className, " scrollView"),
        style: style,
        scrollY: canScrollY,
        lowerThreshold: 80,
        onScrollToLower: this.handleScrollToLower,
        scrollWithAnimation: true,
        onScroll: this.onScroll
      }, /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
        style: {
          minHeight: "100%",
          overflowY: "hidden"
        },
        onTouchMove: function onTouchMove(e) {
          return _this3.touchEvent(e);
        },
        onTouchEnd: function onTouchEnd(e) {
          return _this3.touchEvent(e);
        },
        onTouchStart: function onTouchStart(e) {
          return _this3.touchEvent(e);
        },
        onTouchCancel: function onTouchCancel(e) {
          return _this3.touchEvent(e);
        }
      }, /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"] // style={trStyle}
      , {
        className: "bodyView",
        id: "bodyView"
      }, /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
        style: blockStyle
      }, /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
        style: {
          height: "".concat(damping, "px"),
          marginTop: "-".concat(damping, "px")
        },
        className: "pullDownBlock"
      }, /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
        className: "tip"
      }, !downLoading && /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
        id: "tip-dampText"
      }, dampText), downLoading && (this.props.customizeLoading ? this.props.renderCustomizeLoading : /*#__PURE__*/React.createElement(_loading__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        color: circleColor
      })))), showChildren && this.props.children, /*#__PURE__*/React.createElement(_result_page__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        renderError: this.props.renderError,
        renderEmpty: this.props.renderEmpty,
        launchError: launchError,
        launchEmpty: launchEmpty,
        isError: isError || false,
        isEmpty: isEmpty || false,
        emptyText: emptyText || "",
        fetchInit: this.fetchInit
      }), footerLoading && /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
        className: "loading"
      }, footerLoadingText), customFooterLoading && this.props.renderFooterLoading, footerLoaded && /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__[/* View */ "c"], {
        className: "loaded"
      }, footerLoadedText), customFooterLoaded && this.props.renderFooterLoaded)))));
    }
  }]);

  return ListView;
}(_tarojs_taro__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(ListView, "options", {
  addGlobalClass: true
});

Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(ListView, "defaultProps", _init__WEBPACK_IMPORTED_MODULE_15__[/* initialProps */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (ListView);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./node_modules/taro-listview/dist/weapp/components/list-view/init.tsx":
/*!*****************************************************************************!*\
  !*** ./node_modules/taro-listview/dist/weapp/components/list-view/init.tsx ***!
  \*****************************************************************************/
/*! exports provided: initialState, initialProps */
/*! exports used: initialProps, initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialProps; });
var initialState = {
  hideInd: false,
  touchScrollTop: 0,
  scrollTop: 0,
  startY: 0,
  downLoading: false,
  lowerLoading: false,
  // needPullDown: true,
  canScrollY: true,
  isInit: false,
  blockStyle: {
    transform: 'translate3d(0,0,0)',
    transition: 'none'
  },
  dampText: ''
};
var initialProps = {
  selector: '',
  circleColor: '',
  lazy: false,
  distanceToRefresh: 50,
  damping: 150,
  isLoaded: true,
  isEmpty: false,
  emptyText: '',
  noMore: '',
  footerLoadingText: '加载中',
  footerLoadedText: '',
  scrollTop: 0,
  touchScrollTop: 0,
  onScrollToLower: function onScrollToLower() {},
  showIndicator: true,
  className: '',
  onPullDownRefresh: function onPullDownRefresh() {},
  hasMore: false,
  needInit: false,
  isError: false,
  launch: {},
  renderEmpty: null,
  renderError: null,
  autoHeight: false,
  indicator: {
    activate: '下拉刷新',
    deactivate: '释放刷新'
  },
  lazyStorage: 'box'
};

/***/ }),

/***/ "./node_modules/taro-listview/dist/weapp/components/list-view/tool.ts":
/*!****************************************************************************!*\
  !*** ./node_modules/taro-listview/dist/weapp/components/list-view/tool.ts ***!
  \****************************************************************************/
/*! exports provided: debounce, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export debounce */
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/storage */ "./node_modules/taro-listview/dist/weapp/utils/storage.ts");



function debounce(method) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var timer = null;
  return function () {
    var context = this; // 在函数执行的时候先清除timer定时器;
    // @ts-ignore

    clearTimeout(timer); // @ts-ignore

    timer = setTimeout(function () {
      method.call(context);
    }, time);
  };
}
var timer = null;
var startTime = Date.now();

var throttle = function throttle(func, delay) {
  return function () {
    var curTime = Date.now();
    var remaining = delay - (curTime - startTime);
    var context = this;
    var args = arguments; // @ts-ignore

    clearTimeout(timer);

    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      // @ts-ignore
      timer = setTimeout(func, remaining);
    }
  };
};

var wait = function wait() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  return new Promise(function (res) {
    setTimeout(function () {
      res();
    }, time);
  });
};

function lazyScrollInit(className, storagekey) {
  var lazyKey = "lazy".concat(new Date().getTime());
  var lazyBox = _utils_storage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].get("lazyBox_".concat(storagekey), []);

  if (lazyBox.length) {
    var length = lazyBox.length;
    var lastKey = lazyBox[length - 1];

    if (new Date().getTime() - Number(lastKey.key.replace('lazy', '')) > 86400000) {
      lazyBox.splice(0, length);
    }
  }

  lazyBox.push({
    key: lazyKey,
    className: className,
    viewHeight: 0
  });
  _utils_storage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].set("lazyBox_".concat(storagekey), lazyBox);
  return lazyKey;
}

function lazyScrollRemove(storagekey) {
  var lazyBox = _utils_storage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].get("lazyBox_".concat(storagekey), []);
  lazyBox.pop();
  _utils_storage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].set("lazyBox_".concat(storagekey), lazyBox);
}

function updateScrollHeight(key, viewHeight, storagekey) {
  var lazyBox = _utils_storage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].get("lazyBox_".concat(storagekey), []);
  var index = lazyBox.findIndex(function (i) {
    return i.key === key;
  });
  var targetLazy = lazyBox[index];
  lazyBox.splice(index, 1, Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, targetLazy), {}, {
    viewHeight: viewHeight
  }));
  _utils_storage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].set("lazyBox_".concat(storagekey), lazyBox);
}

function lazyScroll(key, selector, height) {
  var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getEnv() === 'WEB' ? ".lazy-image-".concat(key) : "".concat(selector, " >>> .lazy-image-").concat(key);
  throttle(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.createSelectorQuery().selectAll(query).boundingClientRect().exec(function (res) {
      var list = res[0];
      var indexs = [];
      list.forEach(function (i, index) {
        if (i.top > -height * 1.5 && i.top < height * 1.5) {
          // @ts-ignore
          indexs.push(index);
        }
      }); // @ts-ignore

      if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a[key] && typeof _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a[key] === 'function') _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a[key](indexs);
    });
  }, 500)();
}

/* harmony default export */ __webpack_exports__["a"] = ({
  lazyScroll: lazyScroll,
  wait: wait,
  debounce: debounce,
  updateScrollHeight: updateScrollHeight,
  lazyScrollInit: lazyScrollInit,
  lazyScrollRemove: lazyScrollRemove
});

/***/ }),

/***/ "./node_modules/taro-listview/dist/weapp/components/loading/index.scss":
/*!*****************************************************************************!*\
  !*** ./node_modules/taro-listview/dist/weapp/components/loading/index.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-listview/dist/weapp/components/loading/index.tsx":
/*!****************************************************************************!*\
  !*** ./node_modules/taro-listview/dist/weapp/components/loading/index.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./node_modules/taro-listview/dist/weapp/components/loading/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);








var Page = /*#__PURE__*/function (_Component) {
  Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Page, _Component);

  var _super = Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Page);

  function Page() {
    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Page);

    return _super.apply(this, arguments);
  }

  Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Page, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "c"], {
        className: "loading-box",
        "data-color": "red"
      }, /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "c"], {
        style: "width:100%;height:100%",
        className: "lds-rolling"
      }, /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "c"], {
        className: "circle",
        style: {
          borderColor: this.props.color
        }
      })));
    }
  }]);

  return Page;
}(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),

/***/ "./node_modules/taro-listview/dist/weapp/components/result-page/assets/empty.png":
/*!***************************************************************************************!*\
  !*** ./node_modules/taro-listview/dist/weapp/components/result-page/assets/empty.png ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "_/node_modules/taro-listview/dist/weapp/components/result-page/assets/empty.png";

/***/ }),

/***/ "./node_modules/taro-listview/dist/weapp/components/result-page/index.scss":
/*!*********************************************************************************!*\
  !*** ./node_modules/taro-listview/dist/weapp/components/result-page/index.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-listview/dist/weapp/components/result-page/index.tsx":
/*!********************************************************************************!*\
  !*** ./node_modules/taro-listview/dist/weapp/components/result-page/index.tsx ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./node_modules/taro-listview/dist/weapp/components/result-page/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);








var emptyImg = __webpack_require__(/*! ./assets/empty.png */ "./node_modules/taro-listview/dist/weapp/components/result-page/assets/empty.png");

var Page = /*#__PURE__*/function (_Component) {
  Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Page, _Component);

  var _super = Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Page);

  function Page() {
    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Page);

    return _super.apply(this, arguments);
  }

  Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Page, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isError = _this$props.isError,
          launchError = _this$props.launchError,
          launchEmpty = _this$props.launchEmpty,
          isEmpty = _this$props.isEmpty,
          emptyText = _this$props.emptyText,
          fetchInit = _this$props.fetchInit;
      var showError = isError; // isErrorUI权重最高

      var showErrorText = showError && !launchError; // 渲染ErrorText

      var showRenderError = showError && launchError; // 渲染renderError

      var showEmpty = !isError && isEmpty; // isErrorUI权重最高

      var showEmptyText = showEmpty && !launchEmpty; // 渲染emptyText

      var showRenderEmpty = showEmpty && launchEmpty; // 渲染renderEmpty

      return /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "c"], null, showErrorText && /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "c"], {
        className: "errorPage"
      }, /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "c"], {
        className: "marginBottom30"
      }, "\u554A\u54E6\uFF0C\u7F51\u7EDC\u6084\u6084\u8DD1\u5230\u5916\u661F\u7403\u53BB\u4E86~"), /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "c"], {
        className: "button",
        onClick: fetchInit
      }, "\u91CD\u65B0\u52A0\u8F7D")), showRenderError ? this.props.renderError : '', showEmptyText && /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "c"], {
        className: "noContentTips"
      }, /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Image */ "a"], {
        src: emptyImg,
        className: "emptyBanner"
      }), emptyText), showRenderEmpty ? this.props.renderEmpty : '');
    }
  }]);

  return Page;
}(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),

/***/ "./node_modules/taro-listview/dist/weapp/components/skeleton/index.scss":
/*!******************************************************************************!*\
  !*** ./node_modules/taro-listview/dist/weapp/components/skeleton/index.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/taro-listview/dist/weapp/components/skeleton/index.tsx":
/*!*****************************************************************************!*\
  !*** ./node_modules/taro-listview/dist/weapp/components/skeleton/index.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(document) {/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./node_modules/taro-listview/dist/weapp/components/skeleton/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);











var Skeleton = /*#__PURE__*/function (_Component) {
  Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Skeleton, _Component);

  var _super = Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Skeleton);

  function Skeleton() {
    var _this;

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Skeleton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this), "state", {
      parentRect: {},
      bg: [],
      list: [],
      listRadius: []
    });

    return _this;
  }

  Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Skeleton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.getEnv() === 'WEAPP') {
        this.weappSkl();
      } else {
        this.h5Skl();
      }
    }
  }, {
    key: "h5Skl",
    value: function h5Skl() {
      var _this2 = this;

      var selObj = {
        bg: '.skeleton-bg',
        list: '.skeleton-rect',
        listRadius: '.skeleton-radius'
      };

      var selAll = function selAll(selector) {
        var list = [];
        document.querySelectorAll(selObj[selector]).forEach(function (i) {
          // @ts-ignore
          list.push(i.getBoundingClientRect());
        }); // @ts-ignore

        _this2.setState(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, selector, list));
      }; //todo 渲染完毕


      setTimeout(function () {
        var selector = _this2.props.selector; // @ts-ignore

        var dom = document.querySelector(selector);

        if (dom) {
          var rect = dom.getBoundingClientRect();
          var parentStyle = {};
          Object.keys(rect.toJSON()).forEach(function (i) {
            parentStyle[i] = "".concat(rect[i], "px");
          });

          _this2.setState({
            parentRect: parentStyle
          });

          selAll('bg');
          selAll('list');
          selAll('listRadius');
        }
      }, 300);
    }
  }, {
    key: "weappSkl",
    value: function weappSkl() {
      var _this3 = this;

      var selector = this.props.selector;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.createSelectorQuery().selectAll("".concat(selector, " >>> .skeleton-bg")).boundingClientRect().exec(function (res) {
        _this3.setState({
          bg: res[0]
        });
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.createSelectorQuery().selectAll("".concat(selector, " >>> .skeleton-rect")).boundingClientRect().exec(function (res) {
        _this3.setState({
          list: res[0]
        });
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_7___default.a.createSelectorQuery().selectAll("".concat(selector, " >>> .skeleton-radius")).boundingClientRect().exec(function (res) {
        _this3.setState({
          listRadius: res[0]
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          list = _this$state.list,
          bg = _this$state.bg,
          listRadius = _this$state.listRadius,
          parentRect = _this$state.parentRect;
      var isLoaded = this.props.isLoaded; // 是否加载完成

      return /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "c"], null, /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "c"], {
        style: {
          opacity: isLoaded ? 1 : 0
        }
      }, this.props.children), isLoaded ? '' : /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "c"], {
        style: Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, parentRect), {}, {
          backgroundColor: 'white',
          position: 'fixed',
          overflow: 'hidden'
        })
      }, bg.map(function (item) {
        var _ref = item,
            width = _ref.width,
            height = _ref.height,
            top = _ref.top,
            left = _ref.left;
        return /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "c"], {
          key: item,
          style: {
            background: 'white',
            width: "".concat(width, "px"),
            height: "".concat(height, "px"),
            top: "".concat(top, "px"),
            left: "".concat(left, "px"),
            position: 'fixed'
          }
        });
      }), list.map(function (item) {
        var _ref2 = item,
            width = _ref2.width,
            height = _ref2.height,
            top = _ref2.top,
            left = _ref2.left;
        return /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "c"], {
          key: item,
          className: "skeletonBg",
          style: {
            width: "".concat(width, "px"),
            height: "".concat(height, "px"),
            top: "".concat(top, "px"),
            left: "".concat(left, "px"),
            position: 'fixed'
          }
        });
      }), listRadius.map(function (item) {
        var _ref3 = item,
            width = _ref3.width,
            height = _ref3.height,
            top = _ref3.top,
            left = _ref3.left;
        return /*#__PURE__*/React.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__[/* View */ "c"], {
          key: item,
          className: "skeletonBg",
          style: {
            borderRadius: '50%',
            width: "".concat(width, "px"),
            height: "".concat(height, "px"),
            top: "".concat(top, "px"),
            left: "".concat(left, "px"),
            position: 'fixed'
          }
        });
      })));
    }
  }]);

  return Skeleton;
}(_tarojs_taro__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Skeleton, "defaultProps", {
  isLoaded: false,
  selector: '.skeleton'
});

/* harmony default export */ __webpack_exports__["a"] = (Skeleton);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./node_modules/taro-listview/dist/weapp/index.ts":
/*!********************************************************!*\
  !*** ./node_modules/taro-listview/dist/weapp/index.ts ***!
  \********************************************************/
/*! exports provided: Skeleton, ListView, LazyBlock, default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_list_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/list-view */ "./node_modules/taro-listview/dist/weapp/components/list-view/index.tsx");
/* harmony import */ var _components_skeleton_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/skeleton/index */ "./node_modules/taro-listview/dist/weapp/components/skeleton/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skeleton", function() { return _components_skeleton_index__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListView", function() { return _components_list_view__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _components_list_view_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list-view/block */ "./node_modules/taro-listview/dist/weapp/components/list-view/block.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyBlock", function() { return _components_list_view_block__WEBPACK_IMPORTED_MODULE_3__["a"]; });



_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.initPxTransform({
  designWidth: 750,
  deviceRatio: {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});



/* harmony default export */ __webpack_exports__["default"] = (_components_list_view__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/***/ }),

/***/ "./node_modules/taro-listview/dist/weapp/utils/storage.ts":
/*!****************************************************************!*\
  !*** ./node_modules/taro-listview/dist/weapp/utils/storage.ts ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);


function get(key, defaultValue) {
  var value = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getStorageSync(key);

  if (!value || value === ' ' || value === 'undefined' || value === 'null') {
    value = '';
  }

  return value ? JSON.parse(value) : defaultValue;
}

function set(key, value) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.setStorageSync(key, JSON.stringify(value));
}

function remove(key) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.removeStorageSync(key);
}

function clear() {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.clearStorageSync();
}

/* harmony default export */ __webpack_exports__["a"] = ({
  get: get,
  set: set,
  remove: remove,
  clear: clear
});

/***/ }),

/***/ "./node_modules/taro-listview/dist/weapp/utils/utils.ts":
/*!**************************************************************!*\
  !*** ./node_modules/taro-listview/dist/weapp/utils/utils.ts ***!
  \**************************************************************/
/*! exports provided: throttle, wait, isPromise, minGetMore */
/*! exports used: minGetMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export throttle */
/* unused harmony export wait */
/* unused harmony export isPromise */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return minGetMore; });
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");


var endTime;
function throttle(callback) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var startTime = new Date().getTime();

  if (startTime - endTime > time || !endTime) {
    callback();
    endTime = startTime;
  }
}
var wait = function wait() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  return new Promise(function (res) {
    setTimeout(function () {
      res();
    }, time);
  });
};
function isPromise(object) {
  if (Promise && Promise.resolve) {
    return Promise.resolve(object) == object;
  } else {
    throw "Promise not supported in your environment";
  }
}
var minGetMore = /*#__PURE__*/function () {
  var _ref = Object(_Users_hecom_Desktop_myApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(self) {
    var _self$props, onScrollToLower, hasMore, async, lowerLoading;

    return _Users_hecom_Desktop_myApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _self$props = self.props, onScrollToLower = _self$props.onScrollToLower, hasMore = _self$props.hasMore, async = _self$props.async;
            lowerLoading = self.state.lowerLoading;

            if (!(hasMore && !lowerLoading && onScrollToLower)) {
              _context.next = 11;
              break;
            }

            self.setState({
              lowerLoading: true
            });

            if (async) {
              _context.next = 8;
              break;
            }

            onScrollToLower(function () {
              self.setState({
                lowerLoading: false
              });
            });
            _context.next = 11;
            break;

          case 8:
            _context.next = 10;
            return onScrollToLower();

          case 10:
            self.setState({
              lowerLoading: false
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function minGetMore(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window) {var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/pages/index/index.less":
/*!************************************!*\
  !*** ./src/pages/index/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/index/index.tsx");


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index'))



/***/ })

},[["./src/pages/index/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map