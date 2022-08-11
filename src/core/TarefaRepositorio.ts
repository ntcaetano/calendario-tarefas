import Tarefa from "./Tarefa";

export default interface ClienteRepositorio {
    salvar(cliente: Tarefa): Promise<Tarefa>
    excluir(Tarefa: Tarefa): Promise<void>
    obterTodos(): Promise<Tarefa[]>
}