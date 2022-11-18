import useWindowWidth from '../hooks/useWindowWidth';

export default function Technology({ name, images, description }) {

  const windowWidth = useWindowWidth();
  const tabletWidth = 768;

  return (
    <div className="technology">
      <div className="technology-info" key={Math.random()}>
        <p className="terminalogy-text">The terminology...</p>
        <h2>{name}</h2>
        <p className="technology-description">{description}</p>
      </div>
      <div className="technology-image">
        <img src={windowWidth > tabletWidth ? images.portrait : images.landscape} alt={name} />
      </div>
    </div>
  );
}
