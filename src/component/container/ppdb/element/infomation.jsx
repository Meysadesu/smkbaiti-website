import { Fragment } from "react"

const InfoPPDB = function() {
    return (
        <Fragment>
            <div className="h-full w-full my-10">
                <div className="w-full lg:w-[80%] h-full m-auto p-[20px] box-border flex flex-col lg:flex-row justify-around">
                    <div id="left" className="h-full w-full lg:w-[40%] p-[20px] box-border">
                        <div id="image-cover" className="w-full lg:w-[90%] m-auto h-[300px] lg:h-[600px] rounded-[10px] bg-orange-600" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)` }}></div>
                    </div>
                    <div id="right" className="h-full w-full lg:w-[50%] p-[20px] box-border">
                        <p className="text-[40px] text-green font-poppins">CARA PENDAFTARAN </p>
                        <p className=" opacity-50 font-open-sans my-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at arcu nulla. Integer vehicula augue at nisi tempor, nec maximus nunc faucibus. Etiam ultricies mi sit amet vestibulum vulputate. Morbi tempus posuere ligula, et aliquet sem mollis non. Mauris vel purus dolor. Suspendisse pretium lacinia laoreet. Donec rhoncus interdum ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse lacus justo, tristique ac mollis ac, congue a diam. Donec vehicula justo nec quam eleifend convallis. Morbi et ultrices tellus.</p>
                        <p className="text-[40px] text-green font-poppins">PERSYARATAN </p>
                        <ul className="lg:ml-[20px] font-open-sans opacity-50 text-[19px] leading-8 my-4">
                            <li>- Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>- Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>- Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>- Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>- Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default InfoPPDB