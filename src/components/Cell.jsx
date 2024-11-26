import './Cell.css';

function Cell ({cellIndex, isOn, toggleLights}) {

    return (
         <button className={isOn ? "btn-green" : "btn-red"}></button>
         )
}

export default Cell;