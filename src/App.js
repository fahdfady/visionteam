import "./App.css";
import "./all.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./home";
import Teams from "./Teamspreview";
import Team from "./team";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />

        <main className='page-body'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/team/:gamename'>
              <Team />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
