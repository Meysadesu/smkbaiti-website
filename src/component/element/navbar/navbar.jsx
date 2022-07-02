import { Fragment } from "react"
import LeftComponent from "./component/left-component"
import RightComponent from "./component/right-component"

const Navbar = function() {
    return (
        <Fragment>
            <div id="container-navbar" className=" text-white z-30 h-[95px] relative sm:w-full">
                <div id="sub-container-navbar" className="w-[100%] sm:w-[80%] h-full m-auto flex justify-between">
                	<LeftComponent/>
                    <RightComponent/>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar
