const Footer = ({ socials }) => {

    return (
        <footer className="page-footer">
            <div className="footer-container">
                <p className="name">
                    vision team
                </p>

                <ul className="social-media">
                    { socials.map((social) => (
                        <li>
                            <a href={ social.link } target="_balnk">
                                < i className={ "fa-brands fa-" + social.name } ></i>
                            </a>
                        </li>
                    )) }
                </ul>

                <p className="email">
                    visionteam@gmail.com
                </p>
            </div>
        </footer>
    )
}

export default Footer;