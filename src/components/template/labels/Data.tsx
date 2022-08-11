import React, { InputHTMLAttributes} from "react"

interface DataProps extends InputHTMLAttributes<HTMLInputElement>{
    tipo: 'datetime-local'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Vencimento(props: DataProps) {

    // const 

    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input
                type={props.tipo ?? 'datetime-local'}  
                value={props.valor}
                min="2022-01-01T00:00" max="2022-12-01T00:00"
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                    w-full
                    border border-blue-500 rounded-lg
                    focus:outline-none bg-gray-200 px-4 py-2
                    dark:bg-gray-700
                    ${props.somenteLeitura ? '' : 'focus:bg-white dark:focus:bg-gray-600'}
                `}
             />
        </div>
    )
}