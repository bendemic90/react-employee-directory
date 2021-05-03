import React from "react";

function MapTable(props) {
  return props.employees.map((employee) => {
      return (
        <tr key={employee.login.salt}>
        <th scope="row">{props.employees.indexOf(employee) + 1}</th>
        <td><img src={employee.picture.thumbnail} alt="id"/></td>
        <td>{employee.name.first}</td>
        <td>{employee.name.last}</td>
        <td>{employee.email}</td>
        </tr>
      );
  });
}

export default MapTable;