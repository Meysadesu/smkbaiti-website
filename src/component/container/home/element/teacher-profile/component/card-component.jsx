import {Fragment} from "react"

const CardComponent = function(props) {
	return(
		<Fragment>
			<div id="wrapper-crad-for-teacher-profile" className=" block lg:flex justify-around w-full h-full lg:h-[400px]">
				<div id="image-cover" className=" w-full lg:w-[30%] h-[250px] lg:h-full bg-green rounded-[10px] bg-cover bg-no-repeat lg:mt-0" style={{ backgroundImage : `url(${props.image})`}}></div>
				<div id="description" className="h-full w-full lg:w-[60%] flex flex-col border-box mt-4 lg:mt-0">
					<p id="name-teacher" className="font-poppins text-green text-[35px] lg:text-[45px]">
						{props.name}
					</p>
					<p id="position" className="font-poppins text-[22px]">
						{props.jobs}
					</p>
					<p id="description" className="w-full lg:w-[70%] opacity-50 font-open-sans mt-5">
						{props.description}
					</p>
				</div>
			</div>	
		</Fragment>
	)
}

export default CardComponent
