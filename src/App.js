import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Forgot from './Components/Forget';
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path='/login'>
            <Login/>
          </Route>

          <Route path='/register'>
            <Register/>
          </Route>

          <Route path="/forgot">
            <Forgot/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
