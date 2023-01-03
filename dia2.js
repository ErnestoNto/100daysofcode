const findNemo = (frase) => {
    const arr = frase.split(' ')

    const nemoFilllter = (ele) => ele === 'nemo'

    if(arr.includes('nemo')){
        return console.log(`O nemo está na posição ${arr.findIndex(nemoFilllter) + 1}`);
    }else{
        return console.log('Não encontrei o nemo :(');
    }
}

findNemo('Encontrei o peixe chamado nemo') // O nemo está na posição 5
findNemo('Encontrei o peixe chamado dory') // Não encontrei o nemo :(