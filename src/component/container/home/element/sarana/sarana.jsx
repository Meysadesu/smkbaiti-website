import { Fragment } from "react"
import CardComponent from "./component/card-component"
import HeaderComponent from "./component/header-component"

const Sarana = function() {
    return(
        <Fragment>
            <div id="wrapper" className="h-full lg:h-[800px] relative w-full">
                <div id="sub-wrapper" className="h-full w-[90%] lg:w-[70%] text-center m-auto justify-center flex items-center">
                    <div className="w-full">
                        <HeaderComponent/>
                        <div id="container-card" className=" lg:w-[80%] lg:m-auto flex justify-around flex-col lg:flex-row">
                            <CardComponent/>
                            <CardComponent/>
                            <CardComponent/>
                            <CardComponent/>
                        </div>
                    </div> 
                </div>
            </div>   
        </Fragment>
    )
}

export default Sarana