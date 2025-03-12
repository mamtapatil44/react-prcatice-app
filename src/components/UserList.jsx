import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "../utils/userSlice";

function UserList() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div className="mt-8">
      <h2>
        User List
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </h2>
      <ul>
        {data && data.map((user) => <li key={user?.id}>{user?.name}</li>)}
      </ul>

      <button
        className="bg-green-800 roounded-lg p-2"
        onClick={() => dispatch(addUser({ id: 11, name: `New User` }))}
      >
        Add User
      </button>
    </div>
  );
}

export default UserList;
