function UserListIndexKey() {
  const users = ["Ravi", "Anu", "Kumar"];
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}
export default UserListIndexKey;
