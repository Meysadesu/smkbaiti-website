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
            image: "https://raw.githubusercontent.com/Meysadesu/Meysadesu/main/Tanpa%20judul.png"
        },
        {
            id: 2,
            image: "https://smkalbasthomi.sch.id/wp-content/uploads/2020/07/56842940_129883998159676_785175842026199691_n-1.jpg",

        },
        {
            id: 3,
            image: "https://cdn.kincir.com/2/2fafpZMrKuTUN5DiIJj7d3F5A04JnaH5i5EyssMzLTI/transform/rs:fill:764:400/src/production/2021-02/4ed39ca8cc7f13498ac04f270c14919d.jpg"
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
