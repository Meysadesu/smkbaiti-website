import { Fragment } from "react"

const Header = function() {
	return (
		<Fragment>
			<p id="header" className=" mt-4 text-center font-poppins text-green text-[45px]">
				KEGIATAN SISWA
			</p>
			<p className=" m-auto text-center font-open-sans text-black opacity-60  text-[18px] sm:w-[40%]">
				SMK BAITUL ATIEQ juga menyediakan beberapa ekstrakulikuler untuk mengembangkan bakat siswa di bidang yang di minati
			</p>
		</Fragment>
	)
}

export default Header
