import { Fragment } from "react"

const JumbotronComponent = function({name}) {
    return (
        <Fragment>
            <div className="w-full h-[60vh] bg-green mt-[-98px] flex flex-col items-center justify-center">
                <p className=" text-[20px] lg:text-[30px] font-poppins text-white">SMK BAITUL ATIEQ</p>
                <p className=" w-[90%]l lg:text-[60px] font-poppins text-white">{name}</p>
            </div>
        </Fragment>
    )
}

export default JumbotronComponent
