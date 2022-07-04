import Aos from "aos"
import { Fragment, useEffect } from "react"
import Typed from "react-typed"
import ButtonComponent from "../../button/button"
import 'aos/dist/aos.css'

const LeftComponent = function() {
    useEffect(()=>{
        Aos.init({
            duration: 2000
        })
    },[])
    return (
        <Fragment>
            <div id="left-section" className="w-full lg:w-[60%] h-full z-40 flex items-center justify-center">
                        <div className="sub w-full sm:w-[80%]" data-aos="fade-right">
                            <h1 className=" font-poppins text-[35px] lg:text-[60px] text-white">SMK BAITUL ATIEQ</h1>
                            <h1 className=" font-poppins text-[35px] lg:text-[60px] text-white lg:mb-4 lg:mt-[-20px]">POKO</h1>
                            <h1 className=" font-poppins text-[20px] mb-[50px] lg:m-0 lg:text-[30px] text-white"> MENCETAK! <span className="w-[20px] h-[10px] bg-slate-600"></span>
                            <Typed
                                strings={[
                                    "Insan yang Kompeten",
                                    "Dan",
                                    "Islami",
                                ]}
                                typeSpeed={100}
                                backSpeed={100}
                                loop
                            ></Typed>
                            </h1>
                            <p className="text-white text-[18px] hidden lg:block font-open-sans mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a dignissim ligula, eget feugiat felis. Nam eu tincidunt dui, at viverra elit. Proin pretium blandit erat malesuada mattis. Vestibulum id dictum orci. Donec accumsan in mauris in bibendum. Sed bibendum volutpat maximus. Pellentesque pharetra vitae turpis ac semper.</p>
                           <ButtonComponent path="/smk/profile"/> 
                        </div>
                    </div>
        </Fragment>
    )
}

export default LeftComponent
