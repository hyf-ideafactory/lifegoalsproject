import { useState } from "react";
import Tile from "./Tile";

import tileBase from "../assets/tile-base.svg";
import lockIcon from "../assets/icon-lock.svg";
import questionIcon from "../assets/icon-question.svg";
import sparkleIcon from "../assets/icon-sparkle.svg";

const ICONS = [
  ...Array(7).fill(lockIcon),
  ...Array(7).fill(questionIcon),
  ...Array(7).fill(sparkleIcon),
];

export default function GameBoard() {
  const [tiles, setTiles] = useState(
    ICONS.map(icon => ({
      icon,
      revealed: false,
      claimed: false,
    }))
  );

  function revealRandomTile() {
    const unrevealed = tiles
      .map((t, i) => ({ ...t, i }))
      .filter(t => !t.revealed && !t.claimed);

    if (unrevealed.length === 0) return;

    const choice =
      unrevealed[Math.floor(Math.random() * unrevealed.length)];

    setTiles(prev =>
      prev.map((tile, i) =>
        i === choice.i ? { ...tile, revealed: true } : tile
      )
    );
  }

  function claimTile(index) {
    setTiles(prev =>
      prev.map((tile, i) =>
        i === index ? { ...tile, claimed: true } : tile
      )
    );
  }

  return (
    <div>
      <button onClick={revealRandomTile}>
        Reveal Reward
      </button>

      <div className="tile-grid">
        {tiles.map((tile, index) => (
          <Tile
            key={index}
            baseSrc={tileBase}
            iconSrc={tile.icon}
            revealed={tile.revealed}
            claimed={tile.claimed}
            onClick={() => claimTile(index)}
          />
        ))}
      </div>
    </div>
  );
}
