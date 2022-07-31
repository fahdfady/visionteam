import Teams from "./components/Teamspreview";

import useFetch from "./hooks/useFetch";

const TeamsPage = () => {

    const { data: esportteams, error, isPending } = useFetch("esportTeams");

    return (
        <div className="teams">

            { error && <div>{ error }</div> }

            { isPending && <div>Loading...</div> }

            { esportteams && <Teams teams={ esportteams } /> }

        </div>
    )
}

export default TeamsPage;