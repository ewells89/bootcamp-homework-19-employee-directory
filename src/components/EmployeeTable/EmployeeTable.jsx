import React from 'react';

const EmployeeTable = () => {
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
                <tr>
                <th scope="row">23079443468</th>
                <td>Mark</td>
                <td>Erika</td>
                <td>Persen</td>
                <td>erika.persen@example.com</td>
                <td>84674950</td>
                </tr>
            </tbody>
        </table>
    );
};

export default EmployeeTable;