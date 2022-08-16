import { useState } from "react";

interface PesquisaProps {
    className?: string

}

export default function Pesquisa(props: PesquisaProps) {
    // const [data, setData] = useState([]);

    // const handleInputChange = (e) => {
    //     e.preventeDefatult();
    //     const {value} = e.target;
    //     if(!value) return;
        
    //     const url = `link...`

    //     fetch(url)
    //         .then((response) => response.json())
    //         .then(({data}) => setData(data));
        
    // };

    return(
        <div>
            <label htmlFor="search"></label>
            <input
            placeholder="Pesquise aqui"
            //onChange={handleInputChange}
            className={`
                    w-full
                    border border-blue-500 rounded-lg
                    focus:outline-none bg-gray-200 px-4 py-2
                    dark:bg-gray-700
                `}/>
        </div>
    )

}