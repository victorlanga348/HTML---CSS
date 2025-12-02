const tarefas = document.querySelector('.tarefas')
const button = document.querySelector('.btn')
const TarefasGuardadas = []
const TarefasModificadas = []
const lista = document.querySelector('.Mlist')

function GuardarTarefa() {
    TarefasGuardadas.push({
        tarefas: tarefas.value,
        concluida: false
    })
    
}

function MostrarTarefas() {
    let Novali = ''
    TarefasGuardadas.forEach((item, posicao) => {
        Novali = Novali + `<li class="list ${item.concluida && "concluida"}">
                                <img src="imagens/checked.png" alt="Concluir-tarefa" onclick="concluir(${posicao})">
                                <p>${item.tarefas}</p>
                                <img src="imagens/trash.png" alt="Apagar-tarefa" onclick="deletar(${posicao})">
                            </li>`
    })
    lista.innerHTML = `${Novali}`
}

button.addEventListener('click', function(){
    if (tarefas.value == 0) {
        alert('[ERRO] Adicione uma tarefa!')
        return
    }
    GuardarTarefa()
    MostrarTarefas()
    tarefas.value = ``
    tarefas.focus()
})

function deletar(posicao) {
    TarefasGuardadas.splice(posicao, 1)
    MostrarTarefas()
}

function concluir(posicao) {
    TarefasGuardadas[posicao].concluida = !TarefasGuardadas[posicao].concluida

    MostrarTarefas()
}