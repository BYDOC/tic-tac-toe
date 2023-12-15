import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
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
                gameBoard.map((row, rowIndex) => (
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

