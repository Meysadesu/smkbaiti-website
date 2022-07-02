import { Fragment } from "react"
import { Link } from "react-router-dom"
import Typed from "react-typed"

const Footer = function() {
    return (
        <Fragment>
			<p className=" font-poppins my-24 text-green text-center text-[35px]">SMK BISA! <span className="text-white">
			<Typed
				className=" ml-3 bg-green rounded-sm px-[10px] box-border"
                strings={[
                    "Insan yang Kompeten",
                    "Dan",
                    "Islami",
                	]}
                typeSpeed={150}
                backSpeed={100}
                loop
            ></Typed>
			</span> 
			</p>
            <div id="footer-wraper" className="w-full h-full mt-9 bg-green p-7 box-border">
				<div id="sub-wrapper" className="w-full lg:w-[65%] m-auto h-full lg:h-[250px] bg-green flex flex-col lg:flex-row">
	    			<LeftSide/>
	    			<RightSide/>
	    		</div>
            </div>
        </Fragment>
    )
}

const LeftSide = function() {
	return <Fragment>
			<div id="wrapper" className="h-full w-full lg:w-[50%] p-[10px] box-border text-white font-open-sans">
				<ul>
					<li className="font-poppins text-[60px] w-[80%]">SMK BAITUL ATIEQ</li>
					<li>copyright©2022</li>
				</ul>
			</div>
		</Fragment>	
}

const RightSide = function() {
	return <Fragment>
			<div id="wrapper" className="h-full w-full lg:w-[50%] p-[20px] box-border hidden lg:block">
				<ul>
					<li className=" text-[30px] text-white font-poppins">informasi : </li>
					<ul className=" ml-5 text-[20px] text-white">
						<li>
							<Link to={""}>- PPDB</Link>
						</li>
						<li>
							<Link to={""}>- PROFILE SEKOLAH</Link>
						</li>
						<li>
							<Link to={""}>- PROGRAM KEAHLIAN</Link>
						</li>
					</ul>
				</ul>
			</div>
		</Fragment>	
}
export default Footer
