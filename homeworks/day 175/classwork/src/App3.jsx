import { useEffect, useState } from "react";
function Users() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    if (!users) {
      fetch("/api/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }
  }, []);

  return <div>Users</div>;
}
