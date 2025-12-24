export default function Tile({ baseSrc, iconSrc }) {
  return (
    <div className="tile">
      <img src={baseSrc} className="tile-base" alt="" />
      <img src={iconSrc} className="tile-icon" alt="" />
    </div>
  );
}
