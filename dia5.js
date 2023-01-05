const contadorDeMeia = (meias) => {
    const arr = meias.split('')
    let par = 0

   const verificador = arr.forEach(item => {
    if(item === 'A'){
        par ++
    }else if(item === 'B'){
        par++
    }else if(item === 'C'){
        par++
    }
   })

    console.log(parseInt(par / 2));
}


contadorDeMeia('ABBCACCCC')//4
contadorDeMeia('ABABC')//2
contadorDeMeia('AA')//1
contadorDeMeia('')//0
contadorDeMeia('CCCCCCC')//3