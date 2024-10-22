import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' // note that import Greet could be any name 
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
