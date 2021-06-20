import './App.css';
import Login from './Login';
import Signup from './Signup';
import Category from './Category';
import AddItem from './AddItem';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let [selectedCat, setSelectedCat] = useState("Mobiles");

  return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/categories">
            <Category selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
          </Route>
          <Route path="/add-item">
            <AddItem selectedCat={selectedCat} />
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