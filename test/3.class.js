var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// basic class
var Class1 = /** @class */ (function () {
    function Class1(str, num) {
        this.str = str;
        this.num = num;
    }
    return Class1;
}());
var varClass1 = new Class1("STRING", 1);
// private class
var PrivaClass = /** @class */ (function () {
    function PrivaClass(str, num) {
        this._str = 'default str';
        this._num = 0;
        this._str = str;
        this._num = num;
    }
    PrivaClass.prototype.rtfunc = function () {
        console.log(this._str);
        console.log(this._num);
    };
    PrivaClass.prototype.getStr = function () {
        return this._str;
    };
    PrivaClass.prototype.setStr = function (str) {
        this._str = str;
    };
    return PrivaClass;
}());
var varPrivaClass = new PrivaClass("string", 1);
varPrivaClass.rtfunc();
console.log(varPrivaClass.getStr());
varPrivaClass.setStr("String");
// protected class
var ProtClass = /** @class */ (function () {
    function ProtClass() {
        this.str = "default";
    }
    ProtClass.prototype.getStr = function () {
        return this.str;
    };
    ProtClass.prototype.setStr = function (str) {
        this.str = str;
    };
    return ProtClass;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super.call(this) || this;
    }
    return Child;
}(ProtClass));
var varProtClass = new Child();
varProtClass.setStr('set protected');
console.log(varProtClass.getStr());
