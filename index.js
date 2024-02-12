var textoPrincipal = document.querySelector('h1')

const imagensPorNumero = {
    1: 'midia/1.png',
    2: 'midia/2.png',
    3: 'midia/3.png',
    4: 'midia/4.png',
    5: 'midia/5.png',
    6: 'midia/6.png'
}

function facesDado(imagensPorNumero) {
    var numero1 = Math.floor(Math.random() * 6) + 1
    var numero2 = Math.floor(Math.random() * 6) + 1

    return {
        numero1: numero1,
        numero2: numero2,
        imagem1: imagensPorNumero[numero1],
        imagem2: imagensPorNumero[numero2]
    }
}

const resultadoFaces = facesDado(imagensPorNumero);

document.querySelector('img') .setAttribute('src', resultadoFaces.imagem1)
document.querySelector('.dado2 img') .setAttribute('src', resultadoFaces.imagem2)

if (resultadoFaces.numero1 > resultadoFaces.numero2 ){
    textoPrincipal.textContent = '🥳 Player 1 ganhou!'
} else if (resultadoFaces.numero2 > resultadoFaces.numero1) {
    textoPrincipal.textContent = 'Player 2 ganhou! 🥳'
} else {
    textoPrincipal.textContent = 'Empate! 😐'
}




