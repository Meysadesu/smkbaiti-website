import { Fragment } from "react"
import JumbotronComponent from "./jumbotron/jumbotron-component"
import WhatisComponent from "./whats-is/whats-is-component"
import WhatslearnComponent from "./whats-learn/whatslearn-component"

const Majorpage = function() {
    return(
        <Fragment>
            <div id="wrapper" className="h-full w-full">
                <JumbotronComponent/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#019267" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,229.3C384,224,480,160,576,112C672,64,768,32,864,53.3C960,75,1056,149,1152,186.7C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
                <WhatisComponent/>
                <WhatslearnComponent/>
            </div>
        </Fragment>
    )
}

export default Majorpage