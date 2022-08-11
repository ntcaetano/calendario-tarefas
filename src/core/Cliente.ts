export default class Cliente {
    #id: string
    #titulo: string
    #descricao: string
    #dataTarefa: string
    #tempo: string
    data: string

    constructor(
        titulo: string,
        descricao: string,
        dataTarefa: string,
        tempo: string,
        id: string = null) {

        this.#titulo = titulo
        this.#descricao = descricao
        this.#dataTarefa = dataTarefa
        this.#tempo = tempo
        this.#id = id
    }

    static vazio() {
        return new Cliente('', '', '', '')
    }

    get id() {
        return this.#id
    }

    get titulo() {
        return this.#titulo
    }

    get descricao() {
        return this.#descricao
    }

    get dataTarefa() {
        return this.#dataTarefa
    }

    get tempo() {
        return this.#tempo
    }
    

}