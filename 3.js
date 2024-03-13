const pacientes = ['Jose', 'Pedro', 'Maria', 'João', 'Ana', 'Barbara', 'Joana'];

const atendimento = (lista, tipoOperacao, nomePaciente) => {
    if (tipoOperacao === 'Atender') {
        lista.shift();
    }

    if (tipoOperacao === 'Agendar') {
        lista.push(nomePaciente);
    }

    console.log(lista.join(', '));
}

atendimento(pacientes, 'Atender');
atendimento(pacientes, 'Agendar', 'João')