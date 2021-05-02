import './App.css';
import Jumbo from './components/Jumbo';
import Nav from './components/Nav'
import EmployeeTable from './components/EmployeeTable'
import Search from './components/Search';
import { useState, useEffect } from 'react'
import API from './utils/API'

function App() {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("")
  //const [filtered, setFilter] = useState([])

  useEffect(() => {
    API.getEmployees()
      .then((res) => setEmployees(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   console.log(employees.filter(employee => employee.name.first.toLowerCase().includes(search)))
  // }, [search])

  const handleInputChange = (event) => {
    setSearch(event.target.value)
  };

  return (
    <div className="App">
      <Nav />
      <Jumbo />
      <Search employees={employees} onChange={handleInputChange} search={search} />
      <EmployeeTable employees={employees} onChange={handleInputChange} search={search}/>
    </div>
  );
}

export default App;
