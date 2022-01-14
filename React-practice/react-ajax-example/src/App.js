import logo from './logo.svg';
import './App.css';
import MyClassComponent from './components/MyClassComponent.js';
import MyFuncComponent from './components/MyFuncComponent';

function App() {
  return (
    <div className="App">
      <MyClassComponent />
      <br/>
      <br/>
      <MyFuncComponent />
    </div>
  );
}

export default App;
