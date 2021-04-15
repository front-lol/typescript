interface Props{
    name:string
    //배열에 인덱스 걸기
    [key:string]:string
}

const p:Props={
    name:"aas",
    a:'d',
    b:'e',
    c:'3',
    0:'d',
    1:'t'
}

let keys:keyof Props

interface User{
    name:string,
    age:number,
    hello(msg:string):void
}

let keysOfUser: keyof User
keysOfUser = "age"

let helloMethod:User["hello"]
helloMethod = function(msg:string){
    
}