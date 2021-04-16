// use interface
interface Interf{
    str:string;
    num:number;
}
const varInter: Interf = {
    str:"String",
    num:1
}
function funcInter(v: Interf): string {
    const rt = `hello ${v.str} num ${v.num}`;
    return rt;
}
// use interface
funcInter(varInter)

// use interface, class
interface Interf2 {
    str:string;
    hello(): void;
}
class Cls implements Interf2 {
    str: string = 'str';
    constructor(str: string){
        this.str = str
    }
    hello(): void{
        console.log(`test ${this.str}`);
    }
    public PublicFunc(): void{
        console.log(`public func ${this.hello()}`);
    }
}
// use interface, class : public
const varClass: Cls = new Cls("str1");
varClass.PublicFunc()
// use interface, class : interface
const varClass2: Interf2 = new Cls("str2")
varClass.hello()

interface Interf3 {
    str:string
    num:number
}
interface Interf3Extend extends Interf3{
    boolean:boolean
}
// use interface extend
const varExtend: Interf3Extend = {
    str:"str",
    num:1,
    boolean:true
}

interface Interf4 {
    [index: number]:string;
}
// use interface key:num / value:string
const dumObj: Interf4 = {}
dumObj[1]="str";

interface Interf5 {
    [index: number]:string;
    [index: string]:string;
}
// use interface key:num,string / value:string
const dumObj2: Interf5 = {}
dumObj2[1]="str";
dumObj2.key = "str value";
