import { Fragment } from "react"

const CardComponent = function(props) {
    return(
        <Fragment>
            <div id="body-card" className="w-[300px] m-auto mb-3 lg:mb-0 lg:w-[230px] h-[350px] bg-[#F6F6F6] rounded-2xl text-center">
                {props.logo}
                <h1 className=" text-[22px] font-poppins text-green">
                   {props.header}
                </h1>
                <p className=" w-[80%] h-full m-auto  mt-4 opacity-40 font-open-sans">
                    {props.description}
                </p>
            </div>
        </Fragment>
    )
}

export default CardComponent
