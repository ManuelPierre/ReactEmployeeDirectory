import React from "react";
import { Table } from "react-bootstrap";

function EmployeeTable(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {props.randomUsers.map((x, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>
              <img src={x.picture.thumbnail} />
            </td>
            <td>{x.name.first}</td>
            <td>{x.name.last}</td>
            <td>{x.email}</td>
            <td>{x.gender}</td>
            <td>{x.phone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default EmployeeTable;
