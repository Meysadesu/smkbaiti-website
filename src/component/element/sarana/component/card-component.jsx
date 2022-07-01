import { Fragment } from "react"
import { ChatLeftDotsFill } from "react-bootstrap-icons"

const CardComponent = function(props) {
    return(
        <Fragment>
            <div id="body-card" className="w-[300px] m-auto mb-3 sm:mb-0 sm:w-[230px] h-[350px] bg-[#F6F6F6] rounded-2xl text-center">
                <ChatLeftDotsFill fontSize={65} className="m-auto opacity-50 mt-7 mb-7"/>
                <h1 className=" text-[22px] font-poppins text-green">
                    FAST RESPONSE
                </h1>
                <p className=" w-[80%] h-full m-auto  mt-4 opacity-40 font-open-sans">
                    waifu saya sangat kuat bahkan bisa mengangkat saya sendiri, cih mengiri saya
                </p>
            </div>
        </Fragment>
    )
}

export default CardComponent
