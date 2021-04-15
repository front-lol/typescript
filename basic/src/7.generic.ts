function createPromise<T>(x:T,timeout:number){
    return new Promise<T>((resolve,reject)=>{
        setTimeout(()=>{
            resolve(x)
        },timeout)
    })
}

//타입 안정해주면 알아서 생성
createPromise(1,100).then(v=>console.log(v))

createPromise<String>("1",100).then(v=>console.log(v))

function createTuple2<T,U>(v:T,v2:U):[T,U]{
    return [v,v2]
}

const t1 = createTuple2("user1",1000)