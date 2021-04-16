let a: any;
a = "string";
a = 1;

// union
let b: string | number;
b = "string";
b = 1;

// type 선언 union
type StrOrNum = string | number;
function typeTest(arg: StrOrNum):StrOrNum{
    return arg;
}
typeTest("str");

// tuple
let tupleTest: [string, number] = ["str", 1]