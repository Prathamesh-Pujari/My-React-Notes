import React, { useEffect, useState } from "react";
import axios from "axios";
import useDataFetch from "../hooks/useDataFetch";

const Users = () => {
  const [debouncedUserSearch, setDebouncedUserSearch] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const [users, userError, loadUsers] = useDataFetch(
    `/api/users?search=${debouncedUserSearch}`,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedUserSearch(userSearch);
    }, 500);

    return () => clearTimeout(timer);
  }, [userSearch]);

  if (userError) {
    return <h1>Something went Wrong In Users!!!</h1>;
  }

  if (loadUsers) {
    return <h1>Users Are Loading Wait...</h1>;
  }

  return (
    <div>
      <div>
        <label htmlFor="">Search : </label>
        <input
          className="border-2 border-black p-2"
          placeholder="Search User"
          type="search"
          name="searchName"
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
        />
      </div>
      Total Users Are : {users.length}
    </div>
  );
};

export default Users;
