import '../styles/destinations.scss';

export default function Destination({
  name,
  images,
  description,
  distance,
  travel: travelTime,
}) {
  return (
    <div className="destination">
      {/* the key attributes are for rerendering, so that they will animate every time state changes */}
      <div className="destination-image" key={Math.random()}>
        <img src={images.png} alt={name} />
      </div>
      <div className="destination-info" key={Math.random()}>
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <div className="travel-data">
          <div className="distance">
            <span className='label'>avg. distance</span>
            <span className='data'>{distance}</span>
          </div>
          <div className="travel-time">
            <span className='label'>est. travel time</span>
            <span className="data">{travelTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
