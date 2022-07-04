import { Fragment } from "react"

const HeaderComponent = function() {
    return (
        <Fragment>
            <p id="header-sarana" className="text-[30px] lg:text-[45px] font-poppins text-green mb-3">
                MENCETAK INSAN YANG KOMPETEN <br></br> DAN BERJIWA ISLAMI
            </p>
            <p id="sub-header-sarana" className="text-[15px] lg:text-[18px] w-[80%] text-black opacity-50 font-open-sans m-auto mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dignissim ligula, eget feugiat felis. Nam eu tincidunt dui, at viverra elit. Proin pretium blandit erat malesuada mattis. Vestibulum id dictum orci. Donec accumsan in mauris in bibendum. Sed bibendum volutpat maximus. Pellentesque pharetra vitae turpis ac semper.
            </p>
        </Fragment>
    )
}

export default HeaderComponent
