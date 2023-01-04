const progressoDaMaratona = (dias) => {
    let progresso = 0

    for (let i = 0; i < dias.length; i++) {
        if(dias[i] < dias[i + 1]){
            progresso++
        }
    }
    console.log(progresso);
}

progressoDaMaratona([5,6,4,7,8,10]) // 4
progressoDaMaratona([5,5]) // 0