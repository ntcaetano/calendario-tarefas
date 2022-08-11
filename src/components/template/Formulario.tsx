import { useState } from "react";
import Cliente from "../../core/Cliente";
import Botao from "./Botao";
import Descricao from "./labels/Descricao";
import Data from "./labels/Data";
import Titulo from "./labels/Titulo";
import Tempo from "./labels/Tempo";

interface AlteraProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Altera(props: AlteraProps) {
    const id = props.cliente?.id
    const [titulo, setTitulo] = useState(props.cliente?.titulo ?? '')
    const [descricao, setDescricao] = useState(props.cliente?.descricao ?? '')
    const [data, setData] = useState(props.cliente?.data ?? '')
    const [tempo, setTempo] = useState(props.cliente?.tempo ?? '')

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
                texto="titulo Completo"
                valor={titulo}
                valorMudou={setTitulo}
                className="mb-5"
            />
            <Data
                tipo="date"
                texto="Data da tarefa"
                valor={data}
                valorMudou={setData}
                className="mb-5"
            />
            <Descricao
                tipo={"text"} 
                texto="Descricao da tarefa"
                valor={descricao}
                valorMudou={setDescricao}
                className="mb-5"          
            />
            <Tempo
                tipo="text"
                texto="Tempo da tarefa"
                valor={tempo}
                valorMudou={setTempo}
                className="mb-5"
            />



            <div className="flex justify-end mt-7 cursor-pointer">
                <Botao className="mr-2"
                    onClick={() => props.clienteMudou?.(
                        new Cliente(
                            titulo,
                            descricao,
                            data,
                            tempo,
                            id
                        ))}
                        >
                    {id ? 'Alterar' : 'Enviar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}
