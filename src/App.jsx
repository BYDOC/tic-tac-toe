import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}
function App() {
  //active player bilgisine hem player hem de gameboard componentlarında ihtiyac var. Active player bilgisini her iki componentda da olusturmak yerine, 
  //her iki componenta en yakın ancestor componentda yaratıp, digerlerine erisim saglıyoruz "Lifting State Up"
  //burada activePlayer'ı olusturup GameBOard ve Player'a prop olarak gönderdik
  //const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)
  function handleSelectSquare(rowIndex, colIndex) {
    //burada curActivePlayer'a bakarak state'i değiştiriyoruz
    // setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns]
      return updatedTurns
    });
  }



  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />

      </div>
      <div id="log">
        LOG
        <Log turns={gameTurns} />
      </div>

    </main>
  )
}

export default App
