import firebase from "../config";
import Tarefa from "../../core/Tarefa";
import TarefaRepositorio from "../../core/TarefaRepositorio";

export default class ColecaoTarefa implements TarefaRepositorio {

    #conversor = {
        toFirestore(tarefa: Tarefa) {
            return {
                titulo: tarefa.titulo,
                descricao: tarefa.descricao,
                dataTarefa: tarefa.dataTarefa,
                tempo: tarefa.tempo,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Tarefa {
            const dados = snapshot.data(options)
            return new Tarefa(
                dados.titulo, 
                dados.descricao,
                dados.dataTarefa, 
                dados.tempo, 
                snapshot.id
            )}
    }
    
    async salvar(tarefa: Tarefa): Promise<Tarefa> {
        if(tarefa?.id) {
            await this.colecao().doc(tarefa.id).set(tarefa)
            return tarefa
        } else {
            const docRef = await this.colecao().add(tarefa)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(tarefa: Tarefa): Promise<void> {
        return this.colecao().doc(tarefa.id).delete()
    }

    async obterTodos(): Promise<Tarefa[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase
            .firestore().collection('tarefas')
            .withConverter(this.#conversor)
    }
}