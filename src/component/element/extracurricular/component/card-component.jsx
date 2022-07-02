import {Fragment} from "react"
//import ButtonComponent from "../../button/button"

const CardComponent = function(props) {
	return (
		<Fragment>
			<div id="wrapper-card" className="relative m-auto sm:m-0 flex flex-col items-center justify-center w-full h-full sm:flex-row">
				<LeftSideComponent image={props.image}/>	
				<RightSideComponent id={props.id} extra={props.extra} description={props.description}/>			
			</div>
		</Fragment>
	)
}

const LeftSideComponent = function(props){
	return (
		<Fragment>
			<div id="container-side-left" className="w-full sm:w-[30%]"> 	
				<div id="image-cover" className="w-[95%] m-auto rounded-[10px] h-[250px] sm:h-[483px] bg-cover bg-no-repeat" style={{backgroundImage : `url(${props.image})`}}>
				</div>
			</div>
		</Fragment>
	)
}

const RightSideComponent = function(props) {
	return (
		<Fragment>
			<div id="container-side-right" className="w-full sm:w-[70%] p-[20px] h-[150px]x] sm:h-[483px] border-box rounded-[10px]"> 	
				<p className="text-[30px] font-poppins">Ektrakulikuler :</p>
				<p id="header" className="text-[35px] font-poppins text-green mb-3">
					{props.extra}
				</p>
				<div id="description" className="w-[90%]">
					<p className="opacity-50 mb-14 font-open-sans">
						{props.description}
					</p>	
				</div>
			</div>
		</Fragment>
	)
}

export default CardComponent
