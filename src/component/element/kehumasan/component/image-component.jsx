import {Fragment} from "react"

const ImageComponent = function() {
	return (
		<Fragment>
			<div id="image" className="w-[32%] h-[140px] sm:h-[200px] bg-green mb-[12px] rounded-[10px] bg-cover bg-no-repeat" style={{ backgroundImage : 'url()'}}></div>
		</Fragment>
	)
}

export default ImageComponent
