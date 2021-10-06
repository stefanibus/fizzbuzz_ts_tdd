"use strict";
var headerEl = document.getElementById('header');
//  nullable check TS will not complain from this point on  <- no error
if (headerEl === null) {
    alert('We have done the nullable check for TS  --> oops! The header-Element in this Document might be missing. ');
}
else {
    var clearDom = function () {
        headerEl.innerHTML = '';
        printThisToPage_1(0, 'start again...');
    };
    var startDemo = function (demoName) {
        headerEl.innerHTML = '';
        printThisToPage_1(0, 'Demo ' + demoName);
    };
    var printThisToPage_1 = function (i, answer) {
        if (i === void 0) { i = 0; }
        if (answer === void 0) { answer = ''; }
        // append content
        var tempElement = document.createElement('div');
        tempElement.innerHTML = (i === 0 ? '' : i) + ' ' + answer;
        headerEl.appendChild(tempElement);
    };
}
