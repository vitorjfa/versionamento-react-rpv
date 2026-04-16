import { useState } from "react";
import { text } from "stream/consumers";

export default function Ex01() {
  const [tema, setTema] = useState<boolean>(false);

  return (
    <>
      <div
        className={`flex flex-col justify-center items-center min-h-screen gap-20
                ${tema ? "bg-gray-300" : "bg-black"}`}
      >
        <h1 className={`${tema ? "text-black" : "text-zinc-100"}`}>
          Exercicio 01
        </h1>

        <button
          className={`flex justify-center items-center cursor-pointer ${tema ? "text-black" : "text-zinc-100"}`}
          onClick={() => setTema(!tema)}
        >
          Trocar Tema
        </button>
      </div>
    </>
  );
}
