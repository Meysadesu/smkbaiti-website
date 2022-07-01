import { Fragment } from "react"
import DarkComponent from "./component/dark-component"
import LeftComponent from "./component/left-component"
import RightComponent from "./component/right-component"
import SliderComponent from "./component/slider-component"

const Jumbotron = function() {
    return(
        <Fragment>
            <div id="wrapper-jumbotron" className=" -z-10 h-[100vh] w-full relative overflow-hidden mt-[-95px] flex justify-center mb-[80px] sm:mb-0">
                <div id="content" className="h-full w-[90%] flex absolute justify-center">
                    <LeftComponent/>
                    <RightComponent/>
                </div>
                <DarkComponent/>
                <SliderComponent/>
            </div>
        </Fragment>
    )
}

export default Jumbotron
