// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Results = ({ results }) => {

    return (
        <section className="results">
            <div className="section-title">
                <h2>
                    Matches
                </h2>
                <p >
                    support us <span> #VIS_UP</span>
                </p>
            </div>


            <Swiper
                slidesPerView={ 1 }
                navigation
            >


                { results.map((result) => (
                    <SwiperSlide key={ result.id }>
                        <div className="match row">
                            <div className="column left-column">
                                <div className="match-status ">
                                    { result.status }
                                </div>
                                <div className="watch">
                                    <p>watch:</p>
                                    <div className="links">
                                        <a href={ result.twitch }>
                                            <i className="fa-brands fa-twitch"></i>
                                        </a>
                                        <a href={ result.youtube }>
                                            <i className="fa-brands fa-youtube"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="column score">
                                <div className="home-team team">
                                    <div className="team-logo">
                                        <img src="./logo.webp" />
                                    </div>
                                    <div className="team-name">Vision</div>
                                </div>

                                <div className="result">
                                    <div className="home-result">{ result.visscore }</div>
                                    <div className="divider-result">:</div>
                                    <div className="away-result">
                                        { result.rivalscore }
                                    </div>
                                </div>

                                <div className="away-team team">
                                    <div className="team-logo">
                                        <img src={ result.rivallogo } />
                                    </div>
                                    <div className="team-name">
                                        { result.rival }
                                    </div>
                                </div>
                            </div>
                            <div className="column right-column">
                                <div className="competition">
                                    { result.competition }
                                </div>
                                <div className="date">{ result.date }</div>
                            </div>
                        </div>
                    </SwiperSlide>
                )) }
            </Swiper>

        </section>
    )
}

export default Results;