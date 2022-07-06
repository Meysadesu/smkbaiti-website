import { Fragment } from "react"
import { MISI, Tujuan } from "./untils/untils"

const VisiMisiComponent = function() {
    return (
        <Fragment>
            <div id="wrapper" className="w-full h-full my-8 lg:my-[150px]">
                <div id="sub" className="h-full text-center mt-[80px] w-[90%] lg:w-[70%] m-auto flex flex-col lg:flex-row">
                    <div id="left" className=" my-9 lg:my-0 h-full w-full lg:w-[50%]">
                        <p id="header" className="text-center font-poppins text-green text-[40px]">
                            VISI
                        </p>
                        <p id="ctx" className=" w-[90%] lg:w-[80%] m-auto opacity-50 font-open-sans">
                            Mewujudkan Sumber Daya Manusia yang Berakhlak Mulia yang Mampu Bersaing Dalam Dunia Kerja Secara Global
                        </p>
                    </div>
                    <div id="right" className="h-full w-full lg:w-[50%] left-8">
                        <p id="header" className="text-center font-poppins text-green text-[40px]  mb-6">
                            MISI
                        </p>
                        {
                            MISI.map(e => {
                                return (
                                    <p id="ctx" className=" w-[90%] lg:w-[80%] m-auto opacity-50 font-open-sans mb-6">
                                        {e.id}. {e.Messages}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="h-full m-auto my-9 lg:my-44 text-center">
                    <p id="header" className="text-center font-poppins text-green text-[40px]">
                        TUJUAN
                    </p>
                    <p className="w-[90%] m-auto lg:w-[40%] opacity-50 font-open-sans mb-4">TUJUAN SMK BAITUL ATIEQ</p>
                    {
                        Tujuan.map(e => {
                            return (
                                <p id="ctx" className="w-[90%] m-auto lg:w-[50%] opacity-50 font-open-sans mb-4">
                                    {e.id}. {e.Messages}
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default VisiMisiComponent
