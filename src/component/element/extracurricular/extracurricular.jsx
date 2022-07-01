import {Fragment} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/autoplay'
import SwiperCore, { Autoplay } from 'swiper'
import CardComponent from "./component/card-component"
import Header from "./component/header-component"
import { ExtracurrilcularData } from "./untils/extracurricularData"

const Extracurricular = function() {
	SwiperCore.use([Autoplay]);
	return(
		<Fragment>
			<div id="wrapper" className="w-full h-[700px] flex flex-col justify-center items-center mb-[80px]">
				<Header/>
				<div id="sub-wrapper" className="w-full sm:w-[60%] sm:h-[500px] m-auto relative p-[10px] border-box rounded-[10px]">
					<Swiper
                			modules={[Autoplay]}
                			loop={true}
                			autoplay={{
                    			delay: 5000,
                    			disableOnInteraction: false}}>
										{
											ExtracurrilcularData.map((extra)=> {
												return (
													<SwiperSlide>
														<CardComponent id={extra.id} image={extra.image} extra={extra.extra} description={extra.description}/>
                                    				</SwiperSlide>
												)	
											})
										}			
					</Swiper>
				</div>				
			</div>
		</Fragment>
	)
}

export default Extracurricular
