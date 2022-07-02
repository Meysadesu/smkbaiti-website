import { Fragment } from "react";
import ButtonComponent from "../button/button";

const PPDB = function() {
    return (
        <Fragment>
            <div id="wrapper-section-ppdb" className="relative w-full h-full sm:h-[600px] mb-[100px]">
		<div id="sub-wrapper-for-ppdb" className="w-full sm:w-[65%] h-full  m-auto p-[20px] border-box flex justify-around items-center">
			<LeftSideComponent/>
	    		<RightSideComponent/>
	    	</div>
            </div>
        </Fragment>
    )
}

const LeftSideComponent =function() {
	return (
		<Fragment>
			<div id="left-side-component" className=" w-full sm:w-[40%] p-[10px] border-box">
				<p id="ppdb-warning" className="font-poppins text-[45px]">
					!Perhatian
				</p>
				<p id="header" className="font-poppins mb-16 text-[50px] sm:text-[60px] text-green">
	    				PENERIMAAN PESERTA DIDIK BARU DIBUKAAAA
	    			</p>
				<ButtonComponent/>	
		    </div>	
		</Fragment>
	)
}

const RightSideComponent =function() {
	return (
		<Fragment>
			<div id="right-side-component" className="w-[40%] h-full rounded-[10px] p-[10px] border-box bg-green bg-cover bg-no-repeat hidden sm:block" style={{ backgroundImage : 'url()'}}></div>	
		</Fragment>
	)
}

export default PPDB
