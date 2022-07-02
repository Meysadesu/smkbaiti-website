import { Fragment } from "react"

const LeftComponent = function() {
    return (
        <Fragment>
            <div id="section-left" className="h-full w-full lg:w-[20%] flex items-center ml-3 lg:ml-0">
                <div id="logo" className=" h-[50px] w-[50px] lg:h-[55px] lg:w-[55px] bg-cover mr-3" style={{backgroundImage: `url(https://raw.githubusercontent.com/Meysadesu/cdn-for-smkbaiti/main/logo512.png?token=GHSAT0AAAAAABWCJTTG5HTK5X33ZFO7EWPAYWAJQGA)`}}>
                </div>
                <div id="title-logo" className="title-school font-poppins lg:ml-[10px]">
                    <p>SMK</p>
                    <p>BAITUL ATIEQ</p>
                </div>
            </div>
        </Fragment>
    )
}

export default LeftComponent
