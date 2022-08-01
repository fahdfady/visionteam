// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const Trophies = ({ trophies }) => {

    return (
        <section className="trophies">

            <div className="section-title">
                <h2>
                    our
                    <span> achievements </span>
                </h2>

                <p>
                    the vision is always clear
                </p>
            </div>

            <div className="layer">

                <Swiper
                    
                    slidesPerView={ 4 }
                >

                    { trophies &&
                        trophies.map((trophie) => (
                            <SwiperSlide key={ trophie.id }>
                                <div className="trophie">
                                    <div className="competition-image">
                                        <img src={ trophie.image } alt="" />
                                    </div>

                                    <h3>
                                        <span> { trophie.competition } </span>
                                        { trophie.season }
                                    </h3>

                                    <p>
                                        { trophie.place }
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Trophies;