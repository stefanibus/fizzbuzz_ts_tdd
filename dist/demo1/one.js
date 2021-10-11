"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one = void 0;
var One = /** @class */ (function () {
    function One() {
        var _this = this;
        this.printOnePossibleExampleToPage = function (range, printThisToPage, startDemo) {
            startDemo(' Obe ==> (unit tests, external for loop, es6 Modulo, if statements )');
            if (range > 0 && range <= 100) {
                for (var i = 1; i <= range; i++) {
                    printThisToPage(i, _this.doFizzBuzz(i));
                }
            }
            else {
                alert('number must be between 1 and 100');
            }
        };
    }
    One.prototype.doFizzBuzz = function (value) {
        var result = '';
        if (value <= 0)
            return result;
        if (value % 3 === 0)
            result = 'Clever';
        if (value % 5 === 0)
            result += 'Push';
        // below line will be covered by printToPage-function
        // if (!result) result = value.toString()
        return result;
    };
    return One;
}());
var one = new One();
exports.one = one;
