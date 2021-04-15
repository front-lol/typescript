//반환값 타입 지정 가능
function add(x:number, y:number):number{
    return x+y
}

const result = add(1,3)

//?는 없어도 동작하도록 해줌
//=는 기본값 세팅
function buildUserInfo(name="-", email="-"){
    return{name,email}
}

const user = buildUserInfo()

const add2 = (a:number, b:number):number=>a+b

interface Storage{
    a:string
}
interface ColdStorage{
    b:string
}

//함수 오버로딩
function store(type:"통조림"):Storage
function store(type:"아이스크림"):ColdStorage

function store(type:"통조림"|"아이스크림"){
    if(type=="통조림"){
        return{a:"통조림"}
    }else if(type=="아이스크림"){
        return{b:"아이스크립"}
    }else{
        throw new Error('unsupported type')
    }
}

const s = store('아이스크림')
