import React, {useState, useEffect} from "react";
import API from "../utils/API";

function EmployeeTable(props) {

    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {props.employees.map((employee) => {
              return (
                <tr key={employee.login.salt}>
                  <th scope="row">
                    {props.employees.indexOf(employee) + 1}
                  </th>
                  <td>{employee.name.first}</td>
                  <td>{employee.name.last}</td>
                  <td>{employee.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

export default EmployeeTable;
