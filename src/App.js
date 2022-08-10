import './style/App.css';
import './style/all.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './home';
import Team from './team';
import Footer from './components/footer';
import TeamsPage from './teams';
import About from './about';
import Careers from './careers';
import useFetch from './hooks/useFetch';

function App() {

  const { data: socials, error, isPending } = useFetch("Achievements?type=socials");

  return (
    <BrowserRouter>
      <div className="page-container">

        <div className="not-footer">

          <Navbar />

          <main className="page-body">
            <Routes>

              <Route index element={ <Home /> } />

              <Route exact path="about" element={ <About /> } />

              <Route exact path="teams" element={ <TeamsPage /> } />

              <Route exact path="careers" element={ <Careers /> } />

              <Route exact path="/team/:gamename" element={ <Team /> } />

            </Routes>

          </main>
        </div>

        { isPending && <div>Loading...</div> }

        { error && <div>{ error }</div> }

        { socials && <Footer socials={ socials } /> }
      </div>
    </BrowserRouter>
  )
}

export default App;