// basic class
class Class1 {
    str: string;
    num: number;

    constructor(str: string, num:number){
        this.str = str;
        this.num = num;
    }
}
const varClass1 = new Class1("STRING", 1);

// private class
class PrivaClass {
    private _str: string = 'default str';
    private _num: number = 0;
    constructor(str:string, num: number){
        this._str = str;
        this._num = num;
    }
    rtfunc(): void{
        console.log(this._str)
        console.log(this._num)
    }
    getStr(): string{
        return this._str;
    }
    setStr(str: string){
        this._str = str;
    }
}
const varPrivaClass: PrivaClass = new PrivaClass("string", 1);
varPrivaClass.rtfunc();
console.log(varPrivaClass.getStr());
varPrivaClass.setStr("String")

// protected class
class ProtClass {
    protected str: string = "default"
    constructor() {
    }
    getStr(): string{
        return this.str;
    }
    setStr(str: string){
        this.str = str;
    }
}
class Child extends ProtClass{
    constructor(){
        super();
    }
}
const varProtClass: Child = new Child();
varProtClass.setStr('set protected');
console.log(varProtClass.getStr())
