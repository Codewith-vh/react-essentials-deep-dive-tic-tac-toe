import Players from "./components/Players.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./components/WinCombinations.jsx";
import GameOver from "./components/GameOver.jsx";
let intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "0";
  }
  return currentPlayer;
}

function App() {
  let [turns, setTurns] = useState([]);

  let activePlayer = deriveActivePlayer(turns);

  let winner = false;

  let gameBoard = [...intialGameBoard.map((array) => [...array])];
  for (let turn of turns) {
    let { square, player } = turn;
    let { row, col } = square;
    gameBoard[row][col] = player;
  }
  for (let combination of WINNING_COMBINATIONS) {
    let firstElement = gameBoard[combination[0].row][combination[0].column];
    let secondElement = gameBoard[combination[1].row][combination[1].column];
    let thirdElement = gameBoard[combination[2].row][combination[2].column];
    console.log(firstElement + " " + secondElement + " " + thirdElement);
    if (
      firstElement &&
      firstElement === secondElement &&
      secondElement === thirdElement
    ) {
      console.log("helloo");
      winner = true;
      break;
    } else if (turns.length === 9) {
      winner = "draw";
    }
  }

  function actPlayer(rowIndex, colIndex) {
    setTurns((prevTurns) => {
      let current = deriveActivePlayer(prevTurns);
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: current },
        ...prevTurns,
      ];
      console.log(updateTurns[0]);
      return updateTurns;
    });
  }

  function rematchHandler() {
    setTurns([]);
  }
  return (
    <div>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Players
              playerName="Player 1"
              symbol="X"
              status={activePlayer === "X"}
            />
            <Players
              playerName="Player 2"
              symbol="0"
              status={activePlayer === "0"}
            />
          </ol>

          <GameBoard onSelectPlayer={actPlayer} board={gameBoard} />
          {}
          {winner && (
            <GameOver
              win={winner}
              winPlayer={activePlayer === "0" ? "X" : "0"}
              onRematch={rematchHandler}
              len={turns.length}
            />
          )}
          <Log turns={turns} />
        </div>
      </main>
    </div>
  );
}

export default App;
