// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Teams = ({ teams }) => {

    return (
        <section className="teams">
            <div className="section-title">
                <h2>
                    Vision E-sports <span> Teams </span>
                </h2>
                <p >
                    meet our squads
                </p>
            </div>

            <Swiper 
                spaceBetween={ 0 }
                slidesPerView={ 4 }
            >

                { teams.map((team) => (
                    <SwiperSlide key={ team.id }>
                        <div className="team-list">
                            <Link to={ `/team/${team.game}` } className="team-list-card">
                                <div className="team-list-img">
                                    <img src={ team.image } alt={ team.game } />
                                </div>

                                <div className="team-list-content">
                                    <h3 className="game-name">
                                        { team.game }
                                    </h3>

                                    <Link to={ `/team/${team.game}` } className="btn">
                                        view team
                                    </Link>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                )) }

            </Swiper>

        </section>
    )
}

export default Teams;