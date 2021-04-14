//중간에 enum 들어가면 순서가 꼬여서 문제가 생길 수 있기 때문에 숫자나 문자열로 정의해주는게 좋다
enum StarbucksGrade{
    WELCOME=0,
    GREEN=1,
    GOLD="GOLD"
}

function getDiscount(v:StarbucksGrade):number{
    switch(v){
        case StarbucksGrade.WELCOME:
            return 0;
        case StarbucksGrade.GREEN:
            return 5;
        case StarbucksGrade.GOLD:
            return 10;
    }
}