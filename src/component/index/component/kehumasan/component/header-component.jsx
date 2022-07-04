import {Fragment} from "react"

const HeaderComponent = function() {
	return (
		<Fragment>
			<p id="header" className=" text-[30px] lg:text-[45px] text-center font-poppins text-green mb-[10px]">
	    			GALLERY
	    		</p>
	    		<p id="sub-header" className="text-[15px] lg:text-[18px] opacity-50 font-open-sans text-center m-auto w-[90%] lg:w-[50%] mb-[30px]">
	    			Gallery kegiatan yang di lakukan oleh SMK BAITUL ATIEQ dengan Masyarakat 
	    		</p>
		</Fragment>
	)
}

export default HeaderComponent
