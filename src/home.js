import Results from "./components/Results";
import Store from "./components/store";
import TeamPreview from "./components/TeamPreview";
import Teams from "./components/Teamspreview";
import Trophies from "./components/Trophies";

import useFetch from "./hooks/useFetch";

const Home = () => {
    const { data: results, isPending, error } = useFetch("esportTeams?type=results");
    const { data: esportteams } = useFetch("esportTeams?type=teams");
    const { data: trophies } = useFetch("Achievements?type=trophies");
    const { data: store } = useFetch("store?type=store");
    const { data: staff } = useFetch("players?game=staff");

    return (
        <div className="home">
            <section className="banner">
                <div className="banner-container">
                    <div className="layer">
                        <h2>
                            <span> Vis</span>ion
                        </h2>

                        <p>The vision is always clear</p>
                    </div>
                </div>
            </section>


            { error && <div>{ error }</div> }

            { isPending && <div>Loading...</div> }

            { store && <Store store={ store } /> }

            { results && <Results results={ results } /> }

            { esportteams && <Teams teams={ esportteams } /> }

            { staff && <TeamPreview staff={ staff } /> }

            { trophies && <Trophies trophies={ trophies } /> }

        </div>
    )
}

export default Home;