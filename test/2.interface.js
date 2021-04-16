var varInter = {
    str: "String",
    num: 1
};
function funcInter(v) {
    var rt = "hello " + v.str + " num " + v.num;
    return rt;
}
// use interface
funcInter(varInter);
var Cls = /** @class */ (function () {
    function Cls(str) {
        this.str = 'str';
        this.str = str;
    }
    Cls.prototype.hello = function () {
        console.log("test " + this.str);
    };
    Cls.prototype.PublicFunc = function () {
        console.log("public func " + this.hello());
    };
    return Cls;
}());
// use interface, class : public
var varClass = new Cls("str1");
varClass.PublicFunc();
// use interface, class : interface
var varClass2 = new Cls("str2");
varClass.hello();
// use interface extend
var varExtend = {
    str: "str",
    num: 1,
    boolean: true
};
// use interface key:num / value:string
var dumObj = {};
dumObj[1] = "str";
// use interface key:num,string / value:string
var dumObj2 = {};
dumObj2[1] = "str";
dumObj2.key = "str value";
