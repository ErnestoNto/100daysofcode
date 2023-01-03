// Bora um Churras

const espetos = [
    '--oo-oo-oo--',
    '--ox--oo-xx',
    '--o-ooooo-o',
    '--ox-ox-ox--',
    '--oo-oo-oo---'
]

const espetoVerificator = () => {
    let espetoVegan = 0
    let espetoNoVegan = 0

    espetos.forEach(espeto => {
        if(espeto.includes('x')){
            espetoNoVegan++
        }else{
            espetoVegan++
        }
    })
    console.log(espetoVegan, espetoNoVegan);
}

espetoVerificator() //3,2