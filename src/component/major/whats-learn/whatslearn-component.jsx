import { Fragment } from "react"

const WhatslearnComponent = function() {
    return (
        <Fragment>
            <div className="h-full w-full mt-[90px]">
                <div className="h-full w-[90%] lg:w-[60%] m-auto">
                    <p className=" text-[40px] text-green my-10 font-poppins text-center">apa aja yang di pelajari?</p>
                    <div className="h-full w-full p-[10px] box-border flex justify-around flex-col lg:flex-row">
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const CardComponent = function(){
    return (
        <Fragment>
            <div className="h-[400px] relative w-[280px] rounded-lg bg-[#F6F6F6] overflow-hidden m-auto my-[20px] lg:my-0">
                <ul className="h-full w-full p-[10px] box-border font-open-sans leading-8 opacity-70">
                    <li>- Simulasi dan Komunikasi Digital</li>
                    <li>- Sistem Komputer</li>
                    <li>- Komputer dan Jaringan Dasar</li>
                </ul>
                <p className="absolute px-[15px] bg-green text-[20px] bottom-0 right-0 rounded-tl-lg font-poppins py-10 text-white">Troubleshooting</p>
            </div>
        </Fragment>
    )
} 

export default WhatslearnComponent