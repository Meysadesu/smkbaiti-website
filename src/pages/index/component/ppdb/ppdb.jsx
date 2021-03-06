import { Fragment, useEffect } from "react";
import ButtonComponent from "../button/button";
import Aos from "aos"
import 'aos/dist/aos.css'

const PPDB = function() {
	useEffect(()=>{
        Aos.init({
            duration: 500
        })
    },[])
	return (
        <Fragment>
            <div id="wrapper-section-ppdb" className="relative w-full h-full lg:h-[600px] mb-[100px]">
				<div id="sub-wrapper-for-ppdb" className="w-full lg:w-[65%] h-full m-auto lg:p-[20px] border-box flex justify-around items-center">
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
			<div id="left-side-component" data-aos="fade-right" className=" w-[95%] overflow-hidden m-auto lg:m-0 lg:w-[40%] p-[10px] border-box">
				<p id="ppdb-warning" className="font-poppins text-[45px]">
					!Perhatian
				</p>
				<p id="header" className="font-poppins mb-16 text-[50px] lg:text-[60px] text-green">
	    			PENERIMAAN PESERTA DIDIK BARU DIBUKAAAA
	    		</p>
				<ButtonComponent path="/smk/ppdb"/>	
		    </div>	
		</Fragment>
	)
}

const RightSideComponent =function() {
	return (
		<Fragment>
			<div id="right-side-component"  data-aos="fade-left" className="w-[40%] h-full relative rounded-[10px] p-[10px] border-box bg-green bg-cover bg-no-repeat hidden lg:block" style={{ backgroundImage : 'url(https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)'}}></div>	
		</Fragment>
	)
}

export default PPDB
