import './App.css';
import Jumbo from './components/Jumbo';
import Nav from './components/Nav'
import EmployeeTable from './components/EmployeeTable'
import Search from './components/Search';
import { useState, useEffect } from 'react'
import API from './utils/API'

function App() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.getEmployees()
      .then((res) => setEmployees(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Nav />
      <Jumbo />
      <Search employees={employees}/>
      <EmployeeTable employees={employees} />
    </div>
  );
}

export default App;
