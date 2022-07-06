import { Fragment } from "react"

const WhatisComponent = function({name, whatis}) {
    return (
        <Fragment>
            <div className="h-full w-full mt-[90px] lg:mt-0 mb-[200px]">
                <div className="w-full lg:w-[60%] h-full m-auto text-center">
                    <p id="header" className=" text-[30px] text-green font-poppins">Apa itu?</p>
                    <p className=" text-[40px] text-green font-poppins w-[90%] lg:w-full m-auto">{name}</p>
                    <p className=" w-[90%] lg:w-full m-auto font-open-sans opacity-60 my-10">{ whatis }</p>
                </div>
            </div>
        </Fragment>
    )
}

export default WhatisComponent
