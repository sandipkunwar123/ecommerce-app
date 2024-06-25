import { useEffect, useState } from "react";
import { IUserItem } from "./user.type";

import UserItem from "./user-item";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState<IUserItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getUsers = async () => {
    setLoading(true);
    const response = await axios({
      url: "https://fakestoreapi.com/users",
      method: "GET",
    });
    setLoading(false);
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (users.length > 0) {
    return (
      <div>
        {users.map((item) => (
          <UserItem {...item} key={item.id} />
        ))}
      </div>
    );
  }
  return <div>No User Found</div>;
}
