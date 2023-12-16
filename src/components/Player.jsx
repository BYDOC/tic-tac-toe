import { useState } from "react";
export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)
    //state update fonksiyonunu cağırmak komponentin tekrar cagırılmasına sebep oluyor
    //farklı component instanceları birbirinden izole calısır. Birindeki state degisimi digerini etkilemez. Player1 componentine tıklanınca state update fonksiyonu calısır 
    //ve komponent tekrar cagırılır. Ancak bu Player2 componentine etki etmez
    function handleEditClick() {
        //state'in degerini, state'in eski degerine bakarak degistirmek istiyorum
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName)
        }

    }
    function handleChange(event) {
        console.log(event)
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{(isEditing) ? "Save" : "Edit"}</button>
        </li>
    );
}