import './App.css';
import Login from './Login';
import Signup from './Signup';
import Category from './Category';
import AddItem from './AddItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/categories">
            <Category />
          </Route>
          <Route path="/add-item">
            <AddItem />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;