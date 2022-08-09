import Achievements from "./components/Achievements";
import Community from "./components/Community";
import Stories from "./components/Stories";
import useFetch from "./hooks/useFetch";

const About = () => {
    const { data: achievements, isPending, error } = useFetch("Achievements?type=Achievements");
    const { data: socials } = useFetch("social");

    return (
        <section className="about">
            <div className="section-title">
                <h2>
                    we are <span>vision</span>
                </h2>

                <p className="section-subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, incidunt ducimus placeat sequi quis pariatur ea nostrum animi cumque a.
                </p>
            </div>

            <div className="container">

                <Stories />

                <div className="video">

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/giDIHLlgxoY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>

            </div>


            { error && <div>{ error }</div> }

            { isPending && <div>Loading...</div> }

            { achievements && <Achievements achievements={ achievements } /> }

            { socials && <Community socials={ socials } /> }
        </section>
    )
}

export default About;