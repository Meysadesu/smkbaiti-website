import { Fragment } from "react"
import JumbotronComponent from "./element/jumbotron/jumbotron-component"
import Pendiri from "./element/pendiri/pendiri"
import VisiMisi from "./element/visimisi/visimisi"

const Profile = function() {
    console.log(window.location.pathname)
    return(
        <Fragment>
            <div id="wrapper" className="h-full w-full">
                <JumbotronComponent/>
                <Pendiri/>
                <VisiMisi/>
            </div>
        </Fragment>
    )
}

export default Profile