const TeamPreview = ({ staff }) => {
    return (
        <section className="team">

            <div className="container-full">

                <div className="players-list">
                    { staff.map((member) => (
                        <a href="#0" className="player-card" key={ member.id }>
                            <div className="player-list-img">
                                <img src={ member.image } alt={ member.gamename } />
                            </div>

                            <div className="player-list-content">
                                <h3 className="player-name">
                                    <span>vis </span>
                                    { member.gamename }
                                </h3>

                                <p className="player-role badge">
                                    { member.role }
                                </p>

                                <div className="player-socials">
                                    <ul>
                                        <li>
                                            <a href={ member.facebook } target="blank">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={ member.instagram } target="blank">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={ member.twitter } target="blank">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={ member.twitch } target="blank">
                                                <i className="fa-brands fa-twitch"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={ member.youtube } target="blank">
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
        </section>
    )
}

export default TeamPreview;