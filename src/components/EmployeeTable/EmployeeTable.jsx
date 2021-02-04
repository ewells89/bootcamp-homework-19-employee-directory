import React, { useState } from "react";

const EmployeeTable = () => {
  const [users, setUsers] = useState([
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Erika",
        last: "Persen",
      },
      location: {
        street: {
          number: 3377,
          name: "Elias Blix' gate",
        },
        city: "Siggerud",
        state: "Telemark",
        country: "Norway",
        postcode: "0268",
        coordinates: {
          latitude: "48.8483",
          longitude: "103.9728",
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta",
        },
      },
      email: "erika.persen@example.com",
      login: {
        uuid: "4a8d52bc-71cc-4983-b21e-11e88d7ac6e8",
        username: "whitebutterfly157",
        password: "beast1",
        salt: "fVXKHoBi",
        md5: "d2b8edc73a03551b81c982b504d77ab1",
        sha1: "854263cd3ca72aef2abe5105eb85828d5226df88",
        sha256:
          "efe7020fb7aef3668fbfca474b123475651577979cd65cba22a759ad4c783553",
      },
      dob: {
        date: "1994-07-23T03:37:58.571Z",
        age: 27,
      },
      registered: {
        date: "2011-08-09T03:37:54.932Z",
        age: 10,
      },
      phone: "84674950",
      cell: "49237316",
      id: {
        name: "FN",
        value: "23079443468",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/52.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/52.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/52.jpg",
      },
      nat: "NO",
    },
  ]);

  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Photo</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) =>(
            <tr>
            <th scope="row">23079443468</th>
            <td>
              <img
                src="https://randomuser.me/api/portraits/thumb/women/52.jpg"
                alt="thumbnail for user"
              ></img>
            </td>
            <td>Erika</td>
            <td>Persen</td>
            <td>erika.persen@example.com</td>
            <td>84674950</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
