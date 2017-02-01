exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        return fn.apply(null, arr);
    },

    speak: function (fn, obj) {
        return fn.call(obj);
    },

    functionFunction: function (str) {
        return function (additory) {
            return str + ', ' + additory;
        }
    },

    makeClosures: function (arr, fn) {
        var result = [];

        var makeFN = function (val) {
            return function () {
                return fn(val);
            };
        };

        for (var i = 0; i < arr.length; i++) {
            result.push(makeFN(arr[i]))
        }

        return result;
    },

    partial: function (fn, str1, str2) {
        return function (str3) {
            return fn(str1, str2, str3);
        }

    },

    useArguments: function () {
        var res = 0;
        for (var i = 0; i < arguments.length; i++) {
            res += arguments[i];
        }
        return res;
    },

    callIt: function (fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        return fn.apply(null, args);
    },

    partialUsingArguments: function (fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        return function () {
            var moreArgs = args.concat(Array.prototype.slice.call(arguments));
            return fn.apply(null, moreArgs);
        };
    },

    curryIt: function (fn) {
        return function (a) {
            return function (b) {
                return function (c) {
                    return fn(a, b, c);
                }
            }
        }
    }
};
