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
  const [sort, setSort] = useState(false)

  useEffect(() => {
    API.getEmployees()
      .then((res) => setEmployees(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
  }, [employees])

  const handleInputChange = (event) => {
    setSearch(event.target.value)
  };

  const onClick = (event) => {
    event.preventDefault()
    if (sort) {
      employees.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1
      }
      if (a.name.first > b.name.first) {
        return 1
      }
      return 0
    })
    }
    else {
      employees.sort((a, b) => {
        if (a.name.first < b.name.first) {
          return 1
        }
        if (a.name.first > b.name.first) {
          return -1
        }
        return 0
      })
    }
    setSort(!sort)
  }

  return (
    <div className="App">
      <Nav />
      <Jumbo />
      <Search employees={employees} onChange={handleInputChange} search={search} />
      <EmployeeTable employees={employees} onClick={onClick} onChange={handleInputChange} search={search}/>
    </div>
  );
}

export default App;
