"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.two = void 0;
var Zwei = /** @class */ (function () {
    function Zwei() {
        this.numbers = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
            22, 23, 24, 25, 26, 27, 28, 29, 30,
        ];
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
    }
    return Zwei;
}());
var two = new Zwei();
exports.two = two;
var demoZwei = function (printThisToPage, startDemo) {
    startDemo(' Zwei==> (unit test, map.method, if statements  )');
    printThisToPage(0, two.myArray);
};
