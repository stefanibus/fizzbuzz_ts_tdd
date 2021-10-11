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
Object.defineProperty(exports, "__esModule", { value: true });
exports.five = void 0;
var CleverRule = /** @class */ (function () {
    function CleverRule() {
    }
    CleverRule.prototype.matches = function (number) {
        return number % 3 === 0;
    };
    CleverRule.prototype.getReplacement = function () {
        return ' Clever';
    };
    return CleverRule;
}());
var PushRule = /** @class */ (function () {
    function PushRule() {
    }
    PushRule.prototype.matches = function (number) {
        return number % 5 === 0;
    };
    PushRule.prototype.getReplacement = function () {
        return ' Push';
    };
    return PushRule;
}());
var CleverPushRule = /** @class */ (function () {
    function CleverPushRule() {
    }
    CleverPushRule.prototype.matches = function (number) {
        return number % 15 === 0;
    };
    CleverPushRule.prototype.getReplacement = function () {
        return ' CleverPush';
    };
    return CleverPushRule;
}());
var NumberListReplacer = /** @class */ (function () {
    function NumberListReplacer() {
        this.rules = [];
        this.printOnePossibleExampleToPage = function (range, printThisToPage, startDemo) {
            startDemo('Five ==><br>Object Oriented: new rules can be added statically. <br>Solution still seems a bit too bloated. <br>Length of array is dynamic; <br>unit tests;<br>  es6 Modulo; <br>current three rules are: 3=Clever, 5=Push, 15=ExtraThirdRule; <br>');
            if (range > 0 && range <= 1000) {
                var cleverPush = new NumberListReplacer();
                cleverPush.addRule(new CleverPushRule());
                cleverPush.addRule(new CleverRule());
                cleverPush.addRule(new PushRule());
                var result = cleverPush.generate(range);
                printThisToPage(0, result.join(' <br> '));
                return result;
            }
            else {
                alert('the Number for the range must be between 1 and 1000');
            }
        };
    }
    NumberListReplacer.prototype.addRule = function (rule) {
        this.rules.push(rule);
    };
    NumberListReplacer.prototype.generate = function (number) {
        var output = [];
        for (var i = 1; i <= number; i++) {
            output.push(this.getReplacement(i));
        }
        return output;
    };
    NumberListReplacer.prototype.getReplacement = function (number) {
        var e_1, _a;
        try {
            for (var _b = __values(this.rules), _c = _b.next(); !_c.done; _c = _b.next()) {
                var rule = _c.value;
                if (rule.matches(number)) {
                    return number + rule.getReplacement();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return String(number);
    };
    return NumberListReplacer;
}());
var five = new NumberListReplacer();
exports.five = five;
