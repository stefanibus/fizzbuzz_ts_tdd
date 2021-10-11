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
exports.two = void 0;
var Two = /** @class */ (function () {
    function Two() {
        var _this = this;
        this.numbers = __spreadArray([], __read(Array(30).keys()), false).map(function (x) { return Number(x + 1); });
        this.myArray = this.numbers
            .map(function (number) {
            if (number % 3 == 0 && number % 5 === 0)
                return number + ' CleverPush';
            if (number % 3 === 0)
                return number + ' Clever';
            if (number % 5 === 0)
                return number + ' Push';
            return number;
        })
            .join('<br/>');
        this.printOnePossibleExampleToPage = function (printThisToPage, startDemo) {
            startDemo(' Two ==> (unit test, map.method, modulo, if statements  )');
            printThisToPage(0, _this.myArray);
        };
    }
    return Two;
}());
var two = new Two();
exports.two = two;
