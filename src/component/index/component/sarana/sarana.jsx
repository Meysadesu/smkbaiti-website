import { Fragment, useEffect } from "react"
import CardComponent from "./component/card-component"
import HeaderComponent from "./component/header-component"
import Aos from "aos"
import { SaranaData } from "./untils/untils"
import 'aos/dist/aos.css'

const Sarana = function() {
    useEffect(()=>{
        Aos.init({
            duration: 500
        })
    },[])
    return(
        <Fragment>
            <div id="wrapper" className="h-full lg:h-[800px] relative w-full" data-aos="fade-up">
                <div id="sub-wrapper" className="h-full w-[90%] lg:w-[70%] text-center m-auto justify-center flex items-center">
                    <div className="w-full">
                        <HeaderComponent/>
                        <div id="container-card" className=" lg:w-[80%] lg:m-auto flex justify-around flex-col lg:flex-row">
                            {
                                SaranaData.map(e => {
                                    return <CardComponent id={e.id} logo={e.logo} header={e.header} description={e.desc}/>
                                })
                            }
                        </div>
                    </div> 
                </div>
            </div>   
        </Fragment>
    )
}

export default Sarana
