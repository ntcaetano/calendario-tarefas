interface PesquisaProps {
    className?: string
    children: any
}

export default function Pesquisa(props: PesquisaProps) {

    return(
        <div >
            <label htmlFor="search">
            <input
            type={'text'}
            placeholder="Pesquise aqui"
            // onChange={(e) => setSearch(e.target.value)}
            className={`
                    w-80
                    border border-blue-500 rounded-lg
                    focus:outline-none bg-gray-200 px-4 py-2
                    dark:bg-gray-700
                `}/>
            </label>
        </div>
    )

}