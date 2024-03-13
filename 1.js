const nomes = ['João Gabriel', 'Isabelle', 'João Alonso', 'Cleo', 'Loreenzo Gabriel', 'Mateo Augusto', 'Nescau', ' João Miguel', 'João Nestor']

const seperarGrupos = (lista, tamanho) => {
    const resultado = [];
    let numeroGrupo = 1;

    for (let i = 0; i < lista.length; i += tamanho) {
        const grupo = `Grupo ${numeroGrupo}: ${lista.slice(i, (i + tamanho)).join(', ')}`;
        console.log(grupo);
        numeroGrupo++;

    }
}
seperarGrupos(nomes, 4);