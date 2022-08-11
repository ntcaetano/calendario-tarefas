import { useEffect, useState } from "react"
import ColecaoTarefa from "../backend/db/ColecaoTarefa"
import Tarefa from "../core/Tarefa"
import TarefaRepositorio from "../core/TarefaRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useTarefas() {
    const repo: TarefaRepositorio = new ColecaoTarefa()

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    const [tarefa, setTarefa] = useState<Tarefa>(Tarefa.vazio())
    const [tarefas, setTarefas] = useState<Tarefa[]>([])

    useEffect(obterTodas, [])

    function obterTodas() {
        repo.obterTodos().then(tarefas => {
            setTarefas(tarefas)
            exibirTabela()
        })
    }

    function selecionarTarefa(tarefa: Tarefa) {
        setTarefa(tarefa)
        exibirFormulario()
    }

    async function excluirTarefa(tarefa: Tarefa) {
        await repo.excluir(tarefa)
        obterTodas()
    }

    function novaTarefa() {
        setTarefa(Tarefa.vazio())
        exibirFormulario()
    }

    async function salvarTarefa(tarefa: Tarefa) {
        await repo.salvar(tarefa)
        obterTodas()
    }

    return {
        tarefa,
        tarefas,
        novaTarefa,
        salvarTarefa,
        excluirTarefa,
        selecionarTarefa,
        obterTodas,
        tabelaVisivel,
        exibirTabela
    }
}