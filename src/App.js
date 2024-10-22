import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' // note that import Greet could be any name 
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <Message/>
      {/* <Greet /> */}
      {/* <Welcome /> */}
      <Greet name="Zeus" role="hi Gisele Father">
        <p> This is children props </p>
        </Greet>
      <Greet name="Hera" role="Mother">
        <button>Action</button>
        </Greet>
      <Greet name="Ares" role="Daughter"/>
      <Welcome name="Zeus" role="Father"/>
      <Welcome name="Hera" role="Mother"/>
      <Welcome name="Ares" role="Daughter"/>
    </div>
  );
}

export default App;
