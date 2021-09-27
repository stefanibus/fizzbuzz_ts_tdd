"use strict";
var write = function (i, answer) {
    if (i === void 0) { i = 0; }
    if (answer === void 0) { answer = ''; }
    document.write((i === 0 ? '' : i) + "  " + answer + " <br>");
};
// export function sum(a: number, b: number) {
//   return a + b
// }
// write(sum(1, 1))
var start = function (text) {
    document.write("\n  <br><br><br><br><br><br>\n  ####################<br>\n  " + text + ":<br>\n  ");
};
var demoOne = function () {
    start('Demo One');
    for (var i_1 = 1; i_1 <= 30; i_1++) {
        var answer = '';
        if (i_1 % 3 === 0)
            answer += 'Clever';
        if (i_1 % 5 === 0)
            answer += 'Push';
        if (!answer)
            i_1;
        write(i_1, answer);
    }
};
demoOne();
// module.exports = demoOne
//export default demoOne()
start('Demo Two');
for (var index = 1; index <= 30; index++) {
    if (index % 3 === 0 && index % 5 === 0)
        write(index, 'CleverPush');
    else if (index % 3 === 0)
        write(index, 'Clever');
    else if (index % 5 === 0)
        write(index, 'Push');
    else
        write(index, '');
}
var demoThree = function (range) {
    start('Demo Three');
    for (var i_2 = 1; i_2 <= range; i_2++) {
        var clever = i_2 % 3 === 0;
        var push = i_2 % 5 === 0;
        if (clever && push) {
            write(i_2, 'CleverPush');
        }
        else if (clever) {
            write(i_2, 'Clever');
        }
        else if (push) {
            write(i_2, 'Push');
        }
        else {
            write(i_2);
        }
    }
};
demoThree(30);
start('Demo Four');
var fizzBuzz = function (n) {
    for (var i_3 = 1; i_3 <= n; i_3++) {
        var divisibleBy = function (divider, n) { return n % divider == 0; };
        if (divisibleBy(15, i_3))
            write(i_3, 'CleverPush');
        else if (divisibleBy(3, i_3))
            write(i_3, 'Clever');
        else if (divisibleBy(5, i_3))
            write(i_3, 'Push');
        else
            write(i_3);
    }
};
fizzBuzz(30);
start('Demo Five ');
var sieve = new Array(30);
var steps = [
    { step: 3, value: 'Clever' },
    { step: 5, value: 'Push' },
    { step: 15, value: 'CleverPush' },
];
for (var i_4 = 0; i_4 <= 30; i_4++) {
    sieve[i_4] = i_4;
}
for (var _i = 0, steps_1 = steps; _i < steps_1.length; _i++) {
    var s = steps_1[_i];
    for (var i_5 = s.step; i_5 <= 30; i_5 += s.step) {
        sieve[i_5] = s.value;
    }
}
for (var i_6 in sieve) {
    write(0, sieve[i_6]);
}
start('Demo Six');
var numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30,
];
var myArray = numbers
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
write(0, myArray);
start('Demo Seven');
// source: https://joshtronic.com/2018/08/05/fizzbuzz-in-typescript-3/
var divBy3;
var divBy5;
var i;
var output;
for (i = 1; i <= 30; i += 1) {
    output = '';
    divBy3 = !(i % 3);
    divBy5 = !(i % 5);
    if (divBy3)
        output += 'Clever';
    if (divBy5)
        output += 'Push';
    // below statement not needed. printToPage() will always print the Number.
    // if (!(divBy3 || divBy5)) output = ''
    write(i, output);
}
