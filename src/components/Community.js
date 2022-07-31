const Community = ({ socials }) => {
    return (
        <section className="community">
            <div className="section-title">
                <h2>
                    vis <span>community</span>
                </h2>
            </div>
            <nav className="socials">

                { socials.map((social) => (
                    <a href={ social.link } className="social" key={ social.id }>

                        <div className="social-icon">
                            < i className={ "fa-brands fa-" + social.name } ></i>
                        </div>

                        <div className="social-number">
                            { social.followers }
                        </div>
                    </a>
                )) }

            </nav>
        </section >
    )
}

export default Community;