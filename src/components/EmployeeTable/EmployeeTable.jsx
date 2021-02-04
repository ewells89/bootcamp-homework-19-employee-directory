import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeTable = () => {
  const [users, setUsers] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=100").then((response) => {
      setUsers(response.data.results);
    });
  }, []);

  const filterEmail = () => {};

  const sortLastName = () => {
    if (sortDirection === "asc") {
      sortLastNameAsc();
      setSortDirection("desc");
    } else {
      sortLastNameDesc();
      setSortDirection("asc");
    }
  };

  const sortLastNameDesc = () => {
    const usersSpread = [...users];
    usersSpread.sort((a, b) => {
      const nameA = a.name.last;
      const nameB = b.name.last;

      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0;
    });
    setUsers(usersSpread);
  };

  const sortLastNameAsc = () => {
    const usersSpread = [...users];
    usersSpread.sort((a, b) => {
      const nameA = a.name.last;
      const nameB = b.name.last;

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    setUsers(usersSpread);
  };

  return (
    <div>
      <div className="text-end">
        <input 
          type="text"
          placeholder="Search by phone number"
          name="searchTerm"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>
        <button className="btn btn-dark btn-sm">Search</button>
      </div>
      <div>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Photo</th>
              <th scope="col">First</th>
              <th scope="col" onClick={sortLastName}>
                Last
              </th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <th scope="row">{user.id.value}</th>
                <td>
                  <img
                    src={user.picture.thumbnail}
                    alt="thumbnail for user"
                  ></img>
                </td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
