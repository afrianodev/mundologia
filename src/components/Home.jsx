import {React, useState} from "react";

export default function Home({handleNext}) {
    return (
        <div>
            <h2 className="text-lg">Elige que quieres hacer:</h2>
            <div className="flex gap-4 mt-5">
                <button onClick={() => handleNext('play')} className="w-[150px] bg-white select-none rounded-xl shadow-lg hover:underline cursor-pointer text-xl">Jugar</button>
                <button onClick={() => handleNext('practice')} className="w-[150px] bg-white select-none rounded-xl shadow-lg hover:underline cursor-pointer text-xl">Practicar</button>
            </div>
        </div>
    )
}