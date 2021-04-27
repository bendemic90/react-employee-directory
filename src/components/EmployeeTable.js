import React from 'react'
import API from '../utils/API'

class EmployeeTable extends React.Component {
    state = {
        employees: [],
        count: 0
    }
    
    componentDidMount() {
        API.getEmployees()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }

    render() {
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
                    {this.state.employees.map(employee => {
                        return (
                            <tr key={employee.login.salt}>
                            <th scope="row">{this.state.employees.indexOf(employee) + 1}</th>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        )
    }
}

export default EmployeeTable;