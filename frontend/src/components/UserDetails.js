const UserDetails = ({ user }) => {
  return (
    <div>
      <div className="user-details">
        <h4>{user.name}</h4>
        <p>
          <strong>{user.email}</strong>
        </p>
        <p>
          <strong>{user.password}</strong>
        </p>
        <p>{user.updatedAt.split("T")[0]}</p>
      </div>
    </div>
  );
};

export default UserDetails;
