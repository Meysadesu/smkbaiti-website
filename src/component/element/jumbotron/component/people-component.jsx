import { Fragment, useState } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/autoplay'
import SwiperCore, { Autoplay } from 'swiper'

const PeopleComponent = function() {

    const [imagePeople] = useState([
        "https://e7.pngegg.com/pngimages/130/591/png-clipart-sakura-haruno-kakashi-hatake-naruto-anime-sakura-fictional-character-cartoon.png",
        "https://e7.pngegg.com/pngimages/903/962/png-clipart-temari-naruto-uzumaki-shikamaru-nara-sakura-haruno-naruto-halloween-costume-cartoon.png"
    ])

    SwiperCore.use([Autoplay]);
    return (
        <Fragment>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false}}>
                        {imagePeople.map(img => {
                            return <SwiperSlide>
                                        <div key={img}
                                             className="w-[450px] h-[85vh] m-auto bg-cover bg-no-repeat hidden sm:block"
                                             style={{ backgroundImage : `url(${img})`}}>
                                        </div>
                                    </SwiperSlide>
                            })}
                </Swiper>
        </Fragment>
    )
}

export default PeopleComponent
