import { Fragment } from "react"

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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia dui at efficitur fringilla. Donec egestas mollis iaculis. In suscipit neque eu dignissim lacinia. Nunc condimentum nisi vel vehicula lacinia. Etiam nec felis sed dui ornare auctor. Fusce lacinia ipsum purus, sed aliquet sapien lacinia sit amet. Sed id massa non lacus sollicitudin maximus non a elit. Sed euismod urna eget auctor semper.
                        </p>
                    </div>
                    <div id="right" className="h-full w-full lg:w-[50%]">
                        <p id="header" className="text-center font-poppins text-green text-[40px]">
                            MISI
                        </p>
                        <p id="ctx" className=" w-[90%] lg:w-[80%] m-auto opacity-50 font-open-sans">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia dui at efficitur fringilla. Donec egestas mollis iaculis. In suscipit neque eu dignissim lacinia. Nunc condimentum nisi vel vehicula lacinia. Etiam nec felis sed dui ornare auctor. Fusce lacinia ipsum purus, sed aliquet sapien lacinia sit amet. Sed id massa non lacus sollicitudin maximus non a elit. Sed euismod urna eget auctor semper.
                        </p>
                    </div>
                </div>
                <div className="h-[80%] m-auto my-9 lg:my-44 text-center">
                    <p id="header" className="text-center font-poppins text-green text-[40px]">
                        TUJUAN
                    </p>
                    <p id="ctx" className="w-[90%] m-auto lg:w-[50%] opacity-50 font-open-sans">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia dui at efficitur fringilla. Donec egestas mollis iaculis. In suscipit neque eu dignissim lacinia. Nunc condimentum nisi vel vehicula lacinia. Etiam nec felis sed dui ornare auctor. Fusce lacinia ipsum purus, sed aliquet sapien lacinia sit amet. Sed id massa non lacus sollicitudin maximus non a elit. Sed euismod urna eget auctor semper.
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default VisiMisiComponent
