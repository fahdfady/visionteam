import { useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import avatar from './assets/avatar.webp'
import TeamPreview from "./components/TeamPreview";

const Team = () => {

    const { gamename } = useParams();
    const { data: players, error, isPending } = useFetch(`players?game=${gamename}`);

    return (
        <section className="container-full">
            <div className="section-title">
                <h2 >
                    our champions in <span> { gamename } </span>
                </h2>
            </div>
            { isPending && <div>Loading...</div> }

            { error && <div>{ error }</div> }

            { players && <TeamPreview staff={ players } /> }

        </section>
    )
}

export default Team;