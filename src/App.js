import './App.css';
import Jumbo from './components/Jumbo';
import Nav from './components/Nav'
import EmployeeTable from './components/EmployeeTable'

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbo />
      <EmployeeTable />
    </div>
  );
}

export default App;
