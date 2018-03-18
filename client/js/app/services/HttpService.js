"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, HttpService;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("HttpService", HttpService = function () {
                function HttpService() {
                    _classCallCheck(this, HttpService);
                }

                _createClass(HttpService, [{
                    key: "get",
                    value: function get(url) {
                        var _this = this;

                        /*
                        |----------------------------------------------------------------------
                        | fetch api
                        |----------------------------------------------------------------------
                        |
                        | A fetch api torna mais simples a utilização de requests ajax.
                        |
                        */
                        return fetch(url).then(function (response) {
                            return _this._handleErrors(response);
                        }).then(function (response) {
                            return response.json();
                        });
                    }
                }, {
                    key: "post",
                    value: function post(url, dado) {
                        return fetch(url, {
                            headers: { "Content-type": "application/json" },
                            method: "POST",
                            body: JSON.stringify(dado)
                        }).then(function (response) {
                            return response;
                        });
                    }
                }, {
                    key: "_handleErrors",
                    value: function _handleErrors(response) {
                        if (!response.ok) throw new Error(response.statusText);
                        return response;
                    }
                }]);

                return HttpService;
            }());

            _export("HttpService", HttpService);
        }
    };
});
//# sourceMappingURL=HttpService.js.map