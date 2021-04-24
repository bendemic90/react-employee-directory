import './App.css';
import Jumbo from './components/Jumbo';
import Nav from './components/Nav'
import EmployeeTable from './components/EmployeeTable'
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbo />
      <Search />
      <EmployeeTable />
    </div>
  );
}

export default App;
