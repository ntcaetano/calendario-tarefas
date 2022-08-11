import { useState } from "react";
import Tarefa from "../../core/Tarefa";
import Botao from "./Botao";
import Descricao from "./labels/Descricao";
import Data from "./labels/Data";
import Titulo from "./labels/Titulo";
import Tempo from "./labels/Tempo";

interface AlteraProps {
    tarefa: Tarefa
    tarefaMudou?: (tarefa: Tarefa) => void
    cancelado?: () => void
}

export default function Altera(props: AlteraProps) {
    const id = props.tarefa?.id
    const [titulo, setTitulo] = useState(props.tarefa?.titulo ?? '')
    const [descricao, setDescricao] = useState(props.tarefa?.descricao ?? '')
    const [data, setData] = useState(props.tarefa?.data ?? '')
    const [tempo, setTempo] = useState(props.tarefa?.tempo ?? '')

    return (
        <div>
            {id ? (
                <Titulo
                    tipo="number"
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-5 hidden"
                />
            ) : false}
            <Titulo
                tipo="text"
                texto="Título"
                valor={titulo}
                valorMudou={setTitulo}
                className="mb-5"
            />
             <Data
                texto="Data da tarefa"
                valor={data}
                valorMudou={setData}
                className="mb-5"
                tipo={"datetime-local"}
            />
            <Tempo
                tipo="text"
                texto="Duração da tarefa"
                valor={tempo}
                valorMudou={setTempo}
                className="mb-5"
            />
            <Descricao
                tipo={"text"} 
                texto="Descrição"
                valor={descricao}
                valorMudou={setDescricao}
                className="mb-5"          
            />



            <div className="flex justify-end mt-7 cursor-pointer">
                <Botao className="mr-2"
                    onClick={() => props.tarefaMudou?.(
                        new Tarefa(
                            titulo,
                            descricao,
                            data,
                            tempo,
                            id
                        ))}
                        >
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}



