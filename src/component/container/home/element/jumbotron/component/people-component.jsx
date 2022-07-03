import { Fragment } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/autoplay'
import SwiperCore, { Autoplay } from 'swiper'
import { ImagePeople } from "../untils/untils"

const PeopleComponent = function() {

    SwiperCore.use([Autoplay]);
    return (
        <Fragment>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false}}>
                        {ImagePeople.map(img => {
                            return (
                                <SwiperSlide>
                                    <div key={img}
                                         className="w-[450px] h-[85vh] m-auto bg-cover bg-no-repeat hidden sm:block"
                                         style={{ backgroundImage : `url(${img})`}}>
                                    </div>
                                </SwiperSlide>
                            )})}
                </Swiper>
        </Fragment>
    )
}

export default PeopleComponent
