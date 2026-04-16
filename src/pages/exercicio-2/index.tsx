import { useState } from "react";

export default function Ex02() {

  const [count, setCount] = useState<number>(0)
  const [history, setHistory] = useState<number[]>([])
  const [salvar, setSalvar] = useState<boolean>(false)

  const incrementar = () => {
    const novoValor = count + 1
    setCount(novoValor)
    setHistory([...history, novoValor])
  }

   const decrementar = () => {
    const novoValor = count - 1
    setCount(novoValor)
    setHistory([...history, novoValor])
  }

  const resetar = () => {
    setCount(0)
    setHistory([])
    setSalvar(false)
  }

  const salvarHistorico = (valor: number) => {
    setSalvar(true)
  }

  return (
    <>
      <div className="bg-gray-900 px-4 py-24 sm:py-32 lg:overflow-visible lg:px-0 justify-around flex flex-col items-center gap-4">
      <h1>Exercicio 02</h1>
      <p className="text-xl font-bold">Contagem: {count}</p>
      <button className="w-2/5 h-12 bg-sky-700 rounded-2xl transition-colors  hover:bg-sky-900 flex justify-center items-center cursor-pointer" onClick={incrementar}>
        Incrementar
      </button>
      <button className="w-2/5 h-12 bg-green-700 rounded-2xl transition-colors hover:bg-green-900 flex justify-center items-center cursor-pointer" onClick={decrementar}>
        Decrementar 
      </button>
      <button className="w-1/6 h-12 bg-red-700 rounded-2xl transition-colors hover:bg-red-900 flex justify-center items-center cursor-pointer" onClick={resetar}>
        Resetar
      </button>
       <button className="w-1/6 h-12 bg-indigo-700 rounded-2xl transition-colors hover:bg-indigo-900 flex justify-center items-center cursor-pointer" onClick={() => salvarHistorico(count)}>
        Salvar
      </button>
      {salvar && (
        <div>
          <h2>Histórico:</h2>
          <ul>
            {history.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
      </ul>
      </div>
          )}
        </div>
        </>
      )
    }

