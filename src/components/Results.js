import logo from '../assets/logo.svg'

// Import Swiper React components
import { Navigation, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';


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
                keyboard
                modules={ [Navigation, Keyboard] }
            >


                { results.map((result) => (
                    <SwiperSlide>
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
                                        <img alt="vision team" title="vision team" src={ logo } />
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
                                        <img alt={ result.rival + " team" } title={ result.rival + " team" } src={ result.rivallogo } />
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