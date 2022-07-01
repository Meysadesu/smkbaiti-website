import { Fragment } from "react"

const HeaderComponent = function() {
    return (
        <Fragment>
            <p id="header-sarana" className="text-[30px] sm:text-[45px] font-poppins text-green mb-3">
                MENCETAK INSAN YANG KOMPETEN <br></br> DAN BERJIWA ISLAMI
            </p>
            <p id="sub-header-sarana" className="text-[14px] sm:text-[18px] w-[80%] text-black opacity-50 font-open-sans m-auto mb-9">
		Melalui Pembinaan akhlaqul karimah sebagai pondasi utama dan dipadu dengan pendidikan keahlian yang didukung dengan pengajar yang ahli dibidangnya, serta peralatan praktikum yang memenuhi, siap mencetak generasi yang unggul dan siap kerja.
	    </p>
        </Fragment>
    )
}

export default HeaderComponent
