import {Fragment} from "react"

const ImageComponent = function(props) {
	return (
		<Fragment>
			<div id="image" className="w-[32%] h-[140px] lg:h-[200px] bg-green mb-[12px] rounded-[10px] bg-cover bg-no-repeat" style={{ backgroundImage : `url(${props.image})`}}></div>
		</Fragment>
	)
}

export default ImageComponent
