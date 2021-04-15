interface User{
    name:string
}

interface Action{
    do():void
}

//타입 별칭 정하기
type UserAction = User & Action
function createUserAction():UserAction{
    return{
        do(){},
        name:''
    }
}

type StringOrNumber = string | number
type Arr<T> = T[]
type P<T> = Promise<T>

type User2={
    name:string
}

class UserImpl implements User2{
    name="asdf"
}

type UserState = "PENDING" | "APPROVED" | "REJECTED"

function checkUser(user:User2):UserState{
    return "APPROVED"
}