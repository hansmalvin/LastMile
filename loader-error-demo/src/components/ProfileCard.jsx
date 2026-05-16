function ProfileCard({ data }) {
  return (
    <div className="center">
      <div className="card">
        <h2>{data.name}</h2>
        <p>{data.email}</p>
      </div>
    </div>
  );
}

export default ProfileCard;