import { Fragment } from "react"
import Typed from "react-typed"
import ButtonComponent from "../../button/button"

const LeftComponent = function() {
    return (
        <Fragment>
            <div id="left-section"
                     className="w-full sm:w-[60%] h-full z-40 flex items-center justify-center">
                        <div className="sub w-full sm:w-[80%]">
                            <h1 className=" font-poppins text-[35px] sm:text-[60px] text-white">SMK BAITUL ATIEQ</h1>
                            <h1 className=" font-poppins text-[35px] sm:text-[60px] text-white sm:mb-4 sm:mt-[-20px]">POKO</h1>
                            <h1 className=" font-poppins text-[20px] mb-[50px] sm:m-0 sm:text-[30px] text-white"> MENCETAK! <span className="w-[20px] h-[10px] bg-slate-600"></span>
                            <Typed
                                strings={[
                                    "Insan yang Kompeten",
                                    "Dan",
                                    "Islami",
                                ]}
                                typeSpeed={150}
                                backSpeed={100}
                                loop
                            ></Typed>
                            </h1>
                            <p className="text-white text-[18px] hidden sm:block font-open-sans mb-16">SMK Al Basthomi Loceret merupakan Lembaga Pendidikan Menengah Kejuruan yang ada di Yayasan Pendidikan Nahdlatul Ulama Ponpes Mojosari Nganjuk, yang Memiliki 4 Kopetensi Keahian yaitu Rekayasa Perangkat Lunak, Multimedia, Teknik Otomotif Ototronik dan Teknik Pemesinan.</p>
                           <ButtonComponent/> 
                        </div>
                    </div>
        </Fragment>
    )
}

export default LeftComponent
