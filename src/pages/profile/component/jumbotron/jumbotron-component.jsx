import { Fragment } from "react"

const JumbotronComponent = function() {
    return (
        <Fragment>
            <div id="wrapper" className="w-full h-[100vh] mt-[-95px]">
                <div id="dub-wrapper" className="w-full h-full  m-auto flex flex-col lg:flex-row">
                    <LeftSide/>
                    <RightSide/>
                </div>    
            </div>
        </Fragment>
    )
}

const LeftSide = function() {
    return(
        <Fragment>
            <div id="left-side" className=" w-full lg:w-[50%] h-full bg-green p-[20px] flex flex-col justify-center box-border">
                <p className="text-[40px] mt-9  lg:ml-[150px] text-white font-poppins">PROFILE</p>
                <p className=" font-poppins w-[30%] lg:ml-[150px] text-center text-[80px] lg:text-[100px] text-white">SMK BAITUL ATIEQ</p>
            </div>
        </Fragment>
    )
}

const RightSide = function() {
    return(
        <Fragment>
            <div id="left-side" className="w-[50%] hidden lg:block h-full bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80)` }}>
                <div className="h-full w-full bg-black opacity-50"></div>
            </div>
        </Fragment>
    )
}

export default JumbotronComponent