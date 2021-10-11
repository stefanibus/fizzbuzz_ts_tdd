"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
var headerElement = document.getElementById('header');
//  nullable check TS will not complain from this point on  <- no error
if (headerElement === null) {
    alert('We have done the nullable check for TS  --> oops! The header-Element in this Document might be missing. ');
}
else {
    var clearDom = function () {
        headerElement.innerHTML = '';
        printThisToPage_1(0, 'demoStart again...');
    };
    var demoStart_1 = function (demoName) {
        //headerElement.innerHTML = ''
        printThisToPage_1(0, '<br><br><br><br><br><br><br>Demo ' + demoName);
    };
    var printThisToPage_1 = function (i, answer) {
        if (i === void 0) { i = 0; }
        if (answer === void 0) { answer = ''; }
        // append content
        var tempElement = document.createElement('div');
        tempElement.innerHTML = (i === 0 ? '' : i) + ' ' + answer;
        headerElement.appendChild(tempElement);
    };
    var demoOne = function () {
        demoStart_1(' One');
        for (var i_1 = 1; i_1 <= 30; i_1++) {
            var answer = '';
            if (i_1 % 3 === 0)
                answer += 'Clever';
            if (i_1 % 5 === 0)
                answer += 'Push';
            if (!answer)
                i_1;
            printThisToPage_1(i_1, answer);
        }
    };
    demoOne();
    demoStart_1(' Two');
    for (var index = 1; index <= 30; index++) {
        if (index % 3 === 0 && index % 5 === 0)
            printThisToPage_1(index, 'CleverPush');
        else if (index % 3 === 0)
            printThisToPage_1(index, 'Clever');
        else if (index % 5 === 0)
            printThisToPage_1(index, 'Push');
        else
            printThisToPage_1(index, '');
    }
    var demoThree = function (range) {
        demoStart_1(' Three');
        for (var i_2 = 1; i_2 <= range; i_2++) {
            var clever = i_2 % 3 === 0;
            var push = i_2 % 5 === 0;
            if (clever && push) {
                printThisToPage_1(i_2, 'CleverPush');
            }
            else if (clever) {
                printThisToPage_1(i_2, 'Clever');
            }
            else if (push) {
                printThisToPage_1(i_2, 'Push');
            }
            else {
                printThisToPage_1(i_2);
            }
        }
    };
    demoThree(30);
    demoStart_1(' Four');
    var pushClever = function (n) {
        for (var i_3 = 1; i_3 <= n; i_3++) {
            var divisibleBy = function (divider, n) { return n % divider == 0; };
            if (divisibleBy(15, i_3))
                printThisToPage_1(i_3, 'CleverPush');
            else if (divisibleBy(3, i_3))
                printThisToPage_1(i_3, 'Clever');
            else if (divisibleBy(5, i_3))
                printThisToPage_1(i_3, 'Push');
            else
                printThisToPage_1(i_3);
        }
    };
    pushClever(30);
    demoStart_1(' Five (without Modulo)');
    var sieve = new Array(30);
    var steps = [
        { step: 3, value: ' Clever' },
        { step: 5, value: ' Push' },
        { step: 15, value: ' CleverPush' },
    ];
    for (var i_4 = 0; i_4 <= 30; i_4++) {
        sieve[i_4] = ''; // i not needed as printThisToPage() will take care of it
    }
    try {
        for (var steps_1 = __values(steps), steps_1_1 = steps_1.next(); !steps_1_1.done; steps_1_1 = steps_1.next()) {
            var s = steps_1_1.value;
            for (var i_5 = s.step; i_5 <= 30; i_5 += s.step) {
                sieve[i_5] = s.value;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (steps_1_1 && !steps_1_1.done && (_a = steps_1.return)) _a.call(steps_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    for (var i_6 in sieve) {
        printThisToPage_1(Number(i_6), sieve[i_6]);
    }
    demoStart_1(' Six');
    var divBy3 = void 0;
    var divBy5 = void 0;
    var i = void 0;
    var output = void 0;
    for (i = 1; i <= 30; i += 1) {
        output = '';
        divBy3 = !(i % 3);
        divBy5 = !(i % 5);
        if (divBy3)
            output += 'Clever';
        if (divBy5)
            output += 'Push';
        // below statement not needed.
        // if (!(divBy3 || divBy5)) output = ''
        printThisToPage_1(i, output);
    }
    demoStart_1(' Seven');
    var cleverPush_ = function (n) {
        for (var i_7 = 1; i_7 <= n; i_7++) {
            var divisibleBy = function (divider, n) { return n % divider == 0; };
            if (divisibleBy(15, i_7))
                printThisToPage_1(i_7, 'CleverPush');
            else if (divisibleBy(3, i_7))
                printThisToPage_1(i_7, 'Clever');
            else if (divisibleBy(5, i_7))
                printThisToPage_1(i_7, 'Push');
            else
                printThisToPage_1(i_7);
        }
    };
    cleverPush_(30);
}
