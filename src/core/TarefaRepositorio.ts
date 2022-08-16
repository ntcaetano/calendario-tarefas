import Tarefa from "./Tarefa";

export default interface TarefaRepositorio {
    salvar(tarefa: Tarefa): Promise<Tarefa>
    excluir(Tarefa: Tarefa): Promise<void>
    obterTodos(): Promise<Tarefa[]>
}