//인터페이스도 제네릭 가능
interface DB<T>{
    add(v:T):void
    get():T
}

interface JSONSerialier{
    serialize():string
}

//클레스도 제네릭 사용가능
//제네릭 구현하면 클라스도 제네릭 선언 필요
class LocalDB<T extends JSONSerialier> implements DB<T>{
    constructor(private localStorageKey:string){

    }
    add(v:T){
        localStorage.setItem(this.localStorageKey,v.serialize())
    }
    get():T{
        const v = localStorage.getItem(this.localStorageKey)
        return (v) ? JSON.parse(v) : null
    }
}

// interface User extends JSONSerialier{name:string}

// const userDb = new LocalDB<User>('user')
// userDb.add({name:'jay'})
// const userA = userDb.get()
// userA.name


//조건부타입
interface Veigtable{
    v:string
}

interface Meat {
    m:string
}

//제네릭 조건부로 설정가능
interface Cart2<T>{
    getItem():T extends Veigtable ? Veigtable : Meat
}

const cart11:Cart2<Veigtable>={
    getItem(){
        return {
            v:''
        }
    }
}