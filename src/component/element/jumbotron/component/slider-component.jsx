import { Fragment, useState } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/autoplay'
import SwiperCore, { Autoplay } from 'swiper'

const SliderComponent = function() {
    
    SwiperCore.use([Autoplay]);

    const [image] = useState([
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80"
        }
    ])


    return (
        <Fragment>
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false}}>
                        {image.map((img) => {
                            return <SwiperSlide>
                                        <div id="background-image-cover" className="w-[100vw] h-[100vh] bg-cover bg-no-repeat" style={{ backgroundImage : `url(${img.image})`}}>
                                        </div>
                                    </SwiperSlide>
                            })}
                </Swiper>
        </Fragment>
    )
}

export default SliderComponent
