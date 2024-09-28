import {React, useState} from "react";

export default function Play({handleNext}) {
    return (
        <div>
            <h2 className="text-lg">¿Como quieres jugar?</h2>
            <div className="flex gap-2 mt-5">
                <button className="w-[150px] bg-white select-none rounded-xl shadow-lg hover:underline cursor-pointer text-xl" onClick={()=>{alert('Lo sentimos, estamos actualizando la página. Intentalo otro día.')}}>Paises</button>
                <button className="w-[150px] bg-white select-none rounded-xl shadow-lg hover:underline cursor-pointer text-xl" onClick={()=>{alert('Lo sentimos, estamos actualizando la página. Intentalo otro día.')}}>Capitales</button>
                <button className="w-[150px] bg-white select-none rounded-xl shadow-lg hover:underline cursor-pointer text-xl" onClick={()=>{alert('Lo sentimos, estamos actualizando la página. Intentalo otro día.')}}>Datos curiosos</button>
            </div>
            {/* <button onClick={()=> handleNext('home')} className="w-[250px] bg-white select-none font-bold rounded-xl shadow-lg hover:underline cursor-pointer text-xl mt-6">Regresar</button> */}
        </div>
    )
}