import {React, useState} from "react";
import Tooltip from "./Tooltip";

export default function WorldMap({handleNext, mapType}) {
    const [countryInfo, setCountryInfo] = useState(undefined);

    const [tooltip, setTooltip] = useState({
        visible: false,
        content: '',
        position: { x: 0, y: 0 },
    })

    function handleCountryInfo(country) {
        if(country==='America') {
            setCountryInfo(<div>
                <h4>America</h4>
                <p>El nuevo continente</p>
                <p>Su país mas poblado es Estados Unidos</p>
            </div>)
        } else if(country==='Europa') {
            setCountryInfo(<div>
                <h4>Europa</h4>
                <p>El viejo continente</p>
                <p>Rusia y Turquia hacen parte de Europa y tambien de Asia</p>
            </div>)
        }
    }

    const handleMouseEnter = (event, content) => {
        const { clientX, clientY } = event;
        setTooltip({
          visible: true,
          content,
          position: { x: clientX + 10, y: clientY -50 },
        });
    };

    const handleMouseLeave = () => {
        setTooltip({ visible: false, content: '', position: { x: 0, y: 0 } });
    };

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setTooltip((prevTooltip) => ({
          ...prevTooltip,
          position: { x: clientX + 10, y: clientY - 50 },
        }));
    };

    return (
        <div className="world-map" onMouseMove={handleMouseMove}>
            <button onClick={()=>handleNext('practice')}>Cambiar mapa</button>
            <p>Coloca el cursor sobre el mapa para ver la información de cada país.</p>
            <div>

            {mapType === 'world' && <div>This is a world map</div>}


            {mapType==='america' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 607.77 442.9" className="map-color"><g id="america" onMouseEnter={(e) => handleMouseEnter(e, 'Información de América')} onMouseLeave={handleMouseLeave}>
                <polygon class="cls-1" points="26.25 28.55 20.25 77.56 41.25 98.56 71.25 135.56 71.25 176.56 45.75 203.56 71.25 255.56 106.25 329.56 112.25 383.56 134.25 357.56 134.25 295.56 144.25 246.56 122.25 216.06 82.25 223.56 82.25 197.56 98.25 188.56 107.25 206.06 124.25 206.06 108.25 178.56 126.25 148.56 159.25 111.56 140.25 81.56 180.25 28.55 124.25 20.55 83.25 47.55 56.25 0.56 1.25 10.55 26.25 28.55"/>
                <polygon class="cls-1" points="140.25 202.56 150.25 216.06 174.25 216.06 180.25 202.56 167.25 202.56 140.25 202.56"/></g></svg>}

            {mapType==='europa' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 607.77 442.9" className="map-color"><g id="europa" onMouseEnter={(e) => handleMouseEnter(e, 'Información de Europa')} onMouseLeave={handleMouseLeave}>
                <polygon class="cls-1" points="228.25 158.56 223.25 177.56 236.25 177.56 253.25 168.06 266.25 158.56 287.25 177.56 287.25 209.31 272.25 216.06 293.25 223.56 316.25 216.06 303.25 202.56 303.25 186.56 301.25 158.56 332.25 173.56 348.25 192.06 382.25 196.56 405.25 166.56 392.25 128.56 370.25 89.56 338.25 89.56 324.25 116.56 293.25 116.56 273.25 116.56 246.25 124.56 228.25 158.56"/>
                <polygon class="cls-1" points="229.25 110.56 255.25 110.56 248.25 98.56 248.25 69.56 234.25 46.55 223.25 78.56 229.25 110.56"/>
                <polygon class="cls-1" points="201.25 125.56 215.25 125.56 215.25 100.56 201.25 89.56 191.25 107.56 201.25 125.56"/></g></svg>}

            {mapType==='africa' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 607.77 442.9" className="map-color"><g id="africa" onMouseEnter={(e) => handleMouseEnter(e, 'Información de África')} onMouseLeave={handleMouseLeave}>
                <polygon class="cls-1" points="293.25 239.56 260.25 239.56 239.25 227.56 215.25 233.56 203.25 268.56 248.25 299.56 248.25 341.56 288.25 389.56 339.25 421.56 357.25 375.56 371.25 341.56 396.25 334.56 396.25 307.56 364.25 300.56 364.25 272.56 351.25 256.56 356.25 227.56 314.25 227.56 293.25 239.56"/>
                <polygon class="cls-1" points="378.25 383.56 363.25 421.56 387.25 430.56 405.25 407.06 396.25 360.56 378.25 383.56"/></g></svg>}

            {mapType==='oceania' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="300 300 350 350" className="map-color" id="mapa-oceania"><g id="oceania" onMouseEnter={(e) => handleMouseEnter(e, 'Información de Oceanía')} onMouseLeave={handleMouseLeave}>
                <polygon class="cls-1" points="531.42 413.98 542.91 383.56 567.42 376.45 601.12 376.45 607.25 413.98 594.99 433.89 526.82 442.32 531.42 413.98"/></g></svg>}
            </div>
            <div className="country-info">{countryInfo}</div>
            <Tooltip visible={tooltip.visible} content={tooltip.content} position={tooltip.position} />
        </div>
    )
}