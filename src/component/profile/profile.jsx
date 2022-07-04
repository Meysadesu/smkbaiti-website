import { Fragment } from "react"
import JumbotronComponent from "./component/jumbotron/jumbotron-component"
import PendiriComponent from "./component/founder/founder-component"
import VisiMisiComponent from "./component/visimisi/visimisi-component"

const Profile = function() {
    console.log(window.location.pathname)
    return(
        <Fragment>
            <div id="wrapper" className="h-full w-full">
                <JumbotronComponent/>
                <PendiriComponent/>
                <VisiMisiComponent/>
            </div>
        </Fragment>
    )
}

export default Profile