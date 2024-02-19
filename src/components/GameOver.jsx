export default function GameOver({ win, winPlayer, onRematch, len }) {
  let content;
  if (win === "draw") {
    content = <p>"It is a draw"</p>;
  } else {
    content = <p>{winPlayer} "is the winner"</p>;
  }
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {content}
      <button onClick={onRematch}>Rematch</button>
    </div>
  );
}
