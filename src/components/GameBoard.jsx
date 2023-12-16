import { useState } from "react";


export default function GameBoard({ onSelectSquare, board }) {
    
    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         // const updatedBoard=prevGameBoard
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });
    //     //onSelectSquare App component'dan activePlayer state'ini cagıran fonksiyonu cagırıyor. Lift state
    //     onSelectSquare();
    // }
    return (
        <ol id="game-board">
            {
                board.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) =>
                                <li key={colIndex}>
                                    <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol===null?false:true}>{playerSymbol}</button>
                                </li>
                            )}
                        </ol>
                    </li>))
            }
        </ol>
    );
}

