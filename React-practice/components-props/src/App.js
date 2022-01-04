import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman"/>
        <p>This is children props</p>
      <Greet name="Clark" heroName="Superman"/>
        <button>Action</button>
      <Greet name="Diana" heroName="Wonder Woman"/>
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/>
      <br /><br /><br/>
      <ParentComponent />
    </div>
  );
}

export default App;
