//interface는 빌드하면 지워지기 때문에 아무리 많아도 상관없다. 데이터 validation만 한다

interface TV{
    turnOn():void
    turnOff():boolean
}

const myTV:TV ={
    turnOn(){

    },
    turnOff(){
        return true
    }
}

function tryTurnOn(tv:TV){
    tv.turnOn()
}

tryTurnOn(myTV)

//? 물음표는 변수가 없어도 동작하도록 해줌
interface Cell{
    row:number
    col:number
    piece?:Piece
}

interface Piece{
    move(from:Cell,to:Cell):boolean
}

function createBoard(){
    const cells:Cell[]=[]
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            cells.push({
                row,
                col
            })
        }
    }
    return cells
}

const board = createBoard()
board[0].piece={
    move(from:Cell,to:Cell){
        return true;
    }
}