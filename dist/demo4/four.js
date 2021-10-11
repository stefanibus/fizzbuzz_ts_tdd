"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.four = void 0;
var Four = /** @class */ (function () {
    function Four() {
        var _this = this;
        this.printOnePossibleExampleToPage = function (range, printThisToPage, startDemo) {
            startDemo('Four ==><br>amount of rules are dynamic and the current three rules are:  <br>3=Clever, 5=Push, 13=ExtraThirdRule, 23=ExtraRuleNumberFour;  <br>Length of array is dynamic; <br>unit tests;<br>map.method, es6 Modulo <br><br>');
            if (range > 0 && range <= 1000) {
                var result = _this.cleverpush([
                    _this.mkRule(3, 'Clever'),
                    _this.mkRule(5, 'Push'),
                    _this.mkRule(13, 'ExtraThirdRule'),
                    _this.mkRule(23, 'ExtraRuleNumberFour'),
                ], 100);
                // console.log(result)
                printThisToPage(0, result.join(' <br> '));
                return result;
            }
            else {
                alert('the Number for the range must be between 1 and 1000');
            }
        };
    }
    Four.prototype.mkRule = function (div, word) {
        return function (n) { return (n % div === 0 ? word : ''); };
    };
    Four.prototype.rangeArray = function (start, end) {
        return __spreadArray([], __read(Array(end - start).keys()), false).map(function (x) { return Number(x) + start; });
    };
    Four.prototype.cleverpush = function (rules, end) {
        if (end === void 0) { end = 101; }
        return this.rangeArray(1, end).map(function (i) {
            var str = rules.reduce(function (word, rule) { return word + rule(i); }, '');
            return str === '' ? "" + i : i + "  " + str;
        });
    };
    return Four;
}());
var four = new Four();
exports.four = four;
