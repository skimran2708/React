import logo from './logo.svg';
import './App.css';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <UserGreeting />
      <br/>
      <br/>
      <NameList />
    </div>
  );
}

export default App;
