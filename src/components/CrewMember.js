export default function CrewMember({ id, name, images, role, bio }) {
  return (
    <div className="crew-member" key={Math.random()}>
      <div className="member-info">
        <div className="role">{role}</div>
        <h3 className="member-name">{name}</h3>
        <div className="member-bio">{bio}</div>
      </div>
      <div className="member-image"><img src={images.png} alt={name} style={{
        height: id === '0' ? '46rem' : ''
      }} /></div>
    </div>
  );
}
