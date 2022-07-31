import './style/App.css';
import './style/all.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './home';
import Team from './team';
import Footer from './components/footer';
import TeamsPage from './teams';
import About from './about';
import Careers from './careers';

function App() {


  return (
    <Router>
      <div className="page-container">

        <div className="not-footer">

          <Navbar />

          <main className="page-body">
            <Switch>


              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/about">
                <About />
              </Route>

              <Route exact path="/teams">
                <TeamsPage />
              </Route>

              <Route exact path="/careers">
                <Careers />
              </Route>

              <Route exact path="/team/:gamename">
                <Team />
              </Route>

            </Switch>

          </main>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App;