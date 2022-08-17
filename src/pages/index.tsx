import Botao from "../components/template/Botao";
import Formulario from "../components/template/Formulario";
import Layout from "../components/template/Layout";
import Tabela from "../components/template/Tabela";
import Pesquisa from "../components/template/Pesquisa";

import useTarefas from "../hooks/useTarefas";

export default function Home() {

  const {
    tarefa,
    tarefas,
    novaTarefa,
    salvarTarefa,
    selecionarTarefa,
    excluirTarefa,
    tabelaVisivel,
    exibirTabela
  } = useTarefas()


  return (

    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-700 to-blue-400
        text-white
      `}>
      <Layout titulo="Tarefas do dia">
        {tabelaVisivel ? (
          <>
            <div className={`flex justify-between`}>
              <Pesquisa 
              className={`|
              `}>
              </Pesquisa>
              <Botao className={`
              font-black text-1xl
              text-gray-100
              mb-4
              `}
                onClick={novaTarefa}>
                Adicionar Tarefa
              </Botao>
            </div>
            <Tabela tarefas={tarefas}
              tarefaSelecionada={selecionarTarefa}
              tarefaExcluida={excluirTarefa}
            />
          </>
        ) : (
          <Formulario
            tarefa={tarefa}
            tarefaMudou={salvarTarefa}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}

