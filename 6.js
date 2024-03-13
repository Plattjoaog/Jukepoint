const frutas = ['Banana', 'Maça', 'Abacaxi', 'Pera', 'Uva'];

const arrayInverso = frutas.reverse().join(', ');

console.log(arrayInverso);

frutas.shift();
frutas.pop();
frutas.push('Melão');

console.log(frutas)
