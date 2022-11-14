export default function Destination({
  name,
  images,
  description,
  distance,
  travel: travelTime,
}) {
  return (
    <div className="destination">
      <div className="destination-image">
        <img src={images.png} alt={name} />
      </div>
      <div className="destination-info">
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <div className="travel-data">
          <div className="distance">
            <span>avg. distance</span>
            {distance}
          </div>
          <div className="travel-time">
            <span>est. travel time</span>
            {travelTime}
          </div>
        </div>
      </div>
    </div>
  );
}
