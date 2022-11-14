export default function CrewMember({ name, images, role, bio }) {
  return (
    <div className="crew-member">
      <div className="member-info">
        <div className="role">{role}</div>
        <h3 className="member-name">{name}</h3>
        <div className="member-bio">{bio}</div>
      </div>
      <img src={images.png} alt={name} className="member-image" />
    </div>
  );
}
