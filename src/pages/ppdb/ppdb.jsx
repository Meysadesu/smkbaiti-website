import { Fragment } from "react"
import InfoPPDB from "./component/infomation-component"

const PPDB = function() {
    return (
        <Fragment>
            <div id="wrapper" className="w-full h-full">
                <JumbotronComponent/>
                <InfoPPDB/>
            </div>
        </Fragment>
    )
}

const JumbotronComponent = function() {
    return (
        <Fragment>
            <div id="wrapper" className="w-full h-[100vh] bg-green relative mt-[-98px]">
                <div id="sub" className="h-full w-[90%] lg:w-[80%] m-auto flex">
                    <LeftSide/>
                    <RightSide/>
                </div>
            </div>
        </Fragment>
    )
}

const LeftSide = function() {
    return (
        <Fragment>
            <div id="left" className="h-full w-[50%] flex flex-col justify-center">
                <p className=" text-[30px] sm:text-[40px] mt-9 text-white font-poppins">!!!Peringatan</p>
                <p className=" font-poppins w-[80%] text-[50px] lg:text-[80px] text-white">PENERIMAAN PESERTA DIDIK BARU DIBUKAAAA</p>
            </div>
        </Fragment>
    )
}

const RightSide = function() {
    return (
        <Fragment>
            <div id="right" className="h-full w-[50%] hidden lg:block p-[160px] box-border">
                <div id="image-cover" className="h-full w-full bg-yellow-600 rounded-[10px] bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)`}}></div>
            </div>
        </Fragment>
    )
}

export default PPDB