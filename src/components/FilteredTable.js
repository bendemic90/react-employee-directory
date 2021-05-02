import React from "react";

function FilteredTable(props) {
    const filtered = props.employees.filter(employee => employee.name.first.toLowerCase().includes(props.search))
    console.log(filtered)
        return (
            <tr>
            <th scope="row">Sorted</th>
            <td>5</td>
            <td>4</td>
            <td>3</td>
            </tr>
        )
    
}

export default FilteredTable;