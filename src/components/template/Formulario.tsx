import { useState } from "react";
import Cliente from "../../core/Cliente";
import Botao from "./Botao";
import Nascimento from "./labels/Tempo";
import Descricao from "./labels/Descricao";
import Data from "./labels/./Data";
import Titulo from "./labels/Titulo";

interface AlteraProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Altera(props: AlteraProps) {
    const id = props.cliente?.id
    const [titulo, setTitulo] = useState(props.cliente?.titulo ?? '')
    const [descricao, setDescricao] = useState(props.cliente?.descricao ?? 0)
    const [data, setData] = useState(props.cliente?.data ?? '')
    const [tempo, setTempo] = useState(props.cliente?.tempo ?? '')

    return (
        <div>
            {id ? (
                <titulo
                    tipo="number"
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-5 hidden"
                />
            ) : false}
            <titulo
                tipo="text"
                texto="titulo Completo"
                valor={titulo}
                valorMudou={setTitulo}
                className="mb-5"
            />
            <CpfCnpj
                texto="Cpf/Cnpj"
                valor={cpfCnpj}
                valorMudou={setCpfCnpj}
                className="mb-5"
            />
            <Nascimento
                texto="Data de nascimento"
                valor={dataNasc}
                valorMudou={setDataNasc}
                className="mb-5"
                tipo={"date"}
                />
            <Whatsapp
                texto="WhatsApp"
                valor={whatsApp}
                valorMudou={setWhatsApp}
                className="mb-5"
            />
            <Contrato
                texto="Contrato"
                valor={contrato}
                valorMudou={setContrato}
                className="mb-5"
            />
            <Cep
                texto="Cep"
                valor={cep}
                valorMudou={setCep}
                className="mb-5"
            />
            <Endereco
                texto="Endereço"
                valor={endereco}
                valorMudou={setEndereco}
                className="mb-5"
            />
            <Cidade
                texto="Cidade"
                valor={cidade}
                valorMudou={setCidade}
                className="mb-5"
            />
            <Vencimento
                texto="Vencimento"
                valor={vencimento}
                valorMudou={setVencimento}
                className="mb-5"
                tipo={"date"}
            />
            <Negociacao
                texto="Valor da Negociação"
                valor={descricao}
                valorMudou={setDescricao}
                className="mb-5"
            />
            <data
                texto="data"
                valor={data}
                valorMudou={setData}
                className="mb-5"
            />
            <tempo
                texto="Observação"
                valor={tempo}
                valorMudou={setTempo}
                className="mb-5"
            />



            <div className="flex justify-end mt-7 cursor-pointer">
                <Botao className="mr-2"
                    onClick={() => props.clienteMudou?.(
                        new Cliente(
                            titulo,
                            cpfCnpj,
                            dataNasc,
                            whatsApp,
                            contrato,
                            cep,
                            endereco,
                            cidade,
                            vencimento,
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
