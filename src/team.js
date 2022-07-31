import { useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import avatar from './assets/avatar.webp'

const Team = () => {

    const { gamename } = useParams();
    const { data: players, error, isPending } = useFetch(`players?game=${gamename}`);

    return (
        <section className="team">
            <div className="section-title">
                <h2 >
                    our champions in <span> { gamename } </span>
                </h2>
            </div>
            { isPending && <div>Loading...</div> }

            { error && <div>{ error }</div> }

            { players && (
                <div className="container-full">

                    <div className="players-list">
                        { players.map((player) => (
                            <a href="#0" className="player-card" key={ player.id }>
                                <div className="player-list-img">
                                    <img src={ avatar } alt={ player.gamename } />
                                </div>

                                <div className="player-list-content">
                                    <h3 className="player-name">
                                        <span>vis </span>
                                        { player.gamename }
                                    </h3>

                                    <p className="player-role badge">
                                        { player.role }
                                    </p>

                                    <div className="player-socials">
                                        <ul>
                                            <li>
                                                <a href={ player.facebook } target="blank">
                                                    <i className="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={ player.instagram } target="blank">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={ player.twitter } target="blank">
                                                    <i className="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={ player.twitch } target="blank">
                                                    <i className="fa-brands fa-twitch"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={ player.youtube } target="blank">
                                                    <i className="fa-brands fa-youtube"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </a>

                        )) }
                    </div>
                </div>
            ) }
        </section>
    )
}

export default Team;