import './App.css';
import Jumbo from './components/Jumbo';
import Nav from './components/Nav'
//import API from './utils/Api'
//console.log(API.getEmployees())

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbo />
    </div>
  );
}

export default App;
