import { Fragment } from "react";
import CardComponent from "./component/card-component";

const PendiriComponent = function () {
    return ( 
            <Fragment>
                <div id="wrapper" className="h-full w-full">
                        <div id="sub" className="h-full  lg:mt-[80px] w-full lg:w-[70%] m-auto">
                            <CardComponent id={1}/>
                        </div>
                </div>
            </Fragment>        
     );
}

export default PendiriComponent;