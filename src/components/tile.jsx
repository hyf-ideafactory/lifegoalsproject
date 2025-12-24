export default function Tile({
  baseSrc,
  iconSrc,
  revealed,
  claimed,
  onClick,
}) {
  return (
    <div
      className={`tile ${claimed ? "claimed" : ""}`}
      onClick={!revealed && !claimed ? onClick : undefined}
    >
      <img src={baseSrc} className="tile-base" alt="" />

      {!revealed && (
        <img src={iconSrc} className="tile-icon" alt="Mystery" />
      )}

      {revealed && !claimed && (
        <div className="tile-reveal">
          <p className="reward-text">Surprise reward 🎁</p>
        </div>
      )}

      {claimed && (
        <div className="tile-claimed">
          <p>Claimed ✓</p>
        </div>
      )}
    </div>
  );
}
