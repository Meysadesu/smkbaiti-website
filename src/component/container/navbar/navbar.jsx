import { Fragment } from "react"
import LeftComponent from "./component/left-component"
import RightComponent from "./component/right-component"

const Navbar = function() {
    console.log(window.location.pathname)
    return (
        <Fragment>
            <div id="container-navbar" className={'text-white z-[100] h-[80px] lg:h-[95px] relative lg:w-full'}>
                <div id="sub-container-navbar" className="w-full lg:w-[80%] h-full m-auto flex justify-between">
                	<LeftComponent/>
                    <RightComponent/>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar
