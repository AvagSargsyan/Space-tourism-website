export default function Technology({ name, images, description }) {
  return (
    <div className="technology">
      <div className="technology-info">
        <p className="terminalogy-text">The terminology...</p>
        <h2>{name}</h2>
        <p className="technology-description">{description}</p>
      </div>
      <div className="technology-image">
        <img src={images.portrait} alt={name} />
      </div>
    </div>
  );
}
