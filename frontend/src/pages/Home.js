import { useEffect, useState } from "react";
import UserDetails from "../components/UserDetails";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //Fetch all users
    const fetchUsers = async () => {
      const users = await fetch("/api/users");
      const json = await users.json();
      console.log("users:", json);
      if (users.ok) setUsers(json.users);
    };

    fetchUsers();
  }, []);

  return (
    <div className="Home">
      <h2>Users</h2>

      <div className="users">
        {users &&
          users.map((user) => <UserDetails key={user._id} user={user} />)}
      </div>
    </div>
  );
};

export default Home;
