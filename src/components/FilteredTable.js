import React from "react";

function FilteredTable(props) {
  
  const filtered = props.employees.filter(
    (employee) =>
      employee.name.first.toLowerCase().includes(props.search) ||
      employee.name.last.toLowerCase().includes(props.search)
  );

  return (
    <>
      {filtered.length > 0 ? (
        filtered.map((element) => {
          return (
            <tr key={filtered.indexOf(element)}>
              <th scope="row">{props.employees.indexOf(element) + 1}</th>
              <td><img src={element.picture.thumbnail} alt="id"/></td>
              <td>{element.name.first}</td>
              <td>{element.name.last}</td>
              <td>{element.email}</td>
            </tr>
          );
        })
      ) : (
        <tr>
          <th scope="row">#</th>
          <td></td>
          <td>No matches found</td>
          <td></td>
          <td></td>
        </tr>
      )}
    </>
  );
}

export default FilteredTable;
