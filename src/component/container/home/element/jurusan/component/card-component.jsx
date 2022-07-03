import {Fragment, useEffect} from "react"
import ButtonComponent from "../../button/button"
import Aos from "aos"
import 'aos/dist/aos.css'

const CardComponent = function(props) {
	useEffect(()=>{
        Aos.init({
            duration: 500
        })
    },[])
	return(
		<Fragment>
			<div id="card-container" className="w-full h-full p-[10px] border-box mb-[100px] lg:mb-[10px] flex flex-col lg:flex-row justify-evenly">
				<div id="img-cover"  data-aos="fade-right" className={ props.id % 2 === 0 ? " h-[250px] lg:h-[450px] w-[95%] m-auto lg:m-0 lg:w-[30%] flex justify-center items-center bg-cover bg-no-repeat relative lg:order-last rounded-[10px]" : " h-[250px] lg:h-[450px] w-[95%] m-auto lg:m-0 lg:w-[30%] flex justify-center items-center bg-blue-700 bg-cover bg-no-repeat relative rounded-[10px]"} style={{ backgroundImage : `url(${props.image})`}} ></div>
				<div id="description" data-aos="fade-left" className="h-[450px] w-full lg:w-[45%] p-[10px] border-box">
					<p id="program" className="text-[30px] font-poppins">
						Program keahlian:	
					</p>
					<p id="header" className="text-[30px] font-poppins text-green mb-[10px]">
						{props.name}
					</p>
					<div id="description" className="w-[100%] h-full font-open-sans">
						<p className="mb-[20px] opacity-60">
							{props.description1}
						</p>
						<p className="mb-[40px] opacity-60">
							{props.description2}
						</p>
						<ButtonComponent path={props.path}/>
					</div>	
				</div>	
			</div>
		</Fragment>
	)
}

export default CardComponent
