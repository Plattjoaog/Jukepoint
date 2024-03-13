const pacientes = ['Jose', 'Pedro', 'Maria', 'João', 'Ana', 'Barbara', 'Joana'];

const agendarPaciente = (lista, nomePaciente) => {
    lista.push(nomePaciente);
    console.log(lista.join(', '));
}

const atenderPaciente = (lista) => {
    lista.shift();
    console.log(lista.join(', '));
}
const cancelamentoAtendimento = (lista, nomePaciente) => {
    lista.splice(lista.indexOf(nomePaciente));
    console.log(lista.join(', '));
}


agendarPaciente(pacientes, 'João')
atenderPaciente(pacientes);
cancelamentoAtendimento(pacientes, 'Jose');