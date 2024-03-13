const nomes = ['Volvo', 'Ranger', 'Hilux', 'Corola', 'Fusion', 'Chevete', 'Brasilia'];
const posicao = 3;

const Grupodecarros = (carros, posicao) => {
    console.log(carros.splice(posicao, 3).join(' - '));
}

Grupodecarros(nomes, posicao);