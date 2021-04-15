interface User{

}
interface Project{

}

class Cart{
    //접근제한자 사용가능
    //protected는 객체안에서랑 상속할때 사용가능
    protected user:User
    //private 객체에서만 사용가능
    private store:object
    constructor(user:User){
        this.user = user
        this.store = {}
    }
    put(id:string,product:Project){
        this.store[id]=product
    }
    get(id){
        return this.store[id]
    }
}

class PromotionCart extends Cart{
    addPromotion(){
        this.user
    }
}

const cart1 = new PromotionCart({name:'john'})
const cartJohn = new Cart({name:'john'})
const cartJay = new Cart({name:'jay'})