import { Fragment } from "react"
import PeopleComponent from "./people-component"

const RightComponent = function() {
    return(
        <Fragment>
            <div id="right-section"
                 className="w-[40%] h-full relative z-50 sm:flex items-end hidden">
                <PeopleComponent/>
            </div>
        </Fragment>
    )
}

export default RightComponent
