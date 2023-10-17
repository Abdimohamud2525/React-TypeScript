import { User } from "./interface/user";

interface Users {
  Users: User[];
  onDeleteUser: (userId: number) => void;
}

const UseList = (props: Users) => {
  const handleDeleteUser = (userId: number) => {
    props.onDeleteUser(userId);
  };

  return (
    <div>
      <ul>
        {props.Users.map((user) => (
          <div key={user.id}>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.id}</li>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UseList;
