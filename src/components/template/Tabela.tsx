import Tarefa from "../../core/Tarefa"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps {
    tarefas: Tarefa[]
    tarefaSelecionada?: (tarefa: Tarefa) => void
    tarefaExcluida?: (tarefa: Tarefa) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.tarefaExcluida || props.tarefaSelecionada
    
    function renderizarCabecalho() {
        return (
            <tr>  
                <th className="text-left p-4">Titulo</th>
                <th className="text-left p-4">Data</th>
                <th className="text-left p-4">Tempo</th>
                <th className="text-left p-4">Descrição</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.tarefas?.map((tarefa, i) => {
            return (
                <tr key={tarefa.id}
                    className={`${i % 2 === 0 ? 'bg-blue-300' : 'bg-blue-100'}`}>
                    <td className="text-left p-4">{tarefa.titulo}</td>
                    <td className="text-left p-4">{tarefa.dataTarefa}</td>
                    <td className="text-left p-4">{tarefa.tempo}</td>
                    <td className="text-left p-4">{tarefa.descricao}</td>
                    {exibirAcoes ? rederizarAcoes(tarefa) : false}
                </tr>
            )
        })
    }

    function rederizarAcoes(tarefa: Tarefa) {
        return (
            <td className="flex justify-center">
                {props.tarefaSelecionada ? (
                    <button onClick={() => props.tarefaSelecionada?.(tarefa)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-blue-50
                    `}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.tarefaExcluida ? (
                    <button onClick={() => props.tarefaExcluida?.(tarefa)} className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-blue-50
                    `}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl">
            <thead className={`
                text-gray-200
                bg-gradient-to-r from-blue-900 to-blue-600
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody className="dark:text-black">
                {renderizarDados()}
            </tbody>
        </table>
    )

}