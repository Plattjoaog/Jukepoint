const usuarios = [
    {
        nome: 'João',
        pets: ['Max'],
    },
    {
        nome: 'Ana',
        pets: ['Pingo', 'Lulu'],

    },
    {
        nome: 'Beatriz',
        pets: ['Lessie'],
    },
    {
        nome: 'Carlos',
        pets: ['Farofa', 'Salsicha', 'Batata'],
    },
    {
        nome: 'Antonio',
        pets: ['Naninha'],
    },
];

const buscarDonoPet = (lista, nomepet) => {
    let usuariosEncontrado;

    for (const usuario of lista) {
        if (usuario.pets.includes(nomepet)) {
            usuariosEncontrado = usuario;
        }
    }

    if (usuariosEncontrado) {
        console.log(`O dono (a) do (a) ${nomepet} é o (a)  ${usuariosEncontrado.nome} `);

    } else {
        console.log(`Que pena ${nomepet}, não encontramos seu dono(a)`);
    }
}

buscarDonoPet(usuarios, 'João');