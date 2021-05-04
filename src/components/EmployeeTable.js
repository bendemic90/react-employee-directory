import React, {useEffect} from "react";
import MapTable from './MapTable'
import FilteredTable from './FilteredTable'

function EmployeeTable(props) {

  useEffect(() => {
  }, [props.employees])

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Pic</th>
            <th scope="col">First Name 
            <span> </span><button onClick={props.onClick}>Sort</button></th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {!props.search ? 
          <MapTable employees={props.employees} /> 
          : <FilteredTable search={props.search} employees={props.employees} 
          />}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
