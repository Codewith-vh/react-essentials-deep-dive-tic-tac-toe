import { useState } from "react";

export default function GameBoard({ onSelectPlayer, board }) {
  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((player, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => onSelectPlayer(rowIndex, colIndex)}
                    disabled={player !== null}
                  >
                    {player}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
