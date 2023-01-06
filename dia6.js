const numeroPrimo = (num) => {
    if(!isPrin(num)){
        num ++
        numeroPrimo(num)
    }else{
        console.log(`${num} é primo`);
    }
}

const isPrin = (num) => {
    let c = 0

    if(num < 2){
        return false
    }

    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }

    if(num > 1){
        return true
    }
}

numeroPrimo(12)// 13
numeroPrimo(8)// 11
numeroPrimo(25)// 29
numeroPrimo(100)// 101