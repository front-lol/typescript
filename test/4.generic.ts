class GeneClass<T> {
    private _str: T;

    constructor(str:T){
        this._str = str
    }
}
const varGeneClass = new GeneClass("string");
new GeneClass<string>("STR");

// generic
interface GeneInterface{
    str: string;
    num: number;
}
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key];
}
function setProperty<T, K extends keyof T>(obj: T, key: K, value:T[K]): void {
    obj[key] = value;
}
const varGeneInterface: GeneInterface = {
    str:"string",
    num:1
}
console.log(getProperty(varGeneInterface, 'str'));
setProperty(varGeneInterface, 'str', 'other string');
console.log(getProperty(varGeneInterface, 'str'));
