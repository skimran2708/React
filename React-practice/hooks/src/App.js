import './App.css';
import UseStateHook from './components/UseStateHook';
import UseStateHookArray from './components/UseStateHookArray';
import UseStateHookObject from './components/UseStateHookObject';
import UseEffectHook from './components/UseEffectHook';
import UseEffectGreeting from './components/UseEffectGreeting';

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <br/>
      <br/>
      <UseStateHookObject />
      <br/>
      <br/>
      <UseStateHookArray />
      <br/>
      <br/>
      <UseEffectHook />
      <br/>
      <br/>
      <UseEffectGreeting 
        name='Shaik Imran'
      />
    </div>
  );
}

export default App;
