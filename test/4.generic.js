var GeneClass = /** @class */ (function () {
    function GeneClass(str) {
        this._str = str;
    }
    return GeneClass;
}());
var varGeneClass = new GeneClass("string");
new GeneClass("STR");
function getProperty(obj, key) {
    return obj[key];
}
function setProperty(obj, key, value) {
    obj[key] = value;
}
var varGeneInterface = {
    str: "string",
    num: 1
};
console.log(getProperty(varGeneInterface, 'str'));
setProperty(varGeneInterface, 'str', 'other string');
console.log(getProperty(varGeneInterface, 'str'));
