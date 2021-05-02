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
        filtered.map((element) => {
          return (
            <tr key={filtered.indexOf(element)}>
            <th scope="row">{filtered.indexOf(element) + 1}</th>
            <td>{element.name.first}</td>
            <td>{element.name.last}</td>
            <td>{element.email}</td>
            </tr>
          )
        })
       : (
        <tr>
          <th scope="row"></th>
          <td>No matches found</td>
        </tr>
      )}
    </>
  );
}

export default FilteredTable;
