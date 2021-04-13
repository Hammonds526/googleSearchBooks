import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved"
import Title from "./components/Title"
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Title />
      <Switch>
          <Route path="/saved">
            <Saved />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
    </div>
    
    </Router>
  );
}



export default App;
