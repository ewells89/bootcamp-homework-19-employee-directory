import React, { useEffect,  useState } from "react";
import axios from "axios";

const EmployeeTable = () => {
  const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=100").then(response => {
            console.log(response.data.results);
            setUsers(response.data.results);
        })
    }, []);

    const filterEmail = () => {

    }

    const sortLastName = () => {
        const sortedNames = users.sort((a,b) => {
            const nameA = a.name.last;
            const nameB = b.name.last;

            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
        console.log(sortedNames);
    }
    // arr.sort(function(a, b) {
    //     var keyA = new Date(a.updated_at),
    //       keyB = new Date(b.updated_at);
    //     // Compare the 2 dates
    //     if (keyA < keyB) return -1;
    //     if (keyA > keyB) return 1;
    //     return 0;
    //   });
      


  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Photo</th>
          <th scope="col">First</th>
          <th scope="col" onClick={sortLastName}>Last</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) =>(
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
  );
};

export default EmployeeTable;
