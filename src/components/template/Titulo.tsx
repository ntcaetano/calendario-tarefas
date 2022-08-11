import MenuLateral from './MenuLateral'

interface TituloMenuProps {
    children?: any
    titulo: string
}


export default function Titulo(props: TituloMenuProps) {

    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2 text-2xl">
                {props.children}
            </h1>
            <div>
                <h1 className={`
                font-black text-3xl
                text-gray-900 dark:text-gray-100
            `}>
                    {props.titulo}
                </h1>
            </div>
        </div>
    )
}