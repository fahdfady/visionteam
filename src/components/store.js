// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Keyboard } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';


const Store = ({ store }) => {
    return (
        <section className="banner-store">

            <Swiper
                modules={ [Navigation, Pagination, Scrollbar, Keyboard] }
                loop={ true }
                slidesPerView={ 1 }
                navigation
                keyboard
                scrollbar={ { draggable: false } }
                pagination={ { clickable: true } }
            >
                { store && store.map((product) => (

                    <SwiperSlide key={ product.id }>

                        <a href="#0" title={ product.name }>
                            <div className="image-container">
                                <img src={ product.image } alt={ product.name } />
                            </div>
                        </a>

                    </SwiperSlide>

                )) }
            </Swiper>

        </section>
    )
}

export default Store;