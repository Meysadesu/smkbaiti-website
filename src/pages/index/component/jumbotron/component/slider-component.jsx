import { Fragment } from "react"
import { ImageSlider } from "../untils/untils"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/autoplay'
import SwiperCore, { Autoplay } from 'swiper'

const SliderComponent = function() {
    SwiperCore.use([Autoplay])
    return (
        <Fragment>
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false}}>
                        {ImageSlider.map((img) => {
                            return <SwiperSlide>
                                        <div id="background-image-cover" className="w-[100vw] h-[100vh] bg-cover bg-no-repeat" style={{ backgroundImage : `url(${img.image})`}}></div>
                                    </SwiperSlide>
                            })}
                </Swiper>
        </Fragment>
    )
}

export default SliderComponent
