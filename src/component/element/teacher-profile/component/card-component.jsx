import {Fragment} from "react"

const CardComponent = function() {
	return(
		<Fragment>
			<div id="wrapper-crad-for-teacher-profile" className=" block sm:flex justify-around w-full h-full sm:h-[400px]">
				<div id="image-cover" className=" w-full sm:w-[30%] h-[250px] sm:h-full bg-green rounded-[10px] bg-cover bg-no-repeat sm:mt-0" style={{ backgroundImage : 'url()'}}></div>
				<div id="description" className="h-full w-full sm:w-[60%] flex flex-col border-box">
					<p id="name-teacher" className="font-poppins text-green text-[45px]">
						Fahmi Sitatur Rochim
					</p>
					<p id="position" className="font-poppins text-[22px]">
						PENGAJAR
					</p>
					<p id="description" className="w-[70%] opacity-50 font-open-sans mt-5">
						Melalui Pembinaan akhlaqul karimah sebagai pondasi utama dan dipadu dengan pendidikan keahlian yang didukung dengan pengajar yang ahli dibidangnya, serta peralatan praktikum yang memenuhi, siap mencetak generasi yang unggul dan siap kerja.	
					</p>
				</div>
			</div>	
		</Fragment>
	)
}

export default CardComponent
