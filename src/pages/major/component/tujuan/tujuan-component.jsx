import { Fragment } from "react"

const TujuanComponent = function({name, tujuan}) {
    return (
        <Fragment>
            <div className="h-full w-full mt-[90px]">
                <div className="h-full w-[90%] lg:w-[60%] m-auto">
                    <p className=" text-[40px] text-green my-10 font-poppins text-center">TUJUAN {name}</p>
                    <div className="h-full w-full p-[10px] box-border flex justify-around flex-col lg:flex-row">
                        {
                            tujuan.map(e => {
                                return <p className="opacity-50 font-open-sans my-3 lg:mx-5 text-center">{e}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TujuanComponent