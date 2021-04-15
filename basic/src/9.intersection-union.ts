interface User3{
    name:string
}

interface Action{
    do():void
}

//리턴값을 intersection으로 두개로 가능
function createUserAction2(u:User3,a:Action):User3 & Action{
    return {...u,...a}
}

const u = createUserAction2({name:'jay'},{do(){}})


//union
function compare(x:string|number,y:string|number){
    if(typeof x==='number' && typeof y ==='number'){
        return x===y?0: x>y ? 1 : -1
    }
    if(typeof x==='string' && typeof y ==='string'){
        return x.localeCompare(y)
    }
    throw Error('not supported')
}

const v = compare(1,2)
console.log([3,2,1].sort(compare))


//객체에 대해서 조건걸때
function isAction(v:User|Action): v is Action{
    return (<Action>v).do !== undefined
}

function process(v:User | Action){
    if(isAction(v)){
        v.do()
    }else{
        console.log(v.name)
    }
}