import {React, useState} from "react";

export default function Play({handleNext}) {
    return (
        <div>
            <h2>¿Como quieres jugar?</h2>
            <div>
                <button>Trivia</button>
                <button>Paises</button>
                <button>Capitales</button>
                <button>Datos curiosos</button>
            </div>
            <button onClick={()=> handleNext('home')}>Regresar</button>
        </div>
    )
}