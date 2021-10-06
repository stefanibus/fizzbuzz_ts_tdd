"use strict";
var Drei = function (range, printThisToPage, startDemo) {
    startDemo(' Drei==> ( keine unit tests, internal for loop, es6 Modulo, if else statement )');
    for (var i = 1; i <= range; i++) {
        var clever = i % 3 === 0;
        var push = i % 5 === 0;
        if (clever && push) {
            printThisToPage(i, 'CleverPush');
        }
        else if (clever) {
            printThisToPage(i, 'Clever');
        }
        else if (push) {
            printThisToPage(i, 'Push');
        }
        else {
            printThisToPage(i, '');
        }
    }
};
