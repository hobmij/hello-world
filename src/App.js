import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' // note that import Greet could be any name 
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <Welcome /> */}
      <Hello />
    </div>
  );
}

export default App;
