import { Fragment } from "react"

const LeftComponent = function() {
    return (
        <Fragment>
            <div id="section-left"
                 className="h-full w-full sm:w-[50%] sm:w-[20%] flex items-center">
                <div id="logo" className=" h-[60px] w-[65px] bg-cover">
                </div>
                <div id="title-logo" className="title-school font-poppins sm:ml-[10px]">
                    <p>SMK</p>
                    <p>BAITUL ATIEQ</p>
                </div>
            </div>
        </Fragment>
    )
}

export default LeftComponent
