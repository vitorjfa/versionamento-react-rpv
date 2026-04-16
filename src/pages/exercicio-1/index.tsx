import { useState } from "react"
import { text } from "stream/consumers"



export default function Ex01() {

    const [tema, setTema] = useState<boolean>(false)

    return (
        <>
            <div className={`flex flex-col justify-center items-center min-h-screen gap-20
                ${tema ? "bg-gray-300" : "dark:bg-gray-900"}`}>

                <h1 className={`${tema ? "text-gray-900" : "dark:text-zinc-100"}`}>Exercicio 01</h1>
                <button className={`w-2/5 h-12 border-2 rounded-2xl transition-colors flex justify-center items-center cursor-pointer ${tema
                ? "bg-gray-900 text-zinc-100 hover:bg-gray-200 hover:text-zinc-900"
                : "bg-gray-200 text-zinc-900 hover:bg-gray-700 hover:text-zinc-300"}`}
                
                onClick={() => setTema(!tema)}> {tema ? "Modo claro ☀️" : "Modo escuro 🌙"}</button>
            </div>
        </>
    )

}