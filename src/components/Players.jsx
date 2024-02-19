import { useState } from "react";

export default function Players({ playerName, symbol, status }) {
  let [editMode, setEditMode] = useState();
  console.log(playerName);
  const [name, setName] = useState(playerName);
  let player;
  let btnCap = "Edit";
  function editClickHandler() {
    setEditMode((editMode) => !editMode);
  }
  function nameChanger(event) {
    console.log("event name:" + event.target.value);
    setName(event.target.value);

    console.log("name:" + name);
  }

  if (editMode) {
    btnCap = "Save";

    player = (
      <input
        type="text"
        className="player-name"
        required
        value={name}
        onChange={(e) => nameChanger(e)}
      />
    );
    btnCap = "Save";
  } else {
    player = name;
  }
  return (
    <li className={status ? "active" : undefined}>
      <span className="player">
        <span className="player-name">{player}</span>
        <span className="player-symbol">{symbol}</span>
        <button
          onClick={() => {
            editClickHandler();
          }}
        >
          {btnCap}
        </button>
      </span>
    </li>
  );
}
