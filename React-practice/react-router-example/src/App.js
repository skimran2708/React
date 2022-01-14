import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Post from './components/Post';

function App() {

  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Router Demo</h1>
        <ul className='nav'>
          <li>
            <Link to="/"><h3>Home</h3></Link>
          </li>
          <li>
            <Link to="/about"><h3>About</h3></Link>
          </li>
          <li>
            <Link to="/profile"><h3>Profile</h3></Link>
          </li>
        </ul>

        <button onClick={()=>setLogin(!login)}>{login ? "Logout" : "Login"} </button>

        <hr />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" >
            {/* {login ? <Profile /> : <Redirect to="/" />} */}
            <Profile login={login} />
          </Route>
          <Route path="/post/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;