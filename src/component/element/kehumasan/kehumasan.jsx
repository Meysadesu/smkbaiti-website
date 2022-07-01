import { Fragment } from "react"
import HeaderComponent from "./component/header-component"
import ImageComponent from "./component/image-component"

const Kehumasan = function() {
    return (
        <Fragment>
		 <div id="wrapper-kehumasan" className="relative w-full h-full">
	    		<div id="sub-wrapper-for-kehumasan" className="w-full sm:w-[65%] h-full m-auto">
				<HeaderComponent/>
	    			<div id="wrapper-for-image" className="h-full w-full p-[10px] border-box flex flex-wrap justify-around">
					<ImageComponent/>
	    				<ImageComponent/>
	    				<ImageComponent/>
	    				<ImageComponent/>
					<ImageComponent/>
	    				<ImageComponent/>
					<ImageComponent/>
					<ImageComponent/>
					<ImageComponent/>
				</div>
	    		</div>
	    	</div>
	</Fragment>
    )
}

export default Kehumasan
