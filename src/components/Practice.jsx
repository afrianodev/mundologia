import {React, useState} from "react";

export default function Practice({handleNext}) {
    return (
        <div>
            <h2>Elige que mapa quieres:</h2>
            <div>
                <button onClick={()=>handleNext('world-map', 'world')}>Mapa mundial</button>
                <button onClick={()=>handleNext('world-map', 'america')}>America</button>
                <button onClick={()=>handleNext('world-map', 'europa')}>Europa</button>
                <button onClick={()=>handleNext('world-map', 'africa')}>Africa</button>
                <button onClick={()=>handleNext('world-map', 'oceania')}>Oceania</button>
            </div>
            <button onClick={()=>handleNext('home')}>Regresar</button>
        </div>
    )
}