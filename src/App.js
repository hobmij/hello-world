import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' // note that import Greet could be any name 
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
