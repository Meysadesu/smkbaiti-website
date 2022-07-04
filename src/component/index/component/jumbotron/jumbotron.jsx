import { Fragment } from "react"
import LeftComponent from "./component/left-component"
import RightComponent from "./component/right-component"
import SliderComponent from "./component/slider-component"

const Jumbotron = function() {
    return(
        <Fragment>
            <div id="wrapper-jumbotron" className=" -z-10 h-[100vh] w-fullS overflow-hidden mt-[-95px] flex justify-center mb-[80px] lg:mb-0">
                <div id="content" className="h-full w-[90%] flex absolute justify-center">
                    <LeftComponent/>
                    <RightComponent/>
                </div>
                <div className="absolute z-[30] w-full h-[100vh] bg-black opacity-50"></div>
                <SliderComponent/>
            </div>
        </Fragment>
    )
}

export default Jumbotron
