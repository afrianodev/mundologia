import {React, useState} from "react";

export default function Home({handleNext}) {
    return (
        <div>
            <h2>Elige que quieres hacer:</h2>
            <div>
                <button onClick={() => handleNext('play')}>Jugar</button>
                <button onClick={() => handleNext('practice')}>Practicar</button>
            </div>
        </div>
    )
}