import React from "react";

function FilteredTable(props) {

  const filtered = props.employees.filter(
    (employee) =>
      employee.name.first.toLowerCase().includes(props.search) ||
      employee.name.last.toLowerCase().includes(props.search)
    );

    return (
        <>
        {filtered.length > 0 ? 
        <tr>
        <th scope="row">Sorted</th>
        <td>{filtered[0].name.first}</td>
        <td>4</td>
        <td>5</td>
        </tr>
        :
        <tr>
            <th scope="row"></th>
            <td>No matches found</td>
        </tr>
        }
        </>        
    );
}

export default FilteredTable;
