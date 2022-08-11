import Botao from "../components/template/Botao";
import Formulario from "../components/template/Formulario";
import Layout from "../components/template/Layout";
import Tabela from "../components/template/Tabela";

import useClientes from "../hooks/useClientes";

export default function Home() {

  const {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()


  return (

    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-700 to-blue-400
        text-white
      `}>
      <Layout titulo="Tarefas do dia">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4"
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}

