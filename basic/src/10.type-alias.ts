interface User5{
    name:string
}

interface Action5{
    do():void
}

//타입 별칭 정하기
type UserAction = User5 & Action5
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