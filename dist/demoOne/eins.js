"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one = void 0;
var Eins = /** @class */ (function () {
    function Eins() {
    }
    Eins.prototype.doFizzBuzz = function (value) {
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
    Eins.prototype.doFizzBuzzExtended = function (value) {
        var result = '';
        if (value <= 0)
            return result;
        var text = value.toString();
        if (value % 3 === 0 || text.search('3') !== -1)
            result = 'Clever';
        if (value % 5 === 0 || text.search('5') !== -1)
            result += 'Push';
        // below line will be covered by printToPage-function
        //if (!result) return text
        return result;
    };
    return Eins;
}());
var one = new Eins();
exports.one = one;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var demoEins = function (range, printThisToPage, startDemo) {
    startDemo(' Eins==> (unit tests, external for loop, es6 Modulo, if statements only )');
    for (var i = 1; i <= range; i++) {
        printThisToPage(i, one.doFizzBuzz(i));
    }
};
