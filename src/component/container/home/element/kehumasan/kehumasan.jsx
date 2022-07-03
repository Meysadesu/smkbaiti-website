import { Fragment } from "react"
import HeaderComponent from "./component/header-component"
import ImageComponent from "./component/image-component"
import { ImageHumas } from "./untils/untils"

const Kehumasan = function() {
    return (
        <Fragment>
		 <div id="wrapper-kehumasan" className="relative w-full h-full">
	    		<div id="sub-wrapper-for-kehumasan" className="w-full lg:w-[65%] h-full m-auto">
				<HeaderComponent/>
	    			<div id="wrapper-for-image" className="h-full w-full p-[10px] border-box flex flex-wrap justify-around">
						{
							ImageHumas.map(img => {
								return <ImageComponent image={img}/>
							})
						}
					</div>
	    		</div>
	    	</div>
	</Fragment>
    )
}

export default Kehumasan
