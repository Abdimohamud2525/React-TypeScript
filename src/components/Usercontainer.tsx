import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import { User } from "./interface/user";

const UserContainer = () => {
  // Initialize the Users state with an empty array.
  const [Users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch your user data here, for example:
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
          const data: User[] = await response.json();
          setUsers(data); // Update the Users state with fetched data.

          // console.log(data[0].)
        } else {
          // Handle error
          console.error("Failed to fetch users");
        }
      } catch (error) {
        // Handle any other errors that might occur during the fetch.
        console.error("An error occurred:", error);
      }
    };

    // Call the fetchUsers function to initiate the data fetching.
    fetchUsers();
  }, []);

  const handleDeleteUser = (userId: number) => {
    // Filter the Users array to remove the user with the specified userId
    const updatedUsers = Users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <UserList Users={Users} onDeleteUser={handleDeleteUser} />
  );
}

export default UserContainer;
