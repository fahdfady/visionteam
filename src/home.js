import Results from "./components/Results";
import Teams from "./Teamspreview";

import useFetch from "./hooks/useFetch";

const Home = () => {
  const { data: results, isPending, error } = useFetch("/results");
  const { data: esportteams } = useFetch("/esportTeams");

  return (
    <div className='home'>
      <section className='banner'>
        <div className='banner-container'>
          <div className='layer'>
            <h2>
              <span> Vis</span>ion
            </h2>

            <p>The vision is always clear</p>
          </div>
        </div>
      </section>

      {error && <div>{error}</div>}

      {isPending && <div>Loading...</div>}

      {results && <Results results={results} />}

      {esportteams && <Teams teams={esportteams} />}
    </div>
  );
};

export default Home;
