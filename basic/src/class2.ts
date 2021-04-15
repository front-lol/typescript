interface Person{
    name:string
    say(message:string):void
}

interface Programmer{
    writeCode(code:string):string
}

abstract class Korean implements Person {
    
    public abstract jumin:number
    
    constructor(public name:string){
        
    }
    
    say(msg:string){        
    }
    
    abstract loveKimchi():void
}

//다중인터페이스 가능
class KoreanPro extends Korean implements Programmer{
    constructor(public name:string,public jumin:number){
        //부모 생성자 호출 필요
        super(name)
    }

    loveKimchi(): void {
        throw new Error("Method not implemented.")
    }

    say(message:string): void {
        console.log(message)
    }
    writeCode(code: string): string {
        return code
    }
}

const jay = new KoreanPro('jay',20)