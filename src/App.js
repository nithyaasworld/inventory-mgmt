import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Category from "./Category";
import AddItem from "./AddItem";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { firebaseAuth } from "./firebase-config";
import { useEffect } from "react";
import { createBrowserHistory } from "history";

function App() {
  let [selectedCat, setSelectedCat] = useState("Mobiles");
  let [isUserLogged, setIsUserLogged] = useState(false);
  const history = createBrowserHistory();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsUserLogged(true);
      } else {
        setIsUserLogged(false);
      }
    });
 })

  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          {isUserLogged && (
            <Route path="/categories">
              <Category
                selectedCat={selectedCat}
                setSelectedCat={setSelectedCat}
              />
            </Route>
          )}
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
