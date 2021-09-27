"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this testfile was used to test if jest performs as expected (yes it does)
var Calc = /** @class */ (function () {
    function Calc() {
    }
    Calc.prototype.add = function (a, b) {
        return a + b;
    };
    return Calc;
}());
exports.default = new Calc();
